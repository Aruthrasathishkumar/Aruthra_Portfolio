// lib/data.js

export const hero = {
  name: "Aruthra Sathish Kumar",
  title: "Software Engineer · AI/ML Engineer",
  tagline: "I build scalable backend systems and AI-powered applications that turn complex ideas into reliable products.",
  resumeUrl: "/Aruthra Sathish Kumar - Resume.pdf",
  github: "https://github.com/Aruthrasathishkumar",
  linkedin: "https://www.linkedin.com/in/aruthra-sathish-kumar369/",
};

export const impact = {
  title: "Highlights",
  items: [
    "Built 3 production-grade AI systems (RAG, CNN-GRU, real-time voice AI)",
    "Hands-on experience with RAG pipelines, FAISS vector search, Next.js, FastAPI, PostgreSQL, and AWS",
    "Mentored 100+ students in backend engineering, distributed Node.js systems, and debugging pipelines",
    "Engineered systems serving 1K+ users and handling 500+ concurrent real-time connections",
    "Improved API and database performance by 25–60% across backend workloads"
  ]
};

export const about = {
  intro: "I'm a software engineer focused on FAANG-style SWE and AI/ML roles. I enjoy working across the stack — from backend APIs and distributed systems to LLM-powered features and real-time applications.",
  description: "I care about clean engineering, practical ML, and building systems that actually ship and scale in production.",
  pills: ["Backend", "AI/ML", "LLM Systems", "Cloud"],
  education: [
    {
      school: "George Mason University",
      degree: "M.S. in Information Systems",
      period: "Aug 2024 - May 2026",
      details: "Coursework in distributed systems, analytics, and advanced software engineering."
    },
    {
      school: "Anna University",
      degree: "B.Tech in Information Technology",
      period: "Aug 2020 - May 2024",
      details: "Solid base in algorithms, data structures, and full-stack development."
    }
  ]
};

export const whyMe = {
  title: "Why Me",
  content: "I build scalable backend systems, LLM-powered applications, and AI-driven features that solve real problems. My experience spans distributed Node.js architectures, deep-learning pipelines, real-time systems, and cloud-native deployments.\n\nI combine strong engineering fundamentals with AI/ML depth, and I deliver features end-to-end — from architecture and API design to ML logic and cloud deployment."
};

export const whatIWant = {
  title: "What I'm Looking For",
  description: "Actively seeking 2026 new-grad roles in:",
  roles: [
    "Software Engineering (Backend / Full-Stack)",
    "AI/ML Engineering",
    "AI SWE (LLM Inference • RAG • Agentic AI Pipelines)"
  ],
  footer: "Open to FAANG/MAANG teams, enterprise AI groups, and high-impact startups."
};

