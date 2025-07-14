"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const SectionOne = () => {
  const t = useTranslations("MainPage");
  const [isMdUp, setIsMdUp] = useState(true);

  useEffect(() => {
    // Get the --screens-md value from CSS
    const getMdBreakpoint = () => {
      const root = window.getComputedStyle(document.documentElement);
      const md = root.getPropertyValue("--screens-md").trim();
      // Remove 'px' and parse as integer
      return parseInt(md.replace("px", ""), 10);
    };

    const checkScreen = () => {
      const md = getMdBreakpoint();
      setIsMdUp(window.innerWidth >= md);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMdUp) {
    return (
      <div
        className="w-full mt-[5rem] px-[1rem] xs:h-[70vh] md:h-[100vh] flex flex-col justify-between bg-black xs:bg-[length:190%] md:bg-[length:100%]"
        style={{
          backgroundImage: `url('/MainPage/Hero.jfif')`,
          // backgroundSize: "190%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 10%",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-[#DE3101] text-700 text-[3rem]/[3rem]">
            {t("section1.title")}
          </h1>
          <p className="ml-[3.5rem] text-[1.25rem] max-w-[12rem]">
            {t("section1.subtitle")}
          </p>
          {/* <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" /> */}
        </div>
        <div className="flex flex-col mb-[5.5rem]">
          <div className="w-2/3 h-[1px] bg-[#DE3101] mb-[.75rem]" />
          <p className="text-[#525252]">
            Event Horizon Tech is your gateway to turning bold ideas into
            scalable applications and startups
          </p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-full h-[100vh] flex bg-black"
      style={{
        backgroundImage: `url('/MainPage/Hero.jfif')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between px-[5rem] w-full h-full">
        {/* Left Side */}
        <div className="flex flex-col justify-around">
          <div className="flex flex-col">
            <h1 className="text-[#DE3101] text-700 text-[4rem]/[3rem]">
              {t("section1.title")}
            </h1>
            <p className="ml-[6.5rem] text-[1rem]">{t("section1.subtitle")}</p>
            <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" />
          </div>
          <div className="flex flex-col max-w-[25rem]">
            <p>
              We provide the tools, frameworks, and expertise to help innovators
              cross the threshold from concept to reality.
            </p>
            <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-around">
          <div className="flex flex-col max-w-[13rem]">
            <p>
              Event Horizon Tech is your gateway to turning bold ideas into
              scalable applications and startups
            </p>
            <div className="w-full h-[1px] bg-[#DE3101] mt-[1.5rem]" />
          </div>
          <div className="flex flex-col max-w-[15rem]">
            <button className="border-1 border-[#DE3101] text-white rounded-[1rem] py-[.5rem] cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
