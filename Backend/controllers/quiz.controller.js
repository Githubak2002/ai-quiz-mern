import { Quiz } from "../models/quiz.model.js";
import { generateQuizFromGemini } from "../utils/generateQuiz.js";



// ========== (GET) Get a new Quiz based on title provided by user ==========
export const getQuizByTitleController = async (req, res) => {
  // const { title } = req.query; 
  const { title } = req.params; 

  try {
    const quiz = await Quiz.findOne({title});

    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    return res.status(200).json({ msg: "Quiz found", quiz });
  } catch (error) {
    console.log("Error in getQuizController → ", error.message);
    return res.status(500).json({ msg: error.message });
  }
};

// ========== (GET) Get quiz titles ==========
export const getQuizTitlesController = async (req, res) => {
  try {
    const quizzes = await Quiz.find({}, "title");
    const titles = quizzes.map((quiz) => quiz.title);
    res.status(200).json({ msg: "All the Quiz Title", titles });
  } catch (error) {
    console.error("Error fetching quiz titles → ", error.message);
    res.status(500).json({ msg: error.message });
  }
};

// ========== (GET) Get ALL quiz ==========
export const getAllQuizController = async (req, res) => {
  try {
    const quiz = await Quiz.find({});
    return res.status(200).json({ msg: "All Quizzess",noOfQuiz:quiz.length, quiz });
  } catch (error) {
    console.log("Error in getAllQuizController → ", error.message);
    return res.status(500).json({ msg: error.message });
  }
};




// ========== (POST) Create a new Quiz ==========
export const createQuizController = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    return res
      .status(201)
      .json({
        msg: "Quiz created successfully",
        noOfQuestions: questions.length,
        quiz,
      });
  } catch (error) {
    console.log("Error in createQuizController → ", error.message);
    return res.status(500).json({ msg: error.message });
  }
};

// ========== (POST) GENERATE A quiz using AI ==========
export const createQuizUsingAI = async (req, res) => {
  const { title, level, noOfQuest } = req.body;

  try {
    const quizData = await generateQuizFromGemini(title, level, noOfQuest);
    const questions = quizData.questions; // Access the questions array

    const quiz = new Quiz({ title, questions });
    await quiz.save();
    return res
      .status(201)
      .json({
        msg: "Quiz created successfully",
        noOfQuestions: questions.length,
        quiz,
      });
  } catch (error) {
    console.log("Error in createQuizUsingAI → ", error.message);
    return res.status(500).json({ msg: error.message });
  }
};



