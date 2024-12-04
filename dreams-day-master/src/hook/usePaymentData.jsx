import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const usePaymentData = (userId) => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const q = query(collection(db, "payment"), where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        const paymentList = [];
        querySnapshot.forEach((doc) => {
          paymentList.push({ id: doc.id, ...doc.data() });
        });

        setPayments(paymentList); // Store the fetched payment data
      } catch (err) {
        setError("Failed to fetch payments");
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    if (userId) {
      fetchPayments(); // Only fetch if userId is available
    }
  }, [userId]); // Re-run the effect if userId changes

  return { payments, loading, error };
};

export default usePaymentData;
