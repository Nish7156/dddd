import React from "react";
import Profile from "../profile/Profile";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./sideBar.scss";
import { auth } from "../../../firebase";
import { MdDashboard, MdMoney, MdOutlineMoneyOff } from "react-icons/md";
import { SiGnusocial } from "react-icons/si";
function Sidebar({ name, phone, email }) {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    // Get the Firebase Auth instance
    try {
      await signOut(auth); // Sign out the user
      localStorage.clear();

      // Redirect to login screen
      navigate("/login");

      // Redirect or clear user-specific state
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <aside className="sidebar">
      <img src={"./dreamDay.jpeg"} width={70} height={70} alt="logo" />
      <h2 style={{ color: "white", marginTop: "20px" }}>Bonus Points : 500</h2>
      <nav style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div className="nav-item-icon">
            <MdDashboard />
          </div>
          <a href="/user" style={{ color: "white", fontWeight: "semibold" }}>
            Dashboard
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div className="nav-item-icon">
            <MdOutlineMoneyOff />
          </div>
          <a
            href="/user/withdraw"
            style={{ color: "white", fontWeight: "semibold" }}
          >
            Withdraw
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div className="nav-item-icon">
            <MdMoney />
          </div>
          <a
            href="/user/income"
            style={{ color: "white", fontWeight: "semibold" }}
          >
            Income
          </a>
        </div>
      </nav>

      <Profile name={name} phone={phone} email={email} />

      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <SiGnusocial />
        <button onClick={handleSignOut} className="signout">
          Signout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
