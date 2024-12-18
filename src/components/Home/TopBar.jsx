import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider"; // Make sure to import AuthContext

const TopBar = () => {
  const { user, logout } = useContext(AuthContext); // Access the user state and logout function

  // Don't render TopBar if the user is logged in
  if (user) return null;

  return (
    <div className="bg-[#85132c] flex text-center items-center h-11  text-white fixed top-0 w-full max-md:space-x-8 shadow-md z-50">
      <div className="w-full flex justify-end space-x-3 md:space-x-6 px-3  items-center lg:space-x-6  lg:px-[9%] md:[8%]">
        {/* Email */}
        <a
          href="mailto:aarambheduversity@gmail.com"
          className="flex items-center hover:text-white transition-colors"
        >
          <span className="text-xs sm:text-sm font-medium">
            aarambheduversity@gmail.com
          </span>
        </a>

        {/* Contact Number */}
        <a
          href="tel:+919876543210"
          className="flex items-center hover:text-white transition-colors"
        >
          <span className="text-xs sm:text-sm font-medium">
            +91 9876543210
          </span>
        </a>

        {/* Conditionally Render Login/Logout Button */}
        {!user ? (
          // If the user is not logged in, show the Login button
          <Link to="/login">
            <button className="bg-white text-[#85132c] text-xs sm:text-sm font-medium px-5   h-11 shadow hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
        ) : (
          // If the user is logged in, show the Logout button
          <button
            onClick={logout}
            className="bg-white text-[#85132c] text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow hover:bg-gray-100 transition"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
