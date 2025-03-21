export default function LanguageSelect() {
  return (
    <div className="flex text-center text-xs md:text-start">
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
