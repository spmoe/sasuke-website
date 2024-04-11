import { useTheme } from "next-themes";
import { FC } from "react";
import { ReactSVG } from "react-svg";

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="rounded-full flex gap-1 bg-[#F4F4F4] dark:bg-[#111315] p-1">
      <button
        id="theme-toggle"
        aria-label="theme-toggle"
        className="rounded-full shadow-toggle dark:shadow-none bg-primary-800 dark:bg-transparent dark:text-[#6F767E]"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="w-6 h-6 m-1 flex items-center gap-2">
          {theme === "dark" ? (
            <ReactSVG src="/icons/moon.svg" />
          ) : (
            <ReactSVG src="/icons/sun.svg" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
