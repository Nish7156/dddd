import React from "react";
import "./profile.scss";

function Profile({ name, phone, email }) {
  return (
    <div className="profile">
      <div className="profile-image">
        {/* Placeholder for the profile image */}
      </div>
      <div className="profile-details">
        {/* <h3>{name}</h3>
        <p className="profile-phone">Phone: {phone}</p> */}
        <p className="profile-email">Email: {email}</p>
      </div>
    </div>
  );
}

export default Profile;
