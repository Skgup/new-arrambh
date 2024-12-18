import React, { useState } from "react";

const tabs = ["Top Universities", "Domain", "Skills You'll Learn"];
const universities = [
  { name: "University of Virginia", logo: "🟠" },
  { name: "University of Michigan", logo: "🔵" },
  { name: "University of Maryland", logo: "🟡" },
  { name: "University of Rochester", logo: "🟢" },
  { name: "University of Illinois", logo: "🔶" },
  { name: "University of Minnesota", logo: "🟥" },
  { name: "University of California, Irvine", logo: "🔷" },
  { name: "Johns Hopkins University", logo: "🔵" },
];
const domains = [
  "Business Strategy",
  "Finance",
  "Social Sciences",
  "Leadership and Management",
  "Personal Development",
  "Economics",
  "Language Learning",
  "Human Resources",
  "Business Essentials",
];

const skills = [
    "Business Strategy",
    "Finance",
    "Social Sciences",
    "Leadership and Management",
    "Personal Development",
    "Economics",
    "Language Learning",
    "Human Resources",
    "Business Essentials",
  ];

const AdditionalTools = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">
        Additional <span className="text-[#85132c]">tools & certifications</span>
      </h2>
      <p className="mb-6 text-gray-600">
        Choose from <strong>10,000+ courses</strong> & professional certifications
        from leading global universities while pursuing your degree.
      </p>
      <div className="flex space-x-4 border-b-2 ">
        {tabs.map((tab, index) => (
          <button
          key={index}
          className={`pb-2 font-semibold ${
            activeTab === index
              ? "border-b-2 border-[#85132c] text-[#85132c]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
        
        ))}

        
      </div>

      <div className="mt-6">
        {activeTab === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <div className="text-3xl">{university.logo}</div>
                <span className="text-sm font-medium text-gray-700">
                  {university.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-md text-center"
              >
                <span className="text-gray-700 font-medium">{domain}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 2 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {domains.map((skills, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-md text-center"
            >
              <span className="text-gray-700 font-medium">{skills}</span>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalTools;
