import React, { useContext, useState } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import { Link } from "react-router";
import { MdMenu } from "react-icons/md"; // <--- Importamos el ícono
import SearchBar from "../SearchBar/SearchBar";
import ContactItem from "../ContactItem/ContacItem";
import "./ContactSideBar.css";

function ContactSideBar({ openMenu }) {
  // <--- Recibimos la prop aquí
  const { contacts } = useContext(ContactsContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="sidebar-container">
      <header className="sidebar-header">
        {/* BOTÓN HAMBURGUESA: Aparecerá al lado del título en móvil */}
        <button
          className="hamburger-btn"
          onClick={() => {
            openMenu(); // Si esto tira error, la prop no llegó.
          }}
        >
          <MdMenu size={28} />
        </button>

        <Link to="/" className="sidebar-titulo">
          Whatsapp RG
        </Link>
      </header>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="sidebar_contacts-container">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron contactos para "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactSideBar;
