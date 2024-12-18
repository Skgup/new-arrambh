import React, { useState, useRef, useEffect } from "react";
import EnrollmentForm from "./Enroll";

const FloatingEnrollButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navRef = useRef(null); // Corrected useRef declaration

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  // Attach event listener on mount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Floating Button - Aligned to the right side */}
      <button
        className="fixed top-1/2 right-4 z-20  shadow-[5px_rgba(121,22,87,0.3),4px_10px_15px_#85132c] transform -translate-y-1/2 bg-[#85132c] hover:bg-[#6b1025] w-12 h-12 rounded-full  flex items-center justify-center text-sm"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="text-white text-sm">Enroll</span>
      </button>

      {/* Modal Container */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-end transition-transform duration-500 ease-in-out ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Modal Content */}
        <div
          ref={navRef} // Attach the correct reference here
          className="w-full max-w-md p-6 transform transition-transform ease-in-out duration-1000"
        >
          {/* Close Button */}
          <button
            className="absolute  top-60 right-8 text-[#85132c] hover:text-[#6b1025]"
            onClick={() => setIsModalOpen(false)}
          >
            <span className="font-bold">X</span>
          </button>

          {/* Enrollment Form */}
          <div className="mt-28">
            <EnrollmentForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingEnrollButton;
