import React from "react";
import { useParams } from "react-router-dom";
// import Specializations from "./Specializations";
import Ranking from "./Ranking";
import Advantage from "./Advantages";
// import JobOpportunities from "./JobOpportunities";
import Curriculum from "./Carriculam";
import CertificateSlider from "./Certficate";
// import AdditionalTools from "./AdditionalTools";
import WhoCanJoin from "./WhoCanJoin";
import LearningObjectives from "./LearningObjectives";
import CourseOutcome from "./CourseOutcome";
import AdmissionProcess from "./AdmissionProcess";
import VideoSection from "../about/LeadershipTeam/VideoSection";
import Fees from "./FeesorScholarship";
import HighlyDemandedCoursesSlider from '../about/HighlyDemanding';
import CourseCorosol from '../about/CourseCorosol';
import VideoUpload from "./VideoUpload";
// import CourseUpload from "./CourseUpload";
import logo from "../images/ACPL Eduversity Logo.png";
import CourseUpload1 from "./CourseUpload/CourseUpload1"

const CourseDetails = () => {
  const { courseId } = useParams(); // Get the course ID from the URL

  // Static course details for now. Replace this with a dynamic fetch if needed.  
  const courseDetails = {
    title: "Introduction to Psychology: Understanding Human Behaviour",
    university: "Psychology and Mental Health",
    description:
      "This beginner-friendly course provides a comprehensive introduction to the field of psychology, exploring its principles, key concepts, and practical applications. Learners will gain insights into human behavior, mental processes, and the foundational theories that shape modern psychology. ",
    duration: "24 months",
    fee: "₹1,75,000",
    perSemesterFee: "₹43,750 per semester",
    imageUrl:
      "https://cache.careers360.mobi/media/article_images/2020/4/18/mba.jpg",
    highlights: [
      "100% Online Classes",
      "Industry-Driven Curriculum",
      "Career Support",
      "Flexible Learning",
    ],
    brochureLink: "#", // Replace with an actual brochure link
  };

  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-[9%] md:[8%]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">

        {/* Left Column: Course Details */}
        <div className="lg:col-span-3">
          <h1 className="text-xl font-bold text-gray-900">{courseDetails.title}</h1>
          <div className="flex justify-between">
            <p className="text-lg text-gray-700 mt-4">{courseDetails.university}</p>
            <div className="flex items-center space-x-4 mt-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                Aarambh Eduversity
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                ACPL
              </span>
            </div>
          </div>
          <p className="text-gray-600 mt-6">{courseDetails.description}</p>

          <div className="bg-blue-50 p-6 rounded shadow-md w-full mx-auto mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-300 text-center text-sm sm:text-base">
              <div className="px-4">
                <div className="flex justify-center items-center space-x-2 mb-2">
                  <p className="font-bold text-gray-800">DURATION</p>
                </div>
                <p className="text-md sm:text-md font-semibold text-gray-900">20 Hours</p>
                <p className="text-gray-600 mt-1">In your flexible time, any time, anywhere</p>
              </div>
              <div className="px-4">
                <div className="flex justify-center items-center space-x-2 mb-2">
                  <p className="font-bold text-gray-800">Credit</p>
                </div>
                <p className="text-md sm:text-md font-semibold text-gray-900">10 Credit</p>
                <p className="text-gray-600 mt-1">Credits are distributed proportionally based on course content</p>
              </div>
              <div className="px-4">
                <div className="flex justify-center items-center space-x-2 mb-2">
                  <p className="font-bold text-gray-800">FEE</p>
                </div>
                <p className="text-md sm:text-md font-semibold text-gray-900">INR 1999/-</p>
                <p className="text-sm text-gray-500 mt-1">Complete Course in One Time Payment*</p>
              </div>
              <div className="px-4">
                <div className="flex justify-center items-center space-x-2 mb-2">
                  <p className="font-bold text-gray-800">Mode</p>
                </div>
                <p className="text-md sm:text-md font-semibold text-gray-900">Online</p>
                <p className="text-gray-600 mt-1">Easy to access, anywhere, any time.</p>
              </div>
            </div>
            <div className="bg-blue-100 text-center text-blue-800 font-semibold py-2 mt-4 rounded">
              Limited seats available!
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-[#85132c] text-white py-2 px-4 rounded-lg hover:scale-105">
              Download Brochure
            </button>
          </div>
          {/* <Specializations /> */}
          <WhoCanJoin/>
          {/* <Ranking /> */}
          
          {/* <JobOpportunities /> */}
          <LearningObjectives/>
          <CourseOutcome/>
          
          <CertificateSlider />
          <Curriculum />
          <AdmissionProcess/>
          <Advantage />
          {/* <AdditionalTools /> */}
          {/* <Fees /> */}
          {/* <VideoUpload/> */}
          <CourseUpload1/>
          
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-1">
          <VideoSection/>
          <div className="bg-[#1d3557] pt-6 rounded-lg shadow-md max-w-md mx-auto m-5">
            <div className="flex justify-center py-2 bg-white">
              {/* Logo */}
              <img
                src={logo} // Path to the logo
                alt="Eduversity Logo"
                className="h-14 w-56" // Adjust height as needed
              />
            </div>
            <div className="px-10 pt-2 pb-12">

              {/* Title */}
              <h2 className="text-xl font-bold text-white mb-3 text-center">Enroll with us</h2>

              {/* Form */}
              <form className="space-y-5">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name*"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="yourname@email.com*"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>

                {/* Mobile Number Input */}
                <div className="flex items-center">
                  <span className="bg-gray-200 px-4 py-2 border border-r-0 border-gray-300 rounded-l text-sm">
                    +91
                  </span>
                  <input
                    type="text"
                    placeholder="Enter mobile number*"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start text-white text-sm">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1.5 mr-2 h-4 w-4 border-gray-300 rounded focus:ring-[#e63946]"
                  />
                  <label htmlFor="consent" className="leading-none text-xs">
                    I authorize Online Manipal and its associates to contact me via email, SMS, WhatsApp, and voice calls. This consent will override any registration for DNC/NDNC.
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#e63946] hover:bg-[#d92e3e] text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e63946] text-sm"
                  >
                    Enroll Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <HighlyDemandedCoursesSlider/>
          <CourseCorosol/>
        </div>

      </div>
      {/* <CourseUpload /> */}
    </div>
  );
};

export default CourseDetails;
