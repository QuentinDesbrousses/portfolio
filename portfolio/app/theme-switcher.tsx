"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsLightbulb, BsLightbulbOffFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [isMounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button
      className="absolute bottom-12 right-12 text-cta p-4 border-cta border-2 rounded-full transition ease-in-out duration-100 hover:scale-110 hover:bg-cta hover:text-dark dark:hover:text-light active:scale-90"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme == "dark" ? (
        <BsLightbulb size={24} />
      ) : (
        <BsLightbulbOffFill size={24} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
