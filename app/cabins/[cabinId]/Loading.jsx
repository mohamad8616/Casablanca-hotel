import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ClipLoader size={50} color="#000" loading={true} />
    </div>
  );
}
