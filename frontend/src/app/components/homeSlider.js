"use client";
import Image from "next/image";
import slider1 from "../assets/slider-image/slider-1.webp";
import slider2 from "../assets/slider-image/slider-2.webp";
import { useState } from "react";

export default function HomeSlider() {
  const sliderImage = [slider1,slider2]
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const checkFirst = currentIndex === 0;
    const newIndex = checkFirst ? sliderImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const checkLast = currentIndex === sliderImage.length - 1;
    const newIndex = checkLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className="flex px-20 py-8">
      <div className="relative group"> 
        <Image
          src={sliderImage[currentIndex]}
          className="rounded-3xl"
        />
        <button className="bg-muted/50 rounded-full py-3 px-1 absolute left-2 top-1/2 -translate-y-1/2 hidden group-hover:block" onClick={prevSlide}>
          <svg className="text-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
        </button>
        <button className="bg-muted/50 rounded-full py-3 px-1 absolute right-2 top-1/2 -translate-y-1/2 hidden group-hover:block" onClick={nextSlide}>
          <svg className="text-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
        </button>
      </div>
    </div>
  );
}