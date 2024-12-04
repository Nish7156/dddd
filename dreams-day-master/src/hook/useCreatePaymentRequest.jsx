import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Assuming your Firebase config is here

// Function to create a payment request in Firestore
const createPaymentRequest = async (paymentData) => {
  try {
    // Create a reference to the 'payment' collection
    const paymentRef = collection(db, "payment");

    // Add a new document with the payment data
    const docRef = await addDoc(paymentRef, paymentData);

    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // Return document ID if needed
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Failed to create payment request");
  }
};

// Custom hook that uses the createPaymentRequest function
const useCreatePaymentRequest = () => {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handlePaymentRequest = async (paymentData) => {
    setPaymentLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Call the createPaymentRequest function to create the payment document
      const docId = await createPaymentRequest(paymentData);
      setSuccess(docId); // Save the document ID on success
    } catch (err) {
      setError("Failed to create payment request");
      console.error(err);
    } finally {
      setPaymentLoading(false);
    }
  };

  return {
    handlePaymentRequest,
    paymentLoading,
    error,
    success,
  };
};

export default useCreatePaymentRequest;
