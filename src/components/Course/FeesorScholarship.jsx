import React, { useState } from "react";

const tabs = ["Indian Students", "International Students"];

const Fees = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="p-6 bg-gray-50">
            {/* Title Section */}
            <h2 className="text-2xl font-bold mb-4 text-start">
                Fees & <span className="text-[#85132c]">Scholarship</span>
            </h2>
            <p className="mb-6 text-gray-600 text-start">
                Choose from <strong>10,000+ courses</strong> & professional certifications
                from leading global universities while pursuing your degree.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-start space-x-4 border-b-4  ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`pb-2 font-semibold ${activeTab === index
                            ? "border-b-2 border-[#85132c] text-[#85132c]"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 flex justify-start w-full">
                <div className=" w-full p-4 bg-white rounded-md shadow-md ">
                    {activeTab === 0 && (
                        <div>
                            {/* Content for Indian Students */}
                            <div className="flex flex-col lg:flex-row gap-4">
                                {/* Main Content for Indian Students */}
                                <div className="bg-[#14223d] text-white p-4 rounded-md shadow-md flex-1">
                                    Content for Indian Students
                                </div>

                                {/* Additional Content */}
                                <div className="flex flex-col lg:flex-col gap-4 flex-1">
                                    <div className="bg-[#14223d] text-white p-4 rounded-md shadow-md flex-1">
                                        Additional Indian Students Info
                                    </div>
                                    <div className="bg-green-600 text-white p-4 rounded-md shadow-md flex-1">
                                        Additional Indian Students Info
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {activeTab === 1 && (
                        <div>
                            {/* Content for International Students */}
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="bg-green-400 p-4 rounded-md shadow-md w-full">
                                    Content for International Students
                                </div>
                                <div className="bg-gray-700 text-white p-4 rounded-md shadow-md w-full">
                                    Additional International Students Info
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-yellow-200 my-2 p-4 ">
                <h4 className="text-md text-[#85132c]">Note for online fee payments:</h4>
                <ul className="text-sm text-gray-600">
                    <li>All payments must be made exclusively through official links on the onlinemanipal.com domain. Do not make payments to any unauthorized individuals or via any unofficial links / QR codes or other websites.</li>
                    <li>The University is not liable for any issues arising from payments made outside the authorized platform.</li>
                </ul>

            </div>

            <div className="flex flex-col lg:flex-row gap-4 bg-green-300 shadow-xl p-16">
                                <div className=" p-4 rounded-md  w-full text-black">
                                    for no cost Emi section
                                </div>
                                <div className=" text-black p-4 rounded-md  w-full">
                                    for Eduversity Scholarship scheme section
                                </div>
                            </div>
        </div>
    );
};

export default Fees;
