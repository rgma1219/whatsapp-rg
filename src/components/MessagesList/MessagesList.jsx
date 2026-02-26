import React from "react";
import "./MessagesList.css";

function MessagesList({ messages }) {
  return (
    <div className="message_list-container">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-bubble ${message.sender_by_me ? "sent" : "received"}`}
        >
          <p>{message.text}</p>
          <span className="message-time">{message.created_at}</span>
        </div>
      ))}
    </div>
  );
}

export default MessagesList;
