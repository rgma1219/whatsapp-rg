import React, { useContext } from "react";
import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import { useParams } from "react-router";
import { ContactsContext } from "../../context/ContactsContext";

function ContactScreen() {
  const { contacts } = useContext(ContactsContext);
  const { contact_id } = useParams();
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );
  return (
    <div>
      <ContactSideBar />
      {!contact_selected ? (
        <div>
          <h1>Ups! El contacto no existe.</h1>
        </div>
      ) : (
        <div>
          <h1>El contacto seleccionado es: {contact_selected.name}</h1>
          <div>
            {contact_selected.messages.map((message) => {
              return (
                <div key={message.id}>
                  <h3>
                    Enviado por:{" "}
                    {message.sender_by_me ? "Mí" : contact_selected.name}
                  </h3>
                  <p>{message.text}</p>
                  <span>{message.created_at}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactScreen;
