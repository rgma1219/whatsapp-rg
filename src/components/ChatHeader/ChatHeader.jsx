import React from "react";
import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";
import "./ChatHeader.css";

function ChatHeader({ name, contact_photo }) {
  return (
    <header className="chat_header-container">
      {/* El Link ahora es el componente principal, sin un botón rodeándolo */}
      <Link to="/" className="back-button">
        <MdArrowBack size={24} />
      </Link>

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
