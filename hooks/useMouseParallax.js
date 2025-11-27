"use client";

import { useSyncExternalStore } from "react";

// Cached initial position - must be a stable reference for SSR
const INITIAL_POSITION = { x: 0, y: 0 };

// Store for mouse position with subscribers
const mouseStore = {
  position: INITIAL_POSITION,
  listeners: new Set(),
};

function subscribe(listener) {
  mouseStore.listeners.add(listener);

  // Only set up the event listener once
  if (mouseStore.listeners.size === 1 && typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove);
  }

  return () => {
    mouseStore.listeners.delete(listener);
    if (mouseStore.listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  };
}

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;

  // Normalize to -1 to 1 range
  mouseStore.position = {
    x: (clientX / innerWidth) * 2 - 1,
    y: (clientY / innerHeight) * 2 - 1,
  };

  mouseStore.listeners.forEach((listener) => listener());
}

function getSnapshot() {
  return mouseStore.position;
}

// IMPORTANT: Must return a cached/stable reference to avoid infinite loop
function getServerSnapshot() {
  return INITIAL_POSITION;
}

export function useMouseParallax(intensity = 0.02) {
  const position = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return {
    x: position.x * intensity,
    y: position.y * intensity,
  };
}
