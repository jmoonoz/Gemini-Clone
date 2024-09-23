import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
