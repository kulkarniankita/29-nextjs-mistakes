import { ThemeToggle } from "@/components/theme-toggle";

export default function Mistake9Page() {
  return (
    <div>
      <h1>Using Context providers with App Router</h1>
      <div className="flex gap-4 my-12 flex-col items-center justify-center">
        <p>Toggle theme</p>
        <ThemeToggle />
      </div>
    </div>
  );
}
