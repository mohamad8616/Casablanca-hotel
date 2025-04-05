import { ReactNode } from "react";
import SideNav from "../_components/SideNav";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full flex-col md:h-[450px] md:flex-row lg:h-[550px]">
      <SideNav />
      {children}
    </main>
  );
}
