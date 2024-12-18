import React from "react";

const HighlightsSection = () => {
  const highlights = [
    {
      title: "10,000+ Alumni",
      description: "Join a growing network of professionals.",
    },
    {
      title: "Global Partnerships",
      description: "Collaborations with industry leaders.",
    },
    {
      title: "Award-Winning Programs",
      description: "Recognized for excellence in education.",
    },
    {
      title: "Innovative Curriculum",
      description: "Stay ahead with cutting-edge learning materials.",
    },
  ];

  return (
    <div className="highlights-section bg-gradient-to-b from-gray-50 to-gray-200 py-16 px-6 lg:px-[9%] md:px-[8%]">
      <h2 className="text-center text-3xl font-bold mb-12 text-[#85132c]">
        Our Highlights
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="group relative w-full h-64  md:h-72 lg:h-64 perspective-1000"
          >
            {/* Card Wrapper */}
            <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
              {/* Card Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-[#85132c] rounded-lg backface-hidden">
                <h3 className="text-xl font-bold text-center  mb-4">{highlight.title}</h3>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#85132c] text-white text-center rounded-lg transform rotate-y-180 backface-hidden">
                <h3 className="text-xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-sm px-4">{highlight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;
