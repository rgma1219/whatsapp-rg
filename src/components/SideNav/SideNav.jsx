import React, { useState } from "react";
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

function SideNav() {
  // 'chat' es el valor por defecto al cargar la página
  const [activeTab, setActiveTab] = useState("chat");
  const [theme, setTheme] = useState("light");

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    // Esta línea es la magia: le pone al body 'data-theme=dark' o 'light'
    document.body.setAttribute("data-theme", selectedTheme);
  };

  return (
    <nav className="side_nav-container">
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
          onClick={() =>
            alert(
              "🚧 Sección en construcción: Muy pronto podrás ver los Estados aquí.",
            )
          }
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
        <button
          className={`side_nav-item theme-btn ${theme === "light" ? "active" : ""}`}
          onClick={() => toggleTheme("light")} // Usamos la nueva función
          title="Modo Claro"
        >
          {theme === "light" ? (
            <MdLightMode size={20} />
          ) : (
            <MdOutlineLightMode size={20} />
          )}
        </button>

        <button
          className={`side_nav-item theme-btn ${theme === "dark" ? "active" : ""}`}
          onClick={() => toggleTheme("dark")} // Usamos la nueva función
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
        />
      </div>
    </nav>
  );
}

export default SideNav;
