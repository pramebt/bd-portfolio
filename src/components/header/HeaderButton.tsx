"use client";
import Image from "next/image";
import React from 'react'

const HeaderButtons = () => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
    <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white hover:scale-110 transition">
      contact me
    </a>
    <a href="/assets/BD-RESUME.pdf" download="Resume_Bandit.pdf" className="bg-white px-8 py-3 rounded-full border flex items-center gap-2 hover:scale-110 transition">
      my resume
      <Image src="/assets/dowload.png" alt="download" width={100} height={100} className="w-4" />
    </a>
  </div>
);

export default HeaderButtons;