import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import { Link } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import ContactItem from "../ContactItem/ContacItem";
import "./ContactSideBar.css";

function ContactSideBar() {
  const { contacts } = useContext(ContactsContext);

  return (
    <div className="home_screen-container">
      <header className="home_screen-header">
        <Link to="/" className="home_screen-titulo">
          Whatsapp RG
        </Link>
      </header>
      <SearchBar />
      <div className="contact_sidebar-container">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default ContactSideBar;
