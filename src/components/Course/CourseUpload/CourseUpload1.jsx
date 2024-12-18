// src/components/CourseUpload1.js
import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import AdditionalDetails from "./AdditionalDetails"; // Import AdditionalDetails
import MoreDetails from "./MoreDetails"; // Import MoreDetails component
import VideoUpload from "../VideoUpload"; // Import VideoUpload instead of CourseOutcome

const CourseUpload1 = () => {
  const [formData, setFormData] = useState({
    courseTitle: "",
    fullCourseName: "",
    provider: "",
    duration: "",
    fees: "",
    tag: "",
    description: "",
    credit: "",
    mode: "Online",
    pdf: null,
    thumbnail: null, // Added for thumbnail image
    certifications: "", // Added for certifications
    courseIncludes: [],
    specialization: [],
    whoCanJoin: [], // Changed from whoCanjoin to match naming conventions
  });

  const [activeTab, setActiveTab] = useState("BasicDetails");

  const tabs = ["BasicDetails", "Additional Details", "More Details", "Video Upload"]; // Replaced CourseOutcome with VideoUpload

  const handleNextTab = () => {
    setActiveTab((prevTab) => {
      const nextTabIndex = (tabs.indexOf(prevTab) + 1) % tabs.length;
      return tabs[nextTabIndex];
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleFieldChange = (fieldName, index, value) => {
    const updatedField = [...formData[fieldName]];
    updatedField[index].value = value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: updatedField,
    }));
  };

  const handleAddField = (fieldName) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: [...prevState[fieldName], { value: "", saved: false }], // Adds new field to the array
    }));
  };

  const handleSaveField = (fieldName, index) => {
    const updatedField = [...formData[fieldName]];
    updatedField[index].saved = true;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: updatedField,
    }));
  };

  const handleEditField = (fieldName, index) => {
    const updatedField = [...formData[fieldName]];
    updatedField[index].saved = false;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: updatedField,
    }));
  };

  const handleRemoveField = (fieldName, index) => {
    const updatedField = [...formData[fieldName]];
    updatedField.splice(index, 1); // Removes specific field from the array
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: updatedField,
    }));
  };

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#85132c]">
        Add <span className="text-black">New Course</span>
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-8 mb-6 border-b-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-lg font-semibold py-2 transition duration-300 ease-in-out ${activeTab === tab
              ? "border-b-4 border-[#85132c] text-[#85132c]"
              : "text-gray-600 hover:text-[#85132c] border-transparent"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "BasicDetails" && (
        <BasicDetails formData={formData} handleInputChange={handleInputChange} />
      )}
      {activeTab === "Additional Details" && (
        <>
        <AdditionalDetails
          formData={formData}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          handleNextTab={handleNextTab}
        />
        <button>hello</button>
        </>
      )}
      {activeTab === "More Details" && (
        <MoreDetails
          formData={formData}
          handleFieldChange={handleFieldChange}
          handleAddField={handleAddField}
          handleRemoveField={handleRemoveField}
          handleSaveField={handleSaveField}
          handleEditField={handleEditField}
        />
      )}
      {activeTab === "Video Upload" && <VideoUpload />}
      
    </div>
  );
};

export default CourseUpload1;
