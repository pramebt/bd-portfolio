"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="  bg-black text-gray-300 py-6 md:px-20 px-5  ">
       <Image
        src="/assets/icons/logobd.svg"
        alt="logo"
        width={100}
        height={100}
        className="w-20 mx-auto mb-5"
      />
      <div className='bg-white w-full h-[1px] px-10'></div>
      <div className="w-full mt-5  flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright */}
        <p className="text-white text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} BD. All rights reserved.
        </p>
        
        {/* Contact info */}
        <div className="flex flex-col   space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <a href="tel:+66994594970" className="text-white flex flex-row gap-3 hover:text-white">
            <Image 
              src="/assets/icons/phone-icon.svg" 
              alt="phone"
              width={16}
              height={16}
              className='w-4'
            />
            +66 99 459 4970
          </a>
          <a href="mailto:bdforwk@gmail.com" className="text-white flex flex-row gap-3 hover:text-white">
            <Image 
              src="/assets/icons/email-icon.svg" 
              alt="email"
              width={16}
              height={16}
              className='w-4'
            />
            bdforwk@gmail.com
          </a>
        </div>
        {/* Social media links */}
        <div className="flex space-x-4 mt-4 md:mt-0 bg-gray-900/40 px-4 py-4 rounded-3xl">
          
          <a href="https://www.facebook.com/bdforwork" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/assets/icons/facebook-ft.svg" 
              alt="Facebook"
              width={16}
              height={16}
              className='w-7'
            />
          </a>
          <a href="https://www.instagram.com/bdforwork/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/assets/icons/instagram-ft.svg" 
              alt="Instagram"
              width={16}
              height={16}
              className='w-7'
            />
          </a>
          <a href="https://www.linkedin.com/company/bdforwork/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/assets/icons/github-ft.svg" 
              alt="LinkedIn"
              width={16}
              height={16}
              className='w-7'
            />
          </a>
          </div>
      </div>
    </footer>
  );
};
export default Footer;
