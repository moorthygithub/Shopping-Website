import React, { useState, useEffect, useRef } from "react";
import "./Hero.css"; 
import header1 from "../Assets/header1.jpg"
import header2 from "../Assets/header2.jpg"
import header3 from "../Assets/header3.jpg"
import header4 from "../Assets/header4.jpg"
import header5 from "../Assets/header5.jpg"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    header1,
    header2,
    header3,
    header4,
    header5,
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const handleScroll = (evt) => {
        evt.preventDefault();
        evt.currentTarget.scrollLeft += evt.deltaY;
      };

      const scrollContainer = scrollContainerRef.current;
      scrollContainer.addEventListener("wheel", handleScroll);

      return () => {
        scrollContainer.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="hero-slider">
 
   <button className="control-prev" onClick={prevSlide}>
        &#129144;
      </button>
      <button className="control-next" onClick={nextSlide}>
        &#129146;
      </button>
      <div className="slider-images">
        <ul>
          {images.map((src, index) => (
            <li
              key={index}
              style={{ display: currentIndex === index ? "block" : "none" }}
            >
              <img src={src} className="hero-img" alt=""/>
            </li>
          ))}
        </ul>
      </div>
      <div className="products" ref={scrollContainerRef}>
        
      </div>
    </div>
  );
};

export default Hero;
