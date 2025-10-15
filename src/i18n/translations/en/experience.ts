import type { ExperienceTranslations } from '../../types';

export const experience: ExperienceTranslations = {
  title: 'Professional Experience',
  subtitle:
    'My professional journey showcasing growth, challenges overcome, and impact created across different organizations.',
  current: 'Current Position',
  present: 'Present',
  duration: {
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
  },
  technologiesUsed: 'Technologies Used',
  keyAchievements: 'Key Achievements',
  wantToKnowMore: 'Want to know more?',
  resumeDescription:
    'Download my resume for detailed information about my experience, education, and certifications.',
  downloadResume: 'Download Resume',
  jobs: {
    'senior-full-stack-developer': {
      description:
        'Architected and implemented microservices infrastructure, mentored junior developers, and collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Developed a scalable design system with React+TypeScript (MUI)',
        'Reduced code duplication by 30%',
        'Implemented performance optimization: lazy loading and memoization',
        'Improved load times by 25%',
        'Built REST APIs with Node.js/Express + PostgreSQL/Prisma',
        'Reduced response time by 35%',
        'Led testing efforts with Jest/Playwright (+30% coverage)',
        'Mentored junior developers',
      ],
    },
    'fullstack-developer': {
      description:
        'Developed and maintained multiple client projects using modern web technologies. Collaborated directly with clients to understand requirements and deliver custom solutions within tight deadlines.',
      achievements: [
        'Developed Next.js applications (SSR/SSG) with TypeScript',
        'SEO and load speed improved by 40%',
        'Implemented OAuth 2.0 + JWT with RBAC and documented APIs (OpenAPI)',
        'Implemented automated testing reducing bugs by 35%',
        'Automated CI/CD pipelines with GitLab (+25% delivery efficiency)',
      ],
    },
    'frontend-developer': {
      description:
        'Specialized in creating responsive, accessible web interfaces for various client projects. Worked closely with designers to implement pixel-perfect designs and ensure cross-browser compatibility.',
      achievements: [
        'Built reusable React components and used Tailwind CSS.',
        'Reduced development time by 20%',
        'Developed interactive dashboards and improved performance',
        'Collaborated directly with UI/UX teams',
      ],
    },
  },
};
