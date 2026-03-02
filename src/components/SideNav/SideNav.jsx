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
  // Maneja el estado de la sección activa para seleccionar el ícono, 'chat' es el valor por defecto al cargar la página
  const [activeTab, setActiveTab] = useState("chat");

  // Observa el estado de la sección activa para seleccionar el ícono y realizar la animación de cambio de ícono para la sección seleccionada (chat/estados).
  useEffect(() => {
    if (activeTab === "status") {
      const timer = setTimeout(() => {
        alert(
          "🚧 Sección en construcción: Muy pronto podrás ver los Estados aquí.",
        );
        setActiveTab("chat");
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  // Función para manejar el clic y cerrar el menú en móvil
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) {
      closeMenu(); // Se cierra sola tras elegir una opción
    }
  };

  return (
    <nav className={`side_nav-container ${isMenuOpen ? "open" : ""}`}>
      <div className="side_nav-top">
        {/* Icono Mensajes */}
        <button
          className={`side_nav-item ${activeTab === "chat" ? "active" : ""}`}
          onClick={() => setActiveTab("chat")}
          title="Mensajes"
        >
          {activeTab === "chat" ? (
            <MdChatBubble size={24} className="nav-icon" />
          ) : (
            <MdChatBubbleOutline size={24} className="nav-icon" />
          )}
        </button>

        {/* Icono Estados */}
        <button
          className={`side_nav-item ${activeTab === "status" ? "active" : ""}`}
          onClick={() => setActiveTab("status")}
          title="Estados"
        >
          {activeTab === "status" ? (
            <MdMotionPhotosOn size={24} className="nav-icon" />
          ) : (
            <MdOutlineMotionPhotosOn size={24} className="nav-icon" />
          )}
        </button>
      </div>

      <div className="side_nav-middle">
        {/* Botón Modo Claro */}
        <button
          className={`side_nav-item theme-btn ${theme === "light" ? "theme-selected" : ""}`}
          onClick={() => toggleTheme("light")}
          title="Modo Claro"
        >
          {theme === "light" ? (
            <MdLightMode size={20} />
          ) : (
            <MdOutlineLightMode size={20} />
          )}
        </button>

        {/* Botón Modo Oscuro */}
        <button
          className={`side_nav-item theme-btn ${theme === "dark" ? "theme-selected" : ""}`}
          onClick={() => toggleTheme("dark")}
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
        {/* Icono Perfil */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Perfil"
          className="side_nav-avatar"
        />
      </div>
    </nav>
  );
}

export default SideNav;
