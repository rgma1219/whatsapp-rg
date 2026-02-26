import React from "react";
import "./ChatHeader.css";

function ChatHeader({ name, contact_photo }) {
  return (
    <header className="chat_header-container">
      <img
        src={contact_photo}
        alt={`Foto de ${name}`}
        className="chat_header-avatar"
      />
      <div className="chat_header-info">
        <h4 className="chat_header-name">{name}</h4>
      </div>
    </header>
  );
}

export default ChatHeader;
