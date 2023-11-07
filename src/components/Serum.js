import React from 'react'
import lemonbg from "../images/LEMONbgRB.png"

const Serum = () => {
  return (
    <div className='w-100 flex justify-center bg-cyan-500 h-70'>
      <div className='w-45'>
        <img alt="lemon" src={lemonbg}/>
      </div>
      <div className='w-25 self-center ' >
        <h1 className='text-center m-3 font-bold text-6xl text-orange-300 '>
          Have a burst of Vitamin C!
        </h1>
      </div>  
    </div>
    
  )
}

export default Serum