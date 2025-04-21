"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React from "react";
import pic1 from "@/public/pic1.jpg";
import pic2 from "@/public/pic2.jpg";
import pic3 from "@/public/pic3.jpg";
// import "@/app/globals.css";

interface SliderProps {
  cabinImages?: string[]; // Define the type of cabinImages
}
export default function Slider({ cabinImages = [] }: SliderProps) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );
  if (!cabinImages || cabinImages.length == 0)
    return (
      <>
        <div
          ref={sliderRef}
          className="keen-slider md:96 relative h-64 sm:h-80"
        >
          <div className="keen-slider__slide number-slide1">
            <Image
              src={pic1}
              alt="pic1"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image
              src={pic2}
              alt="pic2"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image
              src={pic3}
              alt="pic3"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </>
    );
  return (
    <div ref={sliderRef} className="keen-slider md:96 relative h-64 sm:h-80">
      {cabinImages.map((imgURL, index) => (
        <div
          key={index}
          className={`keen-slider__slide number-slide${index + 1}`}
        >
          <Image
            src={imgURL}
            alt={`picture ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
