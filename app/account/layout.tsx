import { ReactNode, Suspense } from "react";
import SideNav from "../_components/SideNav";
import Loading from "@/app/account/Loading";
import ReservationProvider from "../_context/ReservationContext";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full flex-col md:h-[550px] md:flex-row lg:h-[750px]">
      <SideNav />

      <Suspense fallback={<Loading />}>
        <ReservationProvider>{children}</ReservationProvider>
      </Suspense>
    </main>
  );
}
