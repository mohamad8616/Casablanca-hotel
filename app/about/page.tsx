import Slider from "../_components/Slider";

export default function Page() {
  return (
    <main className="flex h-auto flex-col items-center justify-between bg-stone-50">
      <section
        id="intro"
        className="mx-auto mt-16 h-3/5 grid-cols-2 items-center justify-around space-y-5 gap-x-6 bg-stone-100 px-2 py-3 text-sm sm:mt-20 md:grid md:w-3/4"
      >
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-wider md:text-5xl">
            اوج رویاپردازی
          </h1>
          <p className="text-xl">منظره ای بی نظیر</p>
        </div>
        <div className="px-3 text-stone-800">
          <p className="text-sm/8 tracking-wide md:text-lg/8">
            یکی از زیباترین و بی نظیر ترین مناظر جهان را در کنار ما تجربه کنید.
            این مجموعه همواره سعی خود را برای ایجاد یک خاطره شگفت انگیز و رویایی
            برای شما خواهد کرد. همچنین با استفاده از عناصر و امکانات فوق العاده
            شامل بخش بازی و فان، بخش ماساژ و سونا بخار، بخش ورزش های دسته جمعی و
            ...، پارکینگ و فضایی ایمن و سالم، پنچ ستاره را دریافت کند
          </p>
        </div>
      </section>
      <section className="h-min-200 mx-4 my-20 w-11/12 grid-cols-2 items-center justify-between gap-7 space-y-10 sm:mx-2 sm:my-40 sm:w-3/4 md:mx-0 md:grid md:space-y-0">
        <div className="text-center text-stone-800">
          <p className="text-start text-sm/8 tracking-wide md:text-lg/8">
            تجربه‌ای بی‌نظیر از اقامت در کابین‌های لوکس و چوبی در دل طبیعت بکر.
            هتل جنگلی ما با امکاناتی مدرن و فضایی آرامش‌بخش، لحظاتی فراموش‌نشدنی
            را برای شما رقم می‌زند. از مناظر خیره‌کننده جنگل‌های سرسبز لذت ببرید
            و با خدمات ویژه ما، اقامتی رویایی را تجربه کنید. اینجا جایی است که
            طبیعت و لوکس بودن در کنار هم معنا پیدا می‌کنند.
          </p>
        </div>
        <Slider />
      </section>
    </main>
  );
}
