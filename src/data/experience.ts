import type { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'senior-full-stack-developer',
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    startDate: '2022-03',
    description: 'Led development of scalable web applications serving 100k+ users. Architected and implemented microservices infrastructure, mentored junior developers, and collaborated with cross-functional teams to deliver high-quality products.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'],
    achievements: [
      'Reduced application load times by 40% through performance optimization',
      'Led a team of 4 developers on a major product redesign',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Architected microservices infrastructure handling 1M+ requests/day'
    ]
  },
  {
    id: 'full-stack-developer',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    startDate: '2021-01',
    endDate: '2022-02',
    description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated directly with clients to understand requirements and deliver custom solutions within tight deadlines.',
    technologies: ['Vue.js', 'JavaScript', 'Python', 'Django', 'MongoDB', 'Redis', 'Docker'],
    achievements: [
      'Successfully delivered 15+ client projects on time and under budget',
      'Built real-time chat application handling 10k+ concurrent users',
      'Implemented automated testing reducing bugs by 35%',
      'Developed responsive designs for mobile-first approach'
    ]
  },
  {
    id: 'frontend-developer',
    company: 'Digital Agency Pro',
    position: 'Frontend Developer',
    startDate: '2020-06',
    endDate: '2020-12',
    description: 'Specialized in creating responsive, accessible web interfaces for various client projects. Worked closely with designers to implement pixel-perfect designs and ensure cross-browser compatibility.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Webpack', 'Jest', 'Figma'],
    achievements: [
      'Created 20+ responsive websites with 100% cross-browser compatibility',
      'Improved web accessibility scores to WCAG 2.1 AA standards',
      'Collaborated with design team to establish component design system',
      'Mentored 2 junior developers in React best practices'
    ]
  },
  {
    id: 'junior-developer',
    company: 'WebDev Studio',
    position: 'Junior Web Developer',
    startDate: '2019-09',
    endDate: '2020-05',
    description: 'Started career developing websites and web applications using HTML, CSS, and JavaScript. Gained experience in various frameworks and tools while contributing to team projects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'Bootstrap'],
    achievements: [
      'Built 10+ websites from scratch using modern web standards',
      'Contributed to team projects improving code quality',
      'Learned and implemented responsive design principles',
      'Participated in code reviews and agile development process'
    ]
  }
];