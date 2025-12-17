import { getCart } from "@/actions/cart-actions";
import { CartItem } from "@/components/cart-item";
import { CartItemType } from "@/types/cart";
import { Suspense } from "react";

// ✅ Async component that fetches data
async function CartList() {
  const cart = await getCart();
  return (
    <>
      {cart.items.map((item: CartItemType) => (
        <CartItem key={item.id} {...item} />
      ))}
    </>
  );
}

// ✅ Suspense boundary wraps AROUND the async component
export default function Mistake5Page() {
  return (
    <div>
      <h1>Where should you place a Suspense boundary?</h1>
      <p className="text-muted-foreground mt-2">
        The Suspense boundary needs to be placed <strong>higher</strong> than
        the async component doing the data fetching.
      </p>
      <div className="flex gap-4 my-12 flex-col">
        <Suspense fallback={<div>Loading Cart...</div>}>
          <CartList />
        </Suspense>
      </div>
    </div>
  );
}
