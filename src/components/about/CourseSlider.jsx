import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CoursesSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="bg-pink-400 shadow-lg rounded-lg p-6 relative max-w-full h-40">
      {/* Previous Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        <FaChevronLeft />
      </button>

      {/* Slider Content */}
      <div
        ref={sliderRef}
        className="w-full flex overflow-x-scroll space-x-4 scrollbar-hide"
      >
        {/* Example slider items */}
        <div className="bg-white shadow-md rounded-lg min-w-[150px] h-[100px] flex items-center justify-center">
          Course 1
        </div>
        <div className="bg-white shadow-md rounded-lg min-w-[150px] h-[100px] flex items-center justify-center">
          Course 2
        </div>
        <div className="bg-white shadow-md rounded-lg min-w-[150px] h-[100px] flex items-center justify-center">
          Course 3
        </div>
        <div className="bg-white shadow-md rounded-lg min-w-[150px] h-[100px] flex items-center justify-center">
          Course 4
        </div>
        <div className="bg-white shadow-md rounded-lg min-w-[150px] h-[100px] flex items-center justify-center">
          Course 5
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CoursesSlider;
