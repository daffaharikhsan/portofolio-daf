"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none"
    >
      {theme === "light" && (
        <Image
          src="/assets/Toggle/Light.svg"
          alt="Light Mode"
          width={24}
          height={24}
        />
      )}
      {theme === "dark" && (
        <Image
          src="/assets/Toggle/Dark.svg"
          alt="Dark Mode"
          width={24}
          height={24}
        />
      )}
      {theme === "system" && (
        <Image
          src="/assets/Toggle/System.svg"
          alt="System Mode"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};
