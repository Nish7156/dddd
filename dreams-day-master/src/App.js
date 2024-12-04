import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Profile from "./pages/profile/Profile";
import WithDrawl from "./pages/withdrawlList/WithDrawl";
import User from "./pages/user/User";
import New from "./pages/new/New";
import LandingPage from "./pages/LandingPage";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              <RequireAuth>
                {currentUser?.email === "dreamdayforu@gmail.com" ? (
                  <AdminRoutes />
                ) : (
                  <UserRoutes />
                )}
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const AdminRoutes = () => (
  <Routes>
    <Route path="/admin" element={<Home />} />
    <Route path="/admin/users">
      <Route index element={<New />} />
      <Route path=":userId" element={<Single />} />
      <Route
        path="new"
        element={<New inputs={userInputs} title="Add New User" />}
      />
    </Route>
    <Route path="/admin/products">
      <Route index element={<WithDrawl />} />
      <Route path=":productId" element={<Single />} />
      <Route
        path="new"
        element={<New inputs={productInputs} title="Add New Product" />}
      />
    </Route>
  </Routes>
);

const UserRoutes = () => (
  <Routes>
    <Route path="/user" element={<User />} />
  </Routes>
);

export default App;
