"use server";

import { cart } from "@/lib/cart";
import { revalidatePath } from "next/cache";
import { CartItemType } from "@/types/cart";

export const addToCartAction = async (formData: FormData) => {
  const productId = formData.get("productId");
  const product: CartItemType | undefined = cart.items.find(
    (item) => item.id === productId
  );
  // Implement add to cart logic
  //update the cart items with the new quantity if found else add a new item
  if (product) {
    product.quantity++;
  } else {
    cart.items.push({
      id: productId as string,
      name: `Product ${productId}`,
      price: 400,
      quantity: 1,
      description: `Description for product ${productId}`,
    });
  }
  revalidatePath("/mistake3");
};

export const addToCartWithoutRevalidationAction = async (
  formData: FormData
) => {
  const productId = formData.get("productId");
  const product: CartItemType | undefined = cart.items.find(
    (item) => item.id === productId
  );
  // Implement add to cart logic
  //update the cart items with the new quantity if found else add a new item
  if (product) {
    product.quantity++;
  } else {
    cart.items.push({
      id: productId as string,
      name: `Product ${productId}`,
      price: 400,
      quantity: 1,
      description: `Description for product ${productId}`,
    });
  }
};
