"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo/EHTLogo.svg";
import { Link } from "@/i18n/navigation";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full bg-black/50 backdrop-blur-sm fixed py-[.5rem] px-[1.5rem] flex justify-between items-center z-50">
      <Image
        src={Logo}
        alt="EHT Logo"
        width={80}
        height={80}
        className="text-white"
      />
      {/* Hamburger icon for xs only */}
      <button
        className="xs:hidden flex flex-col justify-center items-center w-10 h-10 text-[#DE3101] focus:outline-none"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-[#DE3101] mb-1 rounded"></span>
        <span className="block w-6 h-0.5 bg-[#DE3101] mb-1 rounded"></span>
        <span className="block w-6 h-0.5 bg-[#DE3101] rounded"></span>
      </button>
      {/* Horizontal menu for sm and up */}
      <div className="hidden xs:flex justify-center gap-x-[2rem] items-center">
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
        <Link
          href="/"
          className="border-b-2 border-[#DE3101] text-white hover:text-[#DE3101] transition-colors duration-200"
        >
          Home
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Roadmap</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Sidebar overlay for xs */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div className="w-2/3 max-w-xs bg-black/90 h-full flex flex-col pt-8 px-6 shadow-2xl relative animate-slide-in-left">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-[#DE3101] text-2xl focus:outline-none"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 mt-8">
              <Link
                href="/"
                className="text-[#DE3101] text-lg font-semibold border-b-2 border-[#DE3101] pb-1"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-white text-lg hover:text-[#DE3101] transition-colors"
              >
                Road map
              </Link>
              <Link
                href="/"
                className="text-white text-lg hover:text-[#DE3101] transition-colors"
              >
                Project
              </Link>
              <Link
                href="/"
                className="text-white text-lg hover:text-[#DE3101] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          {/* Overlay background */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Header;

// Add this to your globals.css for the sidebar animation:
// @keyframes slide-in-left { from { transform: translateX(-100%); } to { transform: translateX(0); } }
// .animate-slide-in-left { animation: slide-in-left 0.3s ease; }
