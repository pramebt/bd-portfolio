"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactForm = ({ setResult, setShowAlert }: any) => {
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
  <motion.form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto bg-black/50 md:p-10 p-5 rounded-2xl backdrop-blur"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={2}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
        <div className="relative">
          <p className="text-white">Name *</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={`mt-2 p-3 w-full border rounded-md bg-white outline-none cursor-pointer ${
              errors.name ? "border-red-500" : "border-gray-400"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
        </div>

        <div className="relative">
          <p className="text-white">Email *</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={`mt-2 p-3 w-full border rounded-md bg-white outline-none cursor-pointer ${
              errors.email ? "border-red-500" : "border-gray-400"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">Enter a valid email</p>}
        </div>
      </div>

      <div className="relative">
        <p className="text-white">Message *</p>
        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          className={`mt-2 w-full p-4 border rounded-md bg-white outline-none resize-none cursor-pointer ${
            errors.message ? "border-red-500" : "border-gray-400"
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mb-5">Message is required</p>}
      </div>

      <motion.button
        type="submit"
        className="border border-white cursor-pointer mt-5 py-3 px-8 mx-auto flex bg-black/80 text-white rounded-full hover:bg-black duration-500"
      >
        Submit now
      </motion.button>
    </motion.form>
    );
};

export default ContactForm;
