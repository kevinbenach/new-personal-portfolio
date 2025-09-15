import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, and a comprehensive admin dashboard for managing orders and inventory.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: '/images/projects/ecommerce.jpg',
    featured: true,
    status: 'completed',
    category: 'web'
  },
  {
    id: 'task-management-app',
    title: 'Collaborative Task Manager',
    description: 'Real-time task management application with team collaboration features, drag-and-drop interface, and progress tracking.',
    longDescription: 'A powerful task management application that enables teams to collaborate effectively with features like real-time updates, drag-and-drop task organization, time tracking, file attachments, and comprehensive project analytics.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Socket.io', 'MongoDB', 'Prisma', 'TailwindCSS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://taskmaster-pro.vercel.app',
    imageUrl: '/images/projects/taskmanager.jpg',
    featured: true,
    status: 'completed',
    category: 'web'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'Interactive weather dashboard with data visualization, location-based forecasts, and historical weather analysis.',
    longDescription: 'An advanced weather dashboard that provides detailed weather analytics with interactive charts, multi-location support, weather alerts, and historical data visualization using modern charting libraries.',
    technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'OpenWeather API', 'SCSS', 'Vite', 'Netlify'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-analytics-dashboard.netlify.app',
    imageUrl: '/images/projects/weather.jpg',
    featured: true,
    status: 'completed',
    category: 'web'
  },
  {
    id: 'social-media-app',
    title: 'Social Media Platform',
    description: 'Full-featured social media application with real-time messaging, content sharing, and social interactions.',
    longDescription: 'A modern social media platform featuring user profiles, real-time chat, post sharing, likes and comments, story features, and advanced privacy controls built with modern web technologies.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS S3', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/yourusername/social-platform',
    liveUrl: 'https://social-connect-demo.herokuapp.com',
    imageUrl: '/images/projects/social.jpg',
    featured: false,
    status: 'completed',
    category: 'web'
  },
  {
    id: 'portfolio-generator',
    title: 'Portfolio Generator Tool',
    description: 'SaaS application that helps developers create professional portfolios with customizable themes and templates.',
    longDescription: 'A comprehensive portfolio generation tool that allows developers to create professional portfolios by connecting their GitHub, choosing from multiple themes, and customizing layouts without coding knowledge.',
    technologies: ['Astro', 'React', 'TypeScript', 'GitHub API', 'Stripe', 'TailwindCSS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/portfolio-generator',
    liveUrl: 'https://portfolio-gen.vercel.app',
    imageUrl: '/images/projects/portfolio-gen.jpg',
    featured: false,
    status: 'in-progress',
    category: 'web'
  },
  {
    id: 'mobile-fitness-app',
    title: 'Fitness Tracking Mobile App',
    description: 'React Native mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
    longDescription: 'A comprehensive fitness tracking mobile app built with React Native, featuring custom workout creation, progress tracking, social challenges, nutrition logging, and integration with popular fitness devices.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'MongoDB', 'Redux Toolkit'],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    imageUrl: '/images/projects/fitness.jpg',
    featured: false,
    status: 'planned',
    category: 'mobile'
  }
];

export const featuredProjects = projects.filter(project => project.featured);