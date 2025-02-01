"use client";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useState, useCallback, useMemo } from "react";

const SlideContent = ({ slide }) => (
  <div className="px-4 text-center">
    {slide === 0 ? (
      <h1 className="text-2xl md:text-5xl font-bold text-white">
        <span className="block mb-2">Uncompromising Excellence</span>
        <span className="block">in Real Estate Advisory.</span>
      </h1>
    ) : (
      <h1 className="text-2xl md:text-5xl font-bold text-white">
        <span className="block mb-2">
          Exceptional Properties, Expert Guidance
        </span>
        <span className="block">Your Path to Homeownership.</span>
      </h1>
    )}
  </div>
);

export default function Slider() {
  const imgData = useMemo(() => ["/S1.webp", "/S2.webp"], []);
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleplus = useCallback(() => {
    setLoading(true);
    setSlide((slide) => (slide === imgData.length - 1 ? 0 : slide + 1));
  }, [imgData.length]);

  const handleminus = useCallback(() => {
    setLoading(true);
    setSlide((slide) => (slide === 0 ? imgData.length - 1 : slide - 1));
  }, [imgData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleplus();
    }, 2000);

    return () => clearInterval(interval);
  }, [handleplus, slide]);

  return (
    <div className="w-full h-[80vh] relative overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          width={1280}
          height={720}
          loading="eager"
          priority={true}
          className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
          alt={`Slide ${slide}`}
          src={imgData[slide]}
          onLoad={() => setLoading(false)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div
          className={`max-w-screen-lg mx-auto transition-transform duration-500 ease-in-out ${
            loading ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <SlideContent slide={slide} />
        </div>
        <div className="absolute text-xl md:text-2xl left-2 translate-y-1/2 ">
          <button
            onClick={handleminus}
            className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] p-1.5 md:p-2 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-110"
            aria-label="Previous slide"
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className=" absolute  right-2 translate-y-1/2 text-xl md:text-2xl">
          <button
            onClick={handleplus}
            className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] p-1.5 md:p-2 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-110"
            aria-label="Next slide"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
