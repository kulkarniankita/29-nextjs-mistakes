"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  fetchUncachedAction,
  fetchCachedAction,
} from "@/actions/mistake23-actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function UserInfoUncached() {
  const [data, setData] = useState<{
    user1: { fetchedAt: string; requestNumber: number };
    user2: { fetchedAt: string; requestNumber: number };
    message: string;
    totalTime: number;
    requestsMade: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleFetch() {
    setLoading(true);
    const result = await fetchUncachedAction();
    setData(result);
    setLoading(false);
  }

  const timestampsMatch = data && data.user1.fetchedAt === data.user2.fetchedAt;

  return (
    <Card className="p-4 border-2 border-destructive/30">
      <CardTitle className="text-lg">Without cache()</CardTitle>
      <CardContent className="pt-4 space-y-4">
        <Button onClick={handleFetch} disabled={loading} variant="destructive">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Fetching...
            </>
          ) : (
            "Fetch Data"
          )}
        </Button>

        {data && (
          <div className="space-y-3">
            <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/30">
              <p className="text-sm font-semibold text-destructive">
                📊 {data.requestsMade} requests made
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Total time: ~{data.totalTime}ms (2 × 300ms delays)
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm">
                <p className="font-semibold">
                  Request #{data.user1.requestNumber} fetched at:
                </p>
                <p className="text-muted-foreground font-mono text-xs">
                  {new Date(data.user1.fetchedAt).toLocaleTimeString()}.
                  {new Date(data.user1.fetchedAt).getMilliseconds()}
                </p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">
                  Request #{data.user2.requestNumber} fetched at:
                </p>
                <p className="text-muted-foreground font-mono text-xs">
                  {new Date(data.user2.fetchedAt).toLocaleTimeString()}.
                  {new Date(data.user2.fetchedAt).getMilliseconds()}
                </p>
              </div>
            </div>

            {timestampsMatch ? (
              <p className="text-xs text-muted-foreground mt-4">
                ⚠️ Timestamps might appear the same, but check console - 2
                requests were made!
              </p>
            ) : (
              <p className="text-xs text-destructive mt-4">
                ⚠️ {data.message} - Notice the different timestamps
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function UserInfoCached() {
  const [data, setData] = useState<{
    user1: { fetchedAt: string; requestNumber: number };
    user2: { fetchedAt: string; requestNumber: number };
    message: string;
    totalTime: number;
    requestsMade: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleFetch() {
    setLoading(true);
    const result = await fetchCachedAction();
    setData(result);
    setLoading(false);
  }

  const timestampsMatch = data && data.user1.fetchedAt === data.user2.fetchedAt;

  return (
    <Card className="p-4 border-2 border-primary/30">
      <CardTitle className="text-lg">With cache()</CardTitle>
      <CardContent className="pt-4 space-y-4">
        <Button onClick={handleFetch} disabled={loading} variant="default">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Fetching...
            </>
          ) : (
            "Fetch Data"
          )}
        </Button>

        {data && (
          <div className="space-y-3">
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
              <p className="text-sm font-semibold text-primary">
                📊 {data.requestsMade} request made
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Total time: ~{data.totalTime}ms (1 × 300ms delay, reused result)
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm">
                <p className="font-semibold">
                  Request #{data.user1.requestNumber} fetched at:
                </p>
                <p className="text-muted-foreground font-mono text-xs">
                  {new Date(data.user1.fetchedAt).toLocaleTimeString()}.
                  {new Date(data.user1.fetchedAt).getMilliseconds()}
                </p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">
                  Request #{data.user2.requestNumber} fetched at:
                </p>
                <p className="text-muted-foreground font-mono text-xs">
                  {new Date(data.user2.fetchedAt).toLocaleTimeString()}.
                  {new Date(data.user2.fetchedAt).getMilliseconds()}
                </p>
              </div>
            </div>

            {timestampsMatch ? (
              <p className="text-xs text-primary mt-4">
                ✅ {data.message} - Same timestamp! Check console - only 1
                request was made
              </p>
            ) : (
              <p className="text-xs text-muted-foreground mt-4">
                ⚠️ Timestamps should match - both used the same cached result
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
