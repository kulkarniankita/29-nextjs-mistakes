"use server";

import {
  fetchUserDataUncached,
  fetchUserDataCached,
} from "@/lib/mistake23-data";

export async function fetchUncachedAction() {
  const startTime = Date.now();

  // Calling the same function twice - makes 2 requests!
  const user1 = await fetchUserDataUncached("123");
  const user2 = await fetchUserDataUncached("123");

  const endTime = Date.now();
  const totalTime = endTime - startTime;

  return {
    user1,
    user2,
    message: "Two separate requests were made",
    totalTime,
    requestsMade: 2,
  };
}

export async function fetchCachedAction() {
  const startTime = Date.now();

  // Calling the same function twice - but cache() deduplicates!
  const user1 = await fetchUserDataCached("123");
  const user2 = await fetchUserDataCached("123");

  const endTime = Date.now();
  const totalTime = endTime - startTime;

  return {
    user1,
    user2,
    message: "Only one request was made, result was reused",
    totalTime,
    requestsMade: 1,
  };
}
