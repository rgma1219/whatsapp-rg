import React, { useState } from "react";
import "./LoginScreen.css";

function LoginScreen({ onLogin }) {
  const [deviceName, setDeviceName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deviceName.trim() !== "") {
      onLogin();
    } else {
      alert("Por favor, ingresa un nombre para tu sesión.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-green-banner"></div>
      <div className="login-card">
        <div className="login-content">
          <div className="login-text">
            <h2>Para usar WhatsApp RG en tu computadora:</h2>
            <ol>
              <li>Abre WhatsApp RG en tu teléfono</li>
              <li>
                Toca <strong>Menú</strong> o <strong>Configuración</strong> y
                selecciona <strong>Dispositivos vinculados</strong>
              </li>
              <li>
                Toca en <strong>Vincular un dispositivo</strong>
              </li>
              <li>
                Apunta tu teléfono hacia esta pantalla para escanear el código
              </li>
            </ol>

            <form onSubmit={handleSubmit} className="login-form">
              <input
                type="text"
                name="device_name"
                placeholder="Nombre de la sesión (ej: Mi PC)"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
              />
              <button type="submit">Simular Escaneo QR</button>
            </form>
          </div>

          <div className="login-qr-section">
            <img src="/qr-dummy.png" alt="QR Code (dummy) a escanear" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
