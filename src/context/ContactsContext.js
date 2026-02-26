import { createContext } from "react";

export const ContactsContext = createContext({
  contacts: [],
  addNewMessage: (contact_id, new_message) => {},
});
