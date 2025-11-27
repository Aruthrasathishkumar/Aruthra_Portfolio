"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { hero } from "@/lib/data";

// Simple AI System Visual Component
function SystemVisual() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Main container */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Floating animation wrapper */}
        <div className="animate-float">
          {/* Code window mockup - ALWAYS dark for contrast */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: isDark ? 'var(--bg-elevated)' : '#0F172A',
              border: isDark ? '1px solid var(--border-default)' : '1px solid #1E293B',
              boxShadow: isDark
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                : '0 25px 60px -12px rgba(15, 23, 42, 0.35)',
            }}
          >
            {/* Window header */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                background: isDark ? 'var(--bg-surface)' : '#1E293B',
                borderBottom: isDark ? '1px solid var(--border-default)' : '1px solid #334155'
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono ml-2" style={{ color: isDark ? 'var(--text-muted)' : '#94A3B8' }}>
                system_architecture.py
              </span>
            </div>

            {/* Code content - always light text on dark */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div style={{ color: isDark ? 'var(--text-muted)' : '#64748B' }}># AI Pipeline Architecture</div>
              <div className="mt-3">
                <span style={{ color: '#c084fc' }}>class</span>
                <span style={{ color: isDark ? 'var(--accent-lighter)' : '#A5B4FC' }}> MLPipeline</span>
                <span style={{ color: isDark ? 'var(--text-muted)' : '#64748B' }}>:</span>
              </div>
              <div className="ml-4 mt-1">
                <span style={{ color: '#c084fc' }}>def</span>
                <span style={{ color: '#67e8f9' }}> __init__</span>
                <span style={{ color: isDark ? 'var(--text-muted)' : '#64748B' }}>(self):</span>
              </div>
              <div className="ml-8 mt-1" style={{ color: isDark ? 'var(--text-secondary)' : '#CBD5E1' }}>
                self.model = <span style={{ color: '#fcd34d' }}>"transformer"</span>
              </div>
              <div className="ml-8" style={{ color: isDark ? 'var(--text-secondary)' : '#CBD5E1' }}>
                self.embeddings = <span style={{ color: '#fcd34d' }}>"FAISS"</span>
              </div>
              <div className="ml-8" style={{ color: isDark ? 'var(--text-secondary)' : '#CBD5E1' }}>
                self.cache = <span style={{ color: '#fcd34d' }}>"Redis"</span>
              </div>
              <div className="mt-3 ml-4">
                <span style={{ color: '#c084fc' }}>async def</span>
                <span style={{ color: '#67e8f9' }}> process</span>
                <span style={{ color: isDark ? 'var(--text-muted)' : '#64748B' }}>(self, data):</span>
              </div>
              <div className="ml-8 mt-1" style={{ color: isDark ? 'var(--text-muted)' : '#64748B' }}>
                <span style={{ color: '#c084fc' }}>return await</span> self.pipeline.run(data)
              </div>
            </div>
          </div>

          {/* Floating elements around the code window */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{ background: 'var(--accent-dim)', color: 'var(--accent-lighter)', border: '1px solid rgba(99, 102, 241, 0.3)' }}
          >
            RAG System
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{ background: 'var(--success-dim)', color: 'var(--success)', border: '1px solid rgba(52, 211, 153, 0.3)' }}
          >
            99.2% Accuracy
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' }}
          >
            FastAPI
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section id="home" className="min-h-screen flex items-center px-4 md:px-8 lg:px-12 pt-20 pb-12">
      <div className="container-main w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'var(--success-dim)',
                  border: isDark ? '1px solid rgba(52, 211, 153, 0.2)' : '1px solid rgba(22, 101, 52, 0.15)'
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse-soft" style={{ background: 'var(--success)' }} />
                <span style={{ color: isDark ? 'var(--success)' : '#166534' }}>Open to 2026 New Grad & Early Career Roles</span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-6"
              style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            >
              {hero.name}
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl md:text-2xl font-medium mt-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Software Engineer · AI/ML Engineer
            </motion.p>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg mt-6 max-w-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              I build scalable backend systems and AI-powered applications that turn complex ideas into reliable products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--text-muted)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <span style={{ color: 'var(--border-default)' }}>|</span>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--text-muted)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <div className="order-1 lg:order-2">
            <SystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
