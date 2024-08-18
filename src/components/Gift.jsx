import React, { useState } from 'react';
import '../gift.css'; // Import CSS for styling
import images from '../assets/images'; // Import the images array

const Gift = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flipbook-container">
      <button className="flipbook-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="flipbook-content">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="flipbook-image"
        />
      </div>
      <button className="flipbook-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Gift;
