import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import dreamDay from "./dreamDay.jpeg";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/user");
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <img src={"/images/rr.png"} alt="WenDev Admin" />
        <h2>Sign In</h2>
        <div className="login-form-inputs">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ marginBottom: "10px", marginTop: "20px" }}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <span className="error" style={{ color: "red" }}>
              Wrong email or password!
            </span>
          )}

          <button
            disabled={loading}
            type="submit"
            className="login-button"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <button
            type="button"
            onClick={handleSignup}
            className="signup-button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
