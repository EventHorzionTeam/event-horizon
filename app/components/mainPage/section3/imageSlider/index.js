"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const IconChevronLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const IconChevronRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function ImageSlider({ images, slideLabels }) {
  const total = images.length;
  const extendedImages = [images[total - 1], ...images, images[0]];
  const [realIndex, setRealIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef(null);

  const CARD_WIDTH = 500;
  const GAP = 20;

  const goNext = () => {
    setTransitioning(true);
    setRealIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    setTransitioning(true);
    setRealIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setTransitioning(false);
      if (realIndex === extendedImages.length - 1) setRealIndex(1);
      if (realIndex === 0) setRealIndex(extendedImages.length - 2);
    };

    const el = trackRef.current;
    if (el) el.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      el && el.removeEventListener("transitionend", handleTransitionEnd);
  }, [realIndex, extendedImages.length]);

  const visibleIndex = (realIndex - 1 + total) % total;

  const fullLabelRing = slideLabels.map((label) => `${label} •`).join(" ");

  return (
    <div className="relative w-full h-[800px] flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="pointer-events-none absolute top-[-5rem] left-1/2 -translate-x-1/2 w-[90%] h-[250px] bg-black rounded-b-[50%] z-45" />
      <div className="pointer-events-none absolute bottom-[-5rem] left-1/2 -translate-x-1/2 w-[90%] h-[250px] bg-black rounded-t-[50%] z-45" />

      <div className="absolute bottom-[-25%] z-46 w-[500px] h-[500px] rotate-60">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
            />
          </defs>
          <g
            className="transition-transform duration-700 ease-in-out"
            style={{
              transform: `rotate(${visibleIndex * -72}deg)`,
              transformOrigin: "center",
            }}
          >
            <text
              fill="white"
              fontSize="18"
              fontWeight="bold"
              letterSpacing="2px"
            >
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
                lengthAdjust="spacingAndGlyphs"
                textLength="625"
              >
                {slideLabels.map((label) => `${label} •`).join(" ")}
              </textPath>
            </text>
          </g>
        </svg>
      </div>

      <div className="relative w-full max-w-[1440px] overflow-hidden">
        <div
          ref={trackRef}
          className="flex justify-start items-center  gap-5"
          style={{
            transform: `translateX(calc(50% - ${
              (CARD_WIDTH + GAP) * realIndex + CARD_WIDTH / 2
            }px))`,
            transition: transitioning ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {extendedImages.map((src, i) => {
            const index =
              i === 0 ? total - 1 : i === extendedImages.length - 1 ? 0 : i - 1;

            const isCurrent = index === visibleIndex;
            const isPrev = (index + 1) % total === visibleIndex;
            const isNext = (index - 1 + total) % total === visibleIndex;

            return (
              <div
                key={i}
                className={`relative flex-shrink-0 w-[500px] h-[700px] overflow-hidden rounded-xl transition-all duration-500 ${
                  isCurrent
                    ? "scale-100 z-30"
                    : isPrev || isNext
                    ? "scale-90 z-20"
                    : "scale-75 z-10 opacity-30"
                }`}
              >
                <Image
                  src={src}
                  alt={`slide-${i}`}
                  width={500}
                  height={700}
                  className="w-full h-full object-center rounded-xl"
                />
                {!isCurrent && (isPrev || isNext) && (
                  <div className="absolute inset-0 bg-black/70 z-20" />
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full hover:bg-black/80"
        >
          <IconChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full hover:bg-black/80"
        >
          <IconChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
