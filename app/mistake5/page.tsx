"use client";

import { CartItemType } from "@/types/cart";
import { useEffect, useState } from "react";
import { CartItem } from "@/components/cart-item";

export default function Mistake4Page() {
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
      <h1>Using Route Handlers instead of Server Components</h1>
      {loading ? (
        <div>Loading Cart...</div>
      ) : (
        <div className="flex gap-4 my-12 flex-col">
          {cart.map((item: CartItemType) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
