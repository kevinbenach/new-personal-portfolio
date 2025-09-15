import type { Skill } from '@/types/portfolio';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 'expert', iconName: 'react' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'expert', iconName: 'typescript' },
  { name: 'Next.js', category: 'frontend', proficiency: 'advanced', iconName: 'nextjs' },
  { name: 'Vue.js', category: 'frontend', proficiency: 'advanced', iconName: 'vue' },
  { name: 'Astro', category: 'frontend', proficiency: 'advanced', iconName: 'astro' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert', iconName: 'tailwind' },
  { name: 'SCSS/SASS', category: 'frontend', proficiency: 'advanced', iconName: 'sass' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'expert', iconName: 'nodejs' },
  { name: 'Express.js', category: 'backend', proficiency: 'advanced', iconName: 'express' },
  { name: 'Python', category: 'backend', proficiency: 'advanced', iconName: 'python' },
  { name: 'FastAPI', category: 'backend', proficiency: 'intermediate', iconName: 'fastapi' },
  { name: 'GraphQL', category: 'backend', proficiency: 'intermediate', iconName: 'graphql' },
  { name: 'REST APIs', category: 'backend', proficiency: 'expert', iconName: 'api' },

  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 'advanced', iconName: 'postgresql' },
  { name: 'MongoDB', category: 'database', proficiency: 'advanced', iconName: 'mongodb' },
  { name: 'Redis', category: 'database', proficiency: 'intermediate', iconName: 'redis' },
  { name: 'Prisma', category: 'database', proficiency: 'advanced', iconName: 'prisma' },

  // Tools & Others
  { name: 'Git', category: 'tools', proficiency: 'expert', iconName: 'git' },
  { name: 'Docker', category: 'tools', proficiency: 'advanced', iconName: 'docker' },
  { name: 'AWS', category: 'tools', proficiency: 'intermediate', iconName: 'aws' },
  { name: 'Vercel', category: 'tools', proficiency: 'advanced', iconName: 'vercel' },
  { name: 'Figma', category: 'tools', proficiency: 'intermediate', iconName: 'figma' },
  { name: 'VS Code', category: 'tools', proficiency: 'expert', iconName: 'vscode' },
];

export const skillCategories = [
  { id: 'frontend', name: 'Frontend', color: 'primary' },
  { id: 'backend', name: 'Backend', color: 'accent' },
  { id: 'database', name: 'Database', color: 'success' },
  { id: 'tools', name: 'Tools & Others', color: 'warning' },
] as const;