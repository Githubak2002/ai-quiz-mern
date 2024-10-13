import dotenv, { config } from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config()

const api_key = process.env.GEMINI_API_KEY;

// Use your actual API key here
const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const topic = "Education";
const noOfQuest = 4;
const level = "easy";

export const generateQuizFromGemini = async (topic, level, noOfQuest) => {
  const prompt = `
  Generate a JSON formatted quiz about the topic "${topic}" and the level should be "${level}". The quiz must contain the following structure: 

  - Total number of questions: ${noOfQuest}. 
  - Each question must have four options. 
  - The correct answer index must be unique for each question (i.e., different questions should have different correct answer indices). 
  - Additionally, the options for each question must be shuffled, ensuring that the correct answer does not always appear in the same position.

  The structure should look like this:

  {
    "title": "${topic}",
    "questions": [
      {
        "question": "Quest1",
        "options": [
          "option1",
          "option2",
          "option3",
          "option4"
        ],
        "answer": 0  // Index of the correct answer
      },
      {
        "question": "Quest2",
        "options": [
          "option1",
          "option2",
          "option3",
          "option4"
        ],
        "answer": 1  // Index of the correct answer 
      }
      // Add more questions as needed
    ]
  }`;

  try {
    const quiz = await model.generateContent(prompt);
    const cleanedResponse = quiz.response.text().replace(/```json|```/g, '').trim(); 
    const quizData = JSON.parse(cleanedResponse);

    // console.log("resssssssss - ",quizData);
    
    return quizData;

  } catch (error) {
    console.error("Failed to generate quiz:", error); 
    throw new Error("Quiz generation failed");
    // return error;
  }
}




