import React from "react";

const SectionFour = () => {
  return (
    <div className="relative flex w-full items-center justify-between px-[5rem] gap-x-12 min-h-[80vh]">
      {/* Contact Form */}
      <div
        className="flex flex-col gap-[1rem] rounded-[2rem] p-[2rem] w-[35%]"
        style={{
          background: "linear-gradient(to bottom, #DE3101 0%, #220700 100%)",
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
        <button className="border-2 border-black rounded-[1rem] text-[#DE3101] w-[25%] py-[0.25rem] px-[1rem] shadow-lg cursor-pointer">
          Submit
        </button>
      </div>
      {/* Get in touch */}
      <div className="w-[8%] flex items-center justify-center">
        <h1
          className="text-[5rem] tracking-[1rem] bg-gradient-to-b from-[#1C1B1B] to-[#DE3101] bg-clip-text text-transparent"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Get in touch
        </h1>
      </div>
      {/* About Us */}
      <div className="flex flex-col gap-[1rem] w-[50%]">
        <h1 className="bg-gradient-to-r from-[#DE3101] to-[#fff] bg-clip-text text-transparent text-[4rem] font-bold max-w-[60%]">
          Why We Built Event Horizon Tech
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-[#DE3101] to-[#000] max-w-[60%]" />
        <p className="text-[2rem] text-[#bababa] max-w-[80%]">
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
