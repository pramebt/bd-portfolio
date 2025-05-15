"use client";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import CardDetail from "@/components/CardDetail";
import CardTechstack from "@/components/CardTechstack";

const About = () => {
  useEffect(() => {
     AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  return (
    <div id="about" className="w-full lg:px-[12%] py-10 scroll-mt-20 ">
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
      <div className="bg-black/70 w-full mx-h-auto mt-10 py-7 px-3 md:px-10 md:py-10 rounded-2xl">
        <CardDetail />
        <CardTechstack/>
      </div>
    </div>
  );
};

export default About;
