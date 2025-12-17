import { cookies } from "next/headers";

const userCarts: Record<string, { productId: string; quantity: number }[]> = {
  user_123: [
    { productId: "1", quantity: 2 },
    { productId: "3", quantity: 1 },
  ],
  guest: [{ productId: "2", quantity: 3 }],
};

const getCart = async () => {
  const res = await fetch(
    "https://69174a7ca7a34288a2803fb4.mockapi.io/products"
  );
  const products = await res.json();
  return products;
};

export async function getFeaturedProducts() {
  "use cache";
  const products = await getCart();

  return {
    products,
    cachedAt: new Date().toISOString(),
  };
}

export async function getUserCart() {
  "use cache: private";
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value || "guest";

  const products = await getCart();

  const cartItems = userCarts[userId] || [];

  const cartWithDetails = cartItems.map((item) => {
    const product = products.find(
      (p: { id: string }) => p.id === item.productId
    );
    const price = parseFloat(product?.price || "0");
    return {
      ...item,
      name: product?.name || "Unknown",
      price,
      total: price * item.quantity,
    };
  });

  return {
    userId,
    items: cartWithDetails,
    totalAmount: cartWithDetails.reduce((sum, item) => sum + item.total, 0),
    cachedAt: new Date().toISOString(),
  };
}
