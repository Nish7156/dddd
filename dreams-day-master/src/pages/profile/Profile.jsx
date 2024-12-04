import { useState } from "react";
import "./profile.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Profile = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [upiId, setUpiId] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      upiId: upiId,
      address: address,
    };
    // Create user with Firebase auth using email and password
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmit}>
        <h2>Create Your Profile</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <input
          type="text"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          required
        />

        <input
          type="text"
          placeholder="UPI ID"
          onChange={(e) => setUpiId(e.target.value)}
          value={upiId}
        />

        <textarea
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          rows="3"
        />

        <button
          disabled={loading}
          onClick={handleSubmit}
          style={{ color: "white" }}
          className="login-button"
          type="submit"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        {error && <span>There was an error creating your profile.</span>}
        <button
          disabled={loading}
          onClick={() => navigate("/login")}
          style={{ color: "white" }}
          className="signup-button"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Profile;
