"use client"
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const CardTechstack = () => {
    useEffect(() => {
            AOS.init({ duration: 800, once: true });
          }, []);
  return (
    <div className="grid gid-cols-1 gap-6 px-4">
          <div 
          data-aos="fade-up"
          data-aos-once="false"
          className="mt-5 border border-white bg-black rounded-lg shadow-md p-6 flex flex-col space-y-4">
        <h1 className="text-white text-xl font-semibold">Tech Stack</h1>

            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-400">●</span>
                <div>
                  <span className="text-white font-medium">Front-end:</span>
                  <span className="text-gray-300">
                    {" "}
                    JavaScript, TypeScript, React, React Native, Next.js,
                    Tailwind CSS, HTML, CSS
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="mt-1 text-green-400">●</span>
                <div>
                  <span className="text-white font-medium">Back-end:</span>
                  <span className="text-gray-300">
                    {" "}
                    Node.js, Express, MySQL, Prisma
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="mt-1 text-blue-400">●</span>
                <div>
                  <span className="text-white font-medium">Deploy:</span>
                  <span className="text-gray-300"> Vercel, Render</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="mt-1 text-purple-400">●</span>
                <div>
                  <span className="text-white font-medium">Tools & Other:</span>
                  <span className="text-gray-300">
                    {" "}
                    Git, GitHub, Postman, Figma
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default CardTechstack