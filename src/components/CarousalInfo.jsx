import React, { useState, useEffect, useRef } from "react";
import "./CarousalInfo.css";

const slides = [
  {
    title: "In 2008, Lead Singer Dan Reynolds Met Drummer Andrew Tolman",
    content: "Tolman recruited Reynolds to help him out and invited Wayne Sermon, who had graduated from Berklee College of Music.",
  },
  {
    title: "The Formation of Imagine Dragons",
    content: "The band started gaining attention with their early songs and soon became a household name.",
  },
  {
    title: "Rise to Fame",
    content: "With hits like 'It's Time' and 'Radioactive', they took the music world by storm.",
  },
];

const CarousalInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []);

  const resetInterval = () => {
    clearInterval(intervalRef.current); // Clear the existing interval
    intervalRef.current = setInterval(nextSlide, 4000); // Restart the interval
  };

  const handleNext = () => {
    nextSlide();
    resetInterval();
  };

  const handlePrev = () => {
    prevSlide();
    resetInterval();
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].content}</p>
      </div>
      <button
        className="carousel-button left"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        className="carousel-button right"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default CarousalInfo;
