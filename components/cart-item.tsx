import { addToCartAction } from "@/actions/cart-actions";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CartItemType } from "@/types/cart";

export const CartItem = ({ id, name, price, quantity }: CartItemType) => {
  return (
    <Card key={id} className="p-4">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <span className="text-lg font-semibold">${price}</span>
          Quantity: {quantity}
        </div>

        <form
          action={addToCartAction}
          className="flex gap-2 items-center flex-col justify-center"
        >
          <Input type="hidden" name="productId" value={id} />
          <Button type="submit">Add to Cart</Button>
        </form>
      </div>
    </Card>
  );
};
