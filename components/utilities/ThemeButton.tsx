"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { use, useEffect, useState } from "react";

type Props = {};

const ThemeButton = ({}: Props) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        aria-label="Toggle Dark Mode"
        className="flex items-center justify-center rounded-lg bg-primary-300 p-2 shadow-btn transition-colors"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <SunIcon className="h-5 w-5 text-white" />
        ) : (
          <MoonIcon className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
