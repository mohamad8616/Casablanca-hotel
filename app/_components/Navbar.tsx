import Link from "next/link";

interface NavbarProps {
  className: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <ul className="">
      <section className={`justify-center gap-6 ${className} z-40`}>
        <li className="hover:text-blue-800">
          <Link href="/">رستوران ها</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/about">درباره مجموعه</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/cabins">اتاق ها</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/cabins">کافه ها</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/cabins">تماس با ما</Link>
        </li>
      </section>
    </ul>
  );
}
