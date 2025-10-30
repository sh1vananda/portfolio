import React, { useState } from 'react';
import { resumeData } from './data/resumeData';
import ExperienceView from './components/ExperienceView';
import { EmailIcon, LinkedInIcon, GitHubIcon } from './components/Icons';

// --- VIEWS ---
const AboutView = ({ data }) => (
  <p className="max-w-3xl text-lg md:text-xl font-light leading-relaxed text-zinc-300">{data.summary}</p>
);

const SkillsView = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Object.entries(data.skills).map(([category, items]) => (
      <div key={category} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
        <h3 className="text-lg font-semibold text-zinc-100 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span key={skill} className="text-sm bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ProjectsView = ({ data }) => (
  <div className="flex overflow-x-auto gap-6 pb-4">
    {data.projects.map((project, index) => (
      <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 w-80 md:w-96 flex-shrink-0">
        <h3 className="text-xl font-semibold text-zinc-100 mb-2">{project.name}</h3>
        <p className="text-zinc-400 mb-3 text-sm">{project.technologies.join(' • ')}</p>
        <p className="text-zinc-400 text-base font-light">{project.description}</p>
      </div>
    ))}
  </div>
);

const ContactView = ({ data }) => (
  <div className="space-y-4">
    <a href={`mailto:${data.contact.email}`} className="flex items-center group">
      <EmailIcon />
      <span className="ml-4 text-zinc-300 group-hover:text-zinc-100 transition-colors">{data.contact.email}</span>
    </a>
    <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group">
      <LinkedInIcon />
      <span className="ml-4 text-zinc-300 group-hover:text-zinc-100 transition-colors">LinkedIn</span>
    </a>
    <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center group">
      <GitHubIcon />
      <span className="ml-4 text-zinc-300 group-hover:text-zinc-100 transition-colors">GitHub</span>
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
      case 'experience': return <ExperienceView data={resumeData.experience} />;
      case 'projects': return <ProjectsView data={resumeData} />;
      case 'contact': return <ContactView data={resumeData} />;
      default: return <AboutView data={resumeData} />;
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen font-sans text-zinc-300 flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-5xl flex flex-col h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)]">
        
        <header className="flex-shrink-0 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">{resumeData.name}</h1>
          <p className="text-xl md:text-2xl text-zinc-400">{resumeData.title}</p>
        </header>
        
        <nav className="flex-shrink-0 flex flex-wrap gap-2 mb-8">
          {views.map(view => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 capitalize ${activeView === view ? 'bg-zinc-200 text-zinc-900 font-medium' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
            >
              {view}
            </button>
          ))}
        </nav>

        <main key={activeView} className="flex-grow overflow-y-auto pr-2 animate-fade-in">
          {renderContent()}
        </main>

      </div>
    </div>
  );
};

export default App;