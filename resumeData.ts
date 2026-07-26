/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "Shivananda Reddy Kankanala",
  title: "Software Engineer | AI & Systems",
  summary:
    "Software Engineer specializing in high-performance desktop applications, low-level systems programming, edge architectures, and local AI agent integration. Proficient across Rust, Zig, Python, TypeScript, and Go.",
  contact: {
    email: "shivanandareddy.kankanala@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivananda-reddy-kankanala/",
    github: "https://github.com/sh1vananda",
  },
  skills: {
    languages: [
      "Python",
      "Rust",
      "TypeScript",
      "Go",
      "Zig",
      "SQL",
      "x86 Assembly",
      "Solidity",
      "C#",
      "Dart",
    ],
    ai: [
      "Agentic Workflows",
      "Local LLMs",
      "Context Engineering",
      "Tool Calling",
      "RAG Pipelines",
    ],
    systems: [
      "Multithreading",
      "Concurrency",
      "Process Isolation",
      "IPC",
      "WebAssembly",
      "REST APIs",
      "Cron Automation",
    ],
    frameworks: [
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "Tauri",
      "Svelte",
      "TailwindCSS",
      "Flutter",
    ],
    databasesInfra: [
      "Cloudflare Workers",
      "Workers KV",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Docker",
      "Git",
      "Linux",
    ],
  },
  experience: [
    {
      company: "Volkswagen Group Digital Solutions",
      position: "Software Engineer Trainee",
      duration: "Nov 2025 – Present",
      description:
        "Developing enterprise full-stack software and backend API microservices in Python and TypeScript. Participating in system architecture design, automated testing pipelines, and agile software delivery.",
    },
    {
      company: "Altibbe Health Pvt. Ltd.",
      position: "Full Stack Blockchain Developer Intern",
      duration: "May 2025",
      description:
        "Engineered gas-efficient Solidity smart contracts and an on-chain audit system for tamper-proof certification. Built a Node.js API gateway to integrate real-time blockchain logic with legacy infrastructure.",
    },
    {
      company: "TimeSlotter Technologies",
      position: "Frontend Developer Intern",
      duration: "Oct 2024 – Dec 2024",
      description:
        "Delivered Flutter UIs from Figma with 98% design match and reduced CPU usage by 40% through state tree refactoring. Integrated 10+ REST APIs using Dio, maintaining 99.9% uptime.",
    },
    {
      company: "Flixdin",
      position: "Full Stack Developer Intern",
      duration: "May 2024 – July 2024",
      description:
        "Enhanced Android app features in Kotlin, cutting pre-release integration bugs by 30% through unit testing and automated QA pipelines.",
    },
  ],
  projects: [
    {
      name: "AI Task Planner",
      technologies: [
        "Cloudflare Workers",
        "Workers AI",
        "Workers KV",
        "Google Tasks API",
      ],
      description:
        "Autonomous edge planner syncing AI-generated tasks to Google Tasks, backed by KV state and idempotency.",
      link: "https://github.com/sh1vananda/ai-task-planner",
    },
    {
      name: "Cargo Space",
      technologies: ["Rust", "Rayon", "Tokio", "Local LLMs"],
      description:
        "Multi-threaded disk usage analyzer built with Rayon for sub-second directory scanning. Integrates local AI models to process natural language file queries and generate storage cleanup plans.",
      link: "https://github.com/sh1vananda/cargo-space",
    },
    {
      name: "Nebula",
      technologies: ["Zig", "CUDA", "C ABI", "Win32 API"],
      description:
        "Procedural path tracer featuring BVH acceleration, custom PNG encoding, and dynamic CUDA kernel bindings. Integrates with Windows desktop APIs for automated background generation.",
      link: "https://github.com/sh1vananda/nebula",
    },
    {
      name: "Sclerite",
      technologies: ["Rust", "WebAssembly", "Cloudflare Workers", "React"],
      description:
        "Edge-native image watermarking engine compiled to WebAssembly. Executes direct RGBA buffer manipulation for sub-10ms layout compositing, paired with a React client for live previews.",
      link: "https://github.com/sh1vananda/sclerite",
    },
    {
      name: "GUR Engine",
      technologies: ["Rust", "WGPU", "Custom ECS"],
      description:
        "Custom 2D game engine built in Rust. Features proprietary rendering pipelines, an Entity Component System (ECS), spatial indexing, and native physics integration.",
      link: "https://github.com/sh1vananda/gur-engine",
    },
    {
      name: "Goo",
      technologies: ["Rust", "Tauri", "React", "TypeScript"],
      description:
        "Cross-platform media tracker daemon. Implements deterministic regex pipelines for log parsing, local JSON caching, and secure OS keyring integration.",
      link: "https://github.com/sh1vananda/goo",
    },
    {
      name: "Project Leach",
      technologies: ["Next.js", "TypeScript", "Web Workers"],
      description:
        "Stateless CMS architecture that encodes compressed document payloads directly into URL routes, utilizing edge computing for distributed content persistence.",
      link: "https://github.com/sh1vananda/project-leach",
    },
    {
      name: "LiteERP",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
      description:
        "Modular ERP engine built with a zero-abstraction backend. Features low-overhead routing, strict transactional boundaries, and real-time state synchronization.",
      link: "https://github.com/sh1vananda/lite-erp",
    },
    {
      name: "sustAIn",
      technologies: ["Python", "PyTorch", "GNN", "VAE", "NSGA-III"],
      description:
        "Deep learning framework combining Graph Neural Networks and VAEs to generate sustainable material compositions. Uses multi-objective evolutionary algorithms to optimize cost and performance.",
      link: "https://github.com/sh1vananda/sustain",
    },
    {
      name: "Rust Microkernel",
      technologies: ["Rust", "x86 Assembly"],
      description:
        "Capability-based x86 microkernel featuring hardware memory protection, strict process isolation, and zero-copy lock-free IPC primitives.",
      link: "https://github.com/sh1vananda/rust-microkernel",
    },
    {
      name: "Path Tracer",
      technologies: ["Rust"],
      description:
        "Monte Carlo physically-based renderer featuring global illumination, bounding volume hierarchies, and parallelized execution.",
      link: "https://github.com/sh1vananda/rust-path-tracer",
    },
    {
      name: "ls-pro",
      technologies: ["Rust"],
      description:
        "Feature-rich Rust replacement for the ls command. Includes Git status integration, smart ignoring, and performance-optimized filesystem traversal.",
      link: "https://github.com/sh1vananda/ls-pro",
    },
    {
      name: "Sync-cli",
      technologies: ["Go"],
      description:
        "Cross-platform Go CLI that automates the generation and synchronization of package manifests across disparate package managers.",
      link: "https://github.com/sh1vananda/sync-cli",
    },
    {
      name: "Local Network Pastebin",
      technologies: ["Go", "JavaScript"],
      description:
        "Secure LAN-only pastebin service featuring an in-memory database, time-based expiration, and dual CLI/Web interfaces.",
      link: "https://github.com/sh1vananda/pastebin",
    },
    {
      name: "HCMS",
      technologies: ["SvelteKit", "TypeScript", "Supabase", "PostgreSQL"],
      description:
        "Self-hosted headless CMS built on PostgreSQL. Features role-based authentication, Row Level Security, and a modular RESTful content API.",
      link: "https://github.com/sh1vananda/hcms",
    },
    {
      name: "Voice Diary",
      technologies: ["Next.js", "TypeScript", "Local LLMs", "Web Speech API"],
      description:
        "Privacy-first web application combining client-side speech recognition with local AI text processing and offline-first storage.",
      link: "https://github.com/sh1vananda/voice-diary",
    },
    {
      name: "Godrotted",
      technologies: ["React", "Next.js", "TypeScript", "Sanity.io"],
      description:
        "Static review platform driven by custom content schemas, featuring a vector-based recommendation engine and a highly custom scroll-linked UI.",
      link: "https://godrotted.vercel.app",
    },
    {
      name: "Wiki Deck",
      technologies: ["HTMX", "Python", "Flask", "JavaScript"],
      description:
        "Server-driven web application rendering immersive, swipeable Wikipedia discovery feeds using HTMX and minimal client-side JavaScript.",
      link: "https://github.com/sh1vananda/wiki-deck",
    },
    {
      name: "Do Doing Done",
      technologies: ["JavaScript", "Socket.io", "Flask"],
      description:
        "Collaborative task management platform and browser extension using WebSockets for real-time Kanban board synchronization.",
      link: "https://github.com/sh1vananda/do-doing-done",
    },
    {
      name: "Atra",
      technologies: ["Next.js", "Firebase"],
      description:
        "Multi-tenant loyalty system supporting QR-based point transactions, unified digital wallets, and business analytics dashboards.",
      link: "https://github.com/sh1vananda/atra",
    },
    {
      name: "Hyperlocal Chat Application",
      technologies: ["Flutter", "Node.js", "Firebase", "Uber-H3"],
      description:
        "Geofenced real-time mobile chat platform utilizing Uber H3 spatial indexing to optimize backend geospatial queries.",
      link: "https://github.com/sh1vananda/kiwi-hyperlocal-chat",
    },
    {
      name: "Elqen - Decentralized ROSCA System",
      technologies: ["Solidity", "React", "TypeScript", "OpenZeppelin"],
      description:
        "EVM smart contracts enforcing trustless fund cycles for group savings, integrated with a secure React Web3 interface.",
      link: "https://github.com/sh1vananda/elqen",
    },
    {
      name: "PCOS-Predict",
      technologies: ["Python", "TensorFlow", "Scikit-Learn"],
      description:
        "Diagnostic classification pipeline evaluating clinical features with SMOTE balancing to achieve high-accuracy predictive modeling.",
      link: "https://github.com/sh1vananda/pcos-predict",
    },
  ],
};
