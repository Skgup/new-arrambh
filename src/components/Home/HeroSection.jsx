import React, { useState, useEffect } from "react";
import FloatingEnrollButton from "./FliationgButton";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Explore World-Class Online Courses",
      subtitle: "Learn at your pace from the comfort of your home.",
      image: "/images/Student with smile.jpg",
      // buttons: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online BA", "& More"],
    },
    {
      title: "Hear From Our Success Stories",
      subtitle: "Discover how our students achieved their dreams.",
      image: "/images/Upgrade your life.jpg",
      // buttons: [
      //   "Artificial Intelligence",
      //   "Data Science",
      //   "BFSI",
      //   "IT & Fintech",
      //   "Business Analytics",
      //   "Cybersecurity",
      // ],
    },
    {
      title: "Recognized Affiliations & Certifications",
      subtitle: "Boost your career with globally recognized credentials.",
      image: "/images/University STudents Degree.jpg",
      // buttons: [
      //   "Cloud Computing",
      //   "Digital Marketing",
      //   "Software Development",
      //   "Project Management",
      //   "Entrepreneurship",
      //   "& More",
      // ],
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white h-screen overflow-hidden">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative"
            style={{ flex: "0 0 100%" }}
          >
            {/* Slide Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Slide Content */}
            <div className="absolute inset-0  text-[#85132c]  flex  flex-col space-x-4 justify-evenly text-left p-6 md:p-10">
              {/* Title and Subtitle (Above Buttons) */}
              <div className="mb-6 px-6 lg:px-[9%] md:[8%]">
                <h1 className="text-2xl md:text-4xl font-bold  ">{slide.title}</h1>
                <p className="text-base md:text-lg">{slide.subtitle}</p> 
             
              </div>
         
            
              
            </div>
            <div className="relative bottom-56  z-10 flex flex-row space-x-4  md:left-10  px-6 lg:px-[9%] md:[8%]">
        <button
          className="bg-white text-sm text-[#85132c]  hover:text-white px-4 py-3 rounded-md shadow-md font-bold hover:bg-[#85132c] transition duration-300 w-full md:w-auto"
        >
          Explore Courses
        </button>
        <button
          className="bg-[#85132c]  text-sm text-white px-4 py-3 rounded-md shadow-md font-bold hover:bg-[#85132c] transition duration-300 w-full md:w-auto"
        >
          Enroll Now
        </button>
      </div>
          </div>
        ))}
      </div>

    
      

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20"
        aria-label="Previous Slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <FloatingEnrollButton/>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20"
        aria-label="Next Slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default HeroSection;
