import React from "react";

const Footer = () => (
  <footer className="w-full bg-black py-6 px-6">
    <div className="flex justify-around items-center py-6 border-y-[#DE3101] border-2 border-x-0">
      <div className="flex flex-col justify-between">
        <h1 className="text-[#DE3101]">Event Horizon Tech</h1>
        <p className="text-[#9F9696]">
          turning bold ideas scalable realities beyond the horizon
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#DE3101]">Explore</h1>
        <a className="text-[#9F9696]">Home</a>
        <a className="text-[#9F9696]">About</a>
        <a className="text-[#9F9696]">RoadMap</a>
        <a className="text-[#9F9696]">Contact</a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#DE3101]">Social</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#DE3101]">Vision</h1>
        <p className="text-[#9F9696]">
          "We’re a team of engineers, dreamers, and startup veterans who believe
          in breaking ou’re looking to collaborate or just say hello,
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#DE3101]">Explore</h1>
      </div>
    </div>
  </footer>
);

export default Footer;
