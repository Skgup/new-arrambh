// src/components/TabNavigation.js
import React from "react";

const TabNavigation = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 ${activeTab === tab ? 'bg-[#85132c] text-white' : 'bg-gray-200 text-gray-700'} rounded-t-lg`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
