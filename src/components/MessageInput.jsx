import React, { Component } from "react";

class MessageInput extends Component {
  render() {
    return (
      <form>
        <label htmlFor="message-input">
          <input
            type="text"
            name="message-input"
            id="message-input"
            placeholder="type a message..."
          />
        </label>
        <input type="submit" value="send" />
      </form>
    );
  }
}

export default MessageInput;
