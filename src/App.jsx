import { useState } from "react";
import { Routes, Route } from "react-router";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import { ContactsContextProvider } from "./context/ContactsProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.setAttribute("data-theme", selectedTheme);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <ContactsContextProvider>
      <Routes>
        <Route
          path="/"
          element={<HomeScreen theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/contact/:contact_id"
          element={<ContactScreen theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="*" element={<ErrorNotFoundScreen />} />
      </Routes>
    </ContactsContextProvider>
  );
}

export default App;
