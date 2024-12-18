import React from "react";
import SideStudentSay from "../SideStudentSay";
import CourseCorosol from '../CourseCorosol'
import HighlyDemandedCoursesSlider from "../HighlyDemanding";
import EnrollmentForm from "../../Home/Enroll";
const RightSideBar = () => {
  return (
    <div className="flex flex-col  lg:pl-2 ">
      {/* enroll form */}
      <div className="flex items-center justify-center min-h-screen ">
     <EnrollmentForm/>
    </div>

      {/* demanding course */}
     <HighlyDemandedCoursesSlider/>

      {/* course slider */}
    <CourseCorosol/>

      {/* student feedback */}
     <SideStudentSay/>
     <div className="bg-[#85132c] text-white rounded-lg mt-14 p-6">
              <h3 className="text-xl font-semibold mb-4">
                How can we help you?
              </h3>
              <p>
                Contact us at the consulting WP office nearest to you or submit
                a business inquiry online.
              </p>
              <button className="bg-white rounded-lg text-gray-600 p-2 mt-4 font-bold">
                Contact Us
              </button>
            </div>
    </div>

  );
};

export default RightSideBar;
