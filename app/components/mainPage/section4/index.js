import React from "react";

const SectionFour = () => {
  return (
    <div className="flex w-full justify-around px-[5rem]">
      {/* Contact Form */}
      <div
        className="flex flex-col gap-[1rem] rounded-[1.5rem] p-[2rem] w-[30%]"
        style={{
          background: "linear-gradient(to bottom, #DE3101 0%, #781A01 100%)",
        }}
      >
        <span className="text-white text-[2.125rem] font-bold">
          Contact <span className="text-black ">Us</span>
        </span>
        <input
          type="text"
          placeholder="First Name"
          className="bg-black py-[1.5rem] px-[1rem] rounded-[1rem]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-black py-[1.5rem] px-[1rem] rounded-[1rem]"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-black py-[1.5rem] px-[1rem] rounded-[1rem]"
        />
        <textarea
          type="text"
          placeholder="Message"
          className="bg-black py-[1.5rem] px-[1rem] rounded-[1rem] min-h-[10rem]"
        />
        <button className="border-2 border-black rounded-[0.5rem] text-black w-[50%] py-[0.25rem] px-[1rem] shadow-lg">
          Submit
        </button>
      </div>
      {/* Get in touch */}
      <div className="flex items-center justify-center rotate-90">
        <h1 className="text-[5rem] tracking-[1rem] bg-gradient-to-r from-[#1C1B1B] to-[#DE3101] bg-clip-text text-transparent">
          Get in touch
        </h1>
      </div>
      {/* About Us */}
      <div className="flex flex-col gap-[1rem] w-[30%]">
        <h1>Why We Built Event Horizon Tech</h1>
        <div />
        <p>
          We’re a team of engineers, dreamers, and startup veterans who believe
          in breaking barriers. Event Horizon Tech was born from a shared
          passion for empowering creators. Whether you’re looking to collaborate
          or just say hello, we’d love to hear from you. 
        </p>
      </div>
    </div>
  );
};

export default SectionFour;
