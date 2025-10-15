/**
 * Translation Type Definitions
 *
 * Single Responsibility: Define type structure for all translations
 * Provides type safety and IntelliSense for translation keys
 */

/**
 * Navigation section translations
 */
export interface NavigationTranslations {
  home: string;
  about: string;
  skills: string;
  projects: string;
  experience: string;
  contact: string;
}

/**
 * Hero section translations
 */
export interface HeroTranslations {
  name: string;
  title: string;
  description: string;
  viewWork: string;
  getInTouch: string;
  downloadResume: string;
  learnMore: string;
}

/**
 * About section translations
 */
export interface AboutTranslations {
  title: string;
  subtitle: string;
  greeting: string;
  description1: string;
  description2: string;
  description3: string;
  stats: {
    experience: string;
    projects: string;
    technologies: string;
    coffee: string;
  };
}

/**
 * Skills section translations
 */
export interface SkillsTranslations {
  title: string;
  subtitle: string;
  currentlyLearning: string;
  categories: {
    frontend: string;
    backend: string;
    database: string;
    tools: string;
  };
}

/**
 * Experience section translations
 */
export interface ExperienceTranslations {
  title: string;
  subtitle: string;
  current: string;
  present: string;
  duration: {
    year: string;
    years: string;
    month: string;
    months: string;
  };
  technologiesUsed: string;
  keyAchievements: string;
  wantToKnowMore: string;
  resumeDescription: string;
  downloadResume: string;
  jobs: {
    'senior-full-stack-developer': {
      description: string;
      achievements: string[];
    };
    'fullstack-developer': {
      description: string;
      achievements: string[];
    };
    'frontend-developer': {
      description: string;
      achievements: string[];
    };
  };
}

/**
 * Projects section translations
 */
export interface ProjectsTranslations {
  title: string;
  subtitle: string;
  status: {
    completed: string;
    inProgress: string;
    planned: string;
  };
  liveDemo: string;
  viewCode: string;
  code: string;
  viewAllProjects: string;
}

/**
 * Contact section translations
 */
export interface ContactTranslations {
  title: string;
  subtitle: string;
  information: string;
  quickConnect: string;
  socialDescription: string;
  labels: {
    email: string;
    phone: string;
    location: string;
    place: string;
    linkedin: string;
  };
}

/**
 * Contact form translations
 */
export interface FormTranslations {
  heading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjectOptions: {
    job: string;
    project: string;
    consulting: string;
    inquiry: string;
    other: string;
  };
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  required: string;
  invalidEmail: string;
}

/**
 * Footer section translations
 */
export interface FooterTranslations {
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  navigation: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  copyright: string;
  builtWith: string;
  and: string;
  backToTop: string;
}

/**
 * Complete translation structure
 * Aggregates all section translations
 */
export interface Translations {
  navigation: NavigationTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  skills: SkillsTranslations;
  experience: ExperienceTranslations;
  projects: ProjectsTranslations;
  contact: ContactTranslations;
  form: FormTranslations;
  footer: FooterTranslations;
}
