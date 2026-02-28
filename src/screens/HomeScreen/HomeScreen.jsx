import ContactSideBar from "../../components/ContactSideBar/ContactSideBar";
import WelcomePanel from "../../components/WelcomePanel/WelcomePanel";
import "./HomeScreen.css";

function HomeScreen(contactState) {
  return (
    <div className="home_screen-main-layout">
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
