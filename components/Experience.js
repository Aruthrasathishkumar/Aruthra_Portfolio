"use client";
import { experiences } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { useMounted } from "@/hooks/useMounted";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section id="experience" ref={ref} className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Work History</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical Line - gradient in light mode */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{
              background: isDark
                ? 'var(--border-default)'
                : 'linear-gradient(180deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.3) 50%, rgba(236,72,153,0.2) 100%)'
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full border-2"
                  style={{
                    background: index === 0 ? 'var(--accent)' : 'var(--bg-base)',
                    borderColor: index === 0 ? 'var(--accent)' : 'var(--border-hover)',
                    boxShadow: index === 0 ? '0 0 0 4px var(--accent-dim)' : 'none',
                  }}
                />

                {/* Content Card */}
                <div className="card p-6">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {/* Date */}
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {exp.period}
                    </span>

                    {/* Current Badge */}
                    {index === 0 && (
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: 'var(--success-dim)',
                          border: isDark ? '1px solid rgba(52, 211, 153, 0.2)' : '1px solid rgba(22, 101, 52, 0.15)',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse-soft"
                          style={{ background: 'var(--success)' }}
                        />
                        <span style={{ color: isDark ? 'var(--success)' : '#166534' }}>Current</span>
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: 'var(--accent-light)' }}
                  >
                    {exp.company}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
