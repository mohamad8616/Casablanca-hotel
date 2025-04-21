import Reservation from "@/app/_components/Reservation";

import { getCabinByID } from "@/app/_lib/database";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";

export async function generateMetadata({ params }) {
  const { cabinId } = params;
  const cabinData = await getCabinByID(cabinId);
  const { name } = cabinData;
  return {
    title: name ? `کابین شماره ${name}` : "کابین یافت نشد",
    description: "رزرو کابین ",
  };
}
const cabinDetails =
  "text-sm text-stone-600 md:text-base dark:text-stone-300 dark:bg-stone-900";

export default async function Page({ params }) {
  const { cabinId } = params;

  try {
    const cabinData = await getCabinByID(cabinId);

    // Handle both array and single object responses
    const cabin = Array.isArray(cabinData) ? cabinData[0] : cabinData;

    if (!cabin) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-xl text-stone-700">کابین مورد نظر یافت نشد.</p>
        </div>
      );
    }

    const { name, maxCapacity, regularPrice, discount, image } = cabin;
    console.log("Cabin details:", {
      name,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });

    return (
      <main className="my-10 min-h-screen w-full flex-col items-center justify-between space-y-20 text-stone-700 sm:mt-10 md:flex dark:bg-stone-900 dark:text-stone-100">
        <Suspense fallback={<Loading />}>
          <section className="relative w-full grid-cols-2 items-start justify-center gap-5 px-2 py-5 tracking-wider shadow-2xl shadow-stone-700/25 md:grid">
            <div className="relative h-48 w-full flex-1 sm:h-72 lg:h-[500px] lg:w-full">
              {image ? (
                <Image
                  alt={`cabin ${name}`}
                  src={image}
                  fill
                  className="rounded-lg object-cover shadow-md shadow-stone-700/15"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-200">
                  <p>No Image Available</p>
                </div>
              )}
            </div>
            <div className="mt-6 flex h-full flex-col items-center justify-between space-y-3 px-4 py-3 text-start md:mt-0">
              <div className="w-full place-items-start">
                <div>
                  <p className={cabinDetails}>
                    نام اتاق: <span className="font-semibold">{name}</span>
                  </p>
                  <p className={cabinDetails}>
                    ظرفیت: <span className="font-semibold">{maxCapacity}</span>
                  </p>
                </div>
                <div className="">
                  <p className={cabinDetails}>
                    تخفیف :{"   "}
                    <span className="font-semibold">
                      {discount + "  تومان"}
                    </span>
                  </p>
                  <p className={cabinDetails}>
                    قیمت اتاق:{"   "}
                    <span className="font-semibold">
                      {regularPrice + "  تومان"}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className={cabinDetails}>
                  این کابین چوبی زیبا، مکانی ایده‌آل برای فرار از شلوغی‌های
                  زندگی شهری است. با طراحی گرم و دلنشین، شما را به قلب طبیعت
                  دعوت می‌کند. تجربه‌ای بی‌نظیر از آرامش و سکوت در دل جنگل!
                </p>
                <p className={cabinDetails}>
                  این کابین مجهز به تمامی امکانات رفاهی مدرن است و در عین حال حس
                  نزدیکی به طبیعت را حفظ کرده است. از پنجره‌های بزرگ آن
                  می‌توانید مناظر خیره‌کننده جنگل را تماشا کنید و از صدای
                  پرندگان لذت ببرید.
                </p>
                <p className={cabinDetails}>
                  شب‌ها می‌توانید زیر آسمان پرستاره بنشینید و از هوای تازه و
                  آرامش بی‌پایان لذت ببرید. این کابین فرصتی استثنایی برای تجربه
                  یک زندگی ساده و طبیعی در دل طبیعت است.
                </p>
              </div>
              <Link
                href="#reservation"
                aria-label="رزرو اتاق"
                className="bottom-8 mt-1 ml-auto w-5/6 cursor-pointer rounded bg-emerald-600 px-2 py-1.5 pt-[1px] text-center text-sm md:w-1/6 md:text-base"
              >
                رزرو&larr;
              </Link>
            </div>
          </section>
        </Suspense>
        <section className="w-full px-2 py-5">
          <Suspense
            fallback={
              <div className="py-4 text-center">
                در حال بارگذاری فرم رزرو...
              </div>
            }
          >
            <Reservation cabin={cabin} />
          </Suspense>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error in page component:", error);
    console.error("Error stack:", error.stack);
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-stone-700">
          خطا در دریافت اطلاعات کابین. لطفا دوباره تلاش کنید.
        </p>
      </div>
    );
  }
}
