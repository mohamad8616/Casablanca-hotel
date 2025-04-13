import Link from "next/link";
import { ScrollVelocity } from "./_components/ScrollVelocity";

export default function NotFound() {
  return (
    <div className="flex h-screen w-dvw flex-col items-center justify-center space-y-10 overflow-hidden">
      <div className="flex h-auto w-80 items-center justify-center overflow-hidden">
        <ScrollVelocity
          texts={["404", "😔صفحه مورد نظر شما یافت نشد"]}
          velocity={100}
          className="custom-scroll-text text-xl font-medium md:text-2xl"
        />
      </div>
      <button>
        <Link
          href="/"
          className="bg-amber-500 px-2 py-1 text-sm md:px-4 md:py-2 md:text-base"
        >
          بازگشت به صفحه اصلی &rarr;
        </Link>
      </button>
    </div>
  );
}
