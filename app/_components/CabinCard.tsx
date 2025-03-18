import Image from "next/image";

export default function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, description, image } =
    cabin;
  return (
    <div className="h-90 w-80 border-1 border-stone-800">
      <div className="relative h-4/5 w-full flex-1">
        {image ? (
          <Image
            src={image}
            alt={`Cabin ${name}`}
            className="z-10 flex-1 border-r border-blue-800 object-cover"
            fill
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-200">
            <p>No Image Available</p>
          </div>
        )}
      </div>

      <p>{name}</p>
    </div>
  );
}
