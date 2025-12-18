import { ProductType } from "@/types/products";

export async function getProductsCached() {
  "use cache";

  await new Promise((resolve) => setTimeout(resolve, 100));
  const data = await fetch(
    "https://69174a7ca7a34288a2803fb4.mockapi.io/products"
  );
  const products = await data.json();

  const processed = products.slice(0, 4).map((p: ProductType) => ({
    ...p,
    formattedPrice: `$${parseFloat(p.price).toFixed(2)}`,
    category: p.category || "uncategorized",
  }));

  return {
    products: processed,
    fetchedAt: new Date().toISOString(),
  };
}