export const skills = [
  {
    title: "Core Focus",
    icon: "wrench",
    items: [
      "Backend engineering (APIs, microservices)",
      "Distributed systems & concurrency",
      "Real-time systems & stream processing",
      "System design & architecture",
      "AI/ML engineering"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    items: [
      "PyTorch, TensorFlow, Scikit-learn",
      "Pandas, NumPy, Matplotlib",
      "RAG, FAISS, embeddings, LLM integration",
      "Generative AI (LLMs, diffusion models), Agentic AI workflows",
      "Multilingual speech systems",
      "ETL workflows, data analysis & web scraping"
    ]
  },
  {
    title: "Backend & Web",
    icon: "globe",
    items: [
      "Node.js, FastAPI, Django",
      "REST, GraphQL, WebSockets",
      "React, Next.js, Tailwind CSS",
      "Event-driven architecture (Kafka, async pipelines)"
    ]
  },
  {
    title: "Cloud, DevOps & Data",
    icon: "cloud",
    items: [
      "AWS & Azure cloud services",
      "Docker, Kubernetes, GitHub Actions",
      "Apache Kafka, Apache Flink",
      "PostgreSQL, MySQL, MongoDB, Redis",
      "Redis (advanced: sorted sets, caching patterns)",
      "Caching & messaging (Redis, Kafka)",
      "CI/CD, monitoring"
    ]
  }
];

export const certifications = [
  {
    title: "AWS Academy - Data Engineering",
    issuer: "Amazon Web Services (AWS Academy)",
    type: "Training Program",
    badge: "TRAINED",
    stars: 4,
    description: "Verified training in data pipelines, ETL workflows, distributed data processing, and cloud-native data engineering patterns."
  },
  {
    title: "Microsoft Certified - Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    type: "Certification",
    badge: "FUNDAMENTALS",
    stars: 5,
    description: "Demonstrates understanding of cloud architecture, security, compute, storage, networking, governance, and cost modeling."
  }
];

export const personality = {
  content: "I love turning ideas into reliable software — whether it's optimizing database flows, building a real-time voice system, or designing an LLM-powered agent.",
  hobbies: "When I'm not coding, I explore new AI tools, refine system architectures, or help students debug distributed workloads.",
  emojis: ["💻", "⚙️", "🤖", "☁️"]
};

export const projects = [
  {
    id: "realtime-search-ranking",
    title: "Real-Time Search Ranking System",
    subtitle: "Distributed Systems | Node.js · Kafka · Flink · Redis",
    description: "A production-style real-time ranking system that processes clickstream data using Kafka, Flink, and Redis to dynamically reorder search results based on user behavior.",
    impact: [
      "1K+ events/min real-time ranking via Kafka → Flink → Redis",
      "<50ms search latency with multi-level caching",
      "+30% relevance improvement via A/B testing (CTR-based)"
    ],
    tech: ["Node.js", "Kafka", "Apache Flink", "Redis", "Distributed Systems", "A/B Testing"],
    architecture: "Browser → Collection API → Kafka → Flink → Redis → Search API → Ranked Results",
    github: "https://github.com/Aruthrasathishkumar/Real-time-Search-Ranking-System"
  },
  {
    id: "usda-chatbot",
    title: "USDA Rural Development AI Assistant",
    subtitle: "RAG System | React · FastAPI · PostgreSQL · FAISS · Mistral (Ollama)",
    description: "A production-grade Retrieval-Augmented Generation (RAG) system that enables natural language discovery of 100+ USDA programs using semantic search and grounded AI responses.",
    impact: [
      "<1s AI responses",
      "+40% discovery accuracy",
      "100% grounded responses"
    ],
    tech: ["React", "Tailwind", "FastAPI", "Python", "FAISS", "RAG", "Ollama", "PostgreSQL"],
    architecture: "User → FastAPI → FAISS retrieval → Mistral (Ollama) → PostgreSQL → React UI",
    github: "https://github.com/Aruthrasathishkumar/usda-chatbot"
  },
  {
    id: "cnn-gru-predictor",
    title: "Academic Performance Intelligence System (CNN-GRU)",
    subtitle: "Deep Learning | PyTorch · MLflow · Pandas",
    description: "Multi-task CNN-GRU model predicting student risk and grades from sequential behavioral data.",
    impact: [
      "88.9% risk prediction accuracy",
      "59% lower error vs baseline models",
      "Detects hidden risk via grade volatility"
    ],
    tech: ["PyTorch", "Scikit-learn", "Pandas", "MLflow", "Plotly", "JavaScript"],
    architecture: "LMS data → features → CNN → GRU → attention → risk + grade outputs → dashboard",
    github: "https://github.com/Aruthrasathishkumar/academic-performance-predictor-CNN-GRU"
  },
  {
    id: "voice-qa",
    title: "SpeakUp - Anonymous Voice Q&A Platform",
    subtitle: "Real-Time Systems | Next.js · Fastify · Kafka · Redis · PostgreSQL",
    description: "A multilingual anonymous Q&A platform for live events with text and voice questions, live voting, polls, host moderation, and real-time updates.",
    impact: [
      "500+ concurrent users per room",
      "Sub-100ms real-time vote updates",
      "99+ language voice transcription"
    ],
    tech: ["Next.js 14", "Fastify", "PostgreSQL", "Redis", "Kafka", "Socket.io", "Groq Whisper", "DeepL"],
    architecture: "Browser → Fastify API → Kafka (voice pipeline) → Groq Whisper / LLaMA / DeepL → PostgreSQL + Redis → Socket.io → Live Sync",
    github: "https://github.com/Aruthrasathishkumar/anonymous-voice-QA-platform"
  },
  {
    id: "url-shortener",
    title: "Pathly - Url Shortener",
    subtitle: "Backend Systems | FastAPI · Redis · MySQL",
    description: "A Production-ready URL shortener that lets users create custom short links, track click analytics, and manage links from a secure dashboard.",
    impact: [
      "Sub-1ms redirects via Redis caching",
      "100% click tracking with async analytics",
      "Stateless JWT authentication for scalable sessions"
    ],
    tech: ["React", "Tailwind CSS", "FastAPI", "Redis", "MySQL", "JWT", "Cache-Aside", "System Design"],
    architecture: "Browser → Authenticated dashboard (React, JWT) → FastAPI → Redis Cache → MySQL → BackgroundTasks Analytics → Redirect + Dashboard",
    github: "https://github.com/Aruthrasathishkumar/url-shortener"
  },
  {
    id: "job-tracker",
    title: "Careerlens - Job Search Intelligence Platform",
    subtitle: "Full-Stack Web | React · FastAPI · PostgreSQL",
    description: "A job search intelligence platform that transforms application tracking into data-driven insights, strategy optimization, and decision-making.",
    impact: [
      "60% reduction in manual job entry via Chrome Extension auto-capture",
      "40% improvement in interview conversion visibility through funnel analytics",
      "<1s insights using SQL-based real-time aggregations"
    ],
    tech: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL", "JWT", "Google OAuth", "Recharts", "Chrome Extension"],
    architecture: "Client (React) → FastAPI backend (JWT + OAuth auth) → PostgreSQL → analytics endpoints → Chrome Extension integrates via authenticated REST API",
    github: "https://github.com/Aruthrasathishkumar/job-application-tracker"
  }
];

export const experiences = [
  {
    company: "George Mason University",
    role: "Graduate Teaching Assistant - IT 207: Applied IT Programming (Server-Side Development)",
    period: "Aug 2025 - Present",
    bullets: [
      "MENTORED 100+ students on Node.js, SQL, and distributed systems → improved lab completion & pass rates.",
      "TRAINED students to build SQL-based backend services → 30% fewer runtime failures.",
      "ENGINEERED production-style debugging labs on distributed pipelines → improved student's debugging mastery",
      "LED weekly coding & debugging labs on RESTful service design → enabled students to build backend services.",
      "PROVIDED 1:1 support through office hours, code reviews → boosted overall success rates across the course.",
      "BUILT CNN-GRU academic performance predictor on Codio logs → 89% accuracy identifying at-risk students."
    ]
  },
  {
    company: "Verzeo Edutech",
    role: "Software Engineer Intern",
    period: "Dec 2022 – Feb 2023",
    bullets: [
      "BUILT full-stack features (React + Django) → supported 1K+ students accessing courses & assessments smoothly.",
      "DESIGNED focused REST API layer for course/progress data → 40% fewer client calls & 25% faster page loads.",
      "RESOLVED login failures with OAuth2 + OpenAthens SSO → 45% fewer auth issues during peak hours.",
      "OPTIMIZED relational schemas for courses, users & attempts → reduced heavy query latency by 30–45%.",
      "STANDARDIZED cursor pagination & server-side joins in REST layer → 60% fewer DB round-trips during peak traffic.",
      "COLLABORATED with engineers via code reviews & Git workflows → improved API consistency & codebase quality."
    ]
  }
];

export const contact = {
  email: "aruthra.sathish@gmail.com",
  linkedin: "https://www.linkedin.com/in/aruthra-sathish-kumar369/",
  github: "https://github.com/Aruthrasathishkumar",
  blurb: "Let's build something amazing together."
};

export const footer = {
  name: "Aruthra Sathish Kumar",
  tagline: "Built with Next.js, React, and a lot of coffee",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
};
