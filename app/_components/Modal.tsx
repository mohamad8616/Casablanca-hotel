export default function ModalCalendar({
  setShowCalendar,
  children,
}: {
  setShowCalendar: (showCalendar: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={() => setShowCalendar(false)}
      className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-stone-500/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-2/3 w-11/12 flex-col items-center justify-center space-y-4 rounded-md bg-stone-100 px-1"
      >
        {children}
      </div>
    </div>
  );
}
