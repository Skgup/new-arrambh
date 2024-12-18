import React from "react";
import { FaRegFileAlt, FaMoneyCheckAlt, FaFileUpload, FaUniversity } from "react-icons/fa";

const AdmissionProcess = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800">
          Admission <span className="italic">Process</span>
        </h2>
        <p className="text-gray-600 mt-2">Start your learning journey, today!</p>

        {/* Process Steps */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-red-100 text-[#85132c] font-semibold rounded-full mx-auto">
                1
              </div>
              <div className="w-10 h-10 mx-auto mt-4 text-[#85132c]">
                <FaRegFileAlt className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold mt-4">Application</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Fill in your basic, education & work experience-related details and pay the application fee to register.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-red-100 text-[#85132c] font-semibold rounded-full mx-auto">
                2
              </div>
              <div className="w-10 h-10 mx-auto mt-4 text-[#85132c]">
                <FaMoneyCheckAlt className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold mt-4">Fee Payment</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Pay the admission fee for the first semester/year or full program.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-red-100 text-[#85132c] font-semibold rounded-full mx-auto">
                3
              </div>
              <div className="w-10 h-10 mx-auto mt-4 text-[#85132c]">
                <FaFileUpload className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold mt-4">Document Upload</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Upload supporting documents & submit your application.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-red-100 text-[#85132c] font-semibold rounded-full mx-auto">
                4
              </div>
              <div className="w-10 h-10 mx-auto mt-4 text-[#85132c]">
                <FaUniversity className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold mt-4">University Approval</h3>
              <p className="text-gray-600 mt-2 text-sm">
                The university will evaluate your documents to confirm your admission.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button className="bg-[#85132c] text-white py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
