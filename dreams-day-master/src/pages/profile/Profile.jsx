import { useState } from "react";
import "./profile.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore"; // Import getDocs, collection, query, and where

const Profile = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [upiId, setUpiId] = useState("");
  const [address, setAddress] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);

  const randomReferralCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const navigate = useNavigate();

  const fetchUsersByReferralCode = async (userReferralCode) => {
    console.log(userReferralCode, "user referral code");
    let bonus = 0;

    try {
      const usersCollection = collection(db, "users"); // Reference to the users collection
      const q = query(
        usersCollection,
        where("referralCode", "==", userReferralCode)
      ); // Create a query to filter by referral code
      console.log(q, "query");

      const usersSnapshot = await getDocs(q); // Fetch the documents based on the query
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })); // Map to an array of user objects

      // Update bonus for each matched user
      for (const user of usersList) {
        const userRef = doc(db, "users", user.id); // Reference to the user document
        await updateDoc(userRef, { bonus: user.bonus + 500 }); // Increase bonus by 500
      }

      // Update local state
      return bonus + 500;
    } catch (error) {
      console.error("Error fetching users by referral code: ", error); // Handle errors
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let bonusPoints = 0;
    if (referralCode) {
      bonusPoints = await fetchUsersByReferralCode(referralCode);
    }

    let data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      upiId: upiId,
      address: address,
      bonus: bonusPoints || 0,
      referralCode: randomReferralCode(),
    };
    // Create user with Firebase auth using email and password
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/user");
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
        <textarea
          placeholder="Referral Code"
          onChange={(e) => setReferralCode(e.target.value)}
          value={referralCode}
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
