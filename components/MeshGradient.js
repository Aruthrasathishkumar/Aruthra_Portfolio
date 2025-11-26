"use client";

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0" style={{ background: 'var(--bg-base)' }} />

      {/* Soft gradient from top */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Very subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}
