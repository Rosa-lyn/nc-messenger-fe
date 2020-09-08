import React from "react";

const MessageCard = (props) => {
  const { message } = props;
  return (
    <div className="card-container">
      <img src="" alt="userpic" />
      <h3>{message.username}</h3>
      <p>{message.msg}</p>
    </div>
  );
};

export default MessageCard;
