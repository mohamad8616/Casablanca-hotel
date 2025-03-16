import Link from "next/link";

interface NavbarProps {
  className: string;
}

export default function Navbar({ className }: NavbarProps) {
  // if (size === "laptop")
  return (
    <ul className=''>
      <section className={` justify-center gap-6  ${className}`}>
        <li>
          <Link href='/'>رستوران ها</Link>
        </li>
        <li>
          <Link href='/about'>درباره مجموعه</Link>
        </li>
        <li>
          <Link href='/cabins'>اتاق ها</Link>
        </li>
        <li>
          <Link href='/cabins'>کافه ها</Link>
        </li>
        <li>
          <Link href='/cabins'>تماس با ما</Link>
        </li>
      </section>
    </ul>
  );
  // if (size === "mobile")
  // return (
  //   <ul className=' bg-amber-300'>
  //     <section className='flex flex-col justify-center gap-6  w-3/5 bg-stone-300'>
  //       <li>
  //         <Link href='/'>رستوران ها</Link>
  //       </li>
  //       <li>
  //         <Link href='/about'>درباره مجموعه</Link>
  //       </li>
  //       <li>
  //         <Link href='/cabins'>اتاق ها</Link>
  //       </li>
  //       <li>
  //         <Link href='/cabins'>کافه ها</Link>
  //       </li>
  //       <li>
  //         <Link href='/cabins'>تماس با ما</Link>
  //       </li>
  //     </section>
  //   </ul>
  // );
}
