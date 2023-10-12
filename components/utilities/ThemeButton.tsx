"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import { useTheme } from "next-themes"
import { use, useEffect, useState } from "react"

type Props = {}

const ThemeButton = ({}: Props) => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute bottom-4 right-4">
      <button
        type="button"
        aria-label="Toggle Dark Mode"
        className="flex items-center justify-center rounded-lg p-2 transition-colors"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <SunIcon className="w-5 h-5 text-white" />
        ) : (
          <MoonIcon className="w-5 h-5 text-black" />
        )}
      </button>
    </div>
  )
}

export default ThemeButton