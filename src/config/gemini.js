// const apiKey = "AIzaSyCXJmIwxBT0GhUDxZNBG4tmF3e815Bo4ic";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const MODEL_NAME = "gemini-1.0-pro";
// const API_KEY = "AIzaSyCXJmIwxBT0GhUDxZNBG4tmF3e815Bo4ic";

// // const apiKey = "AIzaSyCXJmIwxBT0GhUDxZNBG4tmF3e815Bo4ic";
// const genAI = new GoogleGenerativeAI(apiKey);

// async function run(prompt) {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];
//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [],
//   });

//   const result = await chat.sendMessage(prompt);
//   const response = result.response;
//   console.log(response.text());
// }

// export default run;

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyCXJmIwxBT0GhUDxZNBG4tmF3e815Bo4ic";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;
