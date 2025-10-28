import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 'go-again',
    title: 'GO AGAIN - World of Warcraft Guild Form',
    description: 'Full-stack World of Warcraft guild form application with OAuth, MongoDB, Express and React, hosted on Cloudflare Pages and custom VPS.',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, and a comprehensive admin dashboard for managing orders and inventory.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OAuth', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://goagain.pages.dev',
    imageUrl: '/images/projects/ecommerce.jpg',
    featured: true,
    status: 'completed',
    category: 'web'
  },
  {
    id: 'github-issues-viewer',
    title: 'Github Issues Viewer - React Repo',
    description: 'Real-time issue tracking application for GitHub repositories with advanced filtering and search capabilities.',
    longDescription: 'A powerful issue tracking application that integrates with GitHub to provide real-time updates, advanced filtering, and search capabilities for issues across multiple repositories.',
    technologies: ['React', 'GraphQL', 'TypeScript', 'Vite', 'Styled Components', 'Cloudflare Pages', 'Zustand', 'Apollo Client'],
    githubUrl: 'https://github.com/kevinbenach/github-issues-viewer',
    liveUrl: 'https://github-issues-viewer.pages.dev/',
    imageUrl: '/images/projects/taskmanager.jpg',
    featured: true,
    status: 'completed',
    category: 'web'
  },
  {
    id: 'astro-portfolio',
    title: 'Astro + Preact Portfolio Website',
    description: 'Personal portfolio website built with Astro and Preact, showcasing projects and blog posts with a modern design and fast performance.',
    longDescription: 'An advanced portfolio website that showcases my projects and blog posts with a modern design, fast performance, and seamless user experience using Astro and Preact.',
    technologies: ['Astro', 'Preact', 'TypeScript', 'Tailwind', 'Vite', 'Cloudflare Pages'],
    githubUrl: 'https://github.com/kevinbenach/new-personal-portfolio',
    liveUrl: 'https://kevinbenach.com', 
    imageUrl: '/images/projects/weather.jpg',
    featured: true,
    status: 'completed',
    category: 'web'
  },
];

export const featuredProjects = projects.filter(project => project.featured);