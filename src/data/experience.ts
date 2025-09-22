import type { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'senior-full-stack-developer',
    company: 'Prime IT - Spain',
    position: 'Fullstack Developer',
    startDate: '2023-03',
    description:
      'Architected and implemented microservices infrastructure, mentored junior developers, and collaborated with cross-functional teams to deliver high-quality products.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MUI',
      'Formik',
      'Jest',
      'Playwright',
      'REST APIs',
      'PostgreSQL',
      'Docker',
      'AWS',
      'GraphQL',
      'Prisma',
    ],
    achievements: [
      'Developed a scalable React+TypeScript design system (MUI/Formik), reducing code duplication by 30%',
      'Implemented performance optimization: lazy loading and memoization, improving load times by 25%',
      'Built REST APIs with Node.js/Express + PostgreSQL/Prisma, reducing response time by 35%',
      'Led Jest/Playwright testing efforts (+30% coverage) and mentored junior developers',
    ],
  },
  {
    id: 'fullstack-developer',
    company: 'SEIDOR',
    position: 'Fullstack Developer',
    startDate: '2022-01',
    endDate: '2023-03',
    description:
      'Developed and maintained multiple client projects using modern web technologies. Collaborated directly with clients to understand requirements and deliver custom solutions within tight deadlines.',
    technologies: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'MongoDB',
      'REST APIs',
      'Docker',
      'Jest',
      'Redux',
      'Node.js',
    ],
    achievements: [
      'Developed Next.js applications (SSR/SSG) with TypeScript, improving SEO and load speed by 40%',
      'Implemented OAuth 2.0 + JWT with RBAC and documented APIs (OpenAPI)',
      'Implemented automated testing reducing bugs by 35%',
      'Automated CI/CD pipelines with GitLab (+25% delivery efficiency)',
    ],
  },
  {
    id: 'frontend-developer',
    company: 'RedDoor Software',
    position: 'Frontend Developer',
    startDate: '2020-11',
    endDate: '2022-01',
    description:
      'Specialized in creating responsive, accessible web interfaces for various client projects. Worked closely with designers to implement pixel-perfect designs and ensure cross-browser compatibility.',
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'SASS',
      'Git',
      'Bootstrap',
    ],
    achievements: [
      'Built reusable React components and used Tailwind CSS/Bootstrap, reducing development time by 20%',
      'Developed interactive dashboards and improved performance, collaborating directly with UI/UX teams',
    ],
  },
];
