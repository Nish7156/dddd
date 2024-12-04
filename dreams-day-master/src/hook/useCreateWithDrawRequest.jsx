// useCreateWithdrawRequest.js
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const useCreateWithdrawRequest = () => {
  const [withDrawloading, setWithDrawLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createWithdrawRequest = async (userData) => {
    setWithDrawLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Create a reference to the 'withDraw' collection
      const withdrawRef = collection(db, "withDraw");

      // Add a new document with the user data
      const docRef = await addDoc(withdrawRef, userData);

      console.log("Document written with ID: ", docRef.id);

      setSuccess(docRef.id); // Set the success state with the document ID
      return docRef.id; // Return document ID if needed
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to create withdrawal request");
    } finally {
      setWithDrawLoading(false);
    }
  };

  return { createWithdrawRequest, withDrawloading, error, success };
};

export default useCreateWithdrawRequest;
