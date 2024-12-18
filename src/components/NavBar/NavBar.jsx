import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import ACPL_LOGO from "../images/ACPL Eduversity Logo.png";
import { AuthContext } from "../AuthProvider"; // User authentication context

const NavBar = () => {
  // Assuming user context contains the email
  const [profile, setProfile] = useState(null); // State for the fetched profile
  const [loading, setLoading] = useState(true);

  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [aboutTimeout, setAboutTimeout] = useState(null);
  const [coursesTimeout, setCoursesTimeout] = useState(null);

  const { user, logout } = useContext(AuthContext); // Get user context
  const navRef = useRef(null);

  // Toggle dropdowns
  const toggleDropdown = (setter) => setter((prev) => !prev);
  const handleMobileAboutToggle = () => setAboutDropdownOpen((prev) => !prev);
  const handleMouseEnterAbout = () => {
    if (aboutTimeout) clearTimeout(aboutTimeout);
    setAboutDropdownOpen(true);
  };
  const handleMouseLeaveAbout = () => {
    const timeout = setTimeout(() => setAboutDropdownOpen(false), 300); // Delay closing dropdown
    setAboutTimeout(timeout);
  };

  // const handleMouseEnterCourses = () => {
  //               if (coursesTimeout) clearTimeout(coursesTimeout);
  //               setCoursesDropdownOpen(true);
  //             };
  // const handleMouseLeaveCourses = () => {
  //                   const timeout = setTimeout(() => setCoursesDropdownOpen(false), 300); // Delay closing dropdown
  //                   setCoursesTimeout(timeout);
  //                 };
  // Mobile menu link click handler
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false); // Close mobile menu after link click
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setAboutDropdownOpen(false);
      setMobileMenuOpen(false);
      setProfileDropdownOpen(false);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/profile/${user?.email}`
        ); // Replace with your backend URL
        const data = await response.json();
        setProfile(data); // Store profile data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };

    // if (user?.email) {
    //   fetchProfile();
    // }
    fetchProfile();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching profile
  }

  return (
    <nav
      ref={navRef}
      className="bg-white px-6 lg:px-[9%] md:px-[7%] py-4 mt-8 text-gray-800 border-b border-gray-200 fixed top-0 left-0 w-full z-50"
      style={{ marginTop: user ? "0" : "2.6rem" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={ACPL_LOGO} alt="Logo" className="h-12 md:h-16" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {user ? (
            // Logged-in Navbar
            <>
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => toggleDropdown(setProfileDropdownOpen)}
                >
                  {/* User Avatar */}
                  {/* <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {user.name ? user.name.charAt(0).toUpperCase() : "👤"}
                  </div> */}
                  <div className="rounded-full w-8 h-8 flex items-center justify-center overflow-hidden bg-gray-200">
                    {profile?.profilePhoto ? (
                      <img
                        src={`http://localhost:5000/${profile.profilePhoto}`} // Use backend URL for the image
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-blue-600 text-4xl font-bold">👤</div>
                    )}
                  </div>
                  <span className="text-gray-800">
                    {user.fullName || "User"}
                  </span>
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded text-right z-10">
                    <Link
                      to="/dashboard/profile-settings"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Profile
                    </Link>

                    <button
                      onClick={logout}
                      className="block px-4 py-2 w-48 hover:bg-gray-100 text-right"
                    >
                      <Link to="/">logout</Link>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            // Guest Navbar
            <>
              <Link
                to="/"
                className="text-[#85132c] font-bold hover:text-[#6e0f23]"
              >
                Home
              </Link>
              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
              >
                <button
                  className="text-[#85132c] hover:text-[#6e0f23] font-bold flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isAboutDropdownOpen}
                  onClick={() => toggleDropdown(setAboutDropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setAboutDropdownOpen(false);
                  }}
                >
                  About Us
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </button>
                {isAboutDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-60 bg-white text-gray-800 shadow-lg rounded z-10"
                    role="menu"
                    aria-label="About Us submenu"
                  >
                    <Link
                      to="/about-eduversity"
                      className="block px-4 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      About Eduversity
                    </Link>
                    <Link
                      to="/leadership-team"
                      className="block px-4 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Leadership Team
                    </Link>
                    <Link
                      to="/affiliation"
                      className="block px-4 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Affiliations & Recognitions
                    </Link>
                    <Link
                      to="/partners"
                      className="block px-4 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Partners
                    </Link>
                    <Link
                      to="/clients"
                      className="block px-4 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Clients
                    </Link>
                    <Link
                      to="/testimonials"
                      className="block px-4 py-2 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/courses"
                className="text-[#85132c] font-bold hover:text-[#6e0f23]"
              >
                Courses
              </Link>
              <Link
                to="/faculties"
                className="text-[#85132c] font-bold hover:text-[#6e0f23]"
              >
                Faculties
              </Link>
              <Link
                to="/contact"
                className="text-[#85132c] font-bold hover:text-[#6e0f23]"
              >
                Contact Us
              </Link>

              {/* Enroll Button */}
              <Link
                to="/Enroll"
                className="bg-[#85132c] text-white px-4 py-2  font-bold hover:bg-[#6e0f23]"
              >
                Apply Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className=" hide-on-desktop  focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="hide-on-desktop bg-white shadow-lg">
          {user ? (
            <>
              <Link
                to="/dashboard/profile-settings"
                className="block px-4 py-2 text-right"
              >
                Profile
              </Link>
              <button onClick={logout} className="block px-4 py-2 text-right">
                {" "}
                <Link to="/">Logout </Link>{" "}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-800"
                onClick={handleMobileLinkClick}
              >
                Home
              </Link>

              <div>
                <button
                  className=" px-4 py-2 text-gray-800 w-full flex items-center "
                  onClick={handleMobileAboutToggle}
                >
                  About Us
                  <ChevronDownIcon className="ml-1 w-4 h-4 " />
                </button>
                {isAboutDropdownOpen && (
                  <div className="pl-4">
                    <Link
                      to="/about-eduversity"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleMobileLinkClick}
                    >
                      About Eduversity
                    </Link>
                    <Link
                      to="/leadership-team"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleMobileLinkClick}
                    >
                      Leadership Team
                    </Link>
                    <Link
                      to="/affiliation"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleMobileLinkClick}
                    >
                      Affiliations & Recognitions
                    </Link>
                    <Link
                      to="/partners"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleMobileLinkClick}
                    >
                      Partners
                    </Link>
                    <Link
                      to="/clients"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleMobileLinkClick}
                    >
                      Clients
                    </Link>
                    <Link
                      to="/testimonials"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleMobileLinkClick}
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/courses" className="block px-4 py-2">
                Courses
              </Link>
              <Link
                to="/faculties"
                className="block px-4 py-2 text-gray-800"
                onClick={handleMobileLinkClick}
              >
                Faculties
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-800"
                onClick={handleMobileLinkClick}
              >
                Contact Us
              </Link>
              <Link
                to="/enroll"
                className="block px-4 py-2 text-gray-800"
                onClick={handleMobileLinkClick}
              >
                Enroll
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
