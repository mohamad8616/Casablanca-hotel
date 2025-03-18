import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/database";

export default async function Page() {
  const cabins = await getCabins();
  console.log(cabins);
  return (
    <main className="h-screen">
      <section className="w-full gap-5 px-4 py-2 sm:grid sm:grid-cols-2 md:grid-cols-3">
        {cabins?.map((cabin, index) => <CabinCard cabin={cabin} key={index} />)}
      </section>
    </main>
  );
}
