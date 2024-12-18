import React, { useState, useRef } from "react";

const Ranking = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: "https://www.collegechalo.com/news/wp-content/uploads/2024/06/NIRF-Rankings-2024-1.jpg",
      title: "Ranked 64 amongest indias top universitis in 2024",
      tag: "* Top 70", // The tag text
    },
    {
      id: 2,
      image: "http://www.amity.edu/jaipur/images/about2.jpg",
      title: "ugc intitled online degree equivalent to campus degree",
      tag: "* Top 70", // The tag text
    },
    {
      id: 1,
      image: "https://www.collegechalo.com/news/wp-content/uploads/2024/06/NIRF-Rankings-2024-1.jpg",
      title: "Ranked 64 amongest indias top universitis in 2024",
      tag: "* Top 70", // The tag text
    },
    {
      id: 1,
      image: "https://www.collegechalo.com/news/wp-content/uploads/2024/06/NIRF-Rankings-2024-1.jpg",
      title: "Ranked 64 amongest indias top universitis in 2024",
      tag: "* Top 70", // The tag text
    },
    {
      id: 1,
      image: "https://www.collegechalo.com/news/wp-content/uploads/2024/06/NIRF-Rankings-2024-1.jpg",
      title: "Ranked 64 amongest indias top universitis in 2024",
      tag: "* Top 70", // The tag text
    },
    {
      id: 1,
      image: "https://www.collegechalo.com/news/wp-content/uploads/2024/06/NIRF-Rankings-2024-1.jpg",
      title: "Ranked 64 amongest indias top universitis in 2024",
      tag: "* Top 70", // The tag text
    },
    // Add more cards as needed
  ];

  const visibleCards = 4; // Default number of visible cards for large screens
  const totalCards = cards.length;
  const maxIndex = totalCards - visibleCards;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative py-12 lg:py-16 px-6 lg:px-16 w-full mx-auto bg-white">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-8 text-[#85132c] text-center">
      Rankings & accreditations of our online MBA degree
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden ">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#85132c] bg-opacity-80 text-white p-4 rounded-full hover:bg-opacity-90 z-20"
          aria-label="Previous Slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Cards Wrapper */}
        <div
          ref={sliderRef}
          className="flex transition-transform space-x-6 duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-4 bg-blue-50 rounded-lg shadow-lg relative"
            >
              {/* Card Tag */}
              <div className="absolute top-2 left-2 bg-green-300 text-white px-3 py-1 text-xs rounded-full">
                {card.tag}
              </div>

              {/* Card Image */}
              <img
                src={card.image}
                alt={card.title}
                className="h-28 w-20 object-cover rounded-lg mb-4 mx-auto"
              />

              {/* Card Content */}
              <div className="text-center mb-6 pb-6">
                <p className="text-xs font-semibold text-[#85132c]">
                  {card.title}
                </p>

                
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#85132c] bg-opacity-80 text-white p-4 rounded-full hover:bg-opacity-90 z-20"
          aria-label="Next Slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Ranking;
