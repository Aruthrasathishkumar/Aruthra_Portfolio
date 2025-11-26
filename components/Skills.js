"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = [
  {
    title: "Core Focus",
    items: [
      "Backend development (APIs, services)",
      "Distributed systems & concurrency",
      "AI/ML engineering",
      "System design & architecture",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "PyTorch, deep learning (CNN/RNN/GRU)",
      "RAG, FAISS, embeddings, LLM integration",
      "Whisper ASR, multilingual voice systems",
      "Model optimization & deployment",
    ],
  },
  {
    title: "Backend & Web",
    items: [
      "Node.js, FastAPI, Django",
      "REST, GraphQL, WebSockets",
      "Event-driven architecture",
      "React, Next.js, Tailwind CSS",
    ],
  },
  {
    title: "Cloud, DevOps & Data",
    items: [
      "AWS, Azure cloud services",
      "Docker, Kubernetes, GitHub Actions",
      "PostgreSQL, MySQL, MongoDB",
      "Redis caching, message queues",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical Strengths</h2>
          <p className="section-subtitle max-w-2xl">
            Areas where I&apos;m most effective as an engineer.
          </p>
        </motion.div>

        {/* Skills Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card p-6"
            >
              <h3
                className="font-semibold text-lg mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {category.title}
              </h3>

              <ul className="space-y-2.5">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--accent)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
