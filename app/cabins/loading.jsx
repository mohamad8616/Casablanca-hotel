import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <MoonLoader size={50} color="#000" loading={true} />
    </div>
  );
}
