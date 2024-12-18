// src/components/AdditionalDetails.js
import React from "react";

const AdditionalDetails = ({ formData, handleInputChange, handleFileChange, handleNextTab }) => {
  return (
    <div className="bg-white p-6 shadow-xl rounded-xl space-y-6">
      <form>
        <div className="space-y-4">
          {/* Course Name (Read-Only) */}
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              id="courseName"
              name="courseName"
              type="text"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.fullCourseName} // Fetch from previous tab
              disabled
            />
          </div>

          {/* Tagline, University, Certifications */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="tagline" className="block text-sm font-medium text-gray-700">Tagline</label>
              <input
                id="tagline"
                name="tagline"
                type="text"
                placeholder="Enter tagline"
                className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
                value={formData.tag}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
              <input
                id="university"
                name="university"
                type="text"
                placeholder="Course provider"
                className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
                value={formData.provider} // Fetch course provider
                disabled
              />
            </div>
            <div>
              <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">Certifications</label>
              <input
                id="certifications"
                name="certifications"
                type="text"
                placeholder="Enter certifications"
                className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
                value={formData.certifications}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter course description"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          {/* Credit Points */}
          <div className="mb-4">
            <label htmlFor="credit" className="block text-sm font-medium text-gray-700">Credit</label>
            <input
              id="credit"
              name="credit"
              type="text"
              placeholder="Enter credit points"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.credit}
              onChange={handleInputChange}
            />
          </div>

          {/* Mode (Online/Offline) */}
          <div className="mb-4">
            <label htmlFor="mode" className="block text-sm font-medium text-gray-700">Mode</label>
            <select
              id="mode"
              name="mode"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.mode}
              onChange={handleInputChange}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {/* PDF Upload */}
          <div className="mb-4">
            <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">Upload Brochure (PDF)</label>
            <input
              id="pdf"
              name="pdf"
              type="file"
              accept=".pdf"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              onChange={handleFileChange}
            />
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleNextTab}
              className="px-6 py-3 bg-[#85132c] text-white rounded-md hover:bg-[#7c0f23] transition duration-300 ease-in-out"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdditionalDetails;
