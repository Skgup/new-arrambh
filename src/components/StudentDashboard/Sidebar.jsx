import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBook,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaFileAlt,
  FaBell,
  FaUserCog,
  FaLifeRing,
} from "react-icons/fa";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden fixed  left-4 z-50 p-2 rounded-full bg-[#85132c] text-white shadow-lg"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0  h-full bg-white shadow-md rounded-lg p-4 transform duration-300  z-40 ${
          isHovered || isMenuOpen ? "w-64" : "w-16"
        } ${isMenuOpen ? "block" : "hidden lg:block"}`}
        onMouseEnter={!isMenuOpen ? handleMouseEnter : undefined}
        onMouseLeave={!isMenuOpen ? handleMouseLeave : undefined}
      >
        {/* Navigation Section */}
        <nav>
          <ul className="space-y-4 pt-4 m-0">
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="."
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaHome className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  Home Dashboard
                </span>
              </Link>
            </li>
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="my-courses"
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaBook className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  My Courses
                </span>
              </Link>
            </li>
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="exams"
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaGraduationCap className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  Exams & Certificates
                </span>
              </Link>
            </li>
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="live-classes"
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaChalkboardTeacher className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  Live Classes
                </span>
              </Link>
            </li>
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="course-materials"
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaFileAlt className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  Course Materials
                </span>
              </Link>
            </li>
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="notifications"
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaBell className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  Notifications
                </span>
              </Link>
            </li>
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="profile-settings"
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaUserCog className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  Profile Settings
                </span>
              </Link>
            </li>
            <li className="text-black hover:text-white hover:pl-1">
              <Link
                to="help-support"
                className="flex items-center hover:bg-[#85132c]/80 p-2 rounded-sm shadow-xl"
              >
                <FaLifeRing className="text-lg " />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300  hover:text-white ${
                    isHovered || isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  Help & Support
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
