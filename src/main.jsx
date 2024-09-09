import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvidor from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvidor>
    <App />
  </ContextProvidor>
);
