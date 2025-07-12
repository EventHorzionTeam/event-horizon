import React from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

const MainPage = () => {
  return (
    <div className="pt-[2.5rem]">
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
    </div>
  );
};

export default MainPage;
