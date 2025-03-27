import { getCabins } from "@/app/_lib/database";
import HomeIntro from "./_components/HomeIntro";
import HotelStatus from "./_components/HotelStatus";
import Slider from "./_components/Slider";

export default async function Home() {
  const cabins = await getCabins();
  const cabinImages = cabins?.map((cabin) => cabin.image) || [];

  return (
    <main className="my-5 flex w-full flex-col items-center justify-center gap-4 text-slate-800">
      <HomeIntro />
      <HotelStatus />

      <section
        id="aboutCabins"
        className="h-min-200 mx-4 my-20 w-10/12 grid-cols-2 items-center justify-between gap-7 space-y-10 sm:mx-2 sm:my-40 sm:w-3/4 md:mx-0 md:grid md:space-y-0"
      >
        <Slider cabinImages={cabinImages} />

        <div className="mx-5 w-11/12 text-sm/9 tracking-wide">
          <p>
            این کابین‌های لوکس و چوبی با طراحی مدرن و امکانات کامل، تجربه‌ای
            بی‌نظیر از اقامت را برای شما فراهم می‌کنند.
          </p>
          <p>
            هر کابین دارای چشم‌اندازی زیبا به طبیعت اطراف است که آرامش و لذت را
            به شما هدیه می‌دهد.
          </p>
          <p>
            امکاناتی نظیر اینترنت پرسرعت، سیستم گرمایش و سرمایش، و آشپزخانه مجهز
            در این کابین‌ها فراهم شده است.
          </p>
          <p>
            طراحی داخلی این کابین‌ها با استفاده از چوب طبیعی و رنگ‌های گرم، حس
            صمیمیت و راحتی را القا می‌کند.
          </p>
          <p>
            موقعیت مکانی این کابین‌ها به گونه‌ای است که دسترسی آسان به جاذبه‌های
            گردشگری منطقه را فراهم می‌کند.
          </p>
          <p>
            اقامت در این کابین‌ها تجربه‌ای فراموش‌نشدنی از طبیعت و آرامش را برای
            شما به ارمغان می‌آورد.
          </p>
        </div>
      </section>
    </main>
  );
}
