import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import "./style/App.scss";

function App() {

  const user = "https://avatars.githubusercontent.com/u/39196818?v=4";

  // use state for dark mode
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <div className="nav">
        <p href="#main">Gemini</p>
        <div>
          <Brightness4OutlinedIcon onClick={toggleDarkMode} />
          <img src={user} alt="" />
        </div>
      </div>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
