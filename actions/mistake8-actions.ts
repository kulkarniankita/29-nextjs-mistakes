"use server";

import { updateTag, refresh } from "next/cache";
import { cookies } from "next/headers";

// ✅ Use updateTag when you want to invalidate cached data
// - Only works in Server Actions
// - Next request WAITS for fresh data (no stale content served)
// - Designed for "read-your-own-writes" scenarios
export async function invalidateStockCache() {
  updateTag("stock-price");
  return { success: true, invalidatedAt: new Date().toISOString() };
}

// ✅ Use refresh when you want to re-read dynamic data (cookies, headers, etc)
// - Only works in Server Actions
// - Re-renders server components on the client
// - Does NOT invalidate any cache tags
// - Perfect for session/cookie-based data
export async function refreshAndTrackVisit() {
  const cookieStore = await cookies();

  // Increment visit count
  const currentCount = parseInt(cookieStore.get("visitCount")?.value || "0");
  cookieStore.set("visitCount", String(currentCount + 1));

  // Update last visit timestamp
  cookieStore.set("lastVisit", new Date().toISOString());

  // Refresh the client to show updated session data
  refresh();
}

// Set user name (another example of session data)
export async function setUserName(formData: FormData) {
  const cookieStore = await cookies();
  const name = formData.get("name") as string;

  if (name) {
    cookieStore.set("userName", name);
  }

  refresh();
}
