import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRegisterUserMutation } from "../../features/api/authApi";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { fullName, dateOfBirth, gender, email, mobileNumber, password, confirmPassword } = formData;

    if (!fullName.trim()) {
      toast.error("Full Name is required.");
      return false;
    }
    if (!dateOfBirth) {
      toast.error("Date of Birth is required.");
      return false;
    }
    if (!gender) {
      toast.error("Gender is required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Valid Email Address is required.");
      return false;
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileNumber || !mobileRegex.test(mobileNumber)) {
      toast.error("Valid 10-digit Mobile Number is required.");
      return false;
    }
    if (!password || password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const result = await registerUser(formData).unwrap(); // Await and unwrap the result
      toast.success(result.message || "Registration successful!");
      setFormData({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login"); // Navigate only on success
    } catch (error) {
      if (error.data && error.data.message) {
        toast.error(error.data.message); // Display error from server
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter a password (min. 8 characters)"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-3 text-gray-600 focus:outline-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Re-enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#85132c] text-white py-2 px-4 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
        <div className="w-full text-gray-700 text-center mt-3 pr-4 rounded ">
          Already Registered{" "}
          <a href="/login" className="bg-[#85132c] text-white rounded-lg p-1">
            Login
          </a>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default StudentRegistration;
