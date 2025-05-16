"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const Header = () => {
  const text = "Web Developer";
  const len = text.length;
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-11/12  text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="pt-20"
      >
        <Image 
        src="/assets/icons/logobd.svg" 
        alt="logo" 
        width={100} 
        height={100}
        className="w-30"
         />
      </motion.div>

      {/* Texts */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-end gap-2 text-xl md:text-2xl text-white"
      >
        Hi! I&apos;m Bandit Kaewnoi
      </motion.h3>

      <motion.h1
      className="text-white text-3xl sm:text-6xl lg:text-[66px] inline-flex items-center"
    >
      {/* mask container */}
      <motion.span
        className="overflow-hidden whitespace-nowrap inline-block"
        initial={{ width: 0 }}
        animate={{ width: ["0ch", `${len}ch`, `${len}ch`, "0ch"] }}
        transition={{
          times:    [0, 0.2, 0.8, 1],
          duration: 4,
          repeat:   Infinity,
        }}
      >
        {/* your per‑letter spans */}
        {Array.from(text).map((text, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y:       [0, 0, 0, 0],
            }}
            transition={{
              times:    [0, 0.2, 0.8, 1],
              duration: 4,
              delay:    i * 0.1,
              repeat:   Infinity,
            }}
          >
            {text}
          </motion.span>
        ))}
        {/* and include the cursor inside the same mask */}
        
      </motion.span>
    </motion.h1>
    
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-white max-w-2xl mx-auto"
      >
        Recent Graduate
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-5"
      >
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-[#000] text-white flex items-center gap-2"
        >
          contact me
        </a>
        <a
          href="/assets/BD-RESUME.pdf"
          download="Resume_Bandit.pdf"
          className="bg-white px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 
           hover:shadow-[-1px_-1px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
         hover:text-[#112D4E] duration-300"
        >
          my resume{" "}
          <Image
            src="/assets/dowload.png"
            alt="download"
            width={100}
            height={100}
            className="w-4"
          />
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="flex gap-5 mt-10"
      >
        <a href="https://www.instagram.com/prame.bt/">
          <Image
            src="/assets/icons/instagram-icon.svg"
            alt="Instagram"
            width={100} height={100}
            className="w-25 transition-transform duration-300 hover:scale-110 hover:opacity-100 opacity-70"
          />
        </a>
        <a href="https://www.facebook.com/bandit.prame/">
          <Image
            src="/assets/icons/facebook-icon.svg"
            alt="Facebook"
            width={100} height={100}
            className="w-25 transition-transform duration-300 hover:scale-110 hover:opacity-100 opacity-70"
          />
        </a>
        <a href="https://github.com/pramebt">
          <Image
            src="/assets/icons/github-icon.svg"
            alt="GitHub"
            width={100} height={100}
            className="w-25 transition-transform duration-300 hover:scale-110 hover:opacity-100 opacity-70"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
