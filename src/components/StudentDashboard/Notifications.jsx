import React from "react";

const Notifications = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Notifications</h1>

      {/* Notification List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600">
              <i className="fas fa-bell"></i> {/* Replace with icon if needed */}
            </div>
            <h3 className="font-semibold text-xl ml-4">Upcoming Live Class: Data Science</h3>
          </div>
          <p>Reminder: The next class starts tomorrow at 10 AM.</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600">
              <i className="fas fa-credit-card"></i> {/* Replace with icon if needed */}
            </div>
            <h3 className="font-semibold text-xl ml-4">Payment Confirmation</h3>
          </div>
          <p>Your payment for the "Web Development" course has been confirmed.</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-yellow-600">
              <i className="fas fa-book"></i> {/* Replace with icon if needed */}
            </div>
            <h3 className="font-semibold text-xl ml-4">New Chapter Released</h3>
          </div>
          <p>The next chapter of your "Data Science" course is now available.</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
