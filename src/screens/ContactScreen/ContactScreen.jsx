import React, { useContext } from "react";
import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import { useParams } from "react-router";
import { ContactsContext } from "../../context/ContactsContext";
import ChatPanel from "../../components/ChatPanel/ChatPanel";

function ContactScreen() {
  const { contacts } = useContext(ContactsContext);
  const { contact_id } = useParams();
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );
  return (
    <div className="home_screen-main-layout">
      <aside className="home_screen-aside-wrapper">
        <ContactSideBar />
      </aside>
      <main className="home_screen-main-content">
        {!contact_selected ? (
          <div className="error-container">
            <h1>Ups! El contacto no existe.</h1>
          </div>
        ) : (
          <ChatPanel contact={contact_selected} />
        )}
      </main>
    </div>
  );
}

export default ContactScreen;
