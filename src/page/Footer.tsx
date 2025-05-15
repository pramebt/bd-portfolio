"use client";
import Image from "next/image";


const Footer = () => {
  return (
    <div className="mt-20 bg-white w-full">
        <div className="text-center">

        

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src="/assets/mail_icon.png" alt="mail icon" width={10} height={10} className="w-4"/>
          bdforwk@gmail.com
        </div>
        </div>

        <div className="text-center">
          <p>© 2025 Bandit Kaewnoi. All rights reserved </p>
        </div>
    </div>
  )
}
export default Footer