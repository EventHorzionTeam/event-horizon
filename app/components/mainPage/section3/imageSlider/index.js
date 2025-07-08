"use client";

import { useState, useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

export default function ImageSlider({ images }) {
  const total = images.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const CARD_WIDTH = 500;
  const GAP = 20;

  return (
    <div className="relative w-full h-[800px] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Bold Elliptical Depth Overlays */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[250px] bg-black rounded-b-[50%]  z-30 ]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[250px] bg-black rounded-t-[50%]  z-30 ]" />

      {/* Slider track */}
      <div className="relative w-full max-w-[1440px] overflow-hidden">
        <div
          ref={trackRef}
          className="flex justify-start items-center transition-transform duration-700 ease-in-out px-10 gap-5"
          style={{
            transform: `translateX(calc(50% - ${
              (CARD_WIDTH + GAP) * activeIndex + CARD_WIDTH / 2
            }px))`,
          }}
        >
          {images.concat(images).map((src, i) => {
            const index = i % total;
            const isCurrent = index === activeIndex;
            const isPrev = (index + 1) % total === activeIndex;
            const isNext = (index - 1 + total) % total === activeIndex;

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
                  className="w-full h-full object-fill rounded-xl"
                />
                {!isCurrent && (isPrev || isNext) && (
                  <div className="absolute inset-0 bg-black/70 z-20" />
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
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
