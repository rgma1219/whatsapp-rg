import React, { useState, useRef, useEffect, useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import "./ChatInput.css";

function ChatInput({ contact_id }) {
  const { addNewMessage } = useContext(ContactsContext);
  function handleSubmitNewMessage(event) {
    event.preventDefault();
    const form = event.target;
    const newMessage = form.nuevo_mensaje.value;

    if (newMessage.trim()) {
      addNewMessage(contact_id, newMessage);
      form.reset(); // Esto limpia el textarea automáticamente
    }
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
