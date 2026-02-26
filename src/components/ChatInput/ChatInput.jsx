import React, { useState, useRef, useEffect } from "react";
import "./ChatInput.css";

function ChatInput() {
  function handleSubmitNewMessage(event) {
    event.preventDefault();
    const newMessage = event.target.nuevo_mensaje.value;
  }
  return (
    <form className="chat_input-container" onSubmit={handleSubmitNewMessage}>
      <label htmlFor="nuevo_mensaje" className="chat_input-label">
        Nuevo mensaje
      </label>
      <textarea
        placeholder="Escribe un mensaje"
        className="chat_input-field"
        id="nuevo_mensaje"
        name="nuevo_mensaje"
        required
      />
      <button type="submit" className="chat_input-send-btn">
        Enviar
      </button>
    </form>
  );
}

export default ChatInput;
