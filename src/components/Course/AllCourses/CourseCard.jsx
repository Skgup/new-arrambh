import React from "react";

const CourseCard = ({ image, title, university, duration, price, popular }) => {
  return (
    <>
     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 md:p-6">
        {popular && (
          <div className="bg-green-100 text-green-600 text-xs font-semibold uppercase rounded-full px-2 py-1 inline-block">
            Popular Course
          </div>
        )}
        <h2 className="text-2xl font-bold mt-2">{title}</h2>
        <p className="text-gray-500">{university}</p>
        <p className="text-sm text-gray-600 mt-1">{duration}</p>
        <p className="text-blue-600 font-semibold text-lg mt-3">{`₹${price}`}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition">
          Know More
        </button>
      </div>

    </div>
    

    </>

  );
};

export default CourseCard;
