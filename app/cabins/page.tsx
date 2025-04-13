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
    <section className="mx-auto w-11/12 items-center justify-center gap-5 px-1 py-2 sm:grid sm:grid-cols-2 sm:px-4 md:w-12/12 md:gap-x-6 md:px-5 lg:w-11/12 lg:grid-cols-2 lg:items-center lg:justify-between">
      {cabins?.map((cabin, index) => <CabinCard cabin={cabin} key={index} />)}
    </section>
  );
}

export default function Page() {
  return (
    <main className="mt-20 mb-10 flex h-auto w-full flex-col items-center justify-center">
      <Suspense fallback={<Loading />}>
        <CabinList />
      </Suspense>
    </main>
  );
}
