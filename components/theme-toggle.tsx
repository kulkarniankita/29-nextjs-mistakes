"use client";

import { useTheme } from "@/app/theme-provider";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="size-6 text-yellow-500" />
      ) : (
        <Moon className="size-6 text-gray-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
