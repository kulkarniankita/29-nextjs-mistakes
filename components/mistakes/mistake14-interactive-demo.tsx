"use client";

import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

// This is a PERFECT example of when to use client components!
// Highly interactive UI with lots of state changes don't belong on the server.

export function InteractiveDemo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#6366f1");
  const [isAnimating, setIsAnimating] = useState(false);
  const [clicks, setClicks] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  // Animation effect
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCount((c) => c + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  // Clean up click animations
  useEffect(() => {
    if (clicks.length > 0) {
      const timeout = setTimeout(() => {
        setClicks((prev) => prev.slice(1));
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [clicks]);

  const handleBoxClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClicks((prev) => [...prev, { x, y, id: Date.now() }]);
    setCount((c) => c + 1);
  };

  return (
    <div className="space-y-6">
      {/* Interactive color box */}
      <div
        onClick={handleBoxClick}
        className="relative w-full h-48 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
        style={{
          backgroundColor: color,
          boxShadow: `0 20px 40px ${color}40`,
        }}
      >
        {/* Click ripples */}
        {clicks.map((click) => (
          <span
            key={click.id}
            className="absolute w-8 h-8 rounded-full bg-white/50 animate-ping"
            style={{
              left: click.x - 16,
              top: click.y - 16,
            }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white drop-shadow-lg">
            {count}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => setCount(0)}
          className="px-4 py-2 hover:bg-zinc-700 rounded-lg transition-colors"
        >
          Reset
        </Button>

        <Button
          onClick={() => setIsAnimating(!isAnimating)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isAnimating
              ? "bg-red-500 hover:bg-red-600"
              : "bg-emerald-500 hover:bg-emerald-600"
          }`}
        >
          {isAnimating ? "Stop Auto" : "Start Auto"}
        </Button>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-12 h-10 rounded cursor-pointer"
        />
      </div>
    </div>
  );
}

// This shows what happens when you TRY to avoid client components
// You end up with a worse UX and more complexity!
export function ServerComponentAttempt() {
  return (
    <Card>
      <div className="text-center space-y-4">
        <div className="text-4xl font-bold">0</div>
        <p className="text-sm">
          ❌ Without client state, this can&apos;t update interactively
        </p>
        <p className="text-sm">
          You&apos;d need form submissions + server actions for every click,
          causing page reloads and poor UX
        </p>
      </div>
    </Card>
  );
}
