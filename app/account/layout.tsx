import { ReactNode, Suspense } from "react";
import SideNav from "../_components/SideNav";
import Loading from "@/app/account/Loading";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full flex-col md:h-[450px] md:flex-row lg:h-[550px]">
      <SideNav />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
}
