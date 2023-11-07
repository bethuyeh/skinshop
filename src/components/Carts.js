import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Image1,
      text: 'Slide 1',
    },
    {
      image: Image2,
      text: 'Slide 2',
    },
    {
      image: Image3,
      text: 'Slide 3',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          <img src={slide.image} alt={slide.text} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-70 text-white p-4">
            <h1 className="text-2xl font-bold">{slide.text}</h1>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        onClick={prevSlide}
      >
        <FiChevronLeft className="h-8 w-8 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        onClick={nextSlide}
      >
        <FiChevronRight className="h-8 w-8 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <FaCircle
            key={index}
            className={`h-3 w-3 ${
              index === currentSlide ? 'text-gray-800' : 'text-gray-400'
            } hover:text-gray-600 transition-colors duration-300`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider