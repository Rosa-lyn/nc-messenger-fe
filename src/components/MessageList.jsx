import React from "react";
import MessageCard from "./MessageCard";
import MessageInput from "./MessageInput";

class MessageList extends React.Component {
  state = {
    messages: [
      { username: "helen", msg: "hi there" },
      { username: "roz", msg: "hello" },
      { username: "steve", msg: "yo" },
    ],
  };
  componentDidMount() {
    //always checking for state updates???????
  }
  createMessage = (message) => {
    // {    add message to state}
  };
  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul className="message-list">
          {messages.map((message, id) => {
            return (
              <li key={id}>
                <MessageCard message={message} />
              </li>
            );
          })}
        </ul>
        <MessageInput createMessage={this.createMessage} />
      </div>
    );
  }
}

export default MessageList;
