import React, { useState, useEffect } from "react";
import {
  MdChatBubbleOutline,
  MdChatBubble,
  MdOutlineMotionPhotosOn,
  MdMotionPhotosOn,
  MdOutlineLightMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdDarkMode,
} from "react-icons/md";
import "./SideNav.css";

function SideNav({ theme, toggleTheme, isMenuOpen, closeMenu }) {
  const [activeTab, setActiveTab] = useState("chat");

  // EFECTO DE CONSTRUCCIÓN: Dispara el alert cuando se selecciona "status"
  useEffect(() => {
    if (activeTab === "status") {
      const timer = setTimeout(() => {
        alert(
          "🚧 Sección en construcción: Muy pronto podrás ver los Estados aquí.",
        );
        setActiveTab("chat"); // Vuelve a chat automáticamente
      }, 150); // Un poco más rápido para mejorar la sensación de respuesta

      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  // FUNCIÓN PARA MÓVIL: Ejecuta la acción y cierra el menú lateral
  const handleAction = (callback) => {
    if (callback) callback();
    if (window.innerWidth < 768) {
      closeMenu();
    }
  };

  return (
    <nav className={`side_nav-container ${isMenuOpen ? "open" : ""}`}>
      <div className="side_nav-top">
        {/* Sección Mensajes */}
        <button
          className={`side_nav-item ${activeTab === "chat" ? "active" : ""}`}
          onClick={() => handleAction(() => setActiveTab("chat"))}
          title="Mensajes"
        >
          {activeTab === "chat" ? (
            <MdChatBubble size={24} />
          ) : (
            <MdChatBubbleOutline size={24} />
          )}
        </button>

        {/* Sección Estados (No usamos handleAction aquí para dejar que el useEffect maneje el flujo) */}
        <button
          className={`side_nav-item ${activeTab === "status" ? "active" : ""}`}
          onClick={() => setActiveTab("status")}
          title="Estados"
        >
          {activeTab === "status" ? (
            <MdMotionPhotosOn size={24} />
          ) : (
            <MdOutlineMotionPhotosOn size={24} />
          )}
        </button>
      </div>

      <div className="side_nav-middle">
        {/* Cambiar a Modo Claro */}
        <button
          className={`side_nav-item theme-btn ${theme === "light" ? "theme-selected" : ""}`}
          onClick={() => handleAction(() => toggleTheme("light"))}
          title="Modo Claro"
        >
          {theme === "light" ? (
            <MdLightMode size={20} />
          ) : (
            <MdOutlineLightMode size={20} />
          )}
        </button>

        {/* Cambiar a Modo Oscuro */}
        <button
          className={`side_nav-item theme-btn ${theme === "dark" ? "theme-selected" : ""}`}
          onClick={() => handleAction(() => toggleTheme("dark"))}
          title="Modo Oscuro"
        >
          {theme === "dark" ? (
            <MdDarkMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>
      </div>

      <div className="side_nav-bottom">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Perfil"
          className="side_nav-avatar"
          onClick={() => handleAction()} // Solo cierra el menú en móvil
        />
      </div>
    </nav>
  );
}

export default SideNav;
