"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React from "react";
import pic1 from "@/public/pic1.jpg";
import pic2 from "@/public/pic2.jpg";
import pic3 from "@/public/pic3.jpg";
// import "@/app/globals.css";

export default function Slider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
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

  return (
    <>
      <div ref={sliderRef} className="keen-slider md:96 relative h-64 sm:h-80">
        <div className="keen-slider__slide number-slide1">
          <Image src={pic1} alt="pic1" fill className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={pic2} alt="pic2" fill className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={pic3} alt="pic3" fill className="object-cover" />
        </div>
        {/* <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div> */}
      </div>
    </>
  );
}
