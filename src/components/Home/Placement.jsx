import React from "react";
import Marquee from "react-fast-marquee";
const PlacementAssistance = () => {
  return (
    <div className="bg-white p-6 lg:px-[9%] md:[8%]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          100% placement <span className="text-[#85132c]">assistance</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Our placement cell aims to uplift the employability quotient of students interested in finding career opportunities after completion of their programs.
        </p>
        <a href="#learn-more" className="text-[#85132c] font-semibold mt-4 inline-block">
          Know More
        </a>
      </div>

      {/* Content Section */}
      <div className="lg:flex lg:items-start lg:justify-between bg-blue-50 p-6 rounded-lg">
        {/* Left Section: Career Path */}
        <div className="bg-blue-50 p-6 rounded-lg lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Your career path</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start">
              <span className="material-icons text-[#85132c] mr-2">check_circle</span>
              Create winning resumes & explore top job opportunities
            </li>
            <li className="flex items-start">
              <span className="material-icons text-[#85132c] mr-2">check_circle</span>
              Learn the dos & don’ts of real-world interviews
            </li>
            <li className="flex items-start">
              <span className="material-icons text-[#85132c] mr-2">check_circle</span>
              Tailor your resume to stand out in the competitive job market
            </li>
            <li className="flex items-start">
              <span className="material-icons text-[#85132c] mr-2">check_circle</span>
              Boost your confidence with mock interviews
            </li>
            <li className="flex items-start">
              <span className="material-icons text-[#85132c] mr-2">check_circle</span>
              Become industry-ready through expert-led sessions
            </li>
            <li className="flex items-start">
              <span className="material-icons text-[#85132c] mr-2">check_circle</span>
              Attend placement drives
            </li>
          </ul>
        </div>

        {/* Right Section: Statistics */}
        <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-[#85132c]  text-white p-6 rounded-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold">10,000+</h2>
            <p className="text-lg">Learners offered placement assistance</p>
          </div>
          <div className="text-center mt-6">
            <h2 className="text-4xl font-bold">20,000+</h2>
            <p className="text-lg">Opportunities created</p>
          </div>
          <div className="text-center mt-6">
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-lg">Hiring partners</p>
          </div>
          <div className="text-center mt-6">
            <h2 className="text-4xl font-bold">1,000+</h2>
            <p className="text-lg">Industry readiness programs</p>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-8 flex flex-wrap justify-center items-center space-x-4 space-y-4">
        <Marquee>
        <img src="/images/ada.jpg" alt="ADA" className="h-10 object-contain px-9" />
        <img src="/images/allstate.jpg" alt="Allstate" className="h-20 object-contain px-10" />
        <img src="/images/amazon.jpg" alt="Amazone" className="h-20 object-contain px-10" />
        <img src="/images/anz.jpg" alt="ANZ" className="h-20 object-contain px-10" />
        <img src="/images/carvoviant.jpg" alt="Carvoviant" className="h-20 object-contain px-10" />
        <img src="/images/delhivery.jpg" alt="Delhivery" className="h-20 object-contain px-10" />
        <img src="/images/deloitte.jpg" alt="Doloitte" className="h-20 object-contain px-10" />
        <img src="/images/dhira.jpg" alt="dira" className="h-20 object-contain px-10" />
        <img src="/images/statxo.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/volvo.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/tata.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/techMahindra.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/pepsico.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/paypal.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/no broker.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/muthoot.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/mygate.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/multiplier.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/maveric.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/labvantage.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/kpmg.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/jws.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/jio.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/insurancedekho.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/genpect.jpg" alt="" className="h-20 object-contain px-10" />
        <img src="/images/gainars.jpg" alt="" className="h-20 object-contain px-10" />
        </Marquee>
      </div>
    </div>
  );
};

export default PlacementAssistance;
