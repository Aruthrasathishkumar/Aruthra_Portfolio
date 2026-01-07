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
      "AI/ML engineering",
      "System design & architecture"
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
      "Whisper ASR, multilingual speech systems",
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
      "Event-driven architecture"
    ]
  },
  {
    title: "Cloud, DevOps & Data",
    icon: "cloud",
    items: [
      "AWS & Azure cloud services",
      "Docker, Kubernetes, GitHub Actions",
      "PostgreSQL, MySQL, MongoDB, Redis",
      "Caching & messaging (Redis, basic Kafka)",
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
    id: "usda-chatbot",
    title: "USDA Rural Development Chatbot",
    subtitle: "RAG System | React · FastAPI · PostgreSQL · FAISS · Mistral",
    description: "A production-grade Retrieval-Augmented Generation (RAG) platform built to answer complex queries over 100+ public USDA documents.",
    impact: [
      "+40% relevance improvement",
      "Real-time inference via local Mistral (Ollama)",
      "Persistent chat memory using PostgreSQL JSONB"
    ],
    tech: ["React", "Tailwind", "FastAPI", "Python", "FAISS + BM25", "RAG", "PostgreSQL"],
    architecture: "USDA PDFs → text chunking & embeddings → FAISS + BM25 vector search → cross-encoder reranker → Mistral response via FastAPI → PostgreSQL chat memory → React chat UI",
    github: "https://github.com/Aruthrasathishkumar/usda-chatbot"
  },
  {
    id: "cnn-gru-predictor",
    title: "Academic Performance Predictor (CNN-GRU)",
    subtitle: "Deep Learning | PyTorch · NumPy · Pandas",
    description: "A hybrid CNN-GRU deep learning model predicting student performance using temporal coding patterns.",
    impact: [
      "89% accuracy",
      "Processes 1K+ logs in real time",
      "67% faster student interventions"
    ],
    tech: ["PyTorch", "NumPy", "Pandas", "Scikit-learn", "Python"],
    architecture: "Data preprocessing → feature extraction (CNN) → temporal modeling (GRU) → classification → early warning system",
    github: "https://github.com/Aruthrasathishkumar/academic-performance-predictor-CNN-GRU"
  },
  {
    id: "voice-qa",
    title: "Anonymous Voice Q&A Platform",
    subtitle: "Real-Time | React · Node.js · Socket.io · MongoDB",
    description: "A multilingual, real-time voice Q&A system powered by Whisper ASR, WebSockets, and translation APIs.",
    impact: [
      "Supports 50+ live voice queries",
      "<100ms update latency",
      "Supports 10+ languages"
    ],
    tech: ["React", "Node.js", "OpenAI Whisper", "Socket.io", "Google Translator API", "Web Sockets", "MongoDB"],
    architecture: "Voice capture → real-time delivery via WebSockets → Node.js backend → Whisper transcription + translation APIs → MongoDB message store → real-time updates to all participants",
    github: "https://github.com/Aruthrasathishkumar/anonymous-voice-QA-platform"
  },
  {
    id: "url-shortener",
    title: "URL Shortener Platform",
    subtitle: "Backend Systems | React · Node.js · Express · PostgreSQL",
    description: "A Production-ready URL shortener that lets users create custom short links, track click analytics, and manage links from a secure dashboard.",
    impact: [
      "80% faster link creation through custom slugs and expiration",
      "Click analytics with referrer, device, and geo tracking",
      "Abuse-resistant backend with rate limiting"
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "REST API", "Tailwind CSS", "Rate Limiting"],
    architecture: "Browser → Authenticated dashboard (React, JWT) → Link service (Node.js/Express) → PostgreSQL (short code + metadata) → redirect responses → click events logged and surfaced in analytics view",
    github: "https://github.com/Aruthrasathishkumar/url-shortener"
  },
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    subtitle: "Full-Stack Web | React · Node.js · PostgreSQL",
    description: "A full-stack dashboard to track job applications, statuses, and deadlines with a Kanban-style workflow.",
    impact: [
      "drag-and-drop pipeline that reduces manual work by 40%",
      "Search, filters, and CSV export for quick slicing",
      "Reminder engine with scheduled deadline notifications"
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT", "REST API", "Chrome Extension"],
    architecture: "Client (React) → API layer (Node.js) → PostgreSQL for applications, status and notes → React dashboard renders Kanban board, filters, and CSV export",
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
