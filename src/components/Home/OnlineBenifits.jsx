import React from "react";

const OnlineBenefits = () => {
  return (<div className="bg-white p-6 lg:px-[9%] md:[8%]">
    <div className=" p-6 rounded-lg flex flex-col lg:flex-row  bg-blue-50 ">
      {/* Left Section: Benefits */}
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Online  benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">school</span>
            <div>
              <h3 className="font-semibold text-lg">Degrees from top ranked  universities</h3>
              <p className="text-gray-600">
                Graduate with UGC-entitled & AICTE approved online degrees which are at par with on-campus degree programs.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">local_offer</span>
            <div>
              <h3 className="font-semibold text-lg">Scholarships up to 30%</h3>
              <p className="text-gray-600">
                Avail scholarship benefits under merit, defense, Divyaang, alumni, and other categories.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">groups</span>
            <div>
              <h3 className="font-semibold text-lg"> alumni status</h3>
              <p className="text-gray-600">
                Become a part of a 1,50,000+ global  alumni network.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">credit_card</span>
            <div>
              <h3 className="font-semibold text-lg">Easy Financing Options</h3>
              <p className="text-gray-600">
                Improved affordability with flexible financing and no-cost EMI options.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">work</span>
            <div>
              <h3 className="font-semibold text-lg">100% placement assistance</h3>
              <p className="text-gray-600">
                Boost your employability quotient by acquiring job-ready skills & preparing for interviews to perform well in placement drives.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">web</span>
            <div>
              <h3 className="font-semibold text-lg">Weekly webinars with industry leaders</h3>
              <p className="text-gray-600">
                Stay updated on key industry trends through our weekly webinars by industry experts.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">library_books</span>
            <div>
              <h3 className="font-semibold text-lg">Exclusive Coursera access</h3>
              <p className="text-gray-600">
                Free access to 10K+ courses & professional certifications from top global universities.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="material-icons text-[#85132c] text-3xl mr-4">location_city</span>
            <div>
              <h3 className="font-semibold text-lg">Campus immersion</h3>
              <p className="text-gray-600">
                Participate in exclusive in-person meetups at campus with your batchmates and faculty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center items-center">
        <img
          src="/images/benifits.jpg"
          alt="Online  Benefits"
          className="w-full max-w-sm rounded-lg shadow-md"
        />
      </div>
    </div></div>
  );
};

export default OnlineBenefits;
