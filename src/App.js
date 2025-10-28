import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const bgColor = darkMode ? 'bg-black' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';
  const borderColor = 'border-gray-600';
  const inverseBgColor = darkMode ? 'bg-white' : 'bg-black';
  const inverseTextColor = darkMode ? 'text-black' : 'text-white';
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
    let sectionElements = {};
    sections.forEach(id => { sectionElements[id] = document.getElementById(id); });

    const handleScroll = () => {
      const headerOffset = 150;
      const scrollPosition = window.scrollY + headerOffset;
      const windowHeight = window.innerHeight;
      const totalPageHeight = document.documentElement.scrollHeight;
      let currentSection = 'about';

      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const element = sectionElements[sectionId];
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            currentSection = sectionId;
          } else {
            break;
          }
        }
      }
      if (window.scrollY + windowHeight >= totalPageHeight - 50) {
          currentSection = sections[sections.length - 1];
      }
      setActiveSection(prevSection => (prevSection !== currentSection ? currentSection : prevSection));
    };

    let scrollTimeout;
    const debouncedScrollHandler = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const resumeData = {
    name: 'Shivananda Reddy Kankanala',
    title: 'Full-Stack Developer',
    summary: 'Versatile Full-Stack Developer with practical experience building robust and scalable applications. Proficient across the stack, from crafting responsive frontends with modern frameworks to engineering efficient backends in languages like Rust, Go, and Node.js. Passionate about clean code, performance optimization, and creating seamless user experiences.',
    contact: {
      email: 'shivanandareddy.kankanala@gmail.com',
      phone: '+91-6303032825',
      linkedin: 'https://www.linkedin.com/in/shivananda-reddy-kankanala/',
      github: 'https://github.com/sh1vananda'
    },
    education: {
      degree: 'B.Tech in Computer Science and Engineering',
      university: 'Vellore Institute of Technology (VIT) | Vellore, India',
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
          'Developed gas-efficient Solidity smart contracts for EVM-based certification, enabling tamper-proof, transparent audits',
          'Designed and implemented an on-chain audit system for verifiable, immutable process tracking.',
          'Built a secure Node.js API gateway to integrate real-time blockchain logic with legacy infrastructure.'
        ]
      },
      {
        company: 'TimeSlotter Technologies Pvt. Ltd.',
        position: 'Frontend Developer Intern',
        duration: 'Oct \'24 – Dec \'24',
        responsibilities: [
          'Delivered high-fidelity Flutter UIs from Figma, achieving 98% design match and reducing CPU usage by 40%.',
          'Integrated 10+ REST APIs using Dio with robust error handling and maintained 99.9% app uptime.',
          'Increased user retention by 35% through optimized Riverpod state management and custom UI animations.'
        ]
      },
      {
        company: 'Flixdin',
        position: 'Full Stack Developer Intern',
        duration: 'May \'24 – Jul \'24',
        responsibilities: [
          'Enhanced Android app features and user experience using Kotlin, focusing on UI performance and responsiveness.',
          'Integrated REST APIs for dynamic content delivery and collaborated with backend teams on API contracts.',
          'Performed QA testing, Diagnosed and resolved bugs, improving app stability and reliability.'
        ]
      }
    ],
     projects: [
       {
        name: 'Rust Microkernel',
        technologies: ['Rust', 'x86 Assembly'],
        description: 'A capability-based microkernel for x86 with memory safety and process isolation, featuring fast message-passing IPC and an optimized cache-friendly memory layout.'
      },
       {
        name: 'Path Tracer',
        technologies: ['Rust'],
        description: 'A Monte Carlo physically-based renderer with global illumination and parallelized rendering for high-fidelity image synthesis.'
      },
       {
        name: 'ls-pro',
        technologies: ['Rust'],
        description: 'A modern, feature-rich replacement for the classic `ls` command in Rust, with features like Git integration and smart ignoring for a developer-friendly experience.'
      },
      {
        name: 'Cargo Space',
        technologies: ['Rust'],
        description: 'A fast disk usage analyzer with parallel scanning and integrated local LLM support via Ollama API for AI-driven storage insights and interactive cleanup recommendations.'
      },
      {
        name: 'Sync-cli',
        technologies: ['Go'],
        description: 'A cross-platform CLI tool in Go that automates the synchronization and generation of package manifests across multiple package managers, reducing configuration time from hours to minutes.'
      },
      {
        name: 'Local Network Pastebin',
        technologies: ['Go'],
        description: 'A lightweight, secure pastebin service for local networks with both web and CLI interfaces, enabling ephemeral code and text sharing in controlled environments.'
      },
      {
        name: 'Voice Diary',
        technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Ollama'],
        description: 'A web-based voice journaling app with real-time speech recognition, AI-powered text processing, and local-first data storage for enhanced privacy.'
      },
      {
        name: 'Do Doing Done',
        technologies: ['JavaScript', 'Socket.io', 'Tailwind'],
        description: 'A real-time collaborative task management application and web extension, built with Flask and SocketIO for managing tasks with a Kanban-style interface.'
      },
      {
        name: 'Wiki Deck',
        technologies: ['HTMX', 'JavaScript'],
        description: 'An immersive, swipeable deck for discovering random Wikipedia articles with a minimalist reader, showcasing a fast, server-driven UI built with Python, Flask, and HTMX.'
      },
       {
        name: 'Atra',
        technologies: ['Next.js', 'Firebase'],
        description: 'A multi-tenant loyalty system with QR-based point collection, redemption, and unified wallet support, including business-facing dashboards for analytics.'
      },
       {
        name: 'Movie Reviews',
        technologies: ['React', 'Next.js', 'TypeScript', 'Sanity.io'],
        description: 'A static review system with custom content schemas, a vector-based recommendation engine, and automated dual-pipeline deployment with content sync.'
      },
      {
        name: 'Hyperlocal Chat Application',
        technologies: ['Flutter', 'Node.js', 'Firebase'],
        description: 'A mobile chat platform with real-time messaging in geofenced zones. Reduced Firestore query latency by 60% with a custom Node.js Uber-H3 implementation.'
      },
       {
        name: 'Elqen – Decentralized ROSCA System',
        technologies: ['Solidity', 'React', 'TypeScript', 'EVM'],
        description: 'Smart contracts for automated group savings, enforcing trustless fund cycles, and a React dApp with wallet integration for secure user interactions.'
      },
       {
        name: 'sustAln: AI for Sustainable Materials',
        technologies: ['GNN', 'VAE', 'NSGA-III'],
        description: 'A framework for predicting and optimizing sustainable material compositions using GNN/VAE models, achieving multi-objective optimization.'
      },
    ],
    certifications: [
      'Meta Full Stack Developer',
      'Microsoft SQL Server',
      'Google Cloud Computing Foundations'
    ],
    leadership: {
      organization: 'Founder, Small Pond (Student Incubator) | VIT Vellore',
      description: 'Founded and led VIT\'s first student tech incubator, mentoring teams from ideation to MVP delivery.'
    }
  };

  return (
    <div className={`${bgColor} ${textColor} min-h-screen font-sans transition-colors duration-300`}>
      <nav className={`${bgColor} ${borderColor} fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${inverseBgColor} ${inverseTextColor} transition-colors duration-300`}>S</div>
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-6">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className={`text-sm font-light pb-1 border-b ${textColor} ${activeSection === link.id ? `${borderColor}` : 'border-transparent'} hover:${borderColor} transition-colors duration-300`}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${inverseBgColor} ${inverseTextColor} hover:opacity-80 transition-colors duration-300`} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 2a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-2 0V2zm0 15a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-2 0v-1zm6.364-11.364a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707zm-9.9 9.9a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707zM18 9a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zm-16 0a1 1 0 01-1 1H1a1 1 0 010-2h1a1 1 0 011 1zm10.364-.364a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0zM6.05 13.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${textColor} p-1 transition-colors duration-300`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />)}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`${bgColor} ${borderColor} border-t shadow-md md:hidden transition-colors duration-300`}>
            <ul className="flex flex-col p-4 space-y-1">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className={`block w-full text-left px-3 py-2 rounded-sm transition-colors duration-150 ${activeSection === link.id ? `${inverseBgColor} ${inverseTextColor}` : `${textColor} hover:${inverseBgColor} hover:${inverseTextColor}`}`}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <section id="about" className="pt-28 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className={`text-4xl md:text-5xl font-light mb-4 tracking-tight ${textColor} transition-colors duration-300`}>{resumeData.name}</h1>
          <p className={`${textColor} text-xl md:text-2xl mb-8 opacity-80 transition-colors duration-300`}>{resumeData.title}</p>
          <p className={`${textColor} max-w-2xl mx-auto text-lg font-light mb-10 opacity-90 transition-colors duration-300`}>{resumeData.summary}</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => scrollToSection('contact')} className={`px-6 py-3 border ${inverseBgColor} ${inverseTextColor} border-transparent hover:opacity-80 transition-colors duration-300`}>Contact Info</button>
            <button onClick={() => scrollToSection('projects')} className={`px-6 py-3 border ${borderColor} ${textColor} ${bgColor} hover:${inverseBgColor} hover:${inverseTextColor} transition-colors duration-300`}>View Projects</button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6">
        <section id="education" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>Education</h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
            <h3 className="text-xl font-light">{resumeData.education.degree}</h3>
            <p className={`${textColor} opacity-80 mb-1`}>{resumeData.education.university}</p>
          </div>
        </section>

        <section id="skills" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>Technical Skills</h2>
          <div className="space-y-6">
            {Object.entries(resumeData.skills).map(([category, items]) => (
              <div key={category} className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
                <h3 className={`text-xl font-light mb-3 capitalize ${textColor}`}>{category.replace(/([A-Z])/g, ' $1')}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (<span key={i} className={`text-sm ${borderColor} ${textColor} ${bgColor} px-3 py-1 rounded-full border transition-colors duration-300`}>{skill}</span>))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>Professional Experience</h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="text-xl font-light">{job.position}</h3>
                  <span className={`${textColor} opacity-80 text-sm sm:text-base`}>{job.duration}</span>
                </div>
                <p className={`${textColor} opacity-80 mb-3`}>{job.company}</p>
                <ul className="space-y-2 list-disc list-inside">
                  {job.responsibilities.map((resp, i) => (<li key={i} className={`${textColor} opacity-90`}>{resp}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>Projects</h2>
          <div className="mt-6">
            <div className={`flex overflow-x-auto space-x-6 pb-4 ${darkMode ? 'scrollbar-dark' : 'scrollbar-light'}`}>
              {resumeData.projects.map((project, index) => (
                <div key={index} className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} w-[300px] sm:w-[350px] flex-shrink-0 transition-colors duration-300`}>
                  <h3 className="text-xl font-light mb-2">{project.name}</h3>
                  <p className={`${textColor} opacity-80 mb-3 text-sm`}>{project.technologies.join(' • ')}</p>
                  <p className={`${textColor} opacity-90 text-base font-light`}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>Certifications</h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
            <ul className="space-y-3">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className={`${textColor} opacity-90`}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="leadership" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>Leadership & Initiatives</h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
            <h3 className="text-xl font-light mb-3">{resumeData.leadership.organization}</h3>
            <p className={`${textColor} opacity-90`}>{resumeData.leadership.description}</p>
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>Contact Info</h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
              <h3 className="text-xl font-light mb-4">Connect With Me</h3>
              <ul className="space-y-4">
                <li className="flex items-center"><svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><a href={`mailto:${resumeData.contact.email}`} className={`${textColor} opacity-90 hover:opacity-100 break-all hover:underline transition-colors duration-300`}>{resumeData.contact.email}</a></li>
                <li className="flex items-center"><svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span className={`${textColor} opacity-90`}>{resumeData.contact.phone}</span></li>
                <li className="flex items-center"><svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg><a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className={`${textColor} opacity-90 hover:opacity-100 hover:underline transition-colors duration-300`}>LinkedIn</a></li>
                <li className="flex items-center"><svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg><a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className={`${textColor} opacity-90 hover:opacity-100 hover:underline transition-colors duration-300`}>GitHub</a></li>
              </ul>
            </div>
        </section>
      </main>
      <div className="pb-16"></div>
    </div>
  );
};

export default App;
