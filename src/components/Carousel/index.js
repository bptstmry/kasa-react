import React, { useState } from 'react';
import arrowRight from "../../assets/arrow_right.png";
import arrowLeft from "../../assets/arrow_left.png";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <img src={arrowLeft} className="arrow__left" alt="arrow" onClick={goToPreviousSlide}></img>
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="accomodation__image"/>
      </div>
      <img src={arrowRight} className="arrow__right" alt="arrow"  onClick={goToNextSlide}></img>
      <div className="image-position">{currentIndex + 1}/{totalImages}</div> {/* Témoin de position */}
    </div>
  );
};

export default Carousel;