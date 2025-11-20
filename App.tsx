/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import FluidBackground from "./components/FluidBackground";
import RevealText from "./components/GlitchText";
import ProjectCard from "./components/ArtistCard";
import { resumeData } from "./resumeData";

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    { icon: Github, url: resumeData.contact.github, label: "GitHub" },
    { icon: Linkedin, url: resumeData.contact.linkedin, label: "LinkedIn" },
    { icon: Mail, url: `mailto:${resumeData.contact.email}`, label: "Email" },
  ];

  return (
    <div className="relative min-h-screen text-neutral-200 selection:bg-white selection:text-black overflow-x-hidden">
      <FluidBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900">
        <div className="text-sm font-bold tracking-wider uppercase text-white">
          sh1vananda
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-neutral-400">
          {["About", "Experience", "Skills", "Projects"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 flex flex-col gap-8 md:hidden"
          >
            {["About", "Experience", "Skills", "Projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-4xl font-light text-white text-left border-b border-neutral-900 pb-4"
              >
                {item}
              </button>
            ))}

            <div className="mt-auto mb-12 flex gap-6">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-neutral-800 hover:bg-neutral-900 transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="px-6 md:px-12 pt-24 md:pt-22 max-w-7xl mx-auto">
        {/* HERO */}
        <section
          id="about"
          className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center mb-16 md:mb-24"
        >
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-mono text-[#666] mb-6 block text-xs md:text-sm tracking-widest"
            >
              // {resumeData.title}
            </motion.p>

            <RevealText
              text={resumeData.name}
              className="text-4xl sm:text-5xl md:text-8xl font-semibold leading-none tracking-tighter text-white mb-8"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-base md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light"
            >
              {resumeData.summary}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-12"
            >
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="w-full h-px bg-neutral-900 mb-16 md:mb-24" />

        {/* EXPERIENCE */}
        <section id="experience" className="mb-24 md:mb-32">
          <h2 className="text-xs font-mono text-neutral-600 mb-12 uppercase tracking-widest">
            // Experience
          </h2>

          <div className="space-y-12 md:space-y-16 border-l border-neutral-900 ml-1 pl-6 md:ml-0 md:pl-0 md:border-none">
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-12 group"
              >
                <div className="md:col-span-3 pt-1 md:pt-2">
                  <span className="font-mono text-xs text-neutral-500 block mb-1">
                    {exp.duration}
                  </span>
                  <div className="h-px w-6 bg-neutral-800 md:hidden mt-2 mb-4" />
                </div>
                <div className="md:col-span-9 relative">
                  <div className="hidden md:block absolute -left-14 top-3 w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-white transition-colors" />
                  <h3 className="text-lg md:text-xl text-white font-medium mb-1">
                    {exp.position}
                  </h3>
                  <div className="text-neutral-500 font-mono text-xs md:text-sm mb-4">
                    {exp.company}
                  </div>
                  <p className="text-neutral-400 leading-relaxed font-light text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mb-24 md:mb-32">
          <h2 className="text-xs font-mono text-neutral-600 mb-12 uppercase tracking-widest">
            // Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {Object.entries(resumeData.skills).map(([category, items], i) => (
              <div key={i} className="group">
                <h3 className="text-sm text-white mb-4 capitalize font-medium border-b border-neutral-900 pb-2 inline-block">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-24 md:mb-32">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-xs font-mono text-neutral-600 uppercase tracking-widest">
              // Selected Projects
            </h2>
            <span className="text-neutral-700 text-[10px] font-mono tracking-widest">
              {resumeData.projects.length} PROJECTS
            </span>
          </div>

          {/* Bordered Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {resumeData.projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pb-12 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-neutral-600 text-xs font-mono">
            © {new Date().getFullYear()} {resumeData.name}
          </div>
          <div className="flex gap-6">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="text-xs font-mono text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
            >
              INITIATE_CONTACT <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
