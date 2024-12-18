
import React from "react";
import CoreValues from "./CoreValues";
import VisionMision from "./Vision_Mission";

import Marquee from "react-fast-marquee";
import SideStudentSay from "./SideStudentSay";
import HighlyDemandedCoursesSlider from "./HighlyDemanding";
import CourseCorosol from '../about/CourseCorosol'
import EnrollmentForm from "../Home/Enroll";

const About_eduversity = () => {
  

  

  

 

  const videoAboutEduversity = {
    videoUrl: "https://www.youtube.com/embed/UIDwl_kP2MU", // Replace with your actual video ID
    description: "Hear from our alumni about Aarambh Eduversity.",
  };

  return (
    <>
       {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="container  mx-auto ">
          <h1 className="text-3xl font-bold">About Us</h1>
         
        </div>
      </header>

      {/* section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-[9%] md:[8%] ">
        <div className="container   ">
          {/* About Eduversity Section */}
          <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8 ">
            {/* Brief Introduction */}
            <div className="bg-white lg:w-3/4 w-full shadow-lg rounded-lg p-6 transition-transform transform">
              <h3 className="font-semibold text-lg text-[#85132c]">Brief Introduction to Aarambh Eduversity</h3>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                incidunt eos aliquam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempore incidunt eos aliquam.
              </p>
            </div>
            {/* <VideoSection/> */}
            {/* Video About Eduversity */}
            <div className="bg-white  w-full lg:w-[34%] ">
              <div className="relative" style={{ paddingTop: "60.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full "
                  src={videoAboutEduversity.videoUrl}
                  title="About Eduversity Video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
            </div>
           
          </div>

          {/* Vision, Mission, and Core Values */}
          <div className="flex flex-col lg:flex-row justify-between my-8 space-y-6 space-x-5 lg:space-y-0   ">
            <div className="w-full lg:w-[67%]">
              <VisionMision />
              <CoreValues />
              {/* Marquee Section */}
              <div className="mt-8">
                <Marquee>
                  {[
                    "ada.jpg",
                    "allstate.jpg",
                    "amazon.jpg",
                    "anz.jpg",
                    "carvoviant.jpg",
                    "delhivery.jpg",
                    "deloitte.jpg",
                    "dhira.jpg",
                    "statxo.jpg",
                    "volvo.jpg",
                    "tata.jpg",
                    "techMahindra.jpg",
                    "pepsico.jpg",
                    "paypal.jpg",
                    "no broker.jpg",
                    "muthoot.jpg",
                    "mygate.jpg",
                    "multiplier.jpg",
                    "maveric.jpg",
                    "labvantage.jpg",
                    "kpmg.jpg",
                    "jws.jpg",
                    "jio.jpg",
                    "insurancedekho.jpg",
                    "genpect.jpg",
                    "gainars.jpg",
                  ].map((img, index) => (
                    <img
                      key={index}
                      src={`/images/${img}`}
                      alt={img.split(".")[0]}
                      className="h-20 object-contain px-6"
                    />
                  ))}
                </Marquee>
              </div>
            </div>
            {/* right side start */}
           
            {/* Enrollment Form */}
            <div className="w-full lg:w-[30%] ">
             <EnrollmentForm/>
              <HighlyDemandedCoursesSlider/>
              <CourseCorosol/>
                  {/* students says */}
           <SideStudentSay/>
                  {/* students says end */}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About_eduversity;
