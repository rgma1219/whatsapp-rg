import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import { Link } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import ContactItem from "../ContactItem/ContacItem";
import "./ContactSideBar.css";

function ContactSideBar() {
  const { contacts } = useContext(ContactsContext);

  return (
    <div className="sidebar-container">
      <header className="sidebar-header">
        <Link to="/" className="sidebar-titulo">
          Whatsapp RG
        </Link>
      </header>
      <SearchBar />
      <div className="sidebar_contacts-container">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default ContactSideBar;
