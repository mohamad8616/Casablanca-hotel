export default function LanguageSelect() {
  return (
    <div className="text-center text-sm md:text-start">
      {/* <p className="ml-4 hidden sm:block">انتخاب زبان</p> */}
      <button className="cursor-pointer text-xs duration-300 hover:text-blue-400">
        English
      </button>
      <span> / </span>
      <button className="cursor-pointer text-xs duration-300 hover:text-blue-400">
        فارسی
      </button>
    </div>
  );
}
