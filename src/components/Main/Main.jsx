import React, { useContext } from "react";
import "./Main.scss";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {/* this will show the response of questions asked to Gemini */}
        {!showResult ? (
          // initil greeting before asking questions
          <>
            <div className="greet">
              <p>
                <span>Hello, Joel!</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Such beautifull places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Breifly sumarize this concept: urban planing</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for the teams retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability for the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          // this is the results of questions asked
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {/* loading code while gemini loads the response  */}
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}>
                  {/* {resultData} */}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter Prompt Here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSend()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Gemini information may be inaccurate</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
