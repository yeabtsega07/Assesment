"use client";

import React from "react";
import Image from "next/image";

interface NavbarProps {
  logoSrc: string;
  profilePicSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, profilePicSrc }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <Image
        className="h-12"
        src={logoSrc || "/placeholder.jpg"}
        alt="logo"
        width={230}
        height={27}
      />
      <div className="space-x-4">
        <a href="/" className="text-black font-bold">
          Home
        </a>
        <a href="/hospitals" className="text-black font-bold">
          Hospitals
        </a>
        <a href="/doctors" className="text-black font-bold">
          Doctors
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          className="h-12 w-12 rounded-full"
          src={profilePicSrc}
          alt="profile"
          width={48}
          height={48}
        />
        <button className="px-4 py-2 border border-black text-black rounded-full bg-white">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
