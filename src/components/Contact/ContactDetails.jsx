import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ContactDetails = () => {
    return (
      <div className=" bg-[#85132c] text-white rounded-lg shadow-lg p-4">
        <h3 className="text-xl font-bold mb-4">Contact Details</h3>
        <p className="mb-2 flex items-center">
          <span className="material-icons text-yellow-500 mr-2">place</span>
          1010 Avenue of the Moon, New York, NY 10018 US.
        </p>
        <p className="mb-2 flex items-center">
          <span className="material-icons text-yellow-500 mr-2">phone</span>
          +1 628 123 4000
        </p>
        <p className="mb-4 flex items-center">
          <span className="material-icons text-yellow-500 mr-2">email</span>
          brandon@consulting.com
        </p>
        <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-400"><FaYoutube size={24} /></a>
          </div>
      </div>
    );
  };

  export default ContactDetails
  