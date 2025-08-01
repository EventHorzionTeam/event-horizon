import React from "react";
import ImageSlider from "@/app/components/mainPage/section3/imageSlider";
import { useTranslations } from "next-intl";

const SectionThree = () => {
  const t = useTranslations('MainPage')
  const images = [
    "/Slider/1.jfif",
    "/Slider/2.jfif",
    "/Slider/3.jfif",
    "/Slider/4.jfif",
    "/Slider/5.jfif",
  ];

  const labels = ["Cassie", "Electra", "Nionis", "Syrene", "Persik"];

  return (
    <div className="flex flex-col items-center py-[5rem] w-full h-full">
      <div className="relative mb-[-5rem] z-[100]">
        <span className="text-white xs:text-[1.25rem] md:text-[2.125rem] lg:text-[2.125rem] font-bold mt-[-5rem]">
          {t('section3.title')}{" "}
          <span className="text-[#DE3101]">{t('section3.subtitle')}</span>
        </span>
      </div>
      <ImageSlider images={images} slideLabels={labels} />
    </div>
  );
};

export default SectionThree;
