import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import blueCarousel from ".././images/blueCarousel.png"
import bottleSkinRb from ".././images/bottleSkinRb.png"
import creamBottleCarousel from ".././images/creamBottleCarousel.png"
import pinkProductCarousel from '.././images/pinkProductCarousel.png';
import sunscreenCarousel from '.././images/sunscreenCarousel.png';
import pinkarrayRb1 from '.././images/pinkarrayRb1.png';
import pebbllesStackCarouse from '.././images/pebbllesStackCarouse;.png';
import dancingCreamRb from '.././images/dancingCreamRb.png';
import ReactStars from "react-rating-stars-component"

const NewSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const slides = [
    { image: blueCarousel, 
      text: 'Skin Mask', 
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200" 
    },
    { 
      image: bottleSkinRb, 
      text: 'Slide 2', 
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200"  
    },

    { 
      image: creamBottleCarousel, 
      text: 'Slide 3', 
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200" 
    },
    { 
      image: pinkProductCarousel, 
      text: 'Slide 4', 
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200" 
    },
    { 
      image: sunscreenCarousel, 
      text: 'Slide 5',
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200" 
    },
    { 
      image: pebbllesStackCarouse, 
      text: 'Slide 6', 
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200" 
    },
    { 
      image: pinkarrayRb1, 
      text: 'Slide 7', 
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200"
    },
    { 
      image: dancingCreamRb, 
      text: 'Slide 8', 
      ratings:<ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>,
      price:"4200"
    },
  ];

  const prevPage = () => {
    setCurrentPage(currentPage === 0 ? slides.length - 1 : currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage === slides.length - 1 ? 0 : currentPage + 1);
  };

  return (
    <div>
    <div className="circle">
    <h2 className='text-center m-3 font-bold text-4xl text-red-300 underline underline-offset-8 '>
      Best Sellers
    </h2>
    <div className="relative flex items-center mb-6 ">
      {slides.slice(currentPage * 4, (currentPage + 1) * 4).map((slide, index) => (
        <div key={index} className="w-1/4 p-2 ">
        <div  className='t'>
          <img src={slide.image} alt={`Slide ${index}`} className="w-full object-cover" />
          <div  className='w-32 h-48 bg-slate-400 rounded-full  absolute'></div> 
        </div>  
        <div className="text-center ">
          <p >{slide.text}</p>
          <div className="flex justify-center"> <p>{slide.ratings}</p></div>
          <p>&#x20A6; {slide.price}</p>
        </div>
    </div>
      ))}
    </div>
    
      <button
        className=" absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        onClick={prevPage}
      >
        <FiChevronLeft className="h-8 w-8 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        onClick={nextPage}
      >
        <FiChevronRight className="h-8 w-8 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
      </button>
      
      <div className=" absolute mt-45 bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.slice(0, Math.ceil(slides.length / 4)).map((_, index) => (         
          <FaCircle
            key={index}
            className={`mt-3 h-3 w-3 ${
              index === currentPage ? 'text-pink-500' : 'text-gray-400'
            } hover:text-gray-600 transition-colors duration-300`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  </div>  
  );
};

export default NewSlider
