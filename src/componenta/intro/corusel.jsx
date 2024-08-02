import { useState, useEffect } from 'react';
import avatar1 from '../../assets/images/avatar1.svg';
import avatar2 from '../../assets/images/avatar2.svg';
import avatar3 from '../../assets/images/avatar3.svg';
import './Intro.css'
const Carousel = () => {
  const images = [avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2,avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, avatar1, avatar2, avatar3, avatar1, avatar3, avatar2,avatar2, avatar3,avatar3, avatar2,avatar2, ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="carousel-image" 
          />
        ))}
        {images.map((image, index) => (
          <img key={index + images.length} src={image} alt={`Slide ${index}`} className="carousel-image" 
          />
        ))}
        {images.map((image, index) => (
          <img key={index + images.length} src={image} alt={`Slide ${index}`} className="carousel-image" 
          />
        ))}
        {images.map((image, index) => (
          <img key={index + images.length} src={image} alt={`Slide ${index}`} className="carousel-image" 
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
