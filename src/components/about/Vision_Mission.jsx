import React from "react";


const VisionMision = () => {
  const features = [
    {
      
      title: "Our Vision",
      description: " At Eduversity, our vision is to create an inclusive and dynamic global learning environment where every individual has the  opportunity to realize their full potential. We aspire to break down opportunity to realize their full potential. We aspire to break down barriers in education, ensuring that knowledge, skills, and  resources are accessible to all, regardless of background, location,or financial status.",       
    },
    {
     
      title: "Our Mission",
      description: "Our mission is to empower learners by providing high-quality, flexible, and engaging educational experiences that foster creativity, critical thinking, and problem-solving skills. We are committed to supporting individuals in their journey of lifelong learning and helping them achieve their goals—whether personal, academic, or professional",
    },
   
  ];

  return (
    <div className="key-features bg-gradient-to-b from-gray-50 to-gray-200  px-4 py-4 shadow-lg ">
      <h2 className="text-center text-4xl font-bold mb-12 text-[#85132c]">
        Vision & Mission
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative w-full h-64 md:h-72 lg:h-80 perspective-1000"
          >
            {/* Card Wrapper */}
            <div className="relative max-w-96 h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
              {/* Card Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-[#85132c] rounded-lg backface-hidden">
               
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#85132c] text-white text-center rounded-lg rotate-y-180 backface-hidden">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-sm text-justify p-2">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionMision;
