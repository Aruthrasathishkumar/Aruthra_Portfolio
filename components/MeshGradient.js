"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function MeshGradient() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0" style={{ background: 'var(--bg-base)' }} />

      {/* Soft gradient from top - more visible in light mode */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 50%)'
            : 'linear-gradient(180deg, #ECEFFA 0%, var(--bg-base) 45%)',
        }}
      />

      {/* Primary radial glow - indigo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px]"
        style={{
          opacity: isDark ? 0.3 : 0.6,
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center top, rgba(99, 102, 241, 0.12) 0%, transparent 55%)',
          filter: isDark ? 'blur(60px)' : 'blur(80px)',
        }}
      />

      {/* Secondary glow - violet accent for light mode */}
      {!isDark && (
        <div
          className="absolute top-20 right-1/4 w-[600px] h-[400px]"
          style={{
            opacity: 0.4,
            background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
            filter: 'blur(70px)',
          }}
        />
      )}
    </div>
  );
}
