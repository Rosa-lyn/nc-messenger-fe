import React from "react";
import MessageCard from "./MessageCard";
import Alert from "./Alert";
import MessageInput from "./MessageInput";

const MessageList = () => {
  return (
    <ul>
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <li>
        <Alert />
      </li>
      <li>
        <MessageInput />
      </li>
    </ul>
  );
};

export default MessageList;
