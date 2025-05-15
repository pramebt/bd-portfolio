"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black border border-t-white px-20 py-10">
      <div className="w-max flex items-center gap-2 mx-auto text-white">
        <Image
          src="/assets/mail_icon.png"
          alt="mail icon"
          width={10}
          height={10}
          className="w-4"
        />
        bdforwk@gmail.com
      </div>
        <div className="h-[1px] bg-white mt-5"></div>
      <div className="text-center text-white mt-5">
        <p>© 2025 Bandit Kaewnoi. All rights reserved </p>
      </div>
    </div>
  );
};
export default Footer;
