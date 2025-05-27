"use client";
import { motion } from "framer-motion";
import React from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactHeader = ({ isInView }: { isInView: boolean }) => {
  return (
    <>
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={0}
      className="relative text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl"
    >
      Contact
    </motion.h2>
    <motion.p
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={1}
      className="relative text-center font-bold text-white max-w-2xl mx-auto mt-5 mb-8 text-base md:text-lg"
    >
      You can contact me here.
    </motion.p>
  </>
  )
}

export default ContactHeader