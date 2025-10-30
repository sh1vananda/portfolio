import React, { useState } from 'react';

const ExperienceView = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedJob = data[selectedIndex];

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="md:w-1/3 flex-shrink-0">
        <h3 className="text-lg font-semibold text-zinc-100 mb-4">Companies</h3>
        <ul className="space-y-2">
          {data.map((job, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedIndex(index)}
                className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${selectedIndex === index ? 'bg-zinc-200 text-zinc-900 font-medium' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
              >
                {job.company}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="text-xl font-semibold text-zinc-100">{selectedJob.position}</h3>
          <span className="text-sm text-zinc-500">{selectedJob.duration}</span>
        </div>
        <p className="text-zinc-400 mb-4">{selectedJob.company}</p>
        <p className="text-zinc-300 font-light leading-relaxed">
          {selectedJob.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceView;