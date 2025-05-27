"use client";
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import AlertBox from "@/components/contact/AlertBox";
import ContactHeader from "@/components/contact/ContactHeader";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";


const Contact = () => {
  const [result, setResult] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="contact" ref={ref} className="w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-40 mt-50">
      <AlertBox result={result} showAlert={showAlert} />
      <ContactHeader isInView={isInView} />
      <SocialLinks isInView={isInView} />
      <ContactForm setResult={setResult} setShowAlert={setShowAlert} />
    </div>
  );
};

export default Contact;