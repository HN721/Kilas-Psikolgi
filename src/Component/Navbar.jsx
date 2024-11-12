import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-6 py-3 lg:mx-16 lg:py-10">
      {/* Logo dan Judul */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center">
          <img className="hidden lg:block h-10" src={Logo} alt="Logo" />
          <h1 className="font-bold text-base lg:text-2xl ml-2">
            Kilas Psikologi
          </h1>
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {/* Icon Hamburger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Links */}
      <div
        className={`flex-col lg:flex-row lg:flex gap-4 ${
          isOpen ? "flex" : "hidden"
        } lg:static mt-4 lg:mt-0`}
      >
        <Link
          to={"/"}
          className="font-semibold text-sm lg:text-lg text-gray-800 hover:text-gray-500"
        >
          Home
        </Link>
        <Link to={"/pendahuluan"}>
          <a className="font-semibold text-sm lg:text-lg text-gray-800 hover:text-gray-500">
            Kilas Psikologi
          </a>
        </Link>
        <Link to={"/tokoh"}>
          <a className="font-semibold text-sm lg:text-lg text-gray-800 hover:text-gray-500">
            Pengenalan Tokoh
          </a>
        </Link>
      </div>
    </div>
  );
}
