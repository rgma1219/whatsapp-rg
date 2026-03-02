import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { ContactsContext } from "../../context/ContactsContext";
import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import ChatPanel from "../../components/ChatPanel/ChatPanel";
import SideNav from "../../components/SideNav/SideNav";

function ContactScreen({ theme, toggleTheme }) {
  const { contacts } = useContext(ContactsContext);
  const { contact_id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );

  return (
    /* La clase 'contact-active' es la que usaremos en CSS para ocultar la lista y mostrar el chat */
    <div
      className={`home_screen-main-layout contact-active ${isMenuOpen ? "menu-open" : ""}`}
    >
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
      )}

      <div className="home_screen-side_nav">
        <SideNav
          theme={theme}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
        />
      </div>

      <aside className="home_screen-aside-container">
        <ContactSideBar openMenu={() => setIsMenuOpen(true)} />
      </aside>

      <main className="home_screen-main-content">
        {!contact_selected ? (
          <div className="error-container">
            <h1>Ups! El contacto no existe.</h1>
          </div>
        ) : (
          <ChatPanel
            contact={contact_selected}
            openMenu={() => setIsMenuOpen(true)}
          />
        )}
      </main>
    </div>
  );
}

export default ContactScreen;
