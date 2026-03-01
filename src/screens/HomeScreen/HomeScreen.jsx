import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import SideNav from "../../components/SideNav/SideNav";
import WelcomePanel from "../../components/WelcomePanel/WelcomePanel";
import "./HomeScreen.css";

function HomeScreen({ theme, toggleTheme, contactState }) {
  return (
    <div className="home_screen-main-layout">
      <SideNav theme={theme} toggleTheme={toggleTheme} />
      <aside className="home_screen-aside-container">
        <ContactSideBar contactState={contactState} />
      </aside>
      <main className="home_screen-main-content">
        <WelcomePanel />
      </main>
    </div>
  );
}

export default HomeScreen;
