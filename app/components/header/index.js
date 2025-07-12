import React from "react";
import Image from "next/image";
import Logo from "@/public/logo/EHTLogo.svg";
import { Link } from "@/i18n/navigation";

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
      <div className="flex justify-center gap-x-[2rem] items-center">
        <button className="px-4 py-2 bg-gradient-to-r from-[#DE3101] to-[#FF6B35] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#DE3101]/20 hover:border-[#DE3101]/40 cursor-pointer">
          EN | TR
        </button>
        <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group">
          <svg
            className="w-5 h-5 text-white group-hover:text-yellow-300 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Link href="/" className="border-b-2 border-[#DE3101]">
          Home
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Roadmap</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
