import { createContext, useEffect, useState } from "react";

// CREATING A CONTEXT API
export const DarkModeContext = createContext();

//
export const DarkModeContextProvider = ({ children }) => {
  // if the page has been visited itll change wether its been light or dark
  // but will automatically go to light on first visit
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
