import { FeaturedProductCard } from "@/components/featured-product-card";
import { RefreshButton } from "@/components/refresh-button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getFeaturedProducts, getUserCart } from "@/lib/cart.server";
import { Suspense } from "react";

async function FeaturedProductsCardWrapper() {
  const { products, cachedAt } = await getFeaturedProducts();
  return <FeaturedProductCard products={products} cachedAt={cachedAt} />;
}

async function UserCartCard() {
  const cart = await getUserCart();
  const { userId, items, totalAmount, cachedAt } = cart;
  return (
    <Card className="p-4">
      <CardTitle className="text-lg">🛒 Your Cart</CardTitle>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-3">
          User: <span className="font-mono">{userId}</span>
        </p>
        {items.length > 0 ? (
          <>
            <ul className="space-y-2">
              {items.map(({ productId, name, quantity, total }) => (
                <li key={productId} className="flex justify-between text-sm">
                  <span className="truncate mr-2">
                    {name} × {quantity}
                  </span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-3 font-semibold">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">Your cart is empty</p>
        )}
        <p className="text-xs text-muted-foreground mt-3">
          Cached at: {new Date(cachedAt).toLocaleTimeString()}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Mistake7Page() {
  return (
    <div>
      <h1>
        When to use &quot;use cache&quot; vs &quot;use cache: private&quot;
      </h1>

      <div className="mt-8 space-y-6">
        <RefreshButton />

        <div className="grid grid-cols-2 gap-4 items-start">
          <FeaturedProductsCardWrapper />

          <Suspense fallback={<Skeleton className="w-full h-64" />}>
            <UserCartCard />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
