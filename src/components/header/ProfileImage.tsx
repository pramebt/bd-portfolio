"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const ProfileImage = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="pt-20"
  >
    <Image src="/assets/icons/logobd.svg" alt="logo" width={100} height={100} className="w-30" />
  </motion.div>
);

export default ProfileImage;