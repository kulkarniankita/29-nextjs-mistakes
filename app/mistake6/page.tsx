"use cache";
import { getCart } from "@/lib/mistake3/cart.server";
import { CartItem } from "@/components/cart-item";
import { CartItemType } from "@/types/cart";
import { Suspense } from "react";

export default async function Mistake5Page() {
  const cart = await getCart();
  return (
    <div>
      <h1>Placing a Suspense boundary at the wrong level</h1>
      <div className="flex gap-4 my-12 flex-col">
        <Suspense fallback={<div>Loading Cart...</div>}>
          {cart.items.map((item: CartItemType) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
