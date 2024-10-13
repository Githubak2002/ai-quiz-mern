import React from "react";

const Question = ({ quest, dispatch, answer }) => {
  // console.log("ques → ",quest.question);
  // console.log("Full ques → ", quest);  

  const hasAns = answer !== null;

  return (
    <section className="flexCenter flex-col gap-y-4 px-4">
      <h2 className=" text-center sm:text-xl text-lg font-bold font-sans">{quest.question}</h2>

      <main className="flex flex-col gap-y-5 w-full">
        {quest.options.map((option, i) => {
          return (
              <button
                key={i}
                onClick={() => dispatch({ type: "newAnswer", payload: i })}
                disabled={answer !== null}
                className={`hover-cursorCSS p-2 bg-slate-50 w-full text-sm
              ${
                i === answer
                  ? "font-black"
                  : ""
              } 
              ${
                hasAns
                  ? i === quest.answer
                    ? "text-green-500"
                    : "text-red-500"
                  : ""
              }
              `}
              >
                {option}
              </button>
          );
        })}
      </main>
    </section>
  );
};

export default Question;
