import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";





const Footer = () => {

  const t = useTranslations("Footer")

  
  return (
    <footer className="w-full bg-black px-6 py-6 border-t-2 border-b-2 border-[#DE3101]">
      {/* Large Screen Footer (lg and above) */}
      <div className="lg:flex hidden justify-between items-start py-6">
        {/* Column 1: Brand */}
        <div className="flex flex-col min-w-[18%]">
          <h1 className="text-[#DE3101] font-bold text-lg mb-2">
            {t('title')}
          </h1>
          <p className="text-[#9F9696] text-sm leading-tight">
            {t('descr')}
            <br />
            {t('sub')}
          </p>
        </div>
        {/* Column 2: Explore */}
        <div className="flex flex-col min-w-[14%]">
          <h1 className="text-[#DE3101] font-semibold text-lg mb-2">Explore</h1>
          <Link href="/" className="text-[#9F9696] text-sm mb-1">
            {t('navigation.home')}
          </Link>
          <Link href="/roadmap" className="text-[#9F9696] text-sm mb-1">
            {t('navigation.roadmap')}
          </Link>
          <Link href="/project" className="text-[#9F9696] text-sm mb-1">
            {t('navigation.project')}
          </Link>
          <Link href="/contact" className="text-[#9F9696] text-sm">
            {t('navigation.contact')}
          </Link>
        </div>
        {/* Column 3: Vision */}
        <div className="flex flex-col min-w-[28%] max-w-[28%]">
          <h1 className="text-[#DE3101] font-semibold text-lg mb-2">{t('vision')}</h1>
          <p className="text-[#9F9696] text-sm leading-tight">
            {t('about')}
            <br />
            {t('about2')}
            <br />
            {t('about3')}
          </p>
        </div>
        {/* Column 4: Stay updated */}
        <div className="flex flex-col min-w-[24%] max-w-[24%]">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-[#DE3101] font-semibold text-lg">{t('update')}</h1>
            <div className="flex-1 h-px bg-gradient-to-r from-[#DE3101] to-[#000] max-w-[60%]" />
          </div>
          <input
            type="email"
            placeholder="Your email"
            className="bg-black border border-[#DE3101] text-[#9F9696] px-3 py-1 rounded-sm mb-2 outline-none focus:ring-2 focus:ring-[#DE3101] max-w-[80%]"
          />
          <div className="flex items-center gap-4">
            <button className="bg-black border border-[#DE3101] text-[#DE3101] px-4 py-1 rounded-sm text-sm hover:bg-[#DE3101] hover:text-black transition-colors">
              {t('subscribe')}
            </button>
            <Link
              href="/contact"
              className="text-[#DE3101] font-semibold text-base hover:underline"
            >
              {t('touch')}
            </Link>
          </div>
        </div>
      </div>
  
      {/* Small Screen Footer (xs) */}
      <div className="lg:hidden flex flex-col items-center gap-8 py-8 text-center">
        {/* Brand Section */}
        <div>
          <h1 className="text-[#DE3101] font-bold text-2xl mb-1">
            Event Horizon Tech
          </h1>
          <p className="text-[#9F9696] text-sm leading-snug max-w-[300px] mx-auto">
            {t('descr')}
          </p>
        </div>
  
        {/* Navigation Links */}
        <h1 className="text-[#DE3101] font-semibold text-lg mb-2">Explore</h1>
        <div className="flex flex-wrap justify-center gap-5 text-sm">
          <Link href="/" className="text-[#9F9696] hover:text-[#DE3101]">
            {t('navigation.home')}
          </Link>
          <Link href="/roadmap" className="text-[#9F9696] hover:text-[#DE3101]">
            {t('navigation.roadmap')}
          </Link>
          <Link href="/project" className="text-[#9F9696] hover:text-[#DE3101]">
            {t('navigation.project')}
          </Link>
          <Link href="/contact" className="text-[#9F9696] hover:text-[#DE3101]">
            {t('navigation.contact')}
          </Link>
        </div>
  
        {/* Vision Section */}
        <div>
          <h2 className="text-[#DE3101] font-semibold text-base mb-2">Vision</h2>
          <p className="text-[#9F9696] text-xs leading-relaxed max-w-[300px] mx-auto">
            {t('abouts')}
          </p>
        </div>
  
        {/* Stay Updated Section */}
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-[#DE3101] font-semibold text-base">{t('update')}</h2>
          <input
            type="email"
            placeholder="Your email"
            className="bg-black border border-[#DE3101] text-[#9F9696] px-4 py-2 rounded-sm outline-none focus:ring-2 focus:ring-[#DE3101] w-[85%] max-w-[280px]"
          />
          <button className="w-[85%] max-w-[280px] bg-black border border-[#DE3101] text-[#DE3101] py-2 rounded-sm text-sm hover:bg-[#DE3101] hover:text-black transition-colors">
            {t('subscribe')}
          </button>
          <Link
            href="/contact"
            className="text-[#DE3101] font-semibold text-sm hover:underline mt-1"
          >
            {t('touch')}
          </Link>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
