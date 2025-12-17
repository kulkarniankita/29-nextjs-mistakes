"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const mistakes = [
  { id: 1, href: "/mistake1" },
  { id: 2, href: "/mistake2" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 data-loading:animate-pulse h-[calc(100vh-20rem)] overflow-y-auto">
      {new Array(29).fill(0).map((_, idx) => {
        const isActive = pathname === `/mistake${idx + 1}`;
        return (
          <Link
            key={idx + 1}
            href={`/mistake${idx + 1}`}
            className={cn(
              "justify-start text-lg px-4 py-2 rounded-md border border-transparent transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
              isActive && "bg-primary/10 text-primary border-primary"
            )}
          >
            Mistake {idx + 1}
          </Link>
        );
      })}
    </nav>
  );
}
