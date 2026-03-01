import { useState } from "react";
import { Routes, Route } from "react-router";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import { ContactsContextProvider } from "./context/ContactsProvider";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.setAttribute("data-theme", selectedTheme);
  };

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
