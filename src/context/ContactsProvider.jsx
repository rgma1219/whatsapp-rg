import { useState } from "react";
import { ContactsContext } from "./ContactsContext";
import { getContacts } from "../services/contactsService";

export const ContactsContextProvider = ({ children }) => {
  const contacts = getContacts();
  const [contactsState, setContactsState] = useState(contacts);

  function addNewMessage(contact_id, new_message) {
    setContactsState((currentContactState) => {
      return currentContactState.map((contact) => {
        if (Number(contact.id) === Number(contact_id)) {
          // Creamos un NUEVO objeto contacto y una NUEVA lista de mensajes
          return {
            ...contact,
            messages: [
              ...contact.messages,
              {
                id: contact.messages.length + 1,
                text: new_message,
                sender_by_me: true,
                created_at: new Date().toISOString(),
                is_read: false,
              },
            ],
          };
        }
        return contact;
      });
    });
  }

  const provider_values = {
    contacts: contactsState,
    addNewMessage,
  };

  return (
    <ContactsContext.Provider value={provider_values}>
      {children}
    </ContactsContext.Provider>
  );
};
