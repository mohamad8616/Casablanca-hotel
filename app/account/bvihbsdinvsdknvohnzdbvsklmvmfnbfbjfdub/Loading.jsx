import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="z-10 flex h-screen w-full items-center justify-center">
      <MoonLoader size={60} color="#312b2b4c" loading={true} />
    </div>
  );
}
