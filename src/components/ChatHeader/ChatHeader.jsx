import React from "react";
import { Link } from "react-router"; // Quitamos useNavigate si no lo usas
import { MdArrowBack, MdMenu } from "react-icons/md"; // <--- Agregamos MdMenu
import "./ChatHeader.css";

// Recibimos 'openMenu' como prop
function ChatHeader({ name, contact_photo, openMenu }) {
  return (
    <header className="chat_header-container">
      {/* Botón hamburguesa */}
      <button className="hamburger-btn" onClick={openMenu}>
        <MdMenu size={28} />
      </button>

      <button className="back-button">
        <Link to="/">
          <MdArrowBack size={24} />
        </Link>
      </button>

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
