import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";

const backend_base_url =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080/api/quiz"
    : "/api/quiz";

const MainQuizzSection = () => {

  const { isUserVerified } = useAuthStore();
  // console.log(isUserVerified);
  
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

  function generateQuizWithAi (e){
    e.preventDefault();
    if(!isUserVerified){
      toast.error("Please verify your email!")
      navigate('/profile');
    }
    else
      navigate('/quiz-with-ai')
  }

  return (
    <>
      {!quizTitle ? (
        <main className="relative flexCenter min-h-[77vh] flex-col gap-y-6 overflow-hidden">

          {/* <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 translate-y-[-50%] rounded-full h-[400px] w-[400px] bg-purple-500 blur-[100px] filter opacity-70"></div> */}
          <div className="absolute -z-20 top-0 right-0 transform translate-x-1/2 translate-y-[-40%] rounded-full h-[400px] md:h-[800px] w-[400px] md:w-[800px] bg-blue-300 blur-[100px] filter opacity-70"></div>
          <div className="absolute -z-20 bottom-0 left-0 transform -translate-x-1/2 translate-y-[40%] rounded-full h-[400px] md:h-[800px] w-[400px] md:w-[800px] bg-purple-300 blur-[100px] filter opacity-70"></div>


          <h2 className="font text-3xl mb-5">All Quiz</h2>

          <main className="flex justify-center flex-wrap gap-x-6 gap-y-10 px-4 mx-auto max-w-[576px]">
            {allQuizTitle.map((title, index) => (
              <button
                key={index}
                onClick={() => setQuizTitle(title)} // Update quiz title here
                // className="hover-cursorCSS p-3 bg-transparent blur-2xl rounded-xl"
                className="hover-cursorCSS hover:scale-110 transition-all p-3 bg-transparent border border-black "
              >
                <span className="text-black">{title}</span>
              </button>
            ))}
          </main>
          <button onClick={generateQuizWithAi} className="hover-cursorCSS font3 scaling mt-8 ">
            Generate a new Quiz using AI → 
          </button>
        </main>
      ) : (
        <Quiz topic={quizTitle} /> // Pass the correct prop
      )}
    </>
  );
};

export default MainQuizzSection;
