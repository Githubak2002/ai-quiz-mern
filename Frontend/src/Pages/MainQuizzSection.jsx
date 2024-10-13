import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";

const backend_base_url =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080/api/quiz"
    : "/api/quiz";

const MainQuizzSection = () => {
  const navigate = useNavigate();
  const [allQuizTitle, setAllQuizTitle] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");

  useEffect(() => {
    const fetchQuizTitles = async () => {
      try {
        const res = await axios.get(`${backend_base_url}/getquiztitle`);
        // console.log("res: ", res.data.titles);
        setAllQuizTitle(res.data.titles);
      } catch (error) {
        console.error("Error fetching quiz titles:", error);
      }
    };

    fetchQuizTitles(); // Call the async function
  }, []); 

  return (
    <>
      {!quizTitle ? (
        <main className="flexCenter min-h-[77vh] flex-col gap-y-6">
          <h2 className="font1 text-3xl mb-5">All Quiz</h2>

          <main className="flex justify-center flex-wrap gap-6 px-4 mx-auto max-w-[890px]">
            {allQuizTitle.map((title, index) => (
              <button
                key={index}
                onClick={() => setQuizTitle(title)} // Update quiz title here
                className="hover-cursorCSS p-3 bg-slate-50 rounded-xl"
              >
                <span>{title}</span>
              </button>
            ))}
          </main>
          <button className="hover-cursorCSS font1 scaling mt-8">
            Generate a new Quiz using AI
          </button>
        </main>
      ) : (
        <Quiz topic={quizTitle} /> // Pass the correct prop
      )}
    </>
  );
};

export default MainQuizzSection;
