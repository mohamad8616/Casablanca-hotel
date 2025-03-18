import { getCabins } from "@/app/_lib/database";
import HotelStatus from "./_components/HotelStatus";
import HomeIntro from "./_components/HomeIntro";
export default async function Home() {
  const cabins = await getCabins();
  console.log(cabins?.[0]);
  return (
    <main className="my-5 flex w-full flex-col items-center justify-center gap-4 text-slate-800">
      <HomeIntro />
      <HotelStatus />
    </main>
  );
}
