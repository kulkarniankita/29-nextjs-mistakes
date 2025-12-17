"use client";

import { Button } from "./ui/button";
import {
  invalidateStockCache,
  refreshAndTrackVisit,
} from "@/actions/mistake8-actions";
import { RefreshCcw, Database, RotateCw } from "lucide-react";
import { useTransition } from "react";
import { Card } from "./ui/card";

export function RefreshButtons() {
  const [isPending, startTransition] = useTransition();

  const handleUpdateTag = () => {
    startTransition(async () => {
      await invalidateStockCache();
    });
  };

  const handleRefresh = () => {
    startTransition(async () => {
      await refreshAndTrackVisit();
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* updateTag - For Cache Invalidation */}
        <Card className="p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Database className="size-5" />
            <span className="font-semibold">updateTag()</span>
          </div>
          <p className="text-sm mb-3">
            Invalidates <strong>static cache</strong>. The stock price cache is
            cleared and fresh data is fetched.
          </p>
          <Button onClick={handleUpdateTag} disabled={isPending} size="lg">
            <RefreshCcw
              className={`w-4 h-4 mr-2 ${isPending ? "animate-spin" : ""}`}
            />
            updateTag(&quot;stock-price&quot;)
          </Button>
        </Card>

        {/* refresh - For Session/Cookie Data */}
        <Card className="p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <RotateCw className="size-5" />
            <span className="font-semibold">refresh()</span>
          </div>
          <p className="text-sm mb-3">
            Re-reads <strong>session data</strong> from cookies. Visit count
            increments, but stock cache stays the same.
          </p>
          <Button onClick={handleRefresh} disabled={isPending} size="lg">
            <RotateCw
              className={`w-4 h-4 mr-2 ${isPending ? "animate-spin" : ""}`}
            />
            refresh() + track visit
          </Button>
        </Card>
      </div>
    </div>
  );
}
