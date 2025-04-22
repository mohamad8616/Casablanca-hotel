import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/database";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "کابین‌ها | هتل جنگلی",
  description: "مشاهده و رزرو انواع کابین‌های هتل جنگلی",
};

async function CabinList() {
  const cabins = await getCabins();
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-10">
        {cabins?.map((cabin, index) => (
          <div
            key={index}
            className="h-[420px] transform transition-all duration-300 hover:scale-[1.02]"
          >
            <CabinCard cabin={cabin} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mt-20 mb-10 flex min-h-screen w-full flex-col items-center justify-start">
      <div className="w-full bg-gradient-to-b from-amber-50 to-white py-8 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            کابین‌های
            <span className="text-green-500"> جنگلی </span>
            هتل
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            مجموعه متنوعی از کابین‌های لوکس و راحت برای اقامت شما در طبیعت
          </p>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <CabinList />
      </Suspense>
    </main>
  );
}
