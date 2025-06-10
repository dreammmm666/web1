import React, { useState, useEffect } from 'react';
import '../css/img.css'
import IMG1 from '../img/01.jpg';
import Img2 from '../img/02.jpg';
import Img3 from '../img/03.jpg';
import Img4 from '../img/04.jpg';
import Img5 from '../img/05.jpg';
import Img6 from '../img/06.jpg';
import Img7 from '../img/07.jpg';

function Img() {
  const images = [IMG1, Img2, Img3, Img4, Img5, Img6, Img7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div
        className="slider-inner"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(100 / images.length) * currentIndex}%)`
        }}
      >
        {images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`Slide ${idx + 1}`}
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>

      <button
        onClick={goPrev}
        className="slider-button left"
        aria-label="ก่อนหน้า"
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={goNext}
        className="slider-button right"
        aria-label="ถัดไป"
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export default Img;
