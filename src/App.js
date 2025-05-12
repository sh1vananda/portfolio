import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle section navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'experience', 'projects', 'certifications', 'leadership', 'contact'];
      const currentScroll = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (currentScroll >= offsetTop && currentScroll < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
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

  // Resume data from PDF
  const resumeData = {
    name: 'Shivananda Reddy Kankanala',
    title: 'Full-Stack Blockchain Developer',
    summary: 'Blockchain-focused Software Developer with practical experience in decentralized applications and full-stack development. Proficient in JavaScript, Python, Flutter, Solidity, Web3 technologies, and SQL databases. Demonstrated ability to develop blockchain solutions, optimize system performance, and build scalable applications.',
    contact: {
      email: 'shivanandareddy.kankanala@example.com',
      phone: '+91-6303032825',
      linkedin: 'https://www.linkedin.com/in/shivananda-reddy-kankanala/ ',
      github: 'https://github.com/sh1vananda '
    },
    education: {
      degree: 'B.Tech in Computer Science and Engineering',
      specialization: 'Blockchain',
      university: 'Vellore Institute of Technology (VIT), Vellore, India',
      graduationDate: 'May 2025'
    },
    skills: {
      languages: ['Python', 'JavaScript', 'TypeScript', 'Solidity', 'SQL', 'HTML', 'CSS'],
      blockchain: ['Ethereum', 'Web3.js', 'Ethers.js', 'Hyperledger Fabric', 'Smart Contracts', 'ERC Standards'],
      backend: ['Node.js', 'Express.js', 'Django', 'GraphQL'],
      frontend: ['React.js', 'Svelte', 'Web3 UI libraries'],
      databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'IPFS'],
      devTools: ['Git', 'Docker', 'Hardhat', 'Foundry', 'Truffle', 'Postman',],
      "AI/Ml": ['TensorFlow', 'PyTorch', 'Scikit-learn', 'GNN', 'VAE', "NSGA-III", 'XGBoost', 'SHAP', "Reinforcement Learning"],
    },
    experience: [
      {
        company: 'Altibbe Health Pvt. Ltd. | Hyderabad',
        position: 'Blockchain Developer Intern',
        duration: 'May 2025',
        responsibilities: [
          'Led blockchain integration as the sole blockchain specialist, implementing end-to-end solutions for Organic certififcation.',
          'Developed smart contract architecture and blockchain gateway system for secure transaction processing and data access.',
          'Collaborated with cross-functional teams to align blockchain implementations with business requirements and regulatory standards.'
        ]
      },
      {
        company: 'TimeSlotter Technologies | Vellore',
        position: 'Software Development Intern',
        duration: 'Oct 2024 – Dec 2024',
        responsibilities: [
          'Identified and resolved performance bottlenecks through code optimization, contributing to 99.9% service uptime.',
          'Performed performance profiling to optimize mobile features, reducing CPU usage by 40% and improving user experience.',
          'Engineered REST API integrations with robust error handling and data validation mechanisms for reliable service delivery.'
        ]
      }
    ],
    projects: [
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
    ],

    certifications: [
      'Pursuing: Ethereum Degree, Rust & Solana Development Certification',
      'Google Cloud Computing Foundations',
      'MERN Full Stack Development'
    ],
    leadership: {
      organization: 'Founder, Small Pond (Student Incubator) | VIT Vellore',
      description: 'Founded and managed first student-led multi-domain incubator, providing resources, mentorship, and collaborative spaces for student entrepreneurs. Created a framework for project evaluation, team-building, and milestone tracking for early-stage student ventures.'
    }
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
              darkMode ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            S
          </div>


          
          <div className="flex items-center space-x-6">
            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-light pb-1 transition-colors duration-300 ${
                      activeSection === link.id 
                        ? `${darkMode ? 'border-white' : 'border-black'} border-b` 
                        : `${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className={`${darkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                      activeSection === link.id 
                        ? `${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}` 
                        : `${darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-100'}`
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
      <section id="about" className="pt-24 pb-16 text-center">
        <div className="container mx-auto px-6">
          <img 
            src="me.JPG" 
            alt="Profile" 
            className={`mx-auto w-32 h-32 rounded-full object-cover mb-8 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
          />
          <h1 className={`text-4xl md:text-5xl font-light mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
            {resumeData.name}
          </h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xl md:text-2xl mb-8`}>
            {resumeData.title}
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto text-lg font-light mb-10`}>
            {resumeData.summary}
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3 border ${darkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} transition-all`}
            >
              Contact Me
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`px-6 py-3 ${darkMode ? 'border border-gray-500 text-gray-300 hover:border-white hover:text-white' : 'border border-gray-300 text-gray-600 hover:border-black hover:text-black'} transition-all`}
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6">
        {/* Education Section */}
        <section id="education" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-b pb-2`}>
            Education
          </h2>
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg`}>
            <h3 className="text-xl font-light">B.Tech in Computer Science and Engineering</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Specialization: Blockchain</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{resumeData.education.university}</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{resumeData.education.graduationDate}</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-b pb-2`}>
            Technical Skills
          </h2>
          <div className="space-y-6">
            {Object.entries(resumeData.skills).map(([category, items], idx) => (
              <div key={idx} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-light mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-800'} capitalize`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className={`text-sm ${darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300'} px-3 py-1 rounded-full border`}>
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
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-b pb-2`}>
            Professional Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg`}>
                <div className="flex justify-between">
                  <h3 className="text-xl font-light">{job.position}</h3>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{job.duration}</span>
                </div>
                <p className={darkMode ? 'text-gray-400 mb-3' : 'text-gray-600 mb-3'}>{job.company}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-b pb-2`}>
            Projects
          </h2>
          
          {/* Horizontal Scroll Container */}
          <div className={`mt-6 ${darkMode ? 'scrollbar-dark' : 'scrollbar-light'}`}>
            <div className="flex overflow-x-auto pb-4">
              {resumeData.projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg min-w-[300px] max-w-[400px] mr-6 flex-shrink-0`}
                >
                  <h3 className="text-xl font-light mb-2">{project.name}</h3>
                  <p className={darkMode ? 'text-gray-400 mb-3' : 'text-gray-600 mb-3'}>
                    {project.technologies.join(' • ')}
                  </p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-b pb-2`}>
            Certifications
          </h2>
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg`}>
            <ul className="space-y-3">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className={`w-5 h-5 mr-2 mt-1 ${darkMode ? 'text-green-500' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-b pb-2`}>
            Leadership & Initiatives
          </h2>
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg`}>
            <h3 className="text-xl font-light mb-3">{resumeData.leadership.organization}</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              {resumeData.leadership.description}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-b pb-2`}>
            Contact Me
          </h2>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-light mb-1">Name</label>
                <input 
                  type="text" 
                  className={`w-full border-b ${darkMode ? 'border-gray-600 bg-black focus:border-white' : 'border-gray-300 focus:border-black'} p-2 bg-transparent focus:outline-none`}
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-1">Email</label>
                <input 
                  type="email" 
                  className={`w-full border-b ${darkMode ? 'border-gray-600 bg-black focus:border-white' : 'border-gray-300 focus:border-black'} p-2 bg-transparent focus:outline-none`}
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-1">Message</label>
                <textarea 
                  rows="5" 
                  className={`w-full border-b ${darkMode ? 'border-gray-600 bg-black focus:border-white' : 'border-gray-300 focus:border-black'} p-2 bg-transparent focus:outline-none`}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`border ${darkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} px-6 py-2 font-light transition-all`}
              >
                Send Message
              </button>
            </form>
            
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-lg`}>
              <h3 className="text-xl font-light mb-4">Connect With Me</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${resumeData.contact.email}`} className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {resumeData.contact.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {resumeData.contact.phone}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'}>LinkedIn</a>
                </li>
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-black'}>GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className={`${darkMode ? 'bg-black border-gray-800 text-white' : 'bg-white border-gray-200 text-black'} border-t py-8 text-center text-sm transition-colors duration-300`}>
        Shivananda Reddy Kankanala
      </footer> */}

    </div>
  );
};

export default App;