/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Project {
  name: string;
  technologies: string[];
  description: string;
}

export interface Skills {
  languages: string[];
  backend: string[];
  frontend: string[];
  databases: string[];
  cloudDevOps: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: Contact;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
}
