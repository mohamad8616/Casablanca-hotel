import Link from "next/link";
import ShinyText from "./ShinyText";
export default function TextLogo() {
  return (
    <Link href="/" className="flex cursor-pointer flex-col">
      <ShinyText
        speed={2}
        text="HOTEL"
        className="sm:base text-xs"
        disabled={false}
      />
      <ShinyText
        speed={3}
        text="CASABLANCA"
        className="text-base sm:text-2xl"
        disabled={false}
      />
      <ShinyText
        speed={2}
        text="LUXURY"
        className="text-sm sm:text-base"
        disabled={false}
      />
    </Link>
  );
}
