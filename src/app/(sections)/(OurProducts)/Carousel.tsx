// ImageSlider.js
import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import the generated Tailwind CSS

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // Adjust the duration to match your transition duration
    }, 5000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          className={`w-[250px] p-8 ${
            index === currentIndex ? "slide-enter-right" : "hidden"
          }`}
          src={imageUrl}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
