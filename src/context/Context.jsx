import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvidor = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // this function will store the strings and using setTime out will print it out on an interval
  const delayPara = (index, nextWord) => {
    setTimeout(function name(params) {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  // this will load a new window for questions
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  // on submit these useState effects will set place
  const onSend = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    let responseArray = response.split("**");
    // this will remove the "undefined" word that appears at tge begginign of eacg new results
    let newResponse = "";
    // where ever a ** is detected it will bolden the words
    // this will happen at the begging of every response statment that is posted

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    // this will breate line spaces where ever there is a *
    let newResponse2 = newResponse.split("*").join("</br>");
    // this section of code is for the type writer effect
    // it will concat the words through a for loop and into the delaypara
    // which will print out the string letter by letter
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  // onSend("What is React JS");

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSend,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvidor;
