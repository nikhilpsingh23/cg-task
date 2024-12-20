import React, { useState } from "react";
import "./styles/carausel.css";

const carouselData = [
  {
    text: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    text: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    text: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line.",
    image: "https://via.placeholder.com/400x300",
  },
];

function ResponsiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <button className="arrow prev" onClick={handlePrev}>
          &#9664;
        </button>
        <div className="carousel-content">
          <div className="text-column">
            <p>{carouselData[currentIndex].text}</p>
          </div>
          <div className="image-column">
            <img src={carouselData[currentIndex].image} alt="carousel" />
          </div>
        </div>
        <button className="arrow next" onClick={handleNext}>
          &#9654;
        </button>
      </div>
    </section>
  );
}

export default ResponsiveCarousel;
