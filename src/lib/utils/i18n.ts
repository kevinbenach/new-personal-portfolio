// Translation utilities for Astro components
export interface TranslationData {
  navigation: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    description: string;
    viewWork: string;
    getInTouch: string;
    learnMore: string;
  };
  about: {
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
  };
  contact: {
    title: string;
    subtitle: string;
    information: string;
    quickConnect: string;
    socialDescription: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    info: {
      email: string;
      phone: string;
      location: string;
      linkedin: string;
    };
  };
  skills: {
    categories: {
      frontend: string;
      backend: string;
      database: string;
      tools: string;
    };
  };
}

// Load translations for server-side components
export async function loadTranslations(lang: string = 'en'): Promise<TranslationData> {
  try {
    // Import the translation files directly from our TypeScript modules
    if (lang === 'es') {
      const { translations } = await import('../translations/es');
      return translations;
    } else {
      const { translations } = await import('../translations/en');
      return translations;
    }
  } catch (error) {
    console.warn(`Failed to load translations for ${lang}, falling back to English`);
    // Fallback to English translations
    try {
      const { translations } = await import('../translations/en');
      return translations;
    } catch (fallbackError) {
      // Fallback translations in case everything fails
      return {
      navigation: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
      },
      hero: {
        name: 'Kevin Benach',
        title: 'Fullstack Developer',
        description: 'I create modern, accessible, and performant web applications using cutting-edge technologies.',
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch',
        learnMore: 'Learn more about me',
      },
      about: {
        title: 'About Me',
        subtitle: "I'm a passionate developer who loves creating digital experiences that make a difference.",
        greeting: "Hello! I'm Kevin",
        description1: "I'm a full-stack developer with a passion for creating modern, efficient, and user-friendly web applications.",
        description2: 'I specialize in modern JavaScript frameworks, cloud technologies, and building scalable applications.',
        description3: 'When I\'m not coding, you can find me exploring new technologies, contributing to open source projects.',
        stats: {
          experience: 'Years Experience',
          projects: 'Projects Completed',
          technologies: 'Technologies',
          coffee: 'Coffee Cups',
        },
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology.",
        information: 'Contact Information',
        quickConnect: "Let's Connect!",
        socialDescription: 'Follow me on social media for updates and insights.',
        form: {
          name: 'Your Name',
          email: 'Your Email',
          subject: 'Subject',
          message: 'Your Message',
          send: 'Send Message',
          sending: 'Sending...',
          success: 'Message sent successfully!',
          error: 'Failed to send message. Please try again.',
        },
        info: {
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          linkedin: 'LinkedIn',
        },
      },
      skills: {
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          database: 'Database',
          tools: 'Tools & Others',
        },
      },
    };
    }
  }
}

// Get current language from various sources
export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return 'en';

  return localStorage.getItem('language') ||
         (navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en');
}