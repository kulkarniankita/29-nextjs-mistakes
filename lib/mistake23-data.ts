import { cache } from "react";

let requestCountUncached = 0;
let requestCountCached = 0;

async function fetchUserDataUncached(userId: string) {
  requestCountUncached++;
  const requestNumber = requestCountUncached;
  console.log(
    `[Request #${requestNumber}] Fetching user ${userId} (UNCACHED)...`
  );

  // Add a small delay to ensure timestamps are different
  await new Promise((resolve) => setTimeout(resolve, 300));

  const fetchedAt = new Date().toISOString();
  console.log(`[Request #${requestNumber}] Completed at ${fetchedAt}`);

  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
    fetchedAt,
    requestNumber,
  };
}

const fetchUserDataCached = cache(async (userId: string) => {
  requestCountCached++;
  const requestNumber = requestCountCached;
  console.log(
    `[Request #${requestNumber}] Fetching user ${userId} (CACHED)...`
  );

  // Add a small delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const fetchedAt = new Date().toISOString();
  console.log(`[Request #${requestNumber}] Completed at ${fetchedAt}`);

  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
    fetchedAt,
    requestNumber,
  };
});

export { fetchUserDataUncached, fetchUserDataCached };
