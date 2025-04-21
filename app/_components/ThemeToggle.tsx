"use client";

import { useTheme } from "@/src/context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-full p-2 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? (
        <SunIcon className="h-8 w-8 text-yellow-500" />
      ) : (
        <MoonIcon className="h-8 w-8 text-gray-100 hover:text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
