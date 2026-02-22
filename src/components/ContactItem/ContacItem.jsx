import React from "react";
import { Link } from "react-router";

function ContactItem({ contact }) {
  return (
    <Link to={`/contact/${contact.id}`} className="contact_item-link">
      <img
        src={contact.profile_picture}
        alt={contact.name}
        className="contact_item-avatar"
      />
      <div className="contact_item-info">
        <div className="contact_item-header">
          <span className="contact_item-name">{contact.name}</span>
          <span className="contact_item-time">
            {contact.last_time_connection}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ContactItem;
