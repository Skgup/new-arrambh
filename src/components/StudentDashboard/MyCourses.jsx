import React from "react";

const MyCourses = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Courses</h1>

      {/* List of Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Web Development"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="font-semibold text-xl mb-4">Course 1: Web Development</h3>
          <p>Course Duration: 4 Weeks</p>
          <p>Status: In Progress</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Data Science"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="font-semibold text-xl mb-4">Course 2: Data Science</h3>
          <p>Course Duration: 6 Weeks</p>
          <p>Status: Completed</p>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
