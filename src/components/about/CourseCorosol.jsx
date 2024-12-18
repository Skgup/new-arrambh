import React, { useState, useEffect, useRef } from "react";

function CourseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const courses = [
    {
      id: 1,
      image: "https://via.placeholder.com/300", // Replace with actual course image URL
      title: "B.Tech",
      institution: "IIT Delhi",
      duration: "48 Months",
      price: "₹2,00,000",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300", // Replace with actual course image URL
      title: "MBA",
      institution: "IIM Bangalore",
      duration: "24 Months",
      price: "₹4,50,000",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300", // Replace with actual course image URL
      title: "M.Tech",
      institution: "IIT Bombay",
      duration: "24 Months",
      price: "₹2,50,000",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300", // Replace with actual course image URL
      title: "Data Science Certification",
      institution: "Coursera",
      duration: "6 Months",
      price: "₹50,000",
    },
  ];

  const visibleCourses = 1; // Only one course visible at a time
  const maxIndex = courses.length - visibleCourses;

  // Automatically transition slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return (
    <div
      ref={sliderRef}
      className="relative py-3"
      onMouseEnter={() => sliderRef.current.classList.add("show-controls")}
      onMouseLeave={() => sliderRef.current.classList.remove("show-controls")}
    >
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 text-[#85132c]">
        Explore Our <span className="italic">Courses</span>
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20 hidden"
          aria-label="Previous Slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Cards Wrapper */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex-shrink-0 w-full p-4 bg-white border rounded-lg shadow-md"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />

              {/* Course Content */}
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold text-[#85132c]">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-700">{course.institution}</p>
                <p className="text-sm text-gray-500">{course.duration}</p>
                <p className="text-lg font-semibold text-[#85132c]">
                  {course.price}
                </p>
                <button className="mt-4 bg-[#85132c] text-white py-1 px-3 rounded-full hover:bg-[#85135c]">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20 hidden"
          aria-label="Next Slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Styling for hover effect */}
      <style jsx>{`
        .show-controls button {
          display: block;
        }
      `}</style>
    </div>
  );
}

export default CourseSlider;
