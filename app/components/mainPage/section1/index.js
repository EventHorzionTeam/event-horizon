"use client";
import React from "react";
import { useTranslations } from "next-intl";
import useBreakpoint from "../../../hooks/useBreakpoint";

const SectionOne = () => {
  const t = useTranslations("MainPage");
  const bp = useBreakpoint();

  return (
    <>
      {bp === "xs" || bp === "sm" ? (
        <div
          className="w-full mt-[5rem] px-[1rem] h-[70vh] flex flex-col justify-between bg-black bg-[length:190%]"
          style={{
            backgroundImage: `url('https://vulpine-422382743.imgix.net/Hero.jfif')`,
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
          </div>
          <div className="flex flex-col mb-[5.5rem]">
            <div className="w-2/3 h-[1px] bg-[#DE3101] mb-[.75rem]" />
            <p className="text-[#525252]">
              {t('section1.info')}
            </p>
          </div>
        </div>
      ) : bp === "md" ? (
        <div
          className="w-full h-[100vh] flex bg-black bg-[length:100%]"
          style={{
            backgroundImage: `url('https://vulpine-422382743.imgix.net/Hero.jfif')`,
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
                <p className="ml-[6.5rem] text-[1rem]">
                  {t("section1.subtitle")}
                </p>
                <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" />
              </div>
              <div className="flex flex-col max-w-[25rem]">
                <p>
                  {t('section1.about')}
                </p>
                <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-around">
              <div className="flex flex-col max-w-[13rem]">
                <p>
                  {t('section1.info')}
                </p>
                <div className="w-full h-[1px] bg-[#DE3101] mt-[1.5rem]" />
              </div>
              <div className="flex flex-col max-w-[15rem]">
                <button className="border-1 border-[#DE3101] text-white rounded-[1rem] py-[.5rem] cursor-pointer">
                  {t('section1.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-full h-[100vh] flex bg-black bg-cover"
          style={{
            backgroundImage: `url('https://vulpine-422382743.imgix.net/Hero.jfif')`,
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
                <p className="ml-[6.5rem] text-[1rem]">
                  {t("section1.subtitle")}
                </p>
                <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" />
              </div>
              <div className="flex flex-col max-w-[25rem]">
                <p>
                  {t('section1.about')}
                </p>
                <div className="w-2/3 h-[1px] bg-[#DE3101] mt-[1.5rem]" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-around">
              <div className="flex flex-col max-w-[13rem]">
                <p>
                  {t('section1.info')}
                </p>
                <div className="w-full h-[1px] bg-[#DE3101] mt-[1.5rem]" />
              </div>
              <div className="flex flex-col max-w-[15rem]">
                <button className="border-1 border-[#DE3101] text-white rounded-[1rem] py-[.5rem] cursor-pointer">
                  {t('section1.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionOne;
