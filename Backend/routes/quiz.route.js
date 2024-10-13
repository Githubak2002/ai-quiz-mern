import express from "express";

const router = express.Router();

import { verifyToken } from "../middlewares/verifyToken.js";
import { createQuizController, createQuizUsingAI, getAllQuizController, getQuizByTitleController, getQuizTitlesController } from "../controllers/quiz.controller.js";


// router.get("/check-auth", verifyToken, checkAuthController);

// ==== get all quiz title  ====
router.get("/getquiztitle", getQuizTitlesController);

// ==== get quiz  ====
router.get("/getquizbytitle/:title", getQuizByTitleController);

// ==== get ALL quiz  ====
router.get("/getallquiz", getAllQuizController);



// ==== CREATE a NEW QUIZ  ====
router.post("/createquiz", createQuizController);

// ==== CREATE a NEW QUIZ using GEMINI AI API  ====
router.post("/createquizusingai", createQuizUsingAI);



// ==== delete account  ====
// router.delete("/delete-account", verifyToken, deleteUserAccount);




export default router;