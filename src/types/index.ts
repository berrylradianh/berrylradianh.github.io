export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  documentation: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  color: 'cyan' | 'purple' | 'magenta';
  skills: Skill[];
}

export interface ContactInfo {
  type: 'email' | 'linkedin';
  label: string;
  value: string;
  url: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
