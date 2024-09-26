import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/style/index.scss";
import ContextProvidor from "./context/Context.jsx";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";


createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <ContextProvidor>
        <App data-theme="dark" />
    </ContextProvidor>
  </DarkModeContextProvider>
);
