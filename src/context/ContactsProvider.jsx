import { useState } from "react";
import { ContactsContext } from "./ContactsContext";
import { getContacts } from "../services/contactsService";

export const ContactsContextProvider = ({ children }) => {
  const contacts = getContacts();
  const [contactsState, setContactsState] = useState(contacts);
  const provider_values = {
    contacts: contactsState,
  };

  return (
    <ContactsContext.Provider value={provider_values}>
      {children}
    </ContactsContext.Provider>
  );
};
