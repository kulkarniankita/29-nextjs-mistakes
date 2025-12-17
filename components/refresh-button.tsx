"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { RefreshCcwIcon } from "lucide-react";

export const RefreshButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.refresh()}
      variant="outline"
      className="border border-amber-400 cursor-pointer"
    >
      <RefreshCcwIcon className="w-4 h-4" />
      Refresh
    </Button>
  );
};
