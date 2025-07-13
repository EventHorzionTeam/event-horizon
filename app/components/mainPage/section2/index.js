"use client";
import React, { useState, useEffect } from "react";
// Icons
import {
  IconSettings,
  IconBolt,
  IconPencil,
  IconAdjustments,
} from "@tabler/icons-react";

// Components
import RoadMap from "@/app/components/svg/roadMap.js";

const SectionTwo = () => {
  const [isMdUp, setIsMdUp] = useState(true);

  useEffect(() => {
    const getMdBreakpoint = () => {
      const root = window.getComputedStyle(document.documentElement);
      const mdValue = root.getPropertyValue("--screens-md").trim();
      return parseInt(mdValue.replace("px", ""), 10);
    };
    const checkScreen = () => {
      const mdBreakpoint = getMdBreakpoint();
      setIsMdUp(window.innerWidth >= mdBreakpoint);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMdUp) {
    // Original code for md and lg
    return (
      <div className=" flex flex-col items-center py-[5rem] w-full h-full">
        <span className="text-white tracking-[1rem] text-[2rem] font-bold">
          The Future We’re Building{" "}
          <span className="text-[#DE3101]">TOGETHER</span>
        </span>
        <div className="w-full h-full pt-[5rem]">
          <RoadMap />
        </div>
      </div>
    );
  }

  // xs/sm: 2x2 grid roadmap matching the image
  return (
    <div className="flex flex-col items-center py-8 w-full h-[70vh] bg-black">
      <h2 className="text-white text-center font-bold tracking-widest text-[0.825rem] mb-[5rem]">
        The Future We’re Building{" "}
        <span className="text-[#DE3101]">TOGETHER</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full max-w-xs px-2">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
            <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
              IDEATION
            </span>
            <IconBolt className="text-[#DE3101] text-base mb-1" />
            <p className="text-white text-[0.688rem] leading-snug">
              We brainstorm and research to shape your bold ideas into
              actionable concepts.
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
            <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
              DEVELOPMENT
            </span>
            <IconSettings className="text-[#DE3101] text-base mb-1" />{" "}
            <p className="text-white text-[0.688rem] leading-snug">
              We code, integrate, and bring your product to life using scalable,
              reliable technologies.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
            <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
              WIREFRAMES IGN
            </span>
            <IconPencil className="text-[#DE3101] text-base mb-1" />{" "}
            <p className="text-white text-[0.688rem] leading-snug">
              Turning ideas into interactive wireframes and high-fidelity
              designs using Figma and modern UI/UX principles.
            </p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
            <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
              TESTING/QA
            </span>
            <IconAdjustments className="text-[#DE3101] text-base mb-1" />{" "}
            <p className="text-white text-[0.688rem] leading-snug">
              Every line of code is tested rigorously to ensure quality,
              security, and smooth user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
