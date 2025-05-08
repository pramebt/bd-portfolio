"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of the nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:border border-b-gray-300 w-full fixed top-0 left-0 bg-black/50 backdrop-blur md:px-6 px-5 lg:px-8 xl:px-[8%] md:py-4 py-2 flex items-center justify-between z-50">
      {/* icon Logo */}
      <a className=" w-28 flex items-center">
        <img src="/assets/logobd.svg" alt="Logo" className="md:w-30 w-20" />
      </a>

      {/* Menu for Desktop */}
      <ul className="hidden border border-white md:flex space-x-6 lg:space-x-10 bg-black px-10 py-3 rounded-[50px] drop-shadow-lg text-white">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Responsive Menu for Mobile */}
      <div
        className={`
            fixed inset-x-0 top-16 mx-auto w-full max-w-sm h-screen
            bg-black text-white mt-5 rounded-2xl z-40
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}  /* สไลด์เข้า–ออกจากขวา */
            flex flex-col items-center justify-center
            md:hidden
          `}
      >
        <ul className="space-y-8 text-xl">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-full text-white"
        >
          Contact
          <Image
            src="/assets/pointer.png"
            alt="pointer"
            width={8}
            height={8}
            className="filter invert"
          />
        </a>

        {/* Hamburger Button */}
        <button
          onClick={handleClick}
          className="md:hidden flex flex-col justify-center items-center"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-5 rounded-sm ${
                          isOpen
                            ? "rotate-45 translate-y-1"
                            : "-translate-y-0.5"
                        }`}
          ></span>
          <span
            className={`bg-white  block transition-all duration-300 ease-out 
                        h-0.5 w-3 rounded-sm my-0.5 ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
          ></span>
          <span
            className={`bg-white  block transition-all duration-300 ease-out 
                        h-0.5 w-5 rounded-sm ${
                          isOpen
                            ? "-rotate-45 -translate-y-1"
                            : "translate-y-0.5"
                        }`}
          ></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
