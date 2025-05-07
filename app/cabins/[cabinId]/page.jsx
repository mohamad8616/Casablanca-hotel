import Reservation from "@/app/_components/reservation/Reservation";
import { getCabinByID } from "@/app/_lib/database";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";
import {
  IoBedOutline,
  IoPeopleOutline,
  IoPricetagOutline,
} from "react-icons/io5";

export async function generateMetadata({ params }) {
  const { cabinId } = params;
  const cabinData = await getCabinByID(cabinId);
  const { name } = cabinData;
  return {
    title: name ? `کابین ${name} | هتل جنگلی` : "کابین یافت نشد",
    description: `رزرو کابین ${name} در هتل جنگلی`,
  };
}

export default async function Page({ params }) {
  const { cabinId } = params;

  try {
    const cabinData = await getCabinByID(cabinId);

    // Handle both array and single object responses
    const cabin = Array.isArray(cabinData) ? cabinData[0] : cabinData;

    if (!cabin) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-xl text-stone-700 dark:text-stone-300">
            کابین مورد نظر یافت نشد.
          </p>
        </div>
      );
    }

    const { name, maxCapacity, regularPrice, discount, image, description } =
      cabin;
    const discountedPrice = regularPrice - discount;

    return (
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense fallback={<Loading />}>
          {/* Hero section with image */}
          <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
            <div className="relative h-64 w-full sm:h-80 md:h-96 lg:h-[500px]">
              {image ? (
                <Image
                  alt={`کابین ${name}`}
                  src={image}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-700">
                  <IoBedOutline className="h-16 w-16 text-slate-400" />
                </div>
              )}

              {/* Price tag overlay */}
              <div className="absolute right-4 bottom-4 rounded-full bg-amber-500 px-4 py-2 text-lg font-bold text-white shadow-lg">
                {discount > 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm line-through opacity-70">
                      {regularPrice.toLocaleString()}
                    </span>
                    <span>{discountedPrice.toLocaleString()} تومان</span>
                  </div>
                ) : (
                  <span>{regularPrice.toLocaleString()} تومان</span>
                )}
              </div>
            </div>
          </div>

          {/* Cabin details section */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {/* Main content */}
            <div className="md:col-span-2">
              <h1 className="mb-4 text-3xl font-bold text-slate-800 dark:text-white">
                {name}
              </h1>

              {/* Features */}
              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-700">
                  <IoPeopleOutline className="h-5 w-5 text-amber-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    ظرفیت: {maxCapacity} نفر
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-700">
                    <IoPricetagOutline className="h-5 w-5 text-amber-500" />
                    <span className="text-slate-700 dark:text-slate-300">
                      تخفیف: {discount.toLocaleString()} تومان
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                  توضیحات کابین
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {description ||
                    "این کابین چوبی زیبا، مکانی ایده‌آل برای فرار از شلوغی‌های زندگی شهری است. با طراحی گرم و دلنشین، شما را به قلب طبیعت دعوت می‌کند. تجربه‌ای بی‌نظیر از آرامش و سکوت در دل جنگل!"}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  این کابین مجهز به تمامی امکانات رفاهی مدرن است و در عین حال حس
                  نزدیکی به طبیعت را حفظ کرده است. از پنجره‌های بزرگ آن
                  می‌توانید مناظر خیره‌کننده جنگل را تماشا کنید و از صدای
                  پرندگان لذت ببرید.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  شب‌ها می‌توانید زیر آسمان پرستاره بنشینید و از هوای تازه و
                  آرامش بی‌پایان لذت ببرید. این کابین فرصتی استثنایی برای تجربه
                  یک زندگی ساده و طبیعی در دل طبیعت است.
                </p>
              </div>
            </div>

            {/* Reservation sidebar */}
          </div>
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4 text-center text-slate-600 dark:text-slate-300">
              در حال بارگذاری فرم رزرو...
            </div>
          }
        >
          <Reservation cabin={cabin} />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error("Error in page component:", error);
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-stone-700 dark:text-stone-300">
          خطا در دریافت اطلاعات کابین. لطفا دوباره تلاش کنید.
        </p>
      </div>
    );
  }
}
