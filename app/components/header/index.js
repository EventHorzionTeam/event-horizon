import React from "react";
import Image from "next/image";
import Logo from "@/public/logo/EHTLogo.svg";

const Header = () => {
  return (
    <div className="w-full bg-black fixed p-[1.5rem] flex justify-between items-center">
      <Image
        src={Logo}
        alt="EHT Logo"
        width={80}
        height={80}
        className="text-white"
      />
      <div className="flex justify-center gap-x-[2rem]">
        <p>Home</p>
        <p>About</p>
        <p>Roadmap</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
