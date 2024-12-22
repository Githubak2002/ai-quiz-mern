import React from 'react'
// import { useNavigate } from 'react-router-dom';

const Finish = ({score,maxScore,dispatch}) => {

  // const navigate = useNavigate();  
  const per = Math.floor((score/maxScore) * 100);

  // const allQuiz = () => {
  //   window.location.reload()
  //   navigate('/allqiz');
  // }

  return (
    <div className='flexCenter gap-y-6 flex-col px-4 mt-16'>
      <h2>Your score <b className=' font-black text-xl'>{score}</b> out of {maxScore}
      </h2>
      <p>Percentage : {per}%</p>


      {/* ==== Restart ==== */}
      <button onClick={() => dispatch({type:"restart"})} className='hover-cursorCSS  p-2 border border-black rounded-xl'>Restart the quiz</button>

      {/* <button onClick={allQuiz} className=' p-2 border border-black rounded-xl'>All Quiz</button> */}
    </div>
  )
}

export default Finish