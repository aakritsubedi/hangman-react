import React from "react";

function Notification({ showNotification }) {
  console.log(showNotification);
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
}

export default Notification;
