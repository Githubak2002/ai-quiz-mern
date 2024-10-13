import { create } from "zustand";

export const useQuizStore = create((set) => ({
  questions: [],
  setQuestions: (newQuestions) => set({ questions: newQuestions }),
}));
