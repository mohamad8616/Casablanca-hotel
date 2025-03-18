import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-5 text-center">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="mx-auto rounded-full"
        />
        <p className="text-xs tracking-wide text-stone-300 md:text-xl">
          هتل بزرگ کازابلانکا
        </p>
      </Link>
    </div>
  );
}
