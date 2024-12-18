import React, { useState, useRef, useEffect } from "react";

function SideStudentSay() {
  const [expandedCard, setExpandedCard] = useState(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = useRef(null);

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

  const visibleCards =
    window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1;
  const totalCards = cards.length;
  const maxIndex = totalCards - visibleCards;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    resetAutoSlide();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    }, 3000);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  return (
    <div className="relative py-6 lg:py-11 px-4 sm:px-6 lg:px-[9%]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#85132c] text-center sm:text-left">
        Student <span className="italic">speak</span>
      </h2>

      <div className="relative overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-20"
          aria-label="Previous Slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex-shrink-0 ${
                visibleCards === 4
                  ? "w-1/4"
                  : visibleCards === 3
                  ? "w-1/3"
                  : "w-full"
              } p-2 bg-white border rounded-lg shadow-md`}
            >
              {!expandedCard || expandedCard !== card.id ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
              ) : null}

              <div className="p-4">
                <h3 className="text-lg font-bold text-[#85132c]">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700">{card.subtitle}</p>
                <p className="text-xs text-gray-500">{card.batch}</p>
                {expandedCard === card.id ? (
                  <p className="text-sm text-gray-800 mt-2">
                    {card.fullDescription}
                  </p>
                ) : (
                  <p className="text-sm text-gray-800 mt-2">
                    {card.shortDescription}
                  </p>
                )}

                <button
                  onClick={() =>
                    setExpandedCard(expandedCard === card.id ? null : card.id)
                  }
                  className="text-blue-500 text-sm font-medium mt-2"
                >
                  {expandedCard === card.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-20"
          aria-label="Next Slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#85132c]" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SideStudentSay;
