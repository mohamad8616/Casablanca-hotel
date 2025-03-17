import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-stone-800 px-4 py-6 text-sm text-stone-200">
      <div className="w-full grid-cols-2 justify-between gap-4 space-y-10 sm:grid sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-xl p-2 text-center shadow-xl shadow-stone-300/6 sm:h-50">
          <h1 className="mb-4 text-lg text-amber-500">آدرس</h1>
          <p className="text-sm tracking-wide text-stone-400">
            استان مزندران، شهر نمک آبرود
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border-stone-300 p-2 text-center sm:h-50 sm:border-1">
          <h1 className="text-2xl font-semibold tracking-widest text-stone-300">
            Casablanca
          </h1>
          <h2 className="text-xl tracking-widest text-stone-400">Luxury</h2>
          <h4 className="text-sm tracking-wide text-stone-400">paradise </h4>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl p-2 text-center shadow-xl shadow-stone-300/6 sm:h-50">
          <h1 className="mb-4 text-lg text-amber-500">تماس با ما</h1>
          <p className="text-sm tracking-wide text-stone-400">09104008616</p>
          <p className="text-sm tracking-wide text-stone-400">0215986255</p>
        </div>
      </div>
      <div className="my-4 space-y-3 text-base">
        <p className="text-center text-amber-500">ما را دنبال کنید </p>
        <div className="flex items-center justify-center gap-8 px-4 py-2 text-2xl">
          <span>
            <CiInstagram />
          </span>
          <span>
            <MdOutlineWhatsapp />
          </span>
          <span>
            <CiLinkedin />
          </span>
        </div>
      </div>
      <div className="w-full border-t-1 border-stone-500 px-4 py-2">
        <p className="text-sm font-light tracking-wide text-stone-400">
          کپی رایت Casablanca 2025 &copy;، کلیه حقوق محفوظ است. توسعه یافته توسط
          Moahamad5616
        </p>
      </div>
    </footer>
  );
}
