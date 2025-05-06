"use client";
import Image from "next/image";
import pic1 from "@/public/pic1.jpg";
import pic2 from "@/public/pic2.jpg";
import pic3 from "@/public/pic3.jpg";
import logo from "@/public/logo.png";
import Link from "next/link";
import { textExpander } from "../_lib/utility";
import { useState } from "react";

const introText = `
          هتل کازابلانکا که با افتخار در سواحل دریای شمال ایستاده است، بهشتی
          آرام و گوهری بی نظیر است که تداعی گر یک فضای سنتی در زمان قدیم است. و
          بهترین امکانات رفاهی و مدرن امروزی در عین سادگی برای شما به ارمغان می
          آورد. این مجموعه چندیدن کابین چوبی لوکس در مکانی شگفت انگیز را برای
          شما عزیزان فراهم کرده است. همچنین دارای پرسنلی با تجربه و مهارت برای
          رفاه هر چه بیشتر شما عزیزان است. زیباترین و فراموش نشدنی ترین ویو های
          جهان را با ما تجربه کنید`;
export default function HomeIntro() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      id="hero-section"
      className="mt-15 flex w-10/12 grid-cols-2 flex-col-reverse md:mt-25 md:grid dark:text-stone-100"
    >
      <div className="h-auto space-y-5 p-1">
        <h1 className="w-full text-center text-3xl font-bold tracking-wide md:text-4xl/15 lg:text-5xl/20">
          هتل<span className="text-yellow-600"> پنج ستاره</span> کازابلانکا
        </h1>
        <h3 className="my-3 text-center text-2xl">مکانی رویایی</h3>
        <p className="text-base/9 font-semibold tracking-wide">
          {!showMore ? textExpander(introText, 100) : introText}
        </p>
        <button
          className="-mt-3 block cursor-pointer text-sm text-stone-500"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "بستن" : "بیشتر بخوانید"}
        </button>
        <Link
          href="/about"
          className="bg-stone-800 px-2 py-1 text-start text-sm tracking-wide text-stone-50 duration-200 ease-in-out hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-800 dark:hover:bg-stone-300"
        >
          با ما بیشتر آشنا شوید ...
        </Link>
      </div>
      <div className="relative grid grid-cols-2 gap-6 py-4 md:h-66 md:grid-cols-2 md:gap-1 lg:h-96">
        <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900/20 to-stone-900/5 p-1 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Image
            alt="Hotel exterior view"
            src={pic1}
            width={600}
            height={400}
            className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 z-20 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-xl font-bold">منظره خیره کننده</h3>
            <p className="text-sm text-stone-200">چشم انداز بی نظیر به دریا</p>
          </div>
        </div>

        <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900/20 to-stone-900/5 p-1 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Image
            alt="Hotel interior view"
            src={pic2}
            width={600}
            height={400}
            className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 z-20 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-xl font-bold">طراحی داخلی لوکس</h3>
            <p className="text-sm text-stone-200">فضایی مدرن و راحت</p>
          </div>
        </div>

        <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900/20 to-stone-900/5 p-1 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative h-full w-full bg-white/95 p-4">
            <Image
              alt="Hotel logo"
              src={logo}
              width={600}
              height={400}
              className="h-full w-full transform object-contain transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </div>
          <div className="absolute bottom-0 left-0 z-20 p-4 text-stone-800 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-xl font-bold">هتل کازابلانکا</h3>
            <p className="text-sm text-stone-600">تجربه بی نظیر اقامت</p>
          </div>
        </div>

        <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900/20 to-stone-900/5 p-1 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Image
            alt="Hotel amenities"
            src={pic3}
            width={600}
            height={400}
            className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-0 z-20 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-xl font-bold">امکانات ویژه</h3>
            <p className="text-sm text-stone-200">خدمات لوکس و منحصر به فرد</p>
          </div>
        </div>
      </div>
    </section>
  );
}
