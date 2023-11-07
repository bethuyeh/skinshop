import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CartSlider from "../components/CartSlider"
import NewSlider from '../components/NewSlider'
import New from '../components/New'
import Serum from '../components/Serum'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <CartSlider/>
        <New/>
        <Serum/>
        <NewSlider/>
       

      
         
    
    </div>
  )
}

export default Home