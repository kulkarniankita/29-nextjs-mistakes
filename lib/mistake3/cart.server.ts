import { cart } from "../cart";

export const getCart = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // Implement get cart logic
  return cart;
};
