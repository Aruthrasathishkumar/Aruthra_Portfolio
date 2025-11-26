"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    id: "gmu-msis",
    degree: "Master of Science - Information Systems",
    school: "George Mason University",
    location: "Fairfax, Virginia, USA",
    dates: "Aug 2024 - May 2026 (Expected)",
    summary:
      "Graduate program focused on backend systems, distributed computing, data engineering, and AI/ML applications.",
    highlights: [
      "Projects in distributed systems, RAG platforms, and cloud-native services",
      "Emphasis on software architecture, data modeling, and cloud infrastructure",
    ],
    isCurrent: true,
  },
  {
    id: "anna-btech-it",
    degree: "Bachelor of Technology - Information Technology",
    school: "Anna University",
    location: "Tamil Nadu, India",
    dates: "Aug 2020 - May 2024",
    summary:
      "Undergraduate foundation in computer science, algorithms, networking, databases, and full-stack development.",
    highlights: [],
    isCurrent: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle max-w-2xl">
            Academic foundation that underpins my work in software and AI/ML engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {/* Vertical Line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{ background: "var(--border-default)" }}
          />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full border-2"
                  style={{
                    background: edu.isCurrent ? "var(--accent)" : "var(--bg-base)",
                    borderColor: edu.isCurrent ? "var(--accent)" : "var(--border-hover)",
                    boxShadow: edu.isCurrent ? "0 0 0 4px var(--accent-dim)" : "none",
                  }}
                />

                {/* Content Card */}
                <div className="card p-6">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {/* Dates */}
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {edu.dates}
                    </span>

                    {/* Current Badge */}
                    {edu.isCurrent && (
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "var(--success-dim)",
                          border: "1px solid rgba(52, 211, 153, 0.2)",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse-soft"
                          style={{ background: "var(--success)" }}
                        />
                        <span style={{ color: "var(--success)" }}>In Progress</span>
                      </span>
                    )}
                  </div>

                  {/* Degree */}
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {edu.degree}
                  </h3>

                  {/* School & Location */}
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--accent-light)" }}
                  >
                    {edu.school} - {edu.location}
                  </p>

                  {/* Summary */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {edu.summary}
                  </p>

                  {/* Highlights (if any) */}
                  {edu.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "var(--accent)" }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
