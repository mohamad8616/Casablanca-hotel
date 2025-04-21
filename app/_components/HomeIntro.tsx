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
        <h1 className="w-full font-bold md:text-4xl/15 lg:text-center lg:text-5xl/20">
          هتل پنج ستاره کازابلانکا
        </h1>
        <h3 className="my-3 text-center text-2xl">مکانی رویایی</h3>
        <p className="text-sm/9 tracking-wide">
          {showMore ? textExpander(introText, 100) : introText}
        </p>
        <button
          className="-mt-3 block cursor-pointer text-sm text-stone-500"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? "بستن" : "بیشتر بخوانید"}
        </button>
        <Link
          href="/about"
          className="bg-stone-800 px-2 py-1 text-start text-sm tracking-wide text-stone-50 duration-200 ease-in-out hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-800 dark:hover:bg-stone-300"
        >
          با ما بیشتر آشنا شوید ...
        </Link>
      </div>
      <div className="grid grid-cols-2 p-4 md:h-66 lg:h-86">
        <div>
          <Image
            alt="hotel photo"
            src={pic1}
            width={300}
            height={150}
            className="W-20"
          />
        </div>
        <div>
          <Image
            alt="hotel photo"
            src={pic2}
            width={300}
            height={190}
            className=""
          />
        </div>
        <div className="mr-auto justify-end text-end">
          <Image
            alt="hotel photo"
            src={logo}
            width={260}
            height={150}
            className=""
          />
        </div>
        <div>
          <Image
            alt="hotel photo"
            src={pic3}
            width={300}
            height={150}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
