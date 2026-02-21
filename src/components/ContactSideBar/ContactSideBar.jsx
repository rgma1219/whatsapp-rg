import React, { useContext } from "react";
import { getContacts } from "../../services/contactsService";
import { ContactsContext } from "../../context/ContactsContext";
import { Link } from "react-router";

function ContactSideBar() {
  const { contacts } = useContext(ContactsContext);
  return (
    <div>
      <div>
        {contacts.map((contact) => {
          return (
            <Link to={`/contact/${contact.id}`} key={contact.id}>
              <img
                src={contact.profile_picture}
                alt={`Foto de perfil de ${contact.name}`}
                style={{
                  width: "100px",
                }}
              />
              <h3>{contact.name}</h3>
              <span>{contact.last_time_connection}</span>
              <br />
              <hr />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ContactSideBar;
