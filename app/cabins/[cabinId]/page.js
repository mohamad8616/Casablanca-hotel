import ReservationForm from "@/app/_components/ReservationForm";
import { getCabinByID } from "@/app/_lib/database";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { cabinId } = params;
  const cabin = await getCabinByID(cabinId);

  if (!cabin) {
    return <div>Cabin not found.</div>;
  }

  const { name, maxCapacity, regularPrice, discount, image } = cabin?.[0] || {};

  return (
    <main className="my-10 min-h-screen w-full flex-col items-center justify-between space-y-20 text-stone-700 sm:mt-10 md:flex">
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
            <div className="">
              <p className="text-sm text-stone-600 md:text-base">
                نام اتاق: <span className="font-semibold">{name}</span>
              </p>
              <p className="text-sm text-stone-600 md:text-base">
                ظرفیت: <span className="font-semibold">{maxCapacity}</span>
              </p>
            </div>
            <div className="">
              <p className="text-sm text-stone-600 md:text-base">
                تخفیف :{"   "}
                <span className="font-semibold">{discount + "  تومان"}</span>
              </p>
              <p className="text-sm text-stone-600 md:text-base">
                قیمت اتاق:{"   "}
                <span className="font-semibold">
                  {regularPrice + "  تومان"}
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-stone-600 md:text-base">
              این کابین چوبی زیبا، مکانی ایده‌آل برای فرار از شلوغی‌های زندگی
              شهری است. با طراحی گرم و دلنشین، شما را به قلب طبیعت دعوت می‌کند.
              تجربه‌ای بی‌نظیر از آرامش و سکوت در دل جنگل!
            </p>
            <p className="text-sm text-stone-600 md:text-base">
              این کابین مجهز به تمامی امکانات رفاهی مدرن است و در عین حال حس
              نزدیکی به طبیعت را حفظ کرده است. از پنجره‌های بزرگ آن می‌توانید
              مناظر خیره‌کننده جنگل را تماشا کنید و از صدای پرندگان لذت ببرید.
            </p>
            <p className="text-sm text-stone-600 md:text-base">
              شب‌ها می‌توانید زیر آسمان پرستاره بنشینید و از هوای تازه و آرامش
              بی‌پایان لذت ببرید. این کابین فرصتی استثنایی برای تجربه یک زندگی
              ساده و طبیعی در دل طبیعت است.
            </p>
          </div>
          <Link
            href="/reservation"
            aria-label="رزرو اتاق"
            className="bottom-8 mx-auto mt-1 w-5/6 cursor-pointer place-content-start place-items-end rounded bg-amber-600 px-2 py-0.5 pt-[1px] text-center text-sm text-amber-50 md:w-1/6 md:text-base"
          >
            رزرو
          </Link>
        </div>
      </section>
      <section className="h-2/5 w-full grid-cols-2 bg-stone-100 px-7 py-5 md:grid">
        <ReservationForm />
      </section>
    </main>
  );
}
