"use client";

import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence} from "framer-motion";
import Image from "next/image";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);
  const [result, setResult] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const newErrors = {
      name: name === "",
      email: !/\S+@\S+\.\S+/.test(email),
      message: message === "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).includes(true)) {
      setResult("❌ Please fix the highlighted fields.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    setResult("Sending....");
    formData.append("access_key", "20720aa8-5d0e-4355-b66c-a1b5076e21d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully!");
      form.reset();
      setErrors({ name: false, email: false, message: false });
    } else {
      setResult(`❌ ${data.message}`);
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div id="contact" className="w-full px-6 md:px-12 lg:px-[12%] py-10 mt-50 scroll-mt-40 ">
      {/* Alert Box */}
      <AnimatePresence>
        {showAlert && result && (
          <div className="fixed bottom-6 left-6 bg-zinc-900 text-white border border-zinc-700 rounded-xl px-6 py-4 shadow-lg z-50 max-w-sm w-[90%] sm:w-full">
            <p
              className={`${
                result.includes("✅") ? "text-green-400" : "text-red-400"
              } font-medium`}
            >
              {result}
            </p>
          </div>
        )}
      </AnimatePresence>

      <h2
        data-aos="fade-up"
        data-aos-once="false"
        className="text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl"
      >
        Contact
      </h2>
      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <div className="relative">
            <p>Name *</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`mt-2 p-3 w-full border rounded-md bg-white outline-none cursor-pointer ${
                errors.name ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          <div className="relative">
            <p>Email *</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`mt-2 p-3 w-full border rounded-md bg-white outline-none cursor-pointer ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Enter a valid email</p>
            )}
          </div>
        </div>

        <div className="relative">
          <p>Message *</p>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            className={`mt-2 w-full p-4 border rounded-md bg-white outline-none resize-none cursor-pointer ${
              errors.message ? "border-red-500" : "border-gray-400"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mb-5">Message is required</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-5 py-3 px-8 mx-auto flex bg-black/80 text-white rounded-full hover:bg-black duration-500"
        >
          Submit now
        </button>
      </form>
    </div>
  );
};

export default Contact;
