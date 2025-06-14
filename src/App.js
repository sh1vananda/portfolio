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
    const sections = ['about', 'education', 'skills', 'experience', 'projects', 'certifications', 'leadership', 'contact'];
    let sectionElements = {};
    sections.forEach(id => { sectionElements[id] = document.getElementById(id); });

    const handleScroll = () => {
      const headerOffset = 100;
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
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  // Resume data (unchanged)
  const resumeData = { /* ... resume data ... */ };
   resumeData.name = 'Shivananda Reddy Kankanala';
   resumeData.title = 'Full-Stack Developer';
   resumeData.summary = 'Blockchain-focused Software Developer with practical experience in decentralized applications and full-stack development. Proficient in Python, Rust, Typescript, JavaScript, Flutter, Solidity, Web3 technologies, and SQL databases. Demonstrated ability to develop blockchain solutions, optimize system performance, and build scalable applications.';
   resumeData.contact = {
     email: 'shivanandareddy.kankanala@gmail.com',
     phone: '+91-6303032825',
     linkedin: 'https://www.linkedin.com/in/shivananda-reddy-kankanala/',
     github: 'https://github.com/sh1vananda'
   };
   resumeData.education = {
     degree: 'B.Tech in Computer Science and Engineering',
     specialization: 'Blockchain',
     university: 'Vellore Institute of Technology (VIT), Vellore, India',
     graduationDate: 'May 2025'
   };
   resumeData.skills = {
     languages: ['Python', 'Rust', 'JavaScript', 'TypeScript', 'Dart', 'Go', 'SQL', 'HTML', 'CSS'],
     blockchain: ['Solidity', 'Ethereum', 'Web3.js', 'Ethers.js', 'Hyperledger Fabric', 'OpenZeppelin', 'ERC Standards'],
     backend: ['Node.js', 'Django', 'FastAPI', 'Flask', 'GraphQL'],
     frontend: ['Flutter', 'React.js', 'Svelte', 'Web3 UI libraries'],
     databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'IPFS'],
     devTools: ['Git', 'Docker', 'Hardhat', 'Foundry', 'Truffle', 'Postman',],
     "AI/Ml": ['TensorFlow', 'PyTorch', 'Scikit-learn', 'GNN', 'VAE', "NSGA-III", 'XGBoost', 'SHAP', "Reinforcement Learning"],
   };
   resumeData.experience = [
      {
       company: 'Altibbe Health Pvt. Ltd. | Hyderabad',
       position: 'Blockchain Developer Intern',
       duration: 'May \'25',
       responsibilities: [
         'Developed gas-efficient Solidity smart contracts for EVM-based certification, enabling tamper-proof, transparent audits',
         'Designed and implemented an on-chain audit system for verifiable, immutable process tracking.',
         'Built a secure Node.js API gateway to integrate real-time blockchain logic with legacy infrastructure.'
       ]
     },
     {
       company: 'TimeSlotter Technologies | Vellore',
       position: 'Frontend Developer Intern',
       duration: 'Oct \'24 – Dec \'24',
       responsibilities: [
         'Delivered high-fidelity Flutter UIs from Figma, achieving 98% design match and reducing CPU usage by 40%.',
         'Integrated 10+ REST APIs using Dio with robust error handling and maintained 99.9% app uptime.',
         'Increased user retention by 35% through optimized Riverpod state management and custom UI animations.'
       ]
     },
     {
       company: 'Flixdin | Vellore',
       position: 'Full Stack Developer Intern',
       duration: 'May \'24 – Jul \'24',
       responsibilities: [
         'Enhanced Android app features and user experience using Kotlin, focusing on UI performance and responsiveness.',
         'Integrated REST APIs for dynamic content delivery and collaborated with backend teams on API contracts.',
         'Performed QA testing, Diagnosed and resolved bugs, improving app stability and reliability.'
       ]
     }
   ];
    resumeData.projects = [
      {
       name: 'Rust Microkernel',
       technologies: ['Rust', 'x86 Assembly'],
       description: 'A memory-safe, capability-based microkernel for x86 featuring fast IPC, zero-copy lock-free data handling, and optimized isolation with minimal TCB.'
     },
      {
       name: 'Path Tracer',
       technologies: ['Rust'],
       description: 'Monte Carlo physically-based renderer in Rust with global illumination, parallelized rendering, and modular, trait-based extensibility.'
     },
      {
       name: 'ls-pro',
       technologies: ['Rust'],
       description: 'Modern ls replacement written in Rust. Supports recursive tree view (--tree), Git status integration (--git), .gitignore awareness, directory size calculation (--calculate-sizes), and a clean, developer-oriented layout. Designed for speed and usability.'
     },
      {
       name: 'Kiwi – Hyperlocal Chat Application',
       technologies: ['Node.js', 'Flutter', 'Firestore'],
       description: 'Real-time geospatial chat app enabling users in nearby H3-indexed zones to connect. Replaced client-heavy processing with custom server-side geospatial APIs, cutting API latency by 60%.'
     },
      {
       name: 'Do Doing Done',
       technologies: ['Flask', 'JavaScript', 'TailwindCSS', 'SocketIO'],
       description: 'A real-time task management application built with Flask and SocketIO. Supports room-based collaboration with unique room codes. Features include real-time synchronization, a three-column Kanban board (To Do, In Progress, Done), drag-and-drop task movement, inline editing, task assignment, priority levels, and due dates.'
     },
      {
       name: 'atra',
       technologies: ['Next.js', 'TailwindCSS', 'Firestore'],
       description: 'a digital loyalty platform enabling customers to collect and redeem points across businesses via a unified wallet. Businesses can create and manage loyalty programs, track activity, and access analytics through a dedicated dashboard. Supports QR-based point collection, reward redemption, and activity history.'
     },
     {
       name: 'sustAIn – AI for Sustainable Materials Design',
       technologies: ['Python', 'PyTorch', 'GNN', 'VAE', 'NSGA-III'],
       description: 'Framework for sustainable material design using GNN/VAE models with NSGA-III-based multi-objective optimization over cost, performance, and environmental impact, enabling accurate property prediction and novel candidate generation.'
     },
     {
       name: 'PCOS Diagnosis using Machine Learning',
       technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost'],
       description: 'A predictive tool for diagnosing PCOS with 98% accuracy using deep learning. Applied ensemble learning, SHAP-based interpretability, and hyperparameter tuning for robust model performance.'
     },
     {
       name: 'Blockchain Price Alert System',
       technologies: ['Python', 'PostgreSQL', 'Sveltekit', 'TailwindCSS', 'Web3.js'],
       description: 'A full-stack price alert platform for cryptocurrency users. Designed efficient backend pipelines to process high-frequency exchange API data and trigger real-time user alerts based on custom price rules.'
     },
     {
       name: 'Elqen – Decentralized Rotating Savings & Credit System',
       technologies: ['Python', 'PostgreSQL', 'Sveltekit', 'Web3.js'],
       description: 'Solidity-based ROSCA system with automated fund allocation, React frontend with wallet integration, and OpenZeppelin-secured smart contracts ensuring transactional integrity and real-time group contribution tracking.'
     },
     {
       name: 'Dynamic NFT System',
       technologies: ['Solidity', 'React.js', 'Chainlink', 'IPFS'],
       description: 'Dynamic NFTs that evolve based on real-world data using Chainlink oracles. Developed smart contracts in Solidity and integrated a React frontend for minting and managing tokens with metadata on IPFS.'
     },
     {
       name: 'Supply Chain Management on Blockchain',
       technologies: ['Chaincode (Go)', 'Hyperledger Fabric', 'Node.js', 'Express'],
       description: 'Blockchain-based asset tracking system using Hyperledger Fabric, Chaincode to enforce business logic and built Express APIs to interact with the ledger and visualize asset history.'
     }
   ];
   resumeData.certifications = [
     'Pursuing: Ethereum Degree, Rust & Solana Development Certification',
     'Google Cloud Computing Foundations',
     'MERN Full Stack Development'
   ];
   resumeData.leadership = {
     organization: 'Founder, Small Pond (Student Incubator) | VIT Vellore',
     description: 'Founded and managed first student-led multi-domain incubator, providing resources, mentorship, and collaborative spaces for student entrepreneurs. Created a framework for project evaluation, team-building, and milestone tracking for early-stage student ventures.'
   };

  return (
    <div className={`${bgColor} ${textColor} min-h-screen font-sans transition-colors duration-300`}>
      <nav className={`${bgColor} ${borderColor} fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${inverseBgColor} ${inverseTextColor} transition-colors duration-300`}
          >
            S
          </div>

          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-6">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-light pb-1 border-b ${textColor} ${
                      activeSection === link.id
                        ? `${borderColor}` 
                        : 'border-transparent' 
                    } hover:${borderColor} transition-colors duration-300`} 
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${inverseBgColor} ${inverseTextColor} hover:opacity-80 transition-colors duration-300`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 2a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-2 0V2zm0 15a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-2 0v-1zm6.364-11.364a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707zm-9.9 9.9a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707zM18 9a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zm-16 0a1 1 0 01-1 1H1a1 1 0 010-2h1a1 1 0 011 1zm10.364-.364a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0zM6.05 13.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
              
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${textColor} p-1 transition-colors duration-300`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`${bgColor} ${borderColor} border-t shadow-md md:hidden transition-colors duration-300`}>
            <ul className="flex flex-col p-4 space-y-1">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left px-3 py-2 rounded-sm transition-colors duration-150 ${
                      activeSection === link.id
                        ? `${inverseBgColor} ${inverseTextColor}` 
                        : `${textColor} hover:${inverseBgColor} hover:${inverseTextColor}`
                    }`}
                  >
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
          <img
            src="me.JPG"
            alt="Profile"
            className={`mx-auto w-32 h-32 rounded-full object-cover mb-8 border-2 ${borderColor} transition-colors duration-300`}
          />
          <h1 className={`text-4xl md:text-5xl font-light mb-4 tracking-tight ${textColor} transition-colors duration-300`}>
            {resumeData.name}
          </h1>
          <p className={`${textColor} text-xl md:text-2xl mb-8 opacity-80 transition-colors duration-300`}>
            {resumeData.title}
          </p>
          <p className={`${textColor} max-w-2xl mx-auto text-lg font-light mb-10 opacity-90 transition-colors duration-300`}>
            {resumeData.summary}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3 border ${inverseBgColor} ${inverseTextColor} border-black hover:opacity-80 transition-colors duration-300`} // Explicit black border
            >
              Contact Info
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-6 py-3 border ${borderColor} ${textColor} ${bgColor} hover:${inverseBgColor} hover:${inverseTextColor} transition-colors duration-300`} // Hover inverts bg/text, border stays grey
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6">

        <section id="education" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Education
          </h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
            <h3 className="text-xl font-light">{resumeData.education.degree}</h3>
            <p className={`${textColor} opacity-80 mb-1`}>Specialization: {resumeData.education.specialization}</p>
            <p className={`${textColor} opacity-80 mb-1`}>{resumeData.education.university}</p>
            <p className={`${textColor} opacity-80`}>{resumeData.education.graduationDate}</p>
          </div>
        </section>

        <section id="skills" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Technical Skills
          </h2>
          <div className="space-y-6">
            {Object.entries(resumeData.skills).map(([category, items], idx) => (
              <div key={idx} className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
                <h3 className={`text-xl font-light mb-3 capitalize ${textColor}`}>
                  {category.replace(/([A-Z])/g, ' $1').replace('Ml', 'ML')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className={`text-sm ${borderColor} ${textColor} ${bgColor} px-3 py-1 rounded-full border transition-colors duration-300`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Professional Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="text-xl font-light">{job.position}</h3>
                  <span className={`${textColor} opacity-80 text-sm sm:text-base`}>{job.duration}</span>
                </div>
                <p className={`${textColor} opacity-80 mb-3`}>{job.company}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span className={`${textColor} opacity-90`}>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Projects
          </h2>
          <div className="mt-6">
            <div className={`flex overflow-x-auto space-x-6 pb-4 ${darkMode ? 'scrollbar-dark' : 'scrollbar-light'}`}>
              {resumeData.projects.map((project, index) => (
                <div
                  key={index}
                  className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} w-[300px] sm:w-[350px] flex-shrink-0 transition-colors duration-300`}
                >
                  <h3 className="text-xl font-light mb-2">{project.name}</h3>
                  <p className={`${textColor} opacity-80 mb-3 text-sm`}>
                    {project.technologies.join(' • ')}
                  </p>
                  <p className={`${textColor} opacity-90 text-base font-light`}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Certifications
          </h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
            <ul className="space-y-3">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${textColor} opacity-90`}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="leadership" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Leadership & Initiatives
          </h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
            <h3 className="text-xl font-light mb-3">{resumeData.leadership.organization}</h3>
            <p className={`${textColor} opacity-90`}>
              {resumeData.leadership.description}
            </p>
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Contact Info
          </h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
              <h3 className="text-xl font-light mb-4">Connect With Me</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${resumeData.contact.email}`} className={`${textColor} opacity-90 hover:opacity-100 break-all hover:underline transition-colors duration-300`}>
                    {resumeData.contact.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className={`${textColor} opacity-90`}>
                    {resumeData.contact.phone}
                  </span>
                </li>
                <li className="flex items-center">
                   <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                   </svg>
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className={`${textColor} opacity-90 hover:opacity-100 hover:underline transition-colors duration-300`}>
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center">
                   <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                   </svg>
                  <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className={`${textColor} opacity-90 hover:opacity-100 hover:underline transition-colors duration-300`}>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
        </section>
      </main>

      <div className="pb-16"></div> {/* Spacer at the bottom */}

    </div>
  );
};

export default App;
