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
    title: "Technical Skills",
    icon: "wrench",
    items: [
      "Backend development (APIs · microservices)",
      "Distributed systems & concurrency",
      "AI/ML engineering",
      "Data structures & algorithms",
      "System design & architecture",
      "DevOps & CI/CD practices"
    ]
  },
  {
    title: "Web & Backend",
    icon: "globe",
    items: [
      "Frameworks: Node.js · Express.js · FastAPI · Django",
      "Frontend: React · Next.js",
      "API technologies: REST · GraphQL · WebSockets",
      "Patterns: event-driven workflows · async programming"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    items: [
      "Core ML: PyTorch · TensorFlow · Scikit-learn",
      "Deep learning: CNN · RNN/GRU",
      "GenAI & LLMs: RAG · FAISS · embeddings · LLM integration (Mistral/Ollama)",
      "Agentic AI: tool-using agents · reasoning loops · retrieval-augmented workflows",
      "Speech ML: Whisper ASR",
      "Data tools: Pandas · NumPy · feature engineering"
    ]
  },
  {
    title: "Cloud, DevOps & Databases",
    icon: "cloud",
    items: [
      "Cloud: AWS (Lambda · ECS · EC2 · S3 · RDS · DynamoDB) · Azure",
      "DevOps: Docker · Kubernetes · GitHub Actions",
      "Databases: PostgreSQL · MySQL · MongoDB · Redis",
      "Tools: Git · Linux · Kafka · Jira"
    ]
  }
];

export const certifications = [
  {
    title: "AWS Academy — Data Engineering",
    issuer: "Amazon Web Services (AWS Academy)",
    type: "Training Program",
    badge: "TRAINED",
    stars: 4,
    description: "Verified training in data pipelines, ETL workflows, distributed data processing, and cloud-native data engineering patterns."
  },
  {
    title: "Microsoft Certified — Azure Fundamentals (AZ-900)",
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
    title: "USDA Rural Development Chatbot",
    subtitle: "RAG System | React · FastAPI · PostgreSQL · FAISS · Mistral",
    description: "A production-grade Retrieval-Augmented Generation (RAG) platform built to answer complex queries over 200+ public USDA documents.",
    impact: [
      "+40% relevance improvement",
      "Real-time inference via local Mistral (Ollama)",
      "Persistent chat memory using PostgreSQL JSONB"
    ],
    tech: ["React", "Tailwind", "Redux", "FastAPI", "Python", "FAISS", "PostgreSQL", "Docker"],
    architecture: "Document ingestion → embeddings → FAISS vector search → cross-encoder reranker → Mistral response → UI delivery",
    github: "https://github.com/Aruthrasathishkumar"
  },
  {
    title: "Academic Performance Predictor (CNN-GRU)",
    subtitle: "Deep Learning | PyTorch · NumPy · Pandas",
    description: "A hybrid CNN-GRU model predicting student performance using temporal coding patterns.",
    impact: [
      "89% accuracy",
      "Handles 2K+ logs in real time",
      "67% faster student interventions"
    ],
    tech: ["PyTorch", "NumPy", "Pandas", "Scikit-learn", "Python"],
    architecture: "Data preprocessing → feature extraction (CNN) → temporal modeling (GRU) → classification → early warning system",
    github: "https://github.com/Aruthrasathishkumar"
  },
  {
    title: "Anonymous Voice Q&A Platform",
    subtitle: "Real-Time | React · Node.js · Whisper · Socket.io · MongoDB",
    description: "A multilingual voice Q&A system powered by Whisper ASR.",
    impact: [
      "500+ concurrent users",
      "<100ms update latency",
      "Supports 50+ languages"
    ],
    tech: ["React", "Node.js", "Express", "Whisper", "Socket.io", "MongoDB", "WebRTC"],
    architecture: "Voice capture → Whisper transcription → LLM processing → real-time delivery via WebSockets → persistent storage",
    github: "https://github.com/Aruthrasathishkumar"
  }
];

export const experiences = [
  {
    company: "George Mason University",
    role: "Graduate Teaching Assistant — Backend Systems",
    period: "Aug 2025 - Present",
    bullets: [
      "Mentor 100+ students on Node.js backends, SQL, and distributed design patterns",
      "Design reference implementations for REST APIs, authentication, and error handling",
      "Run debugging sessions that simulate real incident scenarios and system failures"
    ]
  },
  {
    company: "Verzeo Edutech",
    role: "Software Engineer Intern",
    period: "Aug 2023 – Jul 2024",
    bullets: [
      "Built full-stack features for an e-learning platform used by 1K+ students",
      "Optimized relational queries to reduce average API latency by ~30%",
      "Refactored Python services into modular components, speeding up feature delivery"
    ]
  }
];

export const contact = {
  email: "asathish@gmu.edu",
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
