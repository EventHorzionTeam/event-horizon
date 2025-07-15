"use client";
import React from "react";
import { useTranslations } from "next-intl";
// Icons
import {
  IconSettings,
  IconBolt,
  IconPencil,
  IconAdjustments,
} from "@tabler/icons-react";

// Components
import RoadMap from "@/app/components/svg/roadMap.js";
import useBreakpoint from "../../../hooks/useBreakpoint";

const SectionTwo = () => {
  const t = useTranslations('MainPage')
  const bp = useBreakpoint();

  return (
    <>
      {bp === "xs" || bp === "sm" ? (
        // xs/sm: 2x2 grid roadmap matching the image
        <div className="flex flex-col items-center py-8 w-full h-[70vh] bg-black">
          <h2 className="text-white text-center font-bold tracking-widest text-[0.825rem] mb-[5rem]">
            {t('section2.title')}{" "}
            <span className="text-[#DE3101]">{t('section2.subtitle')}</span>
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full max-w-xs px-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
                <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
                  {t('section2.title2')}
                </span>
                <IconBolt className="text-[#DE3101] text-base mb-1" />
                <p className="text-white text-[0.688rem] leading-snug">
                  {t('section2.desc1')}
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
                <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
                  {t('section2.title4')}
                </span>
                <IconSettings className="text-[#DE3101] text-base mb-1" />{" "}
                <p className="text-white text-[0.688rem] leading-snug">
                  {t('section2.desc3')}
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
                <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
                  {t('section2.title3')}
                </span>
                <IconPencil className="text-[#DE3101] text-base mb-1" />{" "}
                <p className="text-white text-[0.688rem] leading-snug">
                  {t('section2.desc2')}
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-[#DE3101] rounded-2xl p-3 w-full h-[10rem] flex flex-col items-center justify-between text-center">
                <span className="text-[#DE3101] font-bold text-[0.813rem] mb-1">
                  {t('section2.title5')}
                </span>
                <IconAdjustments className="text-[#DE3101] text-base mb-1" />{" "}
                <p className="text-white text-[0.688rem] leading-snug">
                  {t('section2.desc4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // md, lg, xl: Original code for larger screens
        <div className="flex flex-col items-center py-[5rem] w-full h-full">
          <span className="text-white tracking-[1rem] text-[2rem] font-bold">
            {t('section2.title')}{" "}
            <span className="text-[#DE3101]">{t('section2.subtitle')}</span>
          </span>
          <div className="w-full h-full pt-[5rem]">
            <RoadMap />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionTwo;
