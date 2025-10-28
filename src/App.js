import React, { useState, useEffect, useRef } from 'react';

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

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
  ],
};

const NavLink = ({ id, label, activeSection, scrollToSection, isMobile }) => (
  <li>
    <button
      onClick={() => scrollToSection(id)}
      className={`capitalize transition-colors duration-300 ${ isMobile ? 'block w-full text-left p-3' : 'pb-1'} ${ activeSection === id ? 'text-blue-500' : 'text-slate-400 hover:text-blue-500'}`}
    >
      {label}
    </button>
  </li>
);

const Header = ({ navLinks, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-slate-100">S</div>
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map(link => <NavLink key={link.id} {...link} activeSection={activeSection} scrollToSection={handleScrollToSection} />)}
          </ul>
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400">
                <MenuIcon />
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col p-2">
            {navLinks.map(link => <NavLink key={link.id} {...link} activeSection={activeSection} scrollToSection={handleScrollToSection} isMobile />)}
          </ul>
        </div>
      )}
    </header>
  );
};

const Section = ({ id, title, children }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section id={id} ref={ref} className={`py-16 md:py-24 transition-opacity duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-3xl font-light text-slate-100 mb-10 text-center">{title}</h2>
      {children}
    </section>
  );
};

const ProjectCard = ({ project }) => (
    <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 group hover:border-blue-500 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.name}</h3>
        <p className="text-blue-500 mb-3 text-sm">{project.technologies.join(' • ')}</p>
        <p className="text-slate-400 text-base font-light">{project.description}</p>
    </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
    });
  }, []);

  return (
    <div className="bg-slate-950 font-sans text-slate-300">
      <Header navLinks={sections.map(id => ({ id, label: id }))} activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="container mx-auto px-6 max-w-4xl">
        <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center pt-24">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-3 tracking-tight">{resumeData.name}</h1>
          <p className="text-xl md:text-2xl text-blue-500 mb-8">{resumeData.title}</p>
          <p className="max-w-3xl text-lg md:text-xl font-light leading-relaxed mb-10">{resumeData.summary}</p>
          <div className="flex space-x-4">
            <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Contact Me</button>
            <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-slate-800 text-slate-100 rounded-md hover:bg-slate-700 transition-colors">View Projects</button>
          </div>
        </section>

        <Section id="skills" title="Technical Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(resumeData.skills).map(([category, items]) => (
                    <div key={category} className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-100 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                        <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                            <span key={skill} className="text-sm bg-slate-800 text-slate-300 px-3 py-1 rounded-full">{skill}</span>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-800">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white font-bold">{job.company.charAt(0)}</div>
                <div className="pl-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-semibold text-slate-100">{job.position}</h3>
                    <span className="text-sm text-slate-400">{job.duration}</span>
                  </div>
                  <p className="text-slate-400 mb-3">{job.company}</p>
                  <ul className="space-y-2 list-disc list-inside text-slate-300 font-light">
                    {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>
        
        <Section id="projects" title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, index) => <ProjectCard key={index} project={project} />)}
            </div>
        </Section>

        <Section id="contact" title="Get In Touch">
            <div className="max-w-xl mx-auto text-center">
                <p className="text-lg font-light mb-8">Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.</p>
                <a href={`mailto:${resumeData.contact.email}`} className="inline-block px-8 py-4 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition-colors mb-12">
                    Say Hello
                </a>
                <div className="flex justify-center space-x-6">
                    <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors"><LinkedInIcon /></a>
                    <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors"><GitHubIcon /></a>
                </div>
            </div>
        </Section>
      </main>
      <footer className="text-center py-8 border-t border-slate-800 mt-16">
        <p className="text-sm text-slate-500">Designed & Built by Shivananda Reddy Kankanala</p>
      </footer>
    </div>
  );
};

const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m4 6H4" /></svg>;
const LinkedInIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GitHubIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;

export default App;
