import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="w-full bg-black px-6 py-6 border-t-2 border-b-2 border-[#DE3101]">
    <div className="flex justify-between items-start py-6">
      {/* Column 1: Brand */}
      <div className="flex flex-col min-w-[18%]">
        <h1 className="text-[#DE3101] font-bold text-lg mb-2">
          Event Horizon Tech
        </h1>
        <p className="text-[#9F9696] text-sm leading-tight">
          turning bold ideas scalable realities
          <br />
          beyond the horizon
        </p>
      </div>
      {/* Column 2: Explore */}
      <div className="flex flex-col min-w-[14%]">
        <h1 className="text-[#DE3101] font-semibold text-lg mb-2">Explore</h1>
        <Link href="/" className="text-[#9F9696] text-sm mb-1">
          Home
        </Link>
        <Link href="/roadmap" className="text-[#9F9696] text-sm mb-1">
          road map
        </Link>
        <Link href="/project" className="text-[#9F9696] text-sm mb-1">
          project
        </Link>
        <Link href="/contact" className="text-[#9F9696] text-sm">
          contact
        </Link>
      </div>
      {/* Column 3: Vision */}
      <div className="flex flex-col min-w-[28%] max-w-[28%]">
        <h1 className="text-[#DE3101] font-semibold text-lg mb-2">Vision</h1>
        <p className="text-[#9F9696] text-sm leading-tight">
          "We’re a team of engineers, dreamers, and startup veterans
          <br />
          who believe in breaking boundaries.
          <br />
          If you’re looking to collaborate or just say hello,"
        </p>
      </div>
      {/* Column 4: Stay updated */}
      <div className="flex flex-col min-w-[24%] max-w-[24%]">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-[#DE3101] font-semibold text-lg">Stay updated</h1>
          <div className="flex-1 h-px bg-gradient-to-r from-[#DE3101] to-[#000] max-w-[60%]" />
        </div>
        <input
          type="email"
          placeholder="Your email"
          className="bg-black border border-[#DE3101] text-[#9F9696] px-3 py-1 rounded-sm mb-2 outline-none focus:ring-2 focus:ring-[#DE3101] max-w-[80%]"
        />
        <div className="flex items-center gap-4">
          <button className="bg-black border border-[#DE3101] text-[#DE3101] px-4 py-1 rounded-sm text-sm hover:bg-[#DE3101] hover:text-black transition-colors">
            subscribe
          </button>
          <Link
            href="/contact"
            className="text-[#DE3101] font-semibold text-base hover:underline"
          >
            Get in tuch
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
