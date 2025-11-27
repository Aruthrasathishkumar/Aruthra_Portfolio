"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const certifications = [
  {
    id: "aws-data-eng",
    title: "AWS Academy - Data Engineering",
    provider: "Amazon Web Services (AWS Academy)",
    level: "TRAINED",
    type: "Training Program",
    date: "December 2024",
    description:
      "Verified training in data pipelines, ETL workflows, distributed data processing, and cloud-native data engineering patterns.",
    skills: ["AWS Cloud", "Data Engineering", "Data Pipelines", "ETL"],
    badgeImage: "/images/certifications/aws-data-engineering.png",
    verifyUrl:
      "https://www.credly.com/badges/7065b005-0db8-4d54-a9db-3624b5726dd5/public_url",
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Certified - Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
    level: "FUNDAMENTALS",
    type: "Certification",
    date: "February 2025",
    description:
      "Demonstrates understanding of cloud architecture, security, compute, storage, networking, governance, and cost modeling.",
    skills: ["Azure", "Cloud Fundamentals", "Security", "Networking"],
    badgeImage: "/images/certifications/microsoft-certified-fundamentals-badge.svg",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/aruthras-1156/credentials/e421509f05843a92?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Cloud Credentials</h2>
          <p className="section-subtitle max-w-2xl">
            Cloud and data certifications that strengthen my backend and AI/ML engineering work.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.title} credential`}
                className="card p-6 h-full flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  display: "flex",
                }}
              >
                {/* Top: Badge + Info */}
                <div className="flex gap-5">
                  {/* Badge Image */}
                  <div
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex items-center justify-center"
                    style={{ background: "var(--bg-surface)" }}
                  >
                    <Image
                      src={cert.badgeImage}
                      alt={`${cert.title} badge`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-base leading-tight mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-sm mb-1"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {cert.provider}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: "var(--accent-dim)",
                          color: "var(--accent-lighter)",
                        }}
                      >
                        {cert.level}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm mt-4 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="chip-outline">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Credential Indicator */}
                <div className="mt-auto pt-5 flex items-center gap-2">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--accent-light)" }}
                  >
                    View credential
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--accent-light)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
