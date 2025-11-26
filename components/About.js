"use client";
import { about } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="section-label">About</p>
          <h2 className="section-title">Background</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {about.intro}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {about.description}
            </p>

            {/* Focus Areas */}
            <div className="flex flex-wrap gap-2 pt-2">
              {about.pills.map((pill, index) => (
                <span key={index} className="badge">{pill}</span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
              Education
            </h3>

            {about.education.map((edu, index) => (
              <div key={edu.school} className="card p-4">
                {index === 0 && (
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-dot" />
                    <span className="text-xs font-medium" style={{ color: 'var(--accent)' }}>In Progress</span>
                  </div>
                )}
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{edu.period}</p>
                <h4 className="font-medium mb-0.5" style={{ color: 'var(--text-primary)' }}>{edu.school}</h4>
                <p className="text-sm" style={{ color: 'var(--accent)' }}>{edu.degree}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
