import React, { useState, useRef, useEffect } from "react";

function SideStudentSay() {
  const [expandedCard, setExpandedCard] = useState(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Devaynee Sharma",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 1",
      shortDescription:
        "I have learned key skills in the finance sector through this MBA...",
      fullDescription:
        "I have learned key skills in the finance sector through this MBA, which will help my current career. As this is a management degree, I have improved my problem-solving skills.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Sarita Yadav",
      subtitle: "Online MBA, MAHE",
      batch: "Batch 1",
      shortDescription:
        "I currently work in the pharmaceutical domain. However, I...",
      fullDescription:
        "I currently work in the pharmaceutical domain. However, I wanted to gain new skills, which is why I decided to pursue this MBA. The learning experience has been great so far.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Amit Gupta",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 2",
      shortDescription: "The MBA program has greatly improved my confidence...",
      fullDescription:
        "The MBA program has greatly improved my confidence and business skills. The faculty support and learning environment have been exceptional.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      title: "Priya Singh",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 2",
      shortDescription:
        "With this MBA, I have developed a deeper understanding of...",
      fullDescription:
        "With this MBA, I have developed a deeper understanding of the management domain. It has been a transformative experience for my career.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      title: "Rahul Verma",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 3",
      shortDescription: "This program has elevated my career opportunities...",
      fullDescription:
        "This program has elevated my career opportunities in unimaginable ways. The projects and teamwork taught me real-world business strategies.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300",
      title: "Nikita Chauhan",
      subtitle: "Online MBA, MAHE",
      batch: "Batch 3",
      shortDescription:
        "The MBA course helped me transition into management smoothly...",
      fullDescription:
        "The MBA course helped me transition into management smoothly. I gained valuable skills and insights into managing business operations.",
    },
  ];

  const visibleCards = 1; // Only one card visible at a time
  const totalCards = cards.length;
  const maxIndex = totalCards - visibleCards;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  useEffect(() => {
    // Set interval for auto slide
    const interval = setInterval(handleNext, 3000); // Change the interval value here (3000ms = 3 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative py-6 lg:py-11 group">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 text-[#85132c]">
        Student <span className="italic">speak</span>
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20 hidden group-hover:block"
          aria-label="Previous Slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Cards Wrapper */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Adjust for one card at a time
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full p-4 bg-white border rounded-lg shadow-md"
            >
              {/* If not expanded, show the image */}
              {!expandedCard || expandedCard !== card.id ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
              ) : null}

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#85132c]">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700">{card.subtitle}</p>
                <p className="text-xs text-gray-500">{card.batch}</p>

                {/* Show Short or Full Description */}
                {expandedCard === card.id ? (
                  <p className="text-sm text-gray-800 mt-2">
                    {card.fullDescription}
                  </p>
                ) : (
                  <p className="text-sm text-gray-800 mt-2">
                    {card.shortDescription}
                  </p>
                )}

                {/* Toggle Expand/Collapse */}
                <button
                  onClick={() =>
                    setExpandedCard(
                      expandedCard === card.id ? null : card.id
                    )
                  }
                  className="text-blue-500 text-sm font-medium mt-2"
                >
                  {expandedCard === card.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20 hidden group-hover:block"
          aria-label="Next Slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideStudentSay;
