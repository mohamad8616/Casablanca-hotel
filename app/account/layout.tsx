import { ReactNode } from "react";
import SideNav from "../_components/SideNav";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-dvh w-full">
      <SideNav />
      {children}
    </main>
  );
}
