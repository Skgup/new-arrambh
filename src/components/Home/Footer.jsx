import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1239] px-3 text-white py-10 lg:px-[9%]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about-eduversity" className="hover:underline">About Us</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/faculties" className="hover:underline">Faculties</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-400"><FaYoutube size={24} /></a>
          </div>
          <div>
            <p className="flex items-center">
              📧 <span className="ml-2">info@eduversity.com</span>
            </p>
            <p className="flex items-center">
              💬 <span className="ml-2">Help Center</span>
            </p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Subscribe to Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded mb-4 bg-white text-black"
            />
            <button
              type="submit"
              className="bg-[#85132c] w-full py-2 rounded text-white font-bold hover:bg-opacity-80"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
