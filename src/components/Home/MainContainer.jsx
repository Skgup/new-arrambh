import React from "react";
import EnrollmentForm from "./Enroll"; // Assuming the form component is imported

function MainContainer() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-500 to-[#85132c] items-center justify-between space-x-24 px-6 lg:px-[9%] md:[8%]">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row   rounded-lg overflow-hidden max-w-5xl ">
        {/* Left Side */}
        <div className="md:w-1/2 w-full  p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Join Our Courses Today!
          </h1>
          <p className="text-white text-lg">
            Discover a wide range of online courses tailored to help you succeed
            in your career and personal development. Enroll now to start your journey.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full p-6 flex justify-center items-center ">
          {/* Enrollment Form */}
          <div className="  w-full max-w-md">
            <EnrollmentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
