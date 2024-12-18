import React from "react";
import HighlyDemandedCoursesSlider from '../about/HighlyDemanding';
import CourseCorosol from '../about/CourseCorosol';
import SideStudentSay from '../about/SideStudentSay';
import EnrollmentForm from "../Home/Enroll";

const partners = [
  {
    name: "Adup Media LLC",
    description:
      "Our partners are the top companies in their own respective industries, and are known to deliver high-quality services and products. Our partners help us deliver unparalleled services to our clients.",
    tagline: "Media & Marketing Consulting",
    location: "Walnut Creek, CA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEln7S7CwLD1MGIL0lzUfEVOqPL9a7arw6A&s",
  },
  {
    name: "Aramiz Company",
    description:
      "We aren’t such an agile and dependable organization just because of our own team; we also have a fantastic network of partners who complement our services and allow us to work harder, better, faster, and stronger.",
    tagline: "Athletic Performance Tracking Devices",
    location: "Escondido, CA",
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Aramiz Company",
    description:
      "We aren’t such an agile and dependable organization just because of our own team; we also have a fantastic network of partners who complement our services and allow us to work harder, better, faster, and stronger.",
    tagline: "Athletic Performance Tracking Devices",
    location: "Escondido, CA",
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Partners = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#85132c] text-white py-4 px-4 sm:px-6 lg:px-[9%]">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold">Our Partners</h1>
        </div>
      </header>

      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-[9%]">
        {/* Main Content Section */}
        <div className="container py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Partners List */}
          <section className="col-span-2 md:col-span-3 space-y-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start p-4 md:p-6"
              >
                {/* Partner Logo */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg md:mr-4"
                />
                {/* Details */}
                <div className="text-center md:text-left md:mt-0 mt-4">
                  <h2 className="text-lg md:text-2xl font-semibold text-gray-800">{partner.name}</h2>
                  <p className="text-gray-500 italic">{partner.tagline}</p>
                  <p className="text-gray-500">{partner.location}</p>
                  <hr className="my-2" />
                  <p className="text-gray-700 mt-2 text-sm md:text-base">{partner.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Sidebar */}
          <aside className="hidden md:block md:col-span-1 sm:block">
            <div className="space-y-6">
              <EnrollmentForm />
              <HighlyDemandedCoursesSlider />
              <CourseCorosol />
              <SideStudentSay />
              <div className="bg-[#85132c] text-white rounded-lg p-4 mt-6">
                <h3 className="text-lg font-semibold">How can we help you?</h3>
                <p className="mt-2 text-sm">
                  Contact us or submit a business inquiry online.
                </p>
                <button className="bg-white text-gray-600 font-bold rounded-lg py-1 mt-3">Contact Us</button>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile view Section for Interactivity */}
        <div className="md:hidden block mt-8 bg-white shadow-lg p-4 rounded-lg">
          <EnrollmentForm />
          <HighlyDemandedCoursesSlider />
          <CourseCorosol />
          <SideStudentSay />
        </div>
      </div>
    </>
  );
};

export default Partners;
