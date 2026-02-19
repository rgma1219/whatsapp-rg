import { useState } from "react";
import { Routes, Route } from "react-router";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import { ContactsContextProvider } from "./context/ContactsProvider";

function App() {
  return (
    <div>
      <ContactsContextProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact/:contact_id" element={<ContactScreen />} />
          <Route path="*" element={<ErrorNotFoundScreen />} />
        </Routes>
      </ContactsContextProvider>
    </div>
  );
}

export default App;
