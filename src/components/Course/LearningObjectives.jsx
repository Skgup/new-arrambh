import React from 'react';

const LearningObjectives = () => {
  const points = [
    "Understand the scope and branches of psychology.",
    "Explore the biological, cognitive, and social foundations of behavior.",
    "Learn about mental health disorders and treatment approaches.",
    "Apply psychological principles to everyday life.",
  ];

  return (
    <div className="relative pt-6 lg:pt-11 lg:px-0 w-full max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-start text-[#85132c]">Learning Objectives</h2>
      <ul className="text-gray-700 shadow-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex shadow-md p-4 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningObjectives;
