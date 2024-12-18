import React from "react";

import TeamGrid from "./TeamGrid";

import RightSideBar from "./RightSideBar";
import PartnerCorousal from "./PartnerCorousal";

const LeadershipTeam = () => {
  
  const videoAboutEduversity = {
    videoUrl: "https://www.youtube.com/embed/UIDwl_kP2MU", // Replace with your actual video ID
    description: "Hear from our alumni about Aarambh Eduversity.",
  };

  return (
    <>
      {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold ">Leadership team</h1>
        </div>
      </header>

      <div className=" px-6 lg:px-[9%] md:[8%] py-6 ">
        <div className="container">
        <h1 className="text-2xl font-bold text-[#85132c] ">Leadership Team</h1>
       
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8 ">
      
            <div className="bg-white lg:w-3/4 w-full shadow-lg rounded-lg p-6 transition-transform transform">
              
              <p className="text-gray-600 mt-4">
              The leadership team at Aarambh Eduversity, led by visionary
          professionals, embodies excellence, innovation, and inclusivity,
          uniting diverse expertise to provide accessible, high-quality
          education that meets global learners' needs while fostering relevance
          and impactful learning experiences.
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

        <div className=" gap-6   flex justify-between flex-col lg:flex-row ">
          {/* Team Section */}
          <div className="flex-1 w-full lg:w-[67%]">
           
            <TeamGrid />
            <PartnerCorousal />
          </div>
          {/* Sidebar and Video */}
          <div className="flex flex-col w-full lg:w-[30%] ">
            
            <RightSideBar />
          </div>
        </div>
      </div>
        </div>

   
    </>
  );
};

export default LeadershipTeam;
