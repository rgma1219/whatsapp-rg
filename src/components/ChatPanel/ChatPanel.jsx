import React from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessagesList from "../MessagesList/MessagesList";
import ChatInput from "../ChatInput/ChatInput";
import "./ChatPanel.css";

function ChatPanel({ contact }) {
  return (
    <div className="chat_panel-container">
      {/* HEADER */}
      <ChatHeader name={contact.name} contact_photo={contact.profile_picture} />

      {/* MENSAJES */}
      <MessagesList messages={contact.messages} />

      {/* FOOTER */}
      <ChatInput contact_id={contact.id} />
    </div>
  );
}

export default ChatPanel;
