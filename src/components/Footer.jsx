import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Logo & About */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Company Logo" className="w-32" />
          <p className="text-gray-400 mt-4">
            We provide cutting-edge software solutions tailored to your business needs, ensuring a seamless digital experience.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-blue-400 transition duration-300">Home</a>
            <a href="#About" className="hover:text-blue-400 transition duration-300">About Us</a>
            <a href="#Contact" className="hover:text-blue-400 transition duration-300">Contact Us</a>
            <a href="#Privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
          </ul>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Our Address</h3>
          <p className="text-gray-400">
            📍 00100 Nairobi, Kenya <br />
            ✉️ bartasa16@gmail.com <br />
            ☎️ +254 114 574 914
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Bmwangangi. All Rights Reserved.
      </div>

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Footer;
