// src/components/MoreDetails.jsx
import React from "react";

const MoreDetails = ({
  formData,
  handleFieldChange,
  handleAddField,
  handleRemoveField,
  handleSaveField,
  handleEditField,
  handleNextTab,
}) => {
  return (
    <div className="bg-white p-6 shadow-xl rounded-xl space-y-6">
      <form>
        {/* The Course Includes */}
        <div>
          <div className="flex items-center justify-between mb-4 border p-4">
            <label className="block text-lg font-bold text-gray-700">The Course Includes</label>
            <button
              type="button"
              onClick={() => handleAddField("courseIncludes")}
              className="text-[#fff] bg-[#85132c] font-semibold py-1 px-2 rounded"
            >
              + Add
            </button>
          </div>
          {formData.courseIncludes.map((include, index) => (
            <div key={index} className="flex items-center space-x-4 mb-2">
              {include.saved ? (
                <p className="flex-grow text-gray-700 font-semibold px-14">{include.value}</p>
              ) : (
                <input
                  type="text"
                  value={include.value}
                  onChange={(e) => handleFieldChange("courseIncludes", index, e.target.value)}
                  placeholder="Enter item"
                  className="flex-grow p-2 border border-gray-300 rounded"
                />
              )}
              {!include.saved ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleSaveField("courseIncludes", index)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveField("courseIncludes", index)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => handleEditField("courseIncludes", index)}
                    className="text-blue-500 font-bold"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveField("courseIncludes", index)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Specialization */}
        <div>
          <div className="flex items-center justify-between mb-4 border p-4">
            <label className="block text-lg font-bold text-gray-700">Specialization</label>
            <button
              type="button"
              onClick={() => handleAddField("specialization")}
              className="text-[#fff] bg-[#85132c] font-semibold py-1 px-2 rounded"
            >
              + Add
            </button>
          </div>
          {formData.specialization.map((special, index) => (
            <div key={index} className="flex items-center space-x-4 mb-2">
              {special.saved ? (
                <p className="flex-grow text-gray-700 font-semibold px-14">{special.value}</p>
              ) : (
                <input
                  type="text"
                  value={special.value}
                  onChange={(e) => handleFieldChange("specialization", index, e.target.value)}
                  placeholder="Enter specialization"
                  className="flex-grow p-2 border border-gray-300 rounded"
                />
              )}
              {!special.saved ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleSaveField("specialization", index)}
                    className="px-3 py-1 bg-[#85132c] text-white rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveField("specialization", index)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => handleEditField("specialization", index)}
                    className="text-blue-500 font-bold"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveField("specialization", index)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Who Can Join */}
        <div>
          <div className="flex items-center justify-between mb-4 border p-4">
            <label className="block text-lg font-bold text-gray-700">Who Can Join</label>
            <button
              type="button"
              onClick={() => handleAddField("whoCanJoin")}
              className="text-[#fff] bg-[#85132c] font-semibold py-1 px-2 rounded"
            >
              + Add
            </button>
          </div>
          {formData.whoCanJoin.map((who, index) => (
            <div key={index} className="flex items-center space-x-4 mb-2">
              {who.saved ? (
                <p className="flex-grow text-gray-700 font-semibold px-14">{who.value}</p>
              ) : (
                <input
                  type="text"
                  value={who.value}
                  onChange={(e) => handleFieldChange("whoCanJoin", index, e.target.value)}
                  placeholder="Enter who can join"
                  className="flex-grow p-2 border border-gray-300 rounded"
                />
              )}
              {!who.saved ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleSaveField("whoCanJoin", index)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveField("whoCanJoin", index)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => handleEditField("whoCanJoin", index)}
                    className="text-blue-500 font-bold"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveField("whoCanJoin", index)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
            <button
              type="button"
              onClick={handleNextTab}
              className="px-6 py-3 bg-[#85132c] text-white rounded-md hover:bg-[#7c0f23] transition duration-300 ease-in-out"
            >
              Next
            </button>
        </div>
      </form>
    </div>
  );
};

export default MoreDetails;
