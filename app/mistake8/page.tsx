import { RefreshButtons } from "@/components/mistake8-buttons";
import { StockItem } from "@/components/stock-item";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserSession, getStaticStockPrice } from "@/lib/mistake8-data";
import { Suspense } from "react";

async function StaticStockCard() {
  const stock = await getStaticStockPrice();
  const isPositive = parseFloat(stock.change) >= 0;

  return (
    <Card className="p-4 border-2 border-emerald-500/30">
      <CardTitle className="text-lg flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
        📊 Static Cached Data
      </CardTitle>
      <CardContent className="pt-4">
        <div className="space-y-3">
          <StockItem label="Symbol" value={stock.symbol} />
          <StockItem label="Price" value={`$${stock.price ?? ""}`} />
          <StockItem
            label="Change"
            value={`${isPositive ? "+" : ""}${stock.change}%`}
          />
        </div>

        <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg">
          <p className="text-xs font-medium">
            🏷️ Tagged with: <code>stock-price</code>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Fetched at:{" "}
            <span className="font-mono">
              {new Date(stock.fetchedAt).toLocaleTimeString()}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

async function SessionDataCard() {
  const session = await getUserSession();

  return (
    <Card className="p-4 border-2 border-blue-500/30">
      <CardTitle className="text-lg flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
        🍪 Session Data (Cookies)
      </CardTitle>
      <CardContent className="pt-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">User</span>
            <span className="font-mono font-bold">{session.userName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Visit Count</span>
            <span className="font-mono font-bold text-2xl">
              {session.visitCount}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Last Visit</span>
            <span className="font-mono text-sm">
              {session.lastVisit
                ? new Date(session.lastVisit).toLocaleTimeString()
                : "First visit!"}
            </span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
          <p className="text-xs text-blue-400 font-medium">
            🔄 Reads from cookies - always dynamic
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Current time:{" "}
            <span className="font-mono">
              {new Date(session.currentTime).toLocaleTimeString()}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Mistake8Page() {
  return (
    <div>
      <h1>Using updateTag when you mean refresh</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        <strong>updateTag()</strong> invalidates cached data so the next request
        waits for fresh data. <strong>refresh()</strong> re-renders server
        components to re-read dynamic data (cookies, headers) — but doesn&apos;t
        touch the static cache.
      </p>

      <div className="mt-8 space-y-6">
        <RefreshButtons />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StaticStockCard />

          <Suspense fallback={<Skeleton className="w-full h-64" />}>
            <SessionDataCard />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
