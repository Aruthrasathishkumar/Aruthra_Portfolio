"use client";
import { impact } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="card p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Title */}
            <div className="md:w-48 flex-shrink-0">
              <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {impact.title}
              </h2>
              <div className="h-0.5 w-10 mt-2 rounded-full" style={{ background: 'var(--accent)' }} />
            </div>

            {/* Items */}
            <div className="flex-1 grid sm:grid-cols-2 gap-3">
              {impact.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-xs font-medium mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
