import {
  ProductGrid,
  ProductStats,
} from "@/components/mistakes/mistake19-demo";
import { RefreshButton } from "@/components/refresh-button";

export default function Mistake19Page() {
  return (
    <div>
      <h1>Not caching repeatable code</h1>
      <p className="text-muted-foreground mt-2">
        If you are using the same expensive code everywhere, cache it and then
        use that same function everywhere else instead of re-caching it every
        single time
      </p>

      <div className="my-12 space-y-6 max-w-4xl">
        <ProductGrid />
        <ProductStats />
      </div>

      <div className="my-8">
        <RefreshButton />
      </div>
    </div>
  );
}
