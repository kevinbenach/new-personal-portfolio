import type { ExperienceTranslations } from '../../types';

export const experience: ExperienceTranslations = {
  title: 'Experiencia Profesional',
  subtitle:
    'Mi trayectoria profesional mostrando crecimiento, desafíos superados e impacto creado en diferentes organizaciones.',
  current: 'Posición Actual',
  present: 'Presente',
  duration: {
    year: 'año',
    years: 'años',
    month: 'mes',
    months: 'meses',
  },
  technologiesUsed: 'Tecnologías Utilizadas',
  keyAchievements: 'Logros Clave',
  wantToKnowMore: '¿Quieres saber más?',
  resumeDescription:
    'Descarga mi currículum para información detallada sobre mi experiencia, educación y certificaciones.',
  downloadResume: 'Descargar Currículum',
  jobs: {
    'senior-full-stack-developer': {
      description:
        'Diseñé e implementé infraestructura de microservicios, mentoricé desarrolladores junior y colaboré con equipos multifuncionales para entregar productos de alta calidad.',
      achievements: [
        'Desarrollé un sistema de diseño escalable con React+TypeScript (MUI)',
        'Reduje la duplicación de código en un 30%',
        'Implementé optimización de rendimiento: lazy loading y memoización',
        'Mejoré los tiempos de carga en un 25%',
        'Construí APIs REST con Node.js/Express + PostgreSQL/Prisma',
        'Reduje el tiempo de respuesta en un 35%',
        'Lideré los esfuerzos de testing con Jest/Playwright (+30% de cobertura)',
        'Mentoricé desarrolladores junior',
      ],
    },
    'fullstack-developer': {
      description:
        'Desarrollé y mantuve múltiples proyectos de clientes utilizando tecnologías web modernas. Colaboré directamente con los clientes para entender requisitos y entregar soluciones personalizadas dentro de plazos ajustados.',
      achievements: [
        'Desarrollé aplicaciones Next.js (SSR/SSG) con TypeScript',
        'Mejoré el SEO y la velocidad de carga en un 40%',
        'Implementé OAuth 2.0 + JWT con RBAC y documenté APIs (OpenAPI)',
        'Implementé pruebas automatizadas reduciendo errores en un 35%',
        'Automaticé pipelines CI/CD con GitLab (+25% eficiencia en entregas)',
      ],
    },
    'frontend-developer': {
      description:
        'Especializado en crear interfaces web responsivas y accesibles para varios proyectos de clientes. Trabajé estrechamente con diseñadores para implementar diseños pixel-perfect y asegurar compatibilidad entre navegadores.',
      achievements: [
        'Construí componentes React reutilizables y usé Tailwind CSS.',
        'Reduje el tiempo de desarrollo en un 20%',
        'Desarrollé dashboards interactivos y mejoré el rendimiento',
        'Colaboré directamente con equipos de UI/UX',
      ],
    },
  },
};
