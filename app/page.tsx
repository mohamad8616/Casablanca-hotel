import { getCabins } from "@/app/_lib/database";
import HomeIntro from "./_components/HomeIntro";
import HotelStatus from "./_components/HotelStatus";
import { Suspense } from "react";
import Loading from "./Loading";
import SliderForRooms from "./_components/UI/SliderForRooms";
export default async function Home() {
  const cabins = await getCabins();
  const cabinImages = cabins?.map((cabin) => cabin.image) || [];

  return (
    <main className="my-5 flex w-full flex-col items-center justify-center gap-4 text-slate-800">
      <HomeIntro />
      <HotelStatus />

      <section
        id="aboutCabins"
        className="h-min-200 mx-4 my-20 w-10/12 grid-cols-2 items-center justify-between gap-7 space-y-10 sm:mx-2 sm:my-40 sm:w-3/4 md:mx-0 md:grid md:w-11/12 md:space-y-0 lg:w-10/12"
      >
        <Suspense fallback={<Loading />}>
          <SliderForRooms cabinImages={cabinImages} />
        </Suspense>
      </section>
    </main>
  );
}
