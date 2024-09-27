import React from "react";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

const ToggleIcon = () => {
    const [isDark, setIsDark] = useState(true);
  return (
    <Brightness4OutlinedIcon onChange={handleChange} onClick={isClicked} />
  );
};

export default ToggleIcon;
