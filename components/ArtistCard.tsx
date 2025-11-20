/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "framer-motion";
import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-[#0a0a0a] p-5 hover:bg-neutral-900/30 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-mono font-bold text-neutral-200 uppercase tracking-wider group-hover:text-white transition-colors">
          {project.name}
        </h3>
        <ArrowUpRight
          onClick={() => window.open(project.link, "_blank")}
          className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 hover:text-stone-500 duration-300"
        />
      </div>

      <p className="text-neutral-500 text-xs leading-relaxed mb-6 line-clamp-3 group-hover:text-neutral-400 transition-colors">
        {project.description}
      </p>

      <div className="mt-auto pt-4 border-t border-neutral-900/50 flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] font-mono text-neutral-600 bg-neutral-900/50 px-1.5 py-0.5 rounded-sm border border-transparent group-hover:border-neutral-800 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
