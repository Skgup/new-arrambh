import React from "react";

const HelpSupport = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Help & Support</h1>

      {/* Help Articles */}
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="font-semibold">How to Access Course Materials</h3>
          <p>Learn how to download and view course materials.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="font-semibold">How to Join Live Classes</h3>
          <p>Get instructions on how to join live sessions on Zoom or Google Meet.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="font-semibold">Payment Issues</h3>
          <p>Steps to follow if you're facing payment issues.</p>
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
        <form>
          <textarea
            className="w-full p-4 border rounded"
            rows="4"
            placeholder="Describe your issue..."
          />
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;
