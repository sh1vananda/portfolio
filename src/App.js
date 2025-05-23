import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Re-introduce darkMode state, default to light mode (false)
  const [darkMode, setDarkMode] = useState(false);

  // Define colors based on mode
  const bgColor = darkMode ? 'bg-black' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';
  // --- BORDER COLOR IS NOW CONSTANT ---
  const borderColor = 'border-gray-600'; // Grey border for both modes
  // --- END OF CHANGE ---
  const inverseBgColor = darkMode ? 'bg-white' : 'bg-black';
  const inverseTextColor = darkMode ? 'text-black' : 'text-white';
  // Define an inverse border color for specific elements if needed,
  // but primary button will use border-black for contrast.
  // const inverseBorderColor = darkMode ? 'border-black' : 'border-white'; // Example if needed elsewhere

  // Handle section navigation (no changes needed here)
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

  // Update active section based on scroll position (no changes needed here)
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
    handleScroll(); // Initial check

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []); // Empty dependency array

  // Navigation links (no changes needed here)
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
   resumeData.title = 'Full-Stack Blockchain Developer';
   resumeData.summary = 'Blockchain-focused Software Developer with practical experience in decentralized applications and full-stack development. Proficient in JavaScript, Python, Flutter, Solidity, Web3 technologies, and SQL databases. Demonstrated ability to develop blockchain solutions, optimize system performance, and build scalable applications.';
   resumeData.contact = {
     email: 'shivanandareddy.kankanala@example.com',
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
     languages: ['Python', 'JavaScript', 'TypeScript', 'Solidity', 'SQL', 'HTML', 'CSS'],
     blockchain: ['Ethereum', 'Web3.js', 'Ethers.js', 'Hyperledger Fabric', 'Smart Contracts', 'ERC Standards'],
     backend: ['Node.js', 'Express.js', 'Django', 'GraphQL'],
     frontend: ['React.js', 'Svelte', 'Web3 UI libraries'],
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
         'Led blockchain integration as the sole blockchain specialist, implementing end-to-end solutions for Organic certififcation.',
         'Developed smart contract architecture and blockchain gateway system for secure transaction processing and data access.',
         'Collaborated with cross-functional teams to align blockchain implementations with business requirements and regulatory standards.'
       ]
     },
     {
       company: 'TimeSlotter Technologies | Vellore',
       position: 'Software Development Intern',
       duration: 'Oct \'24 – Dec \'24',
       responsibilities: [
         'Identified and resolved performance bottlenecks through code optimization, contributing to 99.9% service uptime.',
         'Performed performance profiling to optimize mobile features, reducing CPU usage by 40% and improving user experience.',
         'Engineered REST API integrations with robust error handling and data validation mechanisms for reliable service delivery.'
       ]
     }
   ];
    resumeData.projects = [
     {
       name: 'Kiwi – Hyperlocal Chat Application',
       technologies: ['Node.js', 'Flutter', 'Firestore'],
       description: 'Created a real-time geospatial chat app enabling users in nearby zones to connect. Replaced client-heavy processing with custom server-side geospatial APIs, cutting API latency by 60%.'
     },
     {
       name: 'sustAIn: AI for Sustainable Materials Design',
       technologies: ['Python', 'PyTorch', 'GNN', 'VAE', 'NSGA-III'],
       description: 'Built a GNN-VAE hybrid model with NSGA-III optimization to generate new material compositions. Automated the pipeline from molecular structure analysis to sustainability-driven design proposals.'
     },
     {
       name: 'PCOS Diagnosis using Machine Learning',
       technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost'],
       description: 'Developed a predictive tool for diagnosing PCOS with 98% accuracy using deep learning. Applied ensemble learning, SHAP-based interpretability, and hyperparameter tuning for robust model performance.'
     },
     {
       name: 'Blockchain Price Alert System',
       technologies: ['Python', 'PostgreSQL', 'Sveltekit', 'Web3.js'],
       description: 'Built a full-stack price alert platform for cryptocurrency users. Designed efficient backend pipelines to process high-frequency exchange API data and trigger real-time user alerts based on custom price rules.'
     },
     {
       name: 'Dynamic NFT System',
       technologies: ['Solidity', 'React.js', 'Chainlink', 'IPFS'],
       description: 'Engineered dynamic NFTs that evolve based on real-world data using Chainlink oracles. Developed smart contracts in Solidity and integrated a React frontend for minting and managing tokens with metadata on IPFS.'
     },
     {
       name: 'Supply Chain Management on Blockchain',
       technologies: ['Hyperledger Fabric', 'Node.js', 'Express'],
       description: 'Implemented a blockchain-based asset tracking system using Hyperledger Fabric. Wrote chaincode to enforce business logic and built Express APIs to interact with the ledger and visualize asset history.'
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
    // Apply base theme colors to the root
    <div className={`${bgColor} ${textColor} min-h-screen font-sans transition-colors duration-300`}> {/* Added transition */}
      {/* Navigation */}
      {/* Use theme bg and the constant grey border */}
      <nav className={`${bgColor} ${borderColor} fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Initials Logo - Inverts with theme */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${inverseBgColor} ${inverseTextColor} transition-colors duration-300`}
          >
            S
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    // Use theme text color. Active/hover uses the constant grey border.
                    className={`text-sm font-light pb-1 border-b ${textColor} ${
                      activeSection === link.id
                        ? `${borderColor}` // Active border is grey
                        : 'border-transparent' // Inactive has no visible border
                    } hover:${borderColor} transition-colors duration-300`} // Hover adds grey border
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* --- Dark Mode Toggle RE-ADDED --- */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              // Button background/text inverts the main theme
              className={`p-2 rounded-full ${inverseBgColor} ${inverseTextColor} hover:opacity-80 transition-colors duration-300`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {/* Simple B/W Icons */}
              {darkMode ? (
                // Sun Icon (Simple) - Inherits inverseTextColor
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 2a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-2 0V2zm0 15a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-2 0v-1zm6.364-11.364a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707zm-9.9 9.9a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707zM18 9a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zm-16 0a1 1 0 01-1 1H1a1 1 0 010-2h1a1 1 0 011 1zm10.364-.364a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0zM6.05 13.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                // Moon Icon (Simple) - Inherits inverseTextColor
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            {/* --- END OF TOGGLE --- */}

            {/* Mobile Menu Button - Use theme text color */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          // Use theme bg and constant grey border
          <div className={`${bgColor} ${borderColor} border-t shadow-md md:hidden transition-colors duration-300`}>
            <ul className="flex flex-col p-4 space-y-1">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    // Active uses inverse colors, inactive uses theme colors. Hover uses inverse colors.
                    className={`block w-full text-left px-3 py-2 rounded-sm transition-colors duration-150 ${
                      activeSection === link.id
                        ? `${inverseBgColor} ${inverseTextColor}` // Active highlights with inverse colors
                        : `${textColor} hover:${inverseBgColor} hover:${inverseTextColor}` // Hover uses inverse colors
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

      {/* Hero Section */}
      <section id="about" className="pt-28 pb-16 text-center">
        <div className="container mx-auto px-6">
          <img
            src="me.JPG"
            alt="Profile"
            // Use constant grey border
            className={`mx-auto w-32 h-32 rounded-full object-cover mb-8 border-2 ${borderColor} transition-colors duration-300`}
          />
          {/* Use theme text color */}
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
            {/* Primary button: Inverted colors, BLACK border for contrast */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3 border ${inverseBgColor} ${inverseTextColor} border-black hover:opacity-80 transition-colors duration-300`} // Explicit black border
            >
              Contact Info
            </button>
            {/* Secondary button: Theme colors, constant GREY border */}
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

        {/* --- Sections now use theme colors and constant grey border --- */}

        {/* Education Section */}
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

        {/* Skills Section */}
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
                    // Tags: Use theme colors and constant grey border
                    <span key={i} className={`text-sm ${borderColor} ${textColor} ${bgColor} px-3 py-1 rounded-full border transition-colors duration-300`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
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

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Projects
          </h2>
          <div className="mt-6">
            {/* Add simple scrollbar styling adaptable to theme (optional) */}
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

        {/* Certifications Section */}
        <section id="certifications" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Certifications
          </h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
            <ul className="space-y-3">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start">
                  {/* Icon uses theme text color */}
                  <svg className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 ${textColor} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${textColor} opacity-90`}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leadership Section */}
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

        {/* Contact Info Section */}
        <section id="contact" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${textColor} transition-colors duration-300`}>
            Contact Info
          </h2>
          <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor} transition-colors duration-300`}>
              <h3 className="text-xl font-light mb-4">Connect With Me</h3>
              <ul className="space-y-4">
                {/* Icons and text use theme text color */}
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
