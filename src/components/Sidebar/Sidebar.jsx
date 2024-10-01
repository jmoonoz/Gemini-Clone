import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import { Context } from "../../context/Context";
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { HistoryOutlined } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  // code to grab these functions from the context file
  const { onSend, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);
  };


  return (
      <div className="sidebar" data-theme="light">
        <div className="top">
          {/* to open and close the side bar menu */}
          <MenuIcon onClick={() => setExtended((prev) => !prev)} className="menu" />
          <div onClick={() => newChat()} className="new-chat">
            {/* <img src={assets.plus_icon} alt="" />*/}
            <AddIcon />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompt.map((item, index) => {
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    className="recent-entry"
                  >
                    <CommentOutlinedIcon />
                    {/* this will show a portion of previous prompts on the sidebar */}
                    <p>{item.slice(0, 18)} ...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <HelpOutlineIcon />
            {/* <img src={assets.question_icon} alt="" /> */}
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            {/* <img src={assets.history_icon} alt="" /> */}
            <HistoryOutlined />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            {/* <img src={assets.setting_icon} alt="" /> */}
            <SettingsIcon />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>

  );
};

export default Sidebar;
