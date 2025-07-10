import React from "react";
import ImageSlider from "@/app/components/mainPage/section3/imageSlider";

const SectionThree = () => {
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
      <div className="mb-[-5rem] z-46">
        <span className="text-white text-[2.125rem] font-bold mt-[-5rem]">
          Projects That Define the{" "}
          <span className="text-[#DE3101]">Future</span>
        </span>
      </div>
      <ImageSlider images={images} slideLabels={labels} />
    </div>
  );
};

export default SectionThree;
