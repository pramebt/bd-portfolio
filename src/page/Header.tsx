"use client";
import AnimatedTitle from "@/components/header/AnimatedTitle";
import HeaderButtons from "@/components/header/HeaderButton";
import ProfileImage from "@/components/header/ProfileImage";
import SocialIcons from "@/components/header/SocialIcons";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-11/12 mx-auto text-center h-screen flex flex-col items-center justify-center gap-4"
    >
      <ProfileImage />
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-white"
      >
        Hi! I&apos;m Bandit Kaewnoi
      </motion.h3>
      <AnimatedTitle text="Web Developer" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-white max-w-2xl mx-auto"
      >
        Recent Graduate
      </motion.p>
      <HeaderButtons />
      <SocialIcons />
    </motion.div>
  );
};

export default Header;
