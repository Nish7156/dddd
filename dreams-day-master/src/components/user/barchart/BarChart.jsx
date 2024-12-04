import React, { useEffect, useState } from "react";
import "./barChart.scss";
import qr from "./qr.webp";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import useUserData from "../../../hook/useUserData";
import useCreateWithdrawRequest from "../../../hook/useCreateWithDrawRequest";
import useCreatePaymentRequest from "../../../hook/useCreatePaymentRequest";
import {
  collection,
  addDoc,
  query,
  getDocs,
  where,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { Alert } from "@mui/material";

const BarChart = ({ isOpen, setIsOpen, isWithDraw }) => {
  const [amount, setAmount] = useState("");
  const [userData, setUserData] = useState([]);
  const [screenshotUrl, setScreenShotUr] = useState();
  const { data, loading, error } = useUserData();
  const { createWithdrawRequest, withDrawloading, success } =
    useCreateWithdrawRequest();
  const { handlePaymentRequest, paymentLoading } = useCreatePaymentRequest();

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const handleDeposit = async () => {
    const { id, mobile, email, upiId, name } = userData[0];
    const screenshotUrl = null;
    if (!userData || !amount) {
      alert("Please fill in all fields.");
      return;
    }
    const paymentCollection = collection(db, "payment");
    const q = query(paymentCollection, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // If a document with the same id exists, update its amount
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, {
        amount: increment(amount), // Increment the existing amount
        timestamp: new Date().toISOString(), // Optionally update the timestamp
      });
      console.log("Existing payment updated successfully!");
    } else {
      const paymentData = {
        id,
        name,
        mobile,
        email,
        upiId,
        amount,
        screenshotUrl,
        timestamp: new Date().toISOString(),
      };
      await handlePaymentRequest(paymentData);
    }

    setIsOpen(false);
  };

  const handleWithdrawRequest = async () => {
    const { id, mobile, email, upiId, name } = userData[0];
    if (!amount || !userData) {
      alert("Please provide all required fields");
      return;
    }
    const withDrawCollection = collection(db, "withDraw");
    const q = query(withDrawCollection, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // If a document with the same id exists, update its amount
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, {
        amount: amount, // Increment the existing amount
        status: "pending",
        timestamp: new Date().toISOString(), // Optionally update the timestamp
      });
      alert("Existing WithDrawRequest updated successfully!");
    } else {
      const user_data = {
        id,
        name,
        email,
        mobile,
        upiId,
        amount,
        status: "pending", // You can set the status or any other required fields
        timestamp: new Date(),
      };
      try {
        const requestId = await createWithdrawRequest(user_data);
        alert(
          "Withdrawal request created successfully. Request ID: " + requestId
        );
        // You can now handle further actions after successful creation.
      } catch (error) {
        alert("Error creating withdrawal request: " + error.message);
      }
    }

    setIsOpen(false);
  };

  const handleScreenShot = () => {};

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {isWithDraw ? (
              // Only show the input and button for withdraw
              <div>
                <div className="input-field">
                  <label htmlFor="withdraw-amount">Amount to Withdraw</label>
                  <input
                    type="number"
                    id="withdraw-amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>

                <div className="button-container">
                  <button
                    className="withdraw-button"
                    onClick={handleWithdrawRequest}
                  >
                    Raise a Withdraw Request
                  </button>
                </div>
              </div>
            ) : (
              // Default Deposit UI (existing)
              <div>
                <div className="input-field">
                  <label htmlFor="payment-amount">Pay Now</label>
                  <input
                    type="number"
                    id="payment-amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>

                <div className="qr-section">
                  <img src={qr} alt="QR Scanner" className="qr-image" />
                </div>

                <div className="button-container">
                  <button className="submit-button" onClick={handleScreenShot}>
                    <DriveFolderUploadOutlinedIcon className="icon" />
                  </button>

                  <button className="deposit-button" onClick={handleDeposit}>
                    Deposit
                  </button>

                  <button
                    className="close-modal-button"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BarChart;
