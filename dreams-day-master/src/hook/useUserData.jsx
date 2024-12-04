// useUserData.js
import { useState, useEffect } from "react";
import { db } from "../firebase"; // Assuming firebase is configured here
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const useUserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
        console.log(list);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data initially
    fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        const list = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      },
      (err) => {
        console.error(err);
        setError(err);
      }
    );

    // Cleanup on unmount
    return () => {
      unsub();
    };
  }, []);

  return { data, loading, error };
};

export default useUserData;
