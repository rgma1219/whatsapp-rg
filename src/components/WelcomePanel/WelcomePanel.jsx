import React from "react";
import "./WelcomePanel.css";

function WelcomePanel() {
  return (
    <div className="welcome_panel-container">
      <div className="welcome_panel-content">
        {/* Icono central (puedes usar un SVG o una imagen) */}
        <div className="welcome_panel-icon-wrapper">
          <img
            src="../public/whatsapp.png"
            alt="WhatsApp Logo"
            className="welcome_panel-image"
          />
        </div>

        <h1 className="welcome_panel-title">WhatsApp RG para Web</h1>
        <p className="welcome_panel-text">
          Envía y recibe mensajes sin necesidad de tener tu teléfono conectado.
          <br />
          Selecciona un chat para comenzar a chatear.
        </p>
      </div>

      <footer className="welcome_panel-footer">
        <span className="welcome_panel-lock-icon">🔒</span>
        Cifrado de extremo a extremo
      </footer>
    </div>
  );
}

export default WelcomePanel;
