import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className='flex gap-5'>
      <Link href='/'>
        <Image src='/logo.png' alt='Logo' width={40} height={40} />
      </Link>
      <span className='text-xs md:text-xl'>هتل بزرگ کازابلانکا</span>
    </div>
  );
}
