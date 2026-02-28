import React from "react";
import { BsChatLeftText, BsChatLeftTextFill } from "react-icons/bs";
import {
  MdChatBubbleOutline,
  MdChatBubble,
  MdOutlineMotionPhotosOn,
  MdMotionPhotosOn,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import "./SideNav.css";

function SideNav() {
  return (
    <nav className="side_nav-container">
      <div className="side_nav-top">
        {/* Icono Mensajes */}
        <button className="side_nav-item" title="Mensajes">
          <MdChatBubbleOutline size={24} className="nav-icon" />
        </button>

        {/* Icono Estados */}
        <button className="side_nav-item" title="Estados">
          <MdOutlineMotionPhotosOn size={24} className="nav-icon" />
        </button>
      </div>

      <div className="side_nav-middle">
        {/* Botones de Tema */}
        <button className="side_nav-item theme-btn" title="Modo Claro">
          <MdOutlineLightMode size={20} className="nav-icon" />
        </button>
        <button className="side_nav-item theme-btn" title="Modo Oscuro">
          <MdOutlineDarkMode size={20} className="nav-icon" />
        </button>
      </div>

      <div className="side_nav-bottom">
        {/* Foto de Perfil */}
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
