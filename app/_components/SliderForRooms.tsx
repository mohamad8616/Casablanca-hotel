"use client";
import { Suspense, useState } from "react";
import Slider from "./Slider";
import Loading from "../Loading";
import { textExpander } from "../_lib/utility";
import Link from "next/link";

const sliderText = `      این کابین‌های لوکس و چوبی با طراحی مدرن و امکانات کامل، تجربه‌ای
          بی‌نظیر از اقامت را برای شما فراهم می‌کنند. هر کابین دارای چشم‌اندازی
          زیبا به طبیعت اطراف است که آرامش و لذت را به شما هدیه می‌دهد. امکاناتی
          نظیر اینترنت پرسرعت، سیستم گرمایش و سرمایش، و آشپزخانه مجهز در این
          کابین‌ها فراهم شده است. طراحی داخلی این کابین‌ها با استفاده از چوب
          طبیعی و رنگ‌های گرم، حس صمیمیت و راحتی را القا می‌کند. موقعیت مکانی
          این کابین‌ها به گونه‌ای است که دسترسی آسان به جاذبه‌های گردشگری منطقه
          را فراهم می‌کند. اقامت در این کابین‌ها تجربه‌ای فراموش‌نشدنی از طبیعت
          و آرامش را برای شما به ارمغان می‌آورد.`;

export default function SliderForRooms({
  cabinImages,
}: {
  cabinImages: string[];
}) {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Slider cabinImages={cabinImages} />
      </Suspense>
      <div className="w-full text-sm/9 tracking-wide md:w-11/12 lg:w-10/12 dark:text-stone-100">
        <p>{showText ? sliderText : textExpander(sliderText, 100)}</p>
        <button
          onClick={() => setShowText(!showText)}
          className="mb-8 block cursor-pointer font-semibold text-stone-500 underline"
        >
          {showText ? "بستن" : "بیشتر بخوانید ..."}
        </button>
        <Link
          href="/cabins"
          className="bg-stone-800 px-2 py-1 text-start text-sm tracking-wide text-stone-50 duration-200 ease-in-out hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-800 dark:hover:bg-stone-300"
        >
          برای مشاهده کامل کابین ها اینجا کلیک کنید
        </Link>
      </div>
    </>
  );
}
