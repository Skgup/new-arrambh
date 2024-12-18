import React from "react";

const ExamsQuizzes = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Exams & Certificates</h1>

      {/* Exam List */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Exams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-4">Web Development Exam</h3>
            <p>Status: Not Taken</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">Take Exam</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-4">Data Science Quiz</h3>
            <p>Status: Completed</p>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-4">Web Development Certificate</h3>
            <p>Issued: November 2024</p>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">Download</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-4">Data Science Certificate</h3>
            <p>Issued: October 2024</p>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">Download</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-4">Upcoming Certificate</h3>
            <p>Status: Pending Issuance</p>
            <button className="bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed mt-4">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsQuizzes;
