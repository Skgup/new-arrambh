import React, { useState } from "react";
import axios from "axios";

function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    course: "",
    institution: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/enrollments",
        formData
      );
      console.log("Enrollment successful:", response.data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit the form.");
    }
  };
  return (
    <div className="flex items-center justify-center  w-full">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Interested in our courses? Share your details and we'll get back to
          you.
        </h2>
        <form className="space-y-4 text-black" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="yourname@email.com*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            required
          />

          {/* Phone Input */}
          <div className="flex space-x-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              required
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              {/* Add other country codes as needed */}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number*"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              required
            />
          </div>

          {/* Category Select */}
          <select
          name="course"
          value={formData.course}
          onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            required
          >
            <option value="" disabled selected>
              Select category*
            </option>
            {/* Add course options */}
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="cloud-computing">Cloud Computing</option>
            <option value="cyber-security">Cyber Security</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="ui-ux-design">UI/UX Design</option>
          </select>

          {/* Course Select */}
          <select
           name="institution"
           value={formData.institution}
           onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            required
          >
            <option value="" disabled selected>
              Select course*
            </option>
            {/* Add institution options */}
            <option value="stanford-university">Stanford University</option>
            <option value="harvard-university">Harvard University</option>
            <option value="bits-pilani">BITS Pilani</option>
            <option value="amity-university">Amity University</option>
          </select>

          {/* Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-4 w-4 text-[#85132c] border-gray-300 rounded focus:ring-[#85132c]"
              required
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
              I authorize Aarambh Eduversity and its associates to contact me
              with updates & notifications via email, SMS, WhatsApp, and voice
              call. This consent will override any registration for DNC / NDNC.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#85132c] text-white rounded-md hover:bg-[#85130c] transition"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnrollmentForm;
