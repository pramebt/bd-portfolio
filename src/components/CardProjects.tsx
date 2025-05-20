"use client";
import React,{useEffect} from "react";

import AOS from "aos";
import Image from "next/image";

import "aos/dist/aos.css";
import { TbHandClick } from "react-icons/tb";

const CardProjects = ({ item }: any) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-once={false}
        className="border border-white bg-black/80 backdrop-blur rounded-4xl px-10 py-10 cursor-pointer hover:scale-105 transition-all duration-500"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
          className="border border-white w-full h-[250px] object-cover rounded-2xl"
        />
        <div className="bg-white flex flex-row mt-5 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-200 ease-in-out">
          <div className="flex flex-col">
            <h2 className="font-semibold md:text-base">{item.title}</h2>
            <h2 className="text-sm md:text-base">{item.subtitle}</h2>
          </div>
          <div className="flex items-center justify-center ml-auto">
            <TbHandClick width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
