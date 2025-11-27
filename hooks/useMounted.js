"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  // No-op: mounted state never changes after hydration
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function useMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
