"use client";

import { ArrowLeftIcon, DogIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12">
      <DogIcon className="size-10" />
      <h1>Error</h1>
      <p>{error.message}</p>
      <Button onClick={reset}>Try again</Button>
      <Link
        href="/mistake21"
        className="text-primary underline underline-offset-4 inline-flex items-center gap-2"
      >
        <ArrowLeftIcon className="size-4" /> Back to Home
      </Link>
    </div>
  );
}
