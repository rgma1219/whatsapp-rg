import React from "react";
import "./MessagesList.css";

function MessagesList({ messages }) {
  //Funcionalidad para igualar el formato de fecha y hora de los mensajes nuevos
  const formatMessageDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-AR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
      .format(date)
      .replace(",", "");
  };

  return (
    <div className="message_list-container">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-bubble ${message.sender_by_me ? "sent" : "received"}`}
        >
          <p>{message.text}</p>
          <span className="message-time">
            {formatMessageDate(message.created_at)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MessagesList;
