import "./withDrawl.scss";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useWithdrawals from "../../hook/useWithdrawals";
import Loader from "../../components/loader/Loader";
import {
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";

const WithDrawl = () => {
  const [withDrawReq, setWithDrawRed] = useState([]);
  const { withdrawals, loading } = useWithdrawals();

  console.log(withdrawals);

  useEffect(() => {
    setWithDrawRed(withdrawals);
  }, [withdrawals]);

  const updateWithdrawRequest = async (userId, updatedData) => {
    try {
      const withdrawCollection = collection(db, "withDraw");

      // Query to find the document where the 'id' field matches the provided withdrawId
      const q = query(withdrawCollection, where("id", "==", userId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.error("No document found with the given id field:", userId);
        return;
      }

      // There should be only one document with the matching 'id'
      const docToUpdate = querySnapshot.docs[0].ref;

      // Update the document
      await updateDoc(docToUpdate, updatedData);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleUpdateRequest = async (userId) => {
    const updatedData = {
      status: "approved", // Example of the new data you want to update
    };

    try {
      await updateWithdrawRequest(userId, updatedData);
    } catch (error) {
      console.error("Error updating withdrawal request:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>WithDrawl Requests</h1>
        </div>
        <div className="notification-container">
          {withDrawReq &&
            withDrawReq.map((notification) => {
              console.log(notification, "===?");

              return (
                notification?.status === "pending" && (
                  <div key={notification.id} className="notification-card">
                    <img
                      src={notification.image}
                      alt={notification.name}
                      className="profile-image"
                    />
                    <div className="notification-content">
                      <p>
                        <strong>{notification.name}</strong>{" "}
                        {"wants to withdraw"}{" "}
                        <strong>{`Rs ${notification.amount}`}</strong>
                      </p>
                      <span className="time">{notification.time}</span>
                    </div>
                    <div className="notification-buttons">
                      <button
                        onClick={() => handleUpdateRequest(notification?.id)}
                        className="accept-button"
                      >
                        Accept
                      </button>
                      <button className="deny-button">Deny</button>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WithDrawl;
