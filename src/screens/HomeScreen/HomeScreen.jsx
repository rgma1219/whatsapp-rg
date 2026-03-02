import { useState } from "react";
import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import SideNav from "../../components/SideNav/SideNav";
import WelcomePanel from "../../components/WelcomePanel/WelcomePanel";
import "./HomeScreen.css";

function HomeScreen({ theme, toggleTheme, contactState }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="home_screen-main-layout">
      {/* CAPA OSCURA: Aparece solo si el menú está abierto */}
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
        <ContactSideBar
          contactState={contactState}
          openMenu={() => setIsMenuOpen(true)}
        />
      </aside>

      <main className="home_screen-main-content">
        <WelcomePanel />
      </main>
    </div>
  );
}

export default HomeScreen;
