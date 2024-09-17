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

  const user= "https://avatars.githubusercontent.com/u/39196818?v=4";

  return (
    <div className="main" id="main" >
      <div className="nav">
        <p href="#main">Gemini</p>
        <img
          src={user}
          alt=""
        />
      </div>
      <div className="main-container">
        {/* this will show the response of questions asked to Gemini */}
        {!showResult ? (
          // initil greeting before asking questions
          <>
            <div className="greet">
              <p>
                <span>Hello, Hola!</span>
              </p>
              <p>Hablo Ingles y Espanol</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>"Search beautiful places to see on an upcoming trip"</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>"Briefly summarize this concept: urban planning"</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>"Brainstorm team bonding activities for the teams retreat"</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>"Improve the readability for the following code"</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          // this is the results of questions asked
          <div className="result">
            <div className="result-title">
              <img src={user} alt="" />
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
              placeholder="Enter Prompt Here / Ingrese el mensaje aquí"
            />
            <div>
              <div className="icon-circle">
                <img src={assets.gallery_icon} alt="" />
              </div>
              <div className="icon-circle">
                <img src={assets.mic_icon} alt="" />
              </div>
              {/* ternary operator for inputting text in the input box, which will reveal the send icon */}
              {input ? (
                <div className="icon-circle">
                  <img onClick={() => onSend()} src={assets.send_icon} alt="" />
                </div>
              ) : null}
            </div>
          </div>
          <p className="bottom-info">Gemini information may be inaccurate</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
