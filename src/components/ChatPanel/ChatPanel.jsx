import React from "react";
import "./ChatPanel.css";

function ChatPanel({ contact }) {
  return (
    <div className="chat_panel-container">
      {/* HEADER */}
      <header className="chat_panel-header">
        <img
          src={contact.profile_picture}
          className="chat_panel-avatar-header"
          alt="avatar"
        />
        <div className="chat_panel-header-info">
          <h4 className="chat_panel-header-name">{contact.name}</h4>
        </div>
      </header>

      {/* MENSAJES */}
      <div className="chat_panel-messages-area">
        {contact.messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-bubble ${msg.sender_by_me ? "sent" : "received"}`}
          >
            <p>{msg.text}</p>
            <span className="message-time">{msg.created_at}</span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="chat_panel-footer">
        <input className="chat_panel-input" placeholder="Escribe un mensaje" />
        <button className="chat_panel-send-btn">Enviar</button>
      </footer>
    </div>
  );
}

export default ChatPanel;
