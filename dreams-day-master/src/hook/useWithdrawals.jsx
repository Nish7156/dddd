import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useWithdrawals = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWithdrawals = async () => {
      try {
        // Reference to the 'withDraw' collection
        const withdrawRef = collection(db, "withDraw");

        // Fetch all documents from the collection
        const querySnapshot = await getDocs(withdrawRef);

        // Create an array to store withdrawal data
        let withdrawalData = [];

        querySnapshot.forEach((doc) => {
          withdrawalData.push({ id: doc.id, ...doc.data() });
        });

        // Set the withdrawals in state
        setWithdrawals(withdrawalData);
      } catch (err) {
        setError("Error fetching withdrawals: " + err.message);
      } finally {
        setLoading(false); // Set loading to false once the fetch operation is complete
      }
    };

    fetchWithdrawals();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return { withdrawals, loading, error };
};

export default useWithdrawals;
