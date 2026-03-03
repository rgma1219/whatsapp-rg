import React from "react";
import { Link } from "react-router";
import { MdArrowBack, MdSearch, MdMoreVert } from "react-icons/md";
import "./ChatHeader.css";

function ChatHeader({ name, contact_photo }) {
  const handleProfileClick = () => {
    alert(
      `🚧 Perfil de ${name} en desarrollo.\nPróximamente podrás ver archivos multimedia y configuración del contacto.`,
    );
  };

  return (
    <header className="chat_header-container">
      <Link to="/" className="back-button" title="Volver">
        <MdArrowBack size={24} />
      </Link>

      {/* Envolvemos Avatar e Info en un botón de acción */}
      <button className="chat_header-profile-btn" onClick={handleProfileClick}>
        <img
          src={contact_photo}
          alt={`Foto de ${name}`}
          className="chat_header-avatar"
        />

        <div className="chat_header-info">
          <h4 className="chat_header-name">{name}</h4>
          <span className="chat_header-status">
            clic para info. del contacto
          </span>
        </div>
      </button>

      <div className="chat_header-actions">
        <button
          className="icon-btn"
          onClick={() => alert("🚧 Búsqueda en chat próximamente")}
          title="Buscar"
        >
          <MdSearch size={24} />
        </button>

        <button
          className="icon-btn"
          onClick={() => alert("🚧 Menú de opciones en desarrollo")}
          title="Menú"
        >
          <MdMoreVert size={24} />
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;
