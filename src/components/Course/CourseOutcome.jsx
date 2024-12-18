import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CourseOutcome = () => {
  const outcomes = [
    "Understand foundational psychological principles and concepts.",
    "Apply psychological theories to real-world scenarios.",
    "Recognize the biological, cognitive, and social foundations of behavior.",
    "Gain awareness of mental health and therapeutic approaches.",
  ];

  return (
    <div className="relative pt-6 lg:pt-11 lg:px-0 w-full max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-start text-[#85132c]">Course Outcome</h2>
      <ul className="text-gray-700 shadow-lg p-4 flex flex-col gap-4">
        {outcomes.map((outcome, index) => (
          <li
            key={index}
            className="flex items-start gap-3 shadow-md p-4 rounded-lg bg-white"
          >
            <FaCheckCircle className="text-green-600 mt-1" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOutcome;
