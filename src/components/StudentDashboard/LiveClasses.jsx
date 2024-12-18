import React from "react";

const LiveClasses = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Live Classes</h1>

      {/* Live Class List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-xl mb-4">Data Science Live Session</h3>
          <p>Scheduled: Tomorrow, 10 AM</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
            Join Class
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-semibold text-xl mb-4">Web Development Live Session</h3>
          <p>Scheduled: Monday, 9 AM</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
            Join Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;
