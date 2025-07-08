import React from "react";
import RoadMap from "@/app/components/svg/roadMap.js";

const SectionTwo = () => {
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
};

export default SectionTwo;
