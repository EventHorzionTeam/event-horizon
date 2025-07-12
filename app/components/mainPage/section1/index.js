import React from "react";
import { useTranslations } from "next-intl";

const SectionOne = () => {
  const t = useTranslations("HomePage");
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
              {t("title")}
            </h1>
            <p className="ml-[6.5rem] text-[1rem]">{t("about")}</p>
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
          <div className="flex flex-col max-w-[15rem]">
            <p>
              Event Horizon Tech is your gateway to turning bold ideas into
              scalable applications and startups
            </p>
            <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" />
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
