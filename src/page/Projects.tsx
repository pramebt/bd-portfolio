"use client";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardProjects from "@/components/CardProjects";

const Projects = () => {
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div id="projects" className="border border-black relative w-full lg:px-[12%] mt-50 text-center  flex flex-col items-center justify-center gap-4 scroll-mt-40">
      <h2
        data-aos="fade-up"
        data-aos-once={false}
        className="text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl"
      >
        Projects
      </h2>
      <h2
        data-aos="fade-up"
        data-aos-once={false}
        className="text-white text-center  text-base md:text-lg "
      >
        keep my projects here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <CardProjects />
      </div>
    </div>
  );
};

export default Projects;
