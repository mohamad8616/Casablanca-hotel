import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="contactUs"
      className="relative z-50 w-full bg-gradient-to-b from-stone-900 to-stone-800 px-4 py-12 text-stone-200 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Address Section */}
          <div className="group rounded-2xl bg-stone-800/50 p-6 backdrop-blur-sm transition-all hover:bg-stone-800/70 md:h-full md:text-center">
            <h2 className="mb-4 text-xl font-semibold text-amber-400">آدرس</h2>
            <p className="leading-relaxed text-stone-300">
              استان مزندران، شهر نمک آبرود
            </p>
          </div>

          {/* Brand Section */}
          <div className="group rounded-2xl bg-stone-800/50 p-6 backdrop-blur-sm transition-all hover:bg-stone-800/70 md:h-full md:text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-wider text-stone-100 md:text-4xl">
              Casablanca
            </h1>
            <h2 className="text-xl font-light tracking-widest text-amber-400 md:text-2xl">
              Luxury
            </h2>
            <h4 className="text-sm tracking-wider text-stone-400 md:text-base">
              paradise
            </h4>
          </div>

          {/* Contact Section */}
          <div className="group rounded-2xl bg-stone-800/50 p-6 backdrop-blur-sm transition-all hover:bg-stone-800/70 md:h-full md:text-center">
            <h2 className="mb-4 text-xl font-semibold text-amber-400">
              تماس با ما
            </h2>
            <div className="space-y-2">
              <p className="text-stone-300 md:text-lg">09104008616</p>
              <p className="text-stone-300 md:text-lg">0215986255</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center md:mt-16">
          <h3 className="mb-6 text-lg font-medium text-amber-400 md:text-xl">
            ما را دنبال کنید
          </h3>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <a
              target="_blank"
              href="https://instagram.com"
              className="transform text-2xl text-stone-300 transition-all hover:scale-110 hover:text-amber-400 md:text-3xl"
            >
              <CiInstagram className="text-red-600" />
            </a>
            <a
              target="_blank"
              href="tel:989333449036"
              className="transform text-2xl text-stone-300 transition-all hover:scale-110 hover:text-amber-400 md:text-3xl"
            >
              <MdOutlineWhatsapp className="text-green-500" />
            </a>
            <a
              href="https://linkedin.com/in/mohamad-abdolahi"
              target="_blank"
              className="transform text-2xl text-stone-300 transition-all hover:scale-110 hover:text-amber-400 md:text-3xl"
            >
              <CiLinkedin className="text-blue-400" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-stone-700/50 pt-6 text-center md:mt-16">
          <p className="text-sm text-stone-400 md:text-base">
            کپی رایت Casablanca 2025 &copy;، کلیه حقوق محفوظ است. توسعه یافته
            توسط
            <span className="text-amber-400"> Moahamad8616</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
