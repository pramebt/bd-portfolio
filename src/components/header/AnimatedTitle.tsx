"use client";
import { motion } from "framer-motion";
import React from 'react'

const AnimatedTitle = ({ text }: { text: string }) => {
  const len = text.length;
  return (
    <motion.h1 className="text-white text-3xl sm:text-6xl lg:text-[66px] inline-flex items-center">
      <motion.span
        className="overflow-hidden whitespace-nowrap inline-block"
        initial={{ width: 0 }}
        animate={{ width: [`0ch`, `${len}ch`, `${len}ch`, `0ch`] }}
        transition={{ times: [0, 0.2, 0.8, 1], duration: 4, repeat: Infinity }}
      >
        {Array.from(text).map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ times: [0, 0.2, 0.8, 1], duration: 4, delay: i * 0.1, repeat: Infinity }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedTitle;