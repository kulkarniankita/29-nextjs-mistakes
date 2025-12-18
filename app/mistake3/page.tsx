"use cache";
import { CartItemType } from "@/types/cart";
import { CartItem } from "@/components/cart-item";
import { getCart } from "@/lib/mistake3/cart.server";

export default async function Mistake3Page() {
  const cart = await getCart();
  return (
    <div>
      <h1>
        Putting Server components GET calls inside a Server Actions file to keep
        all backend code together
      </h1>

      <div className="flex gap-4 my-12 flex-col">
        {cart.items.map((item: CartItemType) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
