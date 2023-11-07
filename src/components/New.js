import React from 'react'
import lightPink from ".././images/light-pink.jpg"
import NewImage2 from ".././images/whitearray.jpg"

const New = () => {
  return (
    <div className='w-100 h-70  p-8 bg-zinc-50 pb-10'>
    <div>
      <h2 className='text-center m-3 font-bold text-7xl text-orange-300 underline underline-offset-8 font-yesteryear'>New!</h2>
    </div>
    <div className='flex justify-center p-8'>
      <div className='w-45 mr-10'>
        <img className='h-8  z-0' alt="NEW1" src={lightPink} />
        <div className='flex justify-center absolute ml-170 -mt-8 z-30 w-48 h-7 bg-red-100 '>
          <h5 className=' flex self-center text-yellow-500 font-semibold'>PRICE: N5000</h5>
        </div>
      </div>
      <div className='w-45 ml-10'>
        <img className='h-8' alt='New2' src={NewImage2}/>
        <div className='flex justify-center absolute ml-200 -mt-8 z-30 w-48 h-7 bg-red-100 '>
        <h5 className=' flex self-center text-yellow-500 font-semibold'>PRICE: N5000</h5>
        </div>
        </div>  
      </div>
    </div>
  )
}

export default New