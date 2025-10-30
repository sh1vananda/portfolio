import React, { useState } from 'react';

const resumeData = {
  name: 'Shivananda Reddy Kankanala',
  title: 'Full-Stack Developer',
  summary: 'Versatile Full-Stack Developer with experience building robust and scalable applications. Proficient across the stack, from crafting responsive frontends with modern frameworks to engineering efficient backends in languages like Rust, Go, and Node.js. Passionate about clean code, performance optimization, and creating seamless user experiences.',
  contact: {
    email: 'shivanandareddy.kankanala@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shivananda-reddy-kankanala/',
    github: 'https://github.com/sh1vananda'
  },
  skills: {
    languages: ['Python', 'JavaScript', 'Rust', 'Solidity', 'SQL', 'C#', 'Dart', 'Go'],
    backend: ['Node.js (Express)', 'Django', 'ASP.NET'],
    frontend: ['React.js', 'Svelte', 'HTML5', 'Tailwind'],
    databases: ['PostgreSQL', 'MySQL', 'Firebase'],
    cloudDevOps: ['Git', 'Docker', 'Postman', 'Playwright'],
  },
  experience: [
     {
      company: 'Altibbe Health Pvt. Ltd.',
      position: 'Blockchain Developer Intern',
      duration: 'May \'25',
      responsibilities: [
        'Developed gas-efficient Solidity smart contracts for tamper-proof audits.',
        'Designed an on-chain audit system for immutable process tracking.',
        'Built a secure Node.js API gateway for real-time blockchain logic integration.'
      ]
    },
    {
      company: 'TimeSlotter Technologies Pvt. Ltd.',
      position: 'Frontend Developer Intern',
      duration: 'Oct \'24 – Dec \'24',
      responsibilities: [
        'Delivered Flutter UIs from Figma with a 98% design match, reducing CPU usage by 40%.',
        'Integrated 10+ REST APIs using Dio, maintaining 99.9% app uptime.',
        'Increased user retention by 35% through optimized state management and custom UI animations.'
      ]
    },
    {
      company: 'Flixdin',
      position: 'Full Stack Developer Intern',
      duration: 'May \'24 – Jul \'24',
      responsibilities: [
        'Enhanced Android app features and UI performance using Kotlin.',
        'Integrated REST APIs for dynamic content delivery and collaborated on API contracts.',
        'Improved app stability and reliability through QA testing and bug resolution.'
      ]
    }
  ],
   projects: [
     {
      name: 'Rust Microkernel',
      technologies: ['Rust', 'x86 Assembly'],
      description: 'A capability-based microkernel for x86 with memory safety, featuring fast message-passing IPC and an optimized cache-friendly memory layout.'
    },
    {
      name: 'Path Tracer',
      technologies: ['Rust'],
      description: 'A Monte Carlo physically-based renderer with global illumination and parallelized rendering for high-fidelity image synthesis.'
    },
    {
      name: 'ls-pro',
      technologies: ['Rust'],
      description: 'A modern, feature-rich replacement for the classic `ls` command, with features like Git integration and smart ignoring for a developer-friendly experience.'
    },
    {
      name: 'Cargo Space',
      technologies: ['Rust'],
      description: 'A fast disk usage analyzer with parallel scanning and integrated local LLM support via Ollama API for AI-driven storage insights.'
    },
    {
      name: 'Sync-cli',
      technologies: ['Go'],
      description: 'A cross-platform CLI tool that automates synchronization of package manifests, reducing configuration time from hours to minutes.'
    },
    {
      name: 'Local Network Pastebin',
      technologies: ['Go'],
      description: 'A lightweight, secure pastebin service for local networks with both web and CLI interfaces, enabling ephemeral code sharing in controlled environments.'
    },
    {
      name: 'Voice Diary',
      technologies: ['Next.js', 'TypeScript', 'Ollama'],
      description: 'A web-based voice journaling app with real-time speech recognition, AI-powered text processing, and local-first data storage for privacy.'
    },
    {
      name: 'Do Doing Done',
      technologies: ['JavaScript', 'Socket.io', 'Flask'],
      description: 'A real-time collaborative task management application with a Kanban-style interface for seamless team-based project tracking.'
    },
    {
      name: 'Wiki Deck',
      technologies: ['HTMX', 'JavaScript', 'Python'],
      description: 'An immersive, swipeable deck for discovering random Wikipedia articles, showcasing a fast, server-driven UI built with HTMX.'
    },
     {
      name: 'Atra',
      technologies: ['Next.js', 'Firebase'],
      description: 'A multi-tenant loyalty system with QR-based point collection, redemption, and a unified wallet, including business-facing analytics dashboards.'
    },
     {
      name: 'Movie Reviews',
      technologies: ['React', 'Next.js', 'Sanity.io'],
      description: 'A static review system with custom content schemas, a vector-based recommendation engine, and automated deployment pipelines.'
    },
    {
      name: 'Hyperlocal Chat Application',
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      description: 'A mobile chat platform with real-time messaging in geofenced zones. Reduced query latency by 60% with a custom Node.js backend.'
    },
    {
      name: 'Elqen - Decentralized ROSCA System',
      technologies: ['Solidity', 'React', 'TypeScript', 'EVM'],
      description: 'Smart contracts for automated group savings, enforcing trustless fund cycles, with a React dApp for secure user interactions.'
    },
    {
      name: 'sustAIn: AI for Sustainable Materials',
      technologies: ['GNN', 'VAE', 'NSGA-III'],
      description: 'A framework for predicting and optimizing sustainable material compositions using GNN/VAE models, achieving multi-objective optimization.'
    },
  ],
};

const AboutView = ({ data }) => (
  <p className="max-w-3xl text-lg md:text-xl font-light leading-relaxed">{data.summary}</p>
);

const SkillsView = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Object.entries(data.skills).map(([category, items]) => (
      <div key={category}>
        <h3 className="text-lg font-semibold text-slate-100 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span key={skill} className="text-sm bg-slate-800 text-slate-300 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ExperienceView = ({ data }) => (
  <div className="space-y-8">
    {data.experience.map((job, index) => (
      <div key={index}>
        <div className="flex justify-between items-baseline">
          <h3 className="text-xl font-semibold text-slate-100">{job.position}</h3>
          <span className="text-sm text-slate-400">{job.duration}</span>
        </div>
        <p className="text-slate-400 mb-3">{job.company}</p>
        <ul className="space-y-2 list-disc list-inside text-slate-300 font-light">
          {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

const ProjectsView = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {data.projects.map((project, index) => (
      <div key={index} className="bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.name}</h3>
          <p className="text-blue-500 mb-3 text-sm">{project.technologies.join(' • ')}</p>
          <p className="text-slate-400 text-base font-light">{project.description}</p>
      </div>
    ))}
  </div>
);

const ContactView = ({ data }) => (
  <div className="space-y-4">
    <a href={`mailto:${data.contact.email}`} className="flex items-center group">
      <EmailIcon />
      <span className="ml-4 text-slate-300 group-hover:text-blue-500 transition-colors">{data.contact.email}</span>
    </a>
    <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group">
      <LinkedInIcon />
      <span className="ml-4 text-slate-300 group-hover:text-blue-500 transition-colors">LinkedIn</span>
    </a>
    <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center group">
      <GitHubIcon />
      <span className="ml-4 text-slate-300 group-hover:text-blue-500 transition-colors">GitHub</span>
    </a>
  </div>
);

const App = () => {
  const [activeView, setActiveView] = useState('about');
  const views = ['about', 'skills', 'experience', 'projects', 'contact'];

  const renderContent = () => {
    switch (activeView) {
      case 'about': return <AboutView data={resumeData} />;
      case 'skills': return <SkillsView data={resumeData} />;
      case 'experience': return <ExperienceView data={resumeData} />;
      case 'projects': return <ProjectsView data={resumeData} />;
      case 'contact': return <ContactView data={resumeData} />;
      default: return <AboutView data={resumeData} />;
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-300 flex justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">{resumeData.name}</h1>
          <p className="text-xl md:text-2xl text-blue-500">{resumeData.title}</p>
        </header>
        
        <nav className="flex flex-wrap gap-2 mb-8">
          {views.map(view => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 capitalize ${activeView === view ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              {view}
            </button>
          ))}
        </nav>

        <main key={activeView} className="animate-fade-in">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// SVG Icons
const EmailIcon = () => <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LinkedInIcon = () => <svg className="w-6 h-6 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GitHubIcon = () => <svg className="w-6 h-6 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;

export default App;
