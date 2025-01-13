import React, { useState } from 'react';
import '../Home.css';
import liverpool1 from '../images/carousel/liverpool1.jpg';
import liverpool2 from '../images/carousel/liverpool2.jpg';
import liverpool3 from '../images/carousel/liverpool3.jpg';

const carouselData = [
  {
    id: 1,
    text: "Welcome to Liverpool FC, the most successful club in England!",
    image: liverpool1,
  },
  {
    id: 2,
    text: "You'll Never Walk Alone - A legacy that unites millions!",
    image: liverpool2,
  },
  {
    id: 3,
    text: "Home of legends - past, present, and future!",
    image: liverpool3,
  },
];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <main>
      <div className="carousel">
        <div className="carousel-slide">
          <img
            src={carouselData[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
          />
          <div className="carousel-text">
            {carouselData[currentSlide].text}
          </div>
        </div>
        <button className="carousel-btn left" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="carousel-btn right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </main>
  );
};
export default Home;
