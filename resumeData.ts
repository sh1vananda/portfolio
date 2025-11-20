/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "Shivananda Reddy Kankanala",
  title: "Full-Stack Developer",
  summary:
    "Versatile Full-Stack Developer with experience building robust and scalable applications. Proficient across the stack, from crafting responsive frontends in React to engineering efficient backends in Node.js, ASP.NET, Go, and Rust. Passionate about clean code, performance optimization, and creating seamless user experiences.",
  contact: {
    email: "shivanandareddy.kankanala@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivananda-reddy-kankanala/",
    github: "https://github.com/sh1vananda",
  },
  skills: {
    languages: [
      "Python",
      "JavaScript",
      "Rust",
      "Solidity",
      "SQL",
      "C#",
      "Dart",
      "Go",
    ],
    backend: ["Node.js (Express)", "Django", "ASP.NET"],
    frontend: ["React.js", "Svelte", "HTML5", "Tailwind"],
    databases: ["PostgreSQL", "MySQL", "Firebase"],
    cloudDevOps: ["Git", "Docker", "Postman", "Playwright"],
  },
  experience: [
    {
      company: "Altibbe Health Pvt. Ltd.",
      position: "Full Stack Blockchain Developer",
      duration: "May 2025",
      description:
        "Engineered gas-efficient Solidity smart contracts and a corresponding on-chain audit system to enable tamper-proof, transparent certification. I also built a secure Node.js API gateway to integrate this real-time blockchain logic with legacy infrastructure, serving as the sole blockchain specialist on the project.",
    },
    {
      company: "TimeSlotter Technologies",
      position: "Frontend Developer Intern",
      duration: "Oct 2024 – Dec 2024",
      description:
        "My primary focus was on front-end excellence, performing rigorous UI testing to achieve 98% design fidelity from Figma mockups. I implemented robust error handling for over ten REST APIs, which was critical in maintaining 99.9% system uptime, and optimized application performance by refactoring the widget tree to reduce CPU usage by 40%.",
    },
    {
      company: "Flixdin",
      position: "Full Stack Developer Intern",
      duration: "May 2024 – July 2024",
      description:
        "In a fast-paced Agile environment, I improved application stability, leading to a 22% reduction in the crash rate. My focus on quality involved writing and executing unit tests for API integrations, successfully cutting pre-release integration bugs by 30% while collaborating in sprints to review code and deliver features.",
    },
  ],
  projects: [
    {
      name: "Rust Microkernel",
      technologies: ["Rust", "x86 Assembly"],
      description:
        "A capability-based microkernel for x86 with memory safety, featuring fast message-passing IPC and an optimized cache-friendly memory layout.",
      link: "https://github.com/sh1vananda/rust-microkernel",
    },
    {
      name: "Path Tracer",
      technologies: ["Rust"],
      description:
        "A Monte Carlo physically-based renderer with global illumination and parallelized rendering for high-fidelity image synthesis.",
      link: "https://github.com/sh1vananda/rust-path-tracer",
    },
    {
      name: "ls-pro",
      technologies: ["Rust"],
      description:
        "A modern, feature-rich replacement for the classic `ls` command, with features like Git integration and smart ignoring for a developer-friendly experience.",
      link: "https://github.com/sh1vananda/ls-pro",
    },
    {
      name: "Cargo Space",
      technologies: ["Rust"],
      description:
        "A fast disk usage analyzer with parallel scanning and integrated local LLM support via Ollama API for AI-driven storage insights.",
      link: "https://github.com/sh1vananda/cargo-space",
    },
    {
      name: "Sync-cli",
      technologies: ["Go"],
      description:
        "A cross-platform CLI tool that automates synchronization of package manifests, reducing configuration time from hours to minutes.",
      link: "https://github.com/sh1vananda/sync-cli",
    },
    {
      name: "Local Network Pastebin",
      technologies: ["Go"],
      description:
        "A lightweight, secure pastebin service for local networks with both web and CLI interfaces, enabling ephemeral code sharing in controlled environments.",
      link: "https://github.com/sh1vananda/pastebin",
    },
    {
      name: "Voice Diary",
      technologies: ["Next.js", "TypeScript", "Ollama"],
      description:
        "A web-based voice journaling app with real-time speech recognition, AI-powered text processing, and local-first data storage for privacy.",
      link: "https://github.com/sh1vananda/voice-diary",
    },
    {
      name: "Do Doing Done",
      technologies: ["JavaScript", "Socket.io", "Flask"],
      description:
        "A real-time collaborative task management application with a Kanban-style interface for seamless team-based project tracking.",
      link: "https://github.com/sh1vananda/do-doing-done",
    },
    {
      name: "Wiki Deck",
      technologies: ["HTMX", "JavaScript", "Python"],
      description:
        "An immersive, swipeable deck for discovering random Wikipedia articles, showcasing a fast, server-driven UI built with HTMX.",
      link: "https://github.com/sh1vananda/wiki-deck",
    },
    {
      name: "Atra",
      technologies: ["Next.js", "Firebase"],
      description:
        "A multi-tenant loyalty system with QR-based point collection, redemption, and a unified wallet, including business-facing analytics dashboards.",
      link: "https://github.com/sh1vananda/atra",
    },
    {
      name: "Movie Reviews",
      technologies: ["React", "Next.js", "Sanity.io"],
      description:
        "A static review system with custom content schemas, a vector-based recommendation engine, and automated deployment pipelines.",
      link: "https://godrotted.vercel.app",
    },
    {
      name: "Hyperlocal Chat Application",
      technologies: ["Flutter", "Node.js", "Firebase"],
      description:
        "A mobile chat platform with real-time messaging in geofenced zones. Reduced query latency by 60% with a custom Node.js backend.",
      link: "https://github.com/sh1vananda/kiwi-hyperlocal-chat",
    },
    {
      name: "Elqen - Decentralized ROSCA System",
      technologies: ["Solidity", "React", "TypeScript", "EVM"],
      description:
        "Smart contracts for automated group savings, enforcing trustless fund cycles, with a React dApp for secure user interactions.",
      link: "https://github.com/sh1vananda/elqen",
    },
    {
      name: "PCOS-Predict",
      technologies: ["Python", "Keras", "TensorFlow", "Scikit-learn", "SMOTE"],
      description:
        "PCOS prediction using 44 clinical features, balanced with SMOTE and tested across 12 models. Reached 98% accuracy and perfect recall in 5-fold validation.",
      link: "",
    },
    {
      name: "sustAIn",
      technologies: ["GNN", "VAE", "NSGA-III"],
      description:
        "A framework for predicting and optimizing sustainable material compositions using GNN/VAE models, achieving multi-objective optimization.",
      link: "",
    },
  ],
};
