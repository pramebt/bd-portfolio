"use client";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const data = [
  {
    animate:"fade-right",
    title: "Education",
    icon: "/assets/nu-en-logo.png",
    header: "Naresuan University",
    description: "Bachelor Degree of Computer Engineering",
    years: "June 2021 - Match 2025",
  },
  {
    animate:"fade-left",
    title: "Experience",
    icon: "/assets/forth-logo.png",
    header: "Forth Smart Service Public Co., Ltd.",
    description: "Web Developer (Intern)",
    years: "May 2024 - June 2024",
  },
];
const CardDetail = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
    
  return (
    <div className="grid md:grid-cols-2 gid-cols-1 gap-6 px-4">
        {data.map((item, index) => (
        <div
          key={index}
          data-aos={item.animate}
          data-aos-once="false"
          className="border border-white bg-black rounded-lg shadow-md p-6 flex flex-col space-y-4"
        >
          <h1 className="text-lg md:text-xl font-semibold text-white">
            {item.title}
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 ">
            <div className="flex-shrink-0 bg-white rounded-full p-2">
              <Image
                src={item.icon}
                alt="logo"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <h2 className="text-sm md:text-lg font-semibold text-white mb-2">
                {item.header}
              </h2>
              <p className="text-gray-400 mb-2 break-words whitespace-normal">
                {item.description}
              </p>
              <p className="text-gray-500">
                {item.years}
              </p>
            </div>
          </div>
        </div>
      ))}</div>
  )
}

export default CardDetail