"use client";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const data = [
  {
    title: "Education",
    icon: "/assets/nu-en-logo.png",
    header: "Naresuan University",
    description: "Bachelor Degree of Computer Engineering",
    years: "June 2021 - Match 2025",
  },
  {
    title: "Experience",
    icon: "/assets/forth-logo.png",
    header: "Forth Smart Service Public Co., Ltd.",
    description: "Web Developer (Intern)",
    years: "May 2024 - June 2024",
  },
];
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div id="about" className="w-fulllg:px-[12%] py-10 scroll-mt-20 ">
      <h2
        data-aos="fade-up"
        data-aos-once="false"
        className="text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl"
      >
        About me
      </h2>
      <div className="mt-10 flex justify-center">
        <Image
          data-aos="fade-up"
          data-aos-once="false"
          src="/assets/profile.png"
          alt="profile"
          width={200}
          height={200}
          className="md:hidden rounded-full object-cover md:w-50 w-30"
        />
      </div>
      <p
        data-aos="fade-up"
        data-aos-once="false"
        className=" text-white text-base md:text-lg lg:text-xl 
        max-w-2xl mx-auto md:text-center text-center px-4 mt-6 text-wrap"
      >
        I&apos;m a recent graduate passionate about front-end development, eager
        to learn through hands-on projects and collaboration. I aim to develop
        my skills and contribute to impactful outcomes, preparing for a
        successful career as a Web Developer.
      </p>
      <div className="mt-10 flex justify-center">
        <Image
          data-aos="fade-up"
          data-aos-once="false"
          src={"/assets/profile.png"}
          alt="profile"
          width={200}
          height={200}
          className="hidden md:block rounded-full object-cover md:w-50 w-30"
        />
      </div>

      {/* show section */}
      <div className="bg-[#424242]/50 w-full mx-h-auto mt-10 py-7 px-3 md:px-10 md:py-10 rounded-2xl">
        <div className="grid md:grid-cols-2 gid-cols-1 gap-6 px-4">
          {data.map((item, index) => (
        <div
          key={index}
          className="bg-black rounded-lg shadow-md p-6 flex flex-col space-y-4"
        >
          {/* หัวข้อหลัก */}
          <h1 className="text-lg md:text-xl font-semibold text-white">
            {item.title}
          </h1>

          {/* รูป + เนื้อหา */}
          <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 ">
            {/* รูปโปรไฟล์ */}
            <div className="flex-shrink-0 bg-white rounded-full p-2">
              <Image
                src={item.icon}
                alt="logo"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>

            {/* ข้อความ */}
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
      ))}
        </div>
      </div>
    </div>
  );
};

export default About;
