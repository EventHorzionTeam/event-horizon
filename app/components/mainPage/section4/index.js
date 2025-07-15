import React from "react";
import { useTranslations } from "next-intl";

const SectionFour = () => {
  const t = useTranslations('MainPage')
  return (
    <div className="relative flex xs:flex-col-reverse xs:pb-[4rem] xs:gap-[4rem] lg:gap-[1rem] w-full items-center justify-between lg:px-[5rem] xs:px-[1rem] gap-x-12 min-h-[80vh]">
      {/* Contact Form */}
      <div
        className="flex flex-col rounded-[2rem] p-[2rem] xs:gap-[1rem] xs:w-full lg:w-[35%]"
        style={{
          background: "linear-gradient(to bottom, #DE3101 0%, #220700 100%)",
        }}
      >
        <span className="text-white lg:text-[2.125rem] xs:text-[1.25rem] font-bold">
          {t('section4.title')} <span className="text-black ">{t('section4.sub')}</span>
        </span>

        {/* Show inputs only on lg screens and above */}
        <div className="flex flex-col gap-[1rem] ">
          <input
            type="text"
            placeholder={t('section4.form.name')}
            className="bg-black xs:py-[0.75rem] lg:py-[1.5rem] xs:px-[0.5rem] lg:px-[1rem] rounded-[1rem]"
          />
          <input
            type="text"
            placeholder={t('section4.form.surname')}
            className="bg-black xs:py-[0.75rem] lg:py-[1.5rem] xs:px-[0.5rem] lg:px-[1rem] rounded-[1rem]"
          />
          <input
            type="email"
            placeholder={t('section4.form.email')}
            className="bg-black xs:py-[0.75rem] lg:py-[1.5rem] xs:px-[0.5rem] lg:px-[1rem] rounded-[1rem]"
          />
          <textarea
            type="text"
            placeholder={t('section4.form.message')}
            className="bg-black xs:py-[0.75rem] lg:py-[1.5rem] xs:px-[0.5rem] lg:px-[1rem] rounded-[1rem] min-h-[10rem]"
          />
          <button className="border-2 border-black rounded-[1rem] text-[#DE3101] xs:w-[70%] lg:w-[25%] py-[0.25rem] px-[1rem] shadow-lg cursor-pointer">
            {t('section4.form.submit')}
          </button>
        </div>

        {/* Show div on screens smaller than lg */}
        {/* <div className="lg:hidden flex">
          <div className="flex flex-col gap-[1rem]">
            <input
              type="text"
              placeholder="First Name"
              className="bg-black py-[.75rem] px-[0.5rem] rounded-[1rem]"
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
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Message"
              className="bg-black py-[1.5rem] px-[1rem] rounded-[1rem] min-h-[10rem]"
            />
          </div>
        </div> */}
      </div>
      {/* Get in touch */}
      <div className="w-[8%] lg:flex items-center justify-center xs:hidden ">
        <h1
          className="text-[5rem] tracking-[1rem] bg-gradient-to-b from-[#1C1B1B] to-[#DE3101] bg-clip-text text-transparent"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          {t('section4.touch')}
        </h1>
      </div>
      {/* About Us */}
      <div className="flex flex-col gap-[1rem] lg:w-[50%] xs:w-full">
        <h1 className="bg-gradient-to-r from-[#DE3101] to-[#fff] bg-clip-text text-transparent xs:text-[1.25rem] lg:text-[4rem] font-bold lg:max-w-[60%] xs:max-w-[80%]">
          {t('section4.eht')}
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-[#DE3101] to-[#000] max-w-[60%]" />
        <p className="xs:text-[0.813rem] lg:text-[2rem] text-[#bababa] lg:max-w-[80%] xs:max-w-[100%]">
          {t('section4.descr')}
        </p>
      </div>
    </div>
  );
};

export default SectionFour;
