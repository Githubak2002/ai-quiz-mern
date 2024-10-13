import mongoose from "mongoose";

// Schema for questions
const questionSchema = new mongoose.Schema({
    question: { type: String, required: true }, 
    options: [{ type: String, required: true }],    
    answer: { type: Number, required: true } 
});

// Main quiz schema
const quizSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    questions: [questionSchema],
    createdAt: { type: Date, default: Date.now }
});

// Create the Quiz model
export const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);

