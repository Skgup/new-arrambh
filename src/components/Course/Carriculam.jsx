import React, { useState } from "react";

const Curriculum = () => {
  const [activeSemester, setActiveSemester] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

  const toggleSemester = (index) => {
    setActiveSemester(activeSemester === index ? null : index);
  };

  const toggleSubSection = (index) => {
    setActiveSubSection(activeSubSection === index ? null : index);
  };

  const semesters = [
    {
      name: "Section 1 - Introduction to Psychology",
      subsections: [
        {
          name: "Subsection 1.1 - Basics of Psychology",
          resources: { pdf: true, ppt: false, doc: true },
        },
        {
          name: "Subsection 1.2 - Psychological Theories",
          resources: { pdf: true, ppt: true, doc: true },
        },
      ],
    },
    {
      name: "Section 2 - Biological Foundations of Behavior",
      subsections: [
        {
          name: "Subsection 2.1 - Brain Structure and Function",
          resources: { pdf: true, ppt: false, doc: false },
        },
        {
          name: "Subsection 2.2 - Neurotransmitters",
          resources: { pdf: false, ppt: true, doc: false },
        },
      ],
    },
    // Add more sections as needed
  ];

  return (
    <div className="relative pt-6 lg:pt-11 lg:px-0 w-full max-w-screen-lg mx-auto">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-blue-900 italic">
            Program <span className="font-normal">curriculum</span>
          </h1>
          <button className="bg-[#85132c] text-white px-4 py-2 rounded hover:bg-blue-700">
            Download Brochure
          </button>
        </div>

        <div className="mt-6">
          {semesters.map((semester, index) => (
            <div key={index} className="bg-blue-100 border border-blue-300 rounded my-2">
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSemester(index)}
              >
                <span className="font-semibold text-blue-900">{semester.name}</span>
                <span className="text-blue-900 font-bold">
                  {activeSemester === index ? "-" : "+"}
                </span>
              </div>

              {activeSemester === index && (
                <div className="p-4">
                  {semester.subsections.map((subsection, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-blue-50 border border-blue-200 rounded my-2"
                    >
                      <div
                        className="p-4 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSubSection(subIndex)}
                      >
                        <span className="font-semibold text-blue-900">{subsection.name}</span>
                        <span className="text-blue-900 font-bold">
                          {activeSubSection === subIndex ? "-" : "+"}
                        </span>
                      </div>

                      {activeSubSection === subIndex && (
                        <div className="p-4 text-gray-700">
                          {/* Display resource buttons if available */}
                          <div className="flex space-x-2">
                            {subsection.resources.pdf && (
                              <button className="bg-green-600 text-white px-4 py-2 rounded">
                                PDF
                              </button>
                            )}
                            {subsection.resources.ppt && (
                              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                PPT
                              </button>
                            )}
                            {subsection.resources.doc && (
                              <button className="bg-gray-600 text-white px-4 py-2 rounded">
                                DOC
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
  