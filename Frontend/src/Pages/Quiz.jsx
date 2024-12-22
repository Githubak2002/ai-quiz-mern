import React, { useEffect, useReducer } from "react";
import Loading from "../Components/QuizComponents/Loading"
import Error from "../Components/QuizComponents/Error";
import Question from "../Components/QuizComponents/Question";
import Finish from "../Components/QuizComponents/Finish";

// import { Progress } from "@material-tailwind/react";


const backend_base_url =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080/api/quiz"
    : "/api/quiz";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const quest = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        score: action.payload === quest.answer ? state.score + 1 : state.score,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      throw new Error("Unknown Action");
  }
}

const Quiz = ({ topic }) => {
  const [{ questions, status, index, answer, score }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`${backend_base_url}/getquizbytitle/${topic}`);
        const data = await res.json();
        // console.log("data ====== ",data)
        dispatch({ type: "dataReceived", payload: data.quiz.questions });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuiz();
  }, [topic]);

  const noOfQuest = questions.length;

  function startQuiz() {
    dispatch({ type: "start" });
  }

  const progressPercentage = 50;

  return (
    <section className="flex items-center flex-col gap-y-6 max-w-[650px] mx-auto sm:min-h-screen min-h-[80vh] py-10 ">
      <header className=" font-sans font-bold text-center sm:text-5xl text-3xl gradient-text2 pb-4">
        {topic}
      </header>


      <div className="flexCenter rounded-xl overflow-hidden">

      <progress
        className="h-[6px]"
        max={noOfQuest}
        value={index + Number(answer !== null)}
        />
      </div>


      <div className="flexBetween px-10 w-full ">
        <p>
          {index + 1}/{noOfQuest} Question
        </p>
        <h2>
          Score {score * 10}/{noOfQuest * 10}
        </h2>
      </div>

      {status === "loading" && <Loading />}
      {status === "error" && <Error />}

      {status === "ready" && (
        <>
          <button
            className="hover-cursorCSS px-4 py-2 hover:scale-125 transition-all rounded-xl bg-slate-100 mt-20"
            onClick={startQuiz}
            >
            Start Quiz
          </button>
        </>
      )}

      {status === "active" ? (
        <>
          <Question
            quest={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          {index < noOfQuest - 1 && answer !== null ? (
            <button
              onClick={() => dispatch({ type: "nextQuestion" })}
              className="hover-cursorCSS py-2 bg-gray-100 rounded-lg mt-4 text-sm px-4"
            >
              Next Question
            </button>
          ) : (
            index === noOfQuest - 1 && (
              <button
                onClick={() => dispatch({ type: "finish" })}
                className="hover-cursorCSS p-2 bg-blue-500 font-bold text-white rounded-lg mt-4 text-sm"
              >
                Finish the test
              </button>
            )
          )}
        </>
      ) : null}

      {status === "finished" && (
        <Finish
          score={score * 10}
          maxScore={noOfQuest * 10}
          dispatch={dispatch}
        />
      )}
    </section>
  );
};

export default Quiz;
