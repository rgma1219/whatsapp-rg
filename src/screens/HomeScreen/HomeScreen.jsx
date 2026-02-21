import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import WelcomePanel from "../../components/WelcomePanel/WelcomePanel";
import { Link } from "react-router";
import "./HomeScreen.css";

function HomeScreen(contactState) {
  return (
    <div className="home_screen-main-layout">
      <aside className="home_screen-aside-wrapper">
        <header className="home_screen-header">
          <Link to="/" className="home_screen-titulo">
            Whatsapp RG
          </Link>
        </header>
        <SearchBar />
        <ContactSideBar contactState={contactState} />
      </aside>

      <main className="home_screen-main-content">
        <WelcomePanel />
      </main>
    </div>
  );
}

export default HomeScreen;
