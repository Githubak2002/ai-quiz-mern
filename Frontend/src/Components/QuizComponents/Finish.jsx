import React from 'react'

const Finish = ({score,maxScore,dispatch}) => {
  const per = Math.floor((score/maxScore) * 100);
  return (
    <div className='flexCenter gap-y-6 flex-col px-4 mt-16'>
      <h2>Your score <b className=' font-black text-xl'>{score}</b> out of {maxScore}
      </h2>
      <p>Percentage : {per}%</p>


      {/* ==== Restart ==== */}
      <button onClick={() => dispatch({type:"restart"})} className=' p-2 border-2 border-black rounded-xl'>Restart the quiz</button>
    </div>
  )
}

export default Finish