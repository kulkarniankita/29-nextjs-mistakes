import { Button } from "@/components/ui/button";
import { addToCartWithoutRevalidationAction } from "@/actions/cart-actions";
import { CartItemType } from "@/types/cart";
import { CartItem } from "@/components/cart-item";
import { getCart } from "@/lib/cart";

export default async function Mistake11Page() {
  const cart = await getCart();
  return (
    <div>
      <h1>Not revalidating data after mutations</h1>
      <p className="text-muted-foreground mt-2">
        Server Actions are not allowed inside Server Components.
      </p>
      <div className="flex gap-4 my-12 flex-col">
        {cart.items.map((item: CartItemType) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <form
        action={addToCartWithoutRevalidationAction}
        className="flex flex-col gap-2 my-12"
      >
        <input
          type="text"
          name="productId"
          placeholder="Fancy Next"
          defaultValue="Fancy Next"
          hidden
        />
        <Button type="submit" variant="outline">
          Add to Cart
        </Button>
      </form>
    </div>
  );
}
