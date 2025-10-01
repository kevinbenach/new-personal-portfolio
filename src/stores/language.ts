import { computed, signal } from '@preact/signals';

// Initialize with default value, will be updated on client
export const currentLanguage = signal<'en' | 'es'>('en');

// All translations in one place - no external loading needed
const allTranslations = {
  en: {
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
      description:
        'I create modern, accessible, and performant web applications using cutting-edge technologies. Passionate about clean code, user experience, and turning complex problems into elegant solutions.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      learnMore: 'Learn more about me',
    },
    about: {
      title: 'About Me',
      subtitle:
        "I'm a passionate developer who loves creating digital experiences that make a difference.",
      greeting: "Hello! I'm Kevin",
      description1:
        "I'm a full-stack developer with a passion for creating modern, efficient, and user-friendly web applications. My journey in tech started several years ago, and I've been continuously learning and growing ever since.",
      description2:
        'I specialize in modern JavaScript frameworks, cloud technologies, and building scalable applications. I love solving complex problems and turning ideas into reality through clean, maintainable code.',
      description3:
        "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.",
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        technologies: 'Technologies',
        coffee: 'Coffee Cups',
      },
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle:
        'A comprehensive overview of the technologies and tools I use to build modern, scalable applications.',
      currentlyLearning: 'Currently Learning & Exploring',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools & Others',
      },
    },
    experience: {
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
    },
    projects: {
      title: 'Featured Projects',
      subtitle:
        'A showcase of my recent work. Each project represents a unique challenge and demonstrates different aspects of my development skills.',
      status: {
        completed: 'Completed',
        inProgress: 'In Progress',
        planned: 'Planned',
      },
      liveDemo: 'Live Demo',
      viewCode: 'View Code',
      code: 'Code',
      viewAllProjects: 'View All Projects',
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        "I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology.",
      information: 'Contact Information',
      quickConnect: "Let's Connect!",
      socialDescription: 'Follow me on social media for updates and insights.',
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        place: 'Barcelona, Spain',
        linkedin: 'LinkedIn',
      },
    },
    form: {
      heading: 'Send me a message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Select a subject',
      subjectOptions: {
        job: 'Job Opportunity',
        project: 'Project Collaboration',
        consulting: 'Consulting Services',
        inquiry: 'General Inquiry',
        other: 'Other',
      },
      messageLabel: 'Message',
      messagePlaceholder:
        'Tell me about your project, opportunity, or just say hello...',
      submit: 'Send Message',
      sending: 'Sending...',
      success:
        "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      error:
        'Sorry, there was an error sending your message. Please try again or contact me directly.',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
    },
    footer: {
      socialLinks: {
        github: 'Visit my GitHub profile',
        linkedin: 'Visit my LinkedIn profile',
        twitter: 'Visit my Twitter profile',
        email: 'Visit my Email profile',
      },
      navigation: {
        about: 'About',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
      },
      copyright: 'All rights reserved.',
      builtWith: 'Built with',
      and: 'and',
      backToTop: 'Back to top',
    },
  },
  es: {
    navigation: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      name: 'Kevin Benach',
      title: 'Desarrollador Fullstack',
      description:
        'Creo aplicaciones web modernas, accesibles y eficientes utilizando tecnologías de vanguardia. Apasionado por el código, la experiencia de usuario y convertir problemas complejos en soluciones elegantes.',
      viewWork: 'Ver Mi Trabajo',
      getInTouch: 'Contáctame',
      learnMore: 'Conoce más sobre mí',
    },
    about: {
      title: 'Sobre Mí',
      subtitle:
        'Soy un desarrollador apasionado que ama crear experiencias digitales que marcan la diferencia.',
      greeting: '¡Hola! Soy Kevin',
      description1:
        'Soy un desarrollador full-stack con pasión por crear aplicaciones web modernas, eficientes y fáciles de usar. Mi viaje en tecnología comenzó hace varios años, y he estado aprendiendo y creciendo continuamente desde entonces.',
      description2:
        'Me especializo en frameworks modernos de JavaScript, tecnologías en la nube y construcción de aplicaciones escalables. Me encanta resolver problemas complejos y convertir ideas en realidad a través de código limpio y mantenible.',
      description3:
        'Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto, o compartiendo conocimiento con la comunidad de desarrolladores.',
      stats: {
        experience: 'Años de Experiencia',
        projects: 'Proyectos Completados',
        technologies: 'Tecnologías',
        coffee: 'Tazas de Café',
      },
    },
    skills: {
      title: 'Habilidades y Tecnologías',
      subtitle:
        'Una visión integral de las tecnologías y herramientas que utilizo para construir aplicaciones modernas y escalables.',
      currentlyLearning: 'Actualmente Aprendiendo y Explorando',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de Datos',
        tools: 'Herramientas y Otros',
      },
    },
    experience: {
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
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle:
        'Una muestra de mi trabajo reciente. Cada proyecto representa un desafío único y demuestra diferentes aspectos de mis habilidades de desarrollo.',
      status: {
        completed: 'Completado',
        inProgress: 'En Progreso',
        planned: 'Planeado',
      },
      liveDemo: 'Demo en Vivo',
      viewCode: 'Ver Código',
      code: 'Código',
      viewAllProjects: 'Ver Todos los Proyectos',
    },
    contact: {
      title: 'Hablemos',
      subtitle:
        'Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes, o simplemente tener conversación sobre tecnología.',
      information: 'Información de Contacto',
      quickConnect: '¡Conectemos!',
      socialDescription:
        'Sígueme en redes sociales para actualizaciones y consejos.',
      labels: {
        email: 'Correo',
        phone: 'Teléfono',
        location: 'Ubicación',
        place: 'Barcelona, España',
        linkedin: 'LinkedIn',
      },
    },
    form: {
      heading: 'Envíame un mensaje',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Tu nombre completo',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu.correo@ejemplo.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Selecciona un asunto',
      subjectOptions: {
        job: 'Oportunidad de trabajo',
        project: 'Colaboración en proyecto',
        consulting: 'Servicios de consultoría',
        inquiry: 'Consulta general',
        other: 'Otro',
      },
      messageLabel: 'Mensaje',
      messagePlaceholder:
        'Cuéntame sobre tu proyecto, oportunidad, o simplemente saluda...',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      success:
        '¡Gracias! Tu mensaje ha sido enviado correctamente. Te responderé pronto.',
      error:
        'Lo siento, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctame directamente.',
      required: 'Este campo es obligatorio',
      invalidEmail: 'Por favor, introduce una dirección de correo válida',
    },
    footer: {
      socialLinks: {
        github: 'Visita mi perfil de GitHub',
        linkedin: 'Visita mi perfil de LinkedIn',
        twitter: 'Visita mi perfil de Twitter',
        email: 'Visita mi perfil de Email',
      },
      navigation: {
        about: 'Sobre mí',
        projects: 'Proyectos',
        experience: 'Experiencia',
        contact: 'Contacto',
      },
      copyright: 'Todos los derechos reservados.',
      builtWith: 'Hecho con',
      and: 'y',
      backToTop: 'Volver arriba',
    },
  },
};

// Computed signal that automatically updates when language changes
export const t = computed(() => allTranslations[currentLanguage.value]);

// Initialize language from localStorage or browser detection
export function initializeLanguage() {
  if (typeof window === 'undefined') return;

  const savedLang = localStorage.getItem('language') as 'en' | 'es';
  if (savedLang && ['en', 'es'].includes(savedLang)) {
    currentLanguage.value = savedLang;
  } else {
    // Auto-detect from browser
    const browserLang = navigator.language.toLowerCase();
    currentLanguage.value = browserLang.startsWith('es') ? 'es' : 'en';
  }
}

// Switch language and persist choice
export function switchLanguage() {
  currentLanguage.value = currentLanguage.value === 'en' ? 'es' : 'en';
  localStorage.setItem('language', currentLanguage.value);
  document.documentElement.lang = currentLanguage.value;
}
