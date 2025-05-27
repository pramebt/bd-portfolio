"use client";
import React from 'react'

import { motion } from "framer-motion";
import Image from "next/image";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const SocialLinks = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
    variants={fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    custom={2}
    className="relative flex justify-center mb-5 space-x-4 mt-4"
  >
    {[
      { href: "https://www.facebook.com/bdforwork", icon: "facebook-ft.svg", alt: "Facebook" },
      { href: "https://www.instagram.com/bdforwork/", icon: "instagram-ft.svg", alt: "Instagram" },
      { href: "https://www.linkedin.com/company/bdforwork/", icon: "github-ft.svg", alt: "LinkedIn" },
    ].map(({ href, icon, alt }) => (
      <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
        <Image src={`/assets/icons/${icon}`} alt={alt} width={16} height={16} className="w-7" />
      </a>
    ))}
  </motion.div>
  )
}

export default SocialLinks