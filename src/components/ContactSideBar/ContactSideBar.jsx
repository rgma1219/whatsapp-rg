import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import { Link } from "react-router";
import "./ContactSideBar.css";

function ContactSideBar() {
  const { contacts } = useContext(ContactsContext);
  return (
    <div>
      <div>
        {contacts.map((contact) => {
          return (
            <div className="contact-item">
              <Link
                to={`/contact/${contact.id}`}
                key={contact.id}
                className="contact_item-link"
              >
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactSideBar;
