import React, { useState } from "react";

const JobOpportunities = () => {
  const [activeTab, setActiveTab] = useState("jobProfiles");

  const jobProfilesData = [
    "Digital Marketing",
    "Brand Management",
    "Product Marketing",
    "Wealth Management",
    "Digital Marketing",
    "Brand Management",
    "Product Marketing",
    "Wealth Management",
    "Digital Marketing",
    "Brand Management",
    "Product Marketing",
    "Wealth Management",
    "Digital Marketing",
    "Brand Management",
    "Product Marketing",
    "Wealth Management",
    // More job profiles can be added
  ];

  const industryData = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    // More industries can be added
  ];

  return (
    <div  className="py-16 px-6 bg-gray-50">
      {/* Heading and Paragraph */}
      <h2 className="text-start text-3xl font-bold  mb-4 text-gray-800">
        Job Opportunities after online MBA Degree
      </h2>
      <p className=" text-start px-4 text-lg  mb-4 text-gray-600">
        Explore the various job roles and industries available with our programs.
      </p>

      <div style={{
    boxShadow: '0 4px 6px -1px rgba(133, 19, 44, 0.5), 0 2px 4px -2px rgba(133, 19, 44, 0.5)',
  }} className="shadow-md  border-black ">
        {/* Navigation for Job Profiles and Industry */}
      <div className="flex justify-start pl-4 mb-4 space-x-8">
        <button
          onClick={() => setActiveTab("jobProfiles")}
          className={`px-6 py-2 text-lg font-semibold ${
            activeTab === "jobProfiles"
              ? "font-bold text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Job Profiles
        </button>
        <button
          onClick={() => setActiveTab("industry")}
          className={`px-4 p-0 m-0 text-lg font-semibold ${
            activeTab === "industry"
              ? "font-bold text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Industry
        </button>
      </div>

      {/* Horizontal Rule */}
      {/* <hr className="border-t-2 border-gray-300 mb-8" /> */}

      {/* Content Display (Job Profiles or Industry) */}
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(activeTab === "jobProfiles" ? jobProfilesData : industryData).map(
          (item, index) => (
            <div
              key={index}
              className=" p-0  rounded-lg text-center hover:bg-blue-50 transition ease-in-out duration-300"
            >
              <h5 className="font-bold text-md text-gray-800">{item}</h5>
            </div>
          )
        )}
      </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
