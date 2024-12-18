import React, { useState } from "react";

const CertificateSlider = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-slate-600 py-12 px-6 lg:px-16">
      {/* Text Content */}
      <div className="flex-col justify-center items-center lg:w-1/2 mb-8 lg:mb-0 px-4">
        <h2 className="text-2xl font-semibold text-white">
          Get a <span className="italic">prestigious degree</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white">
          Globally recognized and widely accepted by governments and organizations, the online degrees offered by Manipal Academy of Higher Education are at par with on-campus degrees and open doors to better professional opportunities.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/205/749/original/vector-premium-wavy-certificate-template-design.jpg" // Replace with your image URL
            alt="Certificate"
            className="shadow-[0_15px_25px_rgba(133,19,44,0.5)] border-4 border-gray-300 rounded-md w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateSlider;
