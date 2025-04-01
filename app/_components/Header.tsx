import { auth } from "../_lib/auth";

// import { SiHiltonhotelsandresorts } from "react-icons/si";
import LargeNavbar from "./LargeNavbar";
import SmallHeader from "./SmallHeader";

export default async function Header() {
  const session = (await auth()) || {};

  return (
    <>
      <SmallHeader session={session} />

      <LargeNavbar session={session} />
    </>
  );
}
