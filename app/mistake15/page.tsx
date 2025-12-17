"use client";
import { CartItem } from "@/components/cart-item";
import { CartItemType } from "@/types/cart";
import { useEffect, useState } from "react";

export default function Mistake15Page() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      const cart = await fetch("/api/cart", {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      console.log(cart);
      setCart(cart.items);
      setLoading(false);
    };
    fetchCart();
  }, []);
  return (
    <div>
      <h1>Not using loading.tsx</h1>
      <p className="text-muted-foreground mt-2">
        Adding loading states and making the page a client component instead of
        using loading.tsx
      </p>
      {loading ? (
        <div>Loading Cart...</div>
      ) : (
        <div className="flex gap-4 my-12 flex-col">
          {cart.map((item: CartItemType) => (
            <CartItem key={`cart-item-${item.id}-${item.name}`} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
