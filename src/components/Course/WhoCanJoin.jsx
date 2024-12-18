import React from 'react';

const WhoCanJoin = () => {
  const points = [
    "Beginners interested in psychology",
    "Students preparing for psychology courses",
    "Anyone curious about understanding human behavior",
  ];

  return (
    <div className="relative pt-6 lg:pt-11  lg:px-0 w-full max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-start text-[#85132c]">Who Can Join This Programme </h2>
      <ul className="list-disc list-inside text-gray-700">
        {points.map((point, index) => (
          <li key={index} className="mb-2">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhoCanJoin;
