import * as React from "react";
import { useTranslations } from "next-intl";

// Components
import WaveLabelBoxSvg from "./waveLabelBox";

// Icons
import { SettingsIconSVG } from "./icons/settnig";
import { BoltIconSVG } from "./icons/bolt";
import { PencilIconSVG } from "./icons/pencil";
import { AdjustmentsIconSVG } from "./icons/adjustment";

const WaveRoadmap = (props) => {
  const t = useTranslations('MainPage')
  return (
    <>
    <svg
    viewBox="7.5 -10 40 20"
    className="block mx-auto w-full max-w-[2400px] min-h-[650px] max-h-[650px]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(10.5, 0) scale(1.4)">
      <path
        d="M0 0 L0 0 C2 -5 3 -5 5 0 H5 C7 5 8 5 10 0 H10 C12 -5 13 -5 15 0 H15 C17 5 18 5 20 0 H20"
        fill="none"
        stroke="#ff3c00"
        strokeWidth="0.05"
      />

      {/* Dots */}
      <circle cx="2.5" cy="-3.7" r="0.2" fill="#ff3c00" />
      <circle cx="7.5" cy="3.7" r="0.2" fill="#ff3c00" />
      <circle cx="12.5" cy="-3.7" r="0.2" fill="#ff3c00" />
      <circle cx="17.5" cy="3.7" r="0.2" fill="#ff3c00" />

      {/* Boxes + Text */}
      <WaveLabelBoxSvg
        x={-3.8 * 1.7 + 10.5 - 3}
        y={-7}
        title={t('section2.title2')}
        IconComponent={BoltIconSVG}
        description={t('section2.desc1')}
      />
      <WaveLabelBoxSvg
        x={2 * 1.7 + 10.5 - 3}
        y={-7}
        title={t('section2.title3')}
        IconComponent={SettingsIconSVG}
        description={t('section2.desc2')}
      />
      <WaveLabelBoxSvg
        x={-0.9 * 1.7 + 10.5 - 3}
        y={4}
        title={t('section2.title4')}
        IconComponent={PencilIconSVG}
        description={t('section2.desc3')}
      />
      <WaveLabelBoxSvg
        x={5 * 1.7 + 10.5 - 3}
        y={4}
        title={t('section2.title5')}
        IconComponent={AdjustmentsIconSVG}
        description={t('section2.desc4')}
      />
    </g>
  </svg>
    </>
  )
};

export default WaveRoadmap;
