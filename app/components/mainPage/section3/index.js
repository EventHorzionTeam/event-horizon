import React from "react";
import ImageSlider from "@/app/components/mainPage/section3/imageSlider";

const SectionThree = () => {
  const images = [
    "/Slider/1.jpg",
    "/Slider/2.jpg",
    "/Slider/3.jpg",
    "/Slider/4.jpg",
    "/Slider/5.jpg",
  ];

  return (
    <div className="flex flex-col items-center py-[5rem] w-full h-full">
      <span className="text-white text-[2rem] font-bold">
        Projects That Define the <span className="text-[#DE3101]">Future</span>
      </span>
      <ImageSlider images={images} />
    </div>
  );
};

export default SectionThree;
