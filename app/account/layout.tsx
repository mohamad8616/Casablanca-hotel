import SideNav from "../_components/SideNav";

export default function layout({ children }) {
  return (
    <main className="flex h-dvh w-full">
      <SideNav />
      {children}
    </main>
  );
}
