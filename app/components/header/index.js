import React from "react";
import Image from "next/image";
import Logo from "@/public/logo/EHTLogo.svg";

const Header = () => {
  return (
    <div className="w-full bg-black/50 backdrop-blur-sm fixed py-[.5rem] px-[1.5rem] flex justify-between items-center z-50">
      <Image
        src={Logo}
        alt="EHT Logo"
        width={80}
        height={80}
        className="text-white"
      />
      <div className="flex justify-center gap-x-[2rem]">
        <p className="border-b-2 border-[#DE3101]">Home</p>
        <p>About</p>
        <p>Roadmap</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
