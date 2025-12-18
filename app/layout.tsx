import type { Metadata } from "next";
import { Suspense } from "react";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import ThemeProvider from "./theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const figtree = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "29 Common Next.js Mistakes",
  description:
    "A comprehensive educational repository demonstrating 29 common mistakes developers make when building Next.js 16 applications. Each mistake includes interactive examples, explanations, and solutions to help you write better Next.js code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={figtree.className}>
        <ThemeProvider>
          <header className="px-4 md:px-6 lg:px-8 mx-auto max-w-7xl py-6 border-b-4 border-pink-200 border-double">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">Next.js Mistakes</h1>
              <ThemeToggle />
            </div>
          </header>
          <main className="px-4 md:px-6 lg:px-8 mx-auto max-w-7xl my-12 flex gap-6">
            <Suspense fallback={null}>
              <Sidebar />
            </Suspense>
            <div className="flex-1 p-4 border-secondary/10 border-2 rounded-md">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
