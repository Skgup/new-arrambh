import React from "react";

const CourseMaterials = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Course Materials</h1>

      {/* Material List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-xl mb-4">Web Development PDF</h3>
          <a href="#" className="text-blue-600 hover:underline">Download</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-xl mb-4">Data Science PPT</h3>
          <a href="#" className="text-blue-600 hover:underline">Download</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-xl mb-4">Introduction to Algorithms</h3>
          <a href="#" className="text-blue-600 hover:underline">Download</a>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterials;
