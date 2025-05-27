"use client";
import Image from "next/image";
import React from 'react'

const SocialIcons = () => (
  <div className="flex gap-5 mt-10">
    {[
      { href: "https://www.instagram.com/prame.bt/", icon: "instagram-icon.svg", alt: "Instagram" },
      { href: "https://www.facebook.com/bandit.prame/", icon: "facebook-icon.svg", alt: "Facebook" },
      { href: "https://github.com/pramebt", icon: "github-icon.svg", alt: "GitHub" },
    ].map(({ href, icon, alt }) => (
      <a key={alt} href={href} target="_blank">
        <Image
          src={`/assets/icons/${icon}`}
          alt={alt}
          width={100}
          height={100}
          className="w-25 opacity-70 hover:scale-110 transition"
        />
      </a>
    ))}
  </div>
);

export default SocialIcons;