import React from 'react'
import heroBlackModel from ".././images/heroBlackModel.png"
import heroImage from ".././images/heroImage.png"

const Hero = () => {
  return (
    <div className=' flex pt-90 w-100'>
      <div className='z-30 mt-124 ml-45' >
        <img src={heroImage} height="350px" width="300px" alt="hero-here"/>
      </div>
    <div className='h-auto mt-5 mr-10 flex bg-gradient-to-r from-pink-200 from-30% via-herothrough via-50% to-navbar t0-70% ml-165' >     
      <div className='flex p-10' >
        <div className='ml-100'>
          <img src={heroBlackModel} height="350px" width="300px" alt="hero-here"/>
        </div>

        <div className='flex content-center items-center'>
          <div className='text-white w-60 m-auto z-10' >
            <h3 className='font-bold text-xl text-yellow-200'>
              There's a mask for every face
            </h3>

            <blockquote className='font-semibold'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Est ut nobis vel dignissimos ad obcaecati exercitationem magnam maxime culpa iure? 
            </blockquote>
            
            <button className='p-1.5 mt-2 rounded text-black font-semibold w-24' style={{backgroundColor:"#E5DC70"}}>
              Shop now
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Hero