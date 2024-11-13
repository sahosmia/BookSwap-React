import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <div className="flex flex-col text-center text-gray-600 md:flex-row md:space-x-6 md:text-left">
          <div className="flex flex-col">
            <Link
              to="/contacts"
              className="p-3 mb-2 md:mb-0 hover:text-gray-900"
            >
              Contacts
            </Link>
            <Link
              to="/terms-of-use"
              className="p-3 mb-2 md:mb-0 hover:text-gray-900"
            >
              Terms of Use
            </Link>
          </div>

          <div className="my-5 border-r-2 border-gray-300"></div>
          <div className="flex flex-col ">
            <Link
              to="/privacy-policy"
              className="p-3 mb-2 md:mb-0 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link to="/help" className="p-3 hover:text-gray-900">
              Help
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center text-center md:flex-row md:space-x-4 md:text-right">
          <div className="flex mb-3 space-x-3 md:mb-0">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="p-3 hover:text-gray-900 "
            >
              <FaInstagram className="w-6 h-8" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="p-3 hover:rounded-full hover:bg-white "
            >
              <FaFacebookF className="w-6 h-8" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              className="p-3 hover:text-gray-900"
            >
              <FaTiktok className="w-6 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-md">
        All rights reserved © 2024 BookSwap
      </div>
    </footer>
  );
};

export default Footer;
