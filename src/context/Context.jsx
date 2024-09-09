import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvidor = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResults, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSend = async (prompt) => {

    setResultData("");
    setLoading(true);
    // setShowResults(true);

    // once response is submitted the input section will reset
    const response = await run(input);
    setResultData(response);
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
    showResults,
    loading,
    resultData,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvidor;
