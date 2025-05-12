"use client";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const data = [
  {
    title: "test",
    discription: "test test",
  },
  {
    title: "test",
    discription: "test test",
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
        <img
          data-aos="fade-up"
          data-aos-once="false"
          src="/assets/profile.png"
          alt="profile"
          className="rounded-full object-cover md:w-50 w-30"
        />
      </div>

      {/* show section */}
      <div className="bg-[#424242] w-full mx-h-auto mt-10 px-10 py-10">
        <div className="grid md:grid-cols-2 gid-cols-1 gap-6 px-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              {/* หัวข้อ */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              {/* รายละเอียด */}
              <p className="text-gray-600 flex-grow">{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
