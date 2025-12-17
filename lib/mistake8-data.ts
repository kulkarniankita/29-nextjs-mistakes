import "server-only";
import { cacheTag } from "next/cache";
import { cookies } from "next/headers";

// Simulate an external API call
async function fetchStockPrice() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    symbol: "ACME",
    price: (100 + Math.random() * 50).toFixed(2),
    change: (Math.random() * 10 - 5).toFixed(2),
  };
}

// STATIC CACHED DATA - Use updateTag() to invalidate this
export async function getStaticStockPrice() {
  "use cache";
  cacheTag("stock-price");

  const stock = await fetchStockPrice();

  return {
    ...stock,
    fetchedAt: new Date().toISOString(),
    cacheType: "static" as const,
  };
}

// SESSION-BASED DATA - Use refresh() to re-read this
// This reads from cookies, which are dynamic per-request
export async function getUserSession() {
  // Reading cookies makes this dynamic - not cached
  const cookieStore = await cookies();

  // Get or initialize visit count
  const visitCount = parseInt(cookieStore.get("visitCount")?.value || "0");
  const lastVisit = cookieStore.get("lastVisit")?.value || null;
  const userName = cookieStore.get("userName")?.value || "Guest";

  return {
    userName,
    visitCount,
    lastVisit,
    currentTime: new Date().toISOString(),
    cacheType: "dynamic" as const,
  };
}

// Keep this for backwards compatibility
export async function getDynamicMarketData() {
  return getUserSession();
}
