import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Path to your firebaseConfig.js

// Custom hook to get logged-in user data
const useLoggedInUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    // Monitor the auth state change
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // If user is logged in, fetch user data from Firestore
        try {
          const userRef = doc(db, "users", user.uid); // Assuming user data is stored under the 'users' collection
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const data = {
              userId: user.uid,
              data: userSnap.data(),
            };
            setUserData(data);
          } else {
            console.log("No such document!");
          }
        } catch (err) {
          setError("Error fetching user data");
          console.error(err);
        }
      } else {
        // No user is logged in
        setUserData(null);
      }

      setLoading(false); // Set loading to false when done
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  return { userData, loading, error };
};

export default useLoggedInUserData;
