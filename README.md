# Kevin's Personal Portfolio

Welcome to my modern, high-performance developer portfolio built with [Astro](https://astro.build/), [Preact](https://preactjs.com/), TypeScript, and Tailwind CSS.

---

## Features

### Core Features
- ⚡ **Lightning Fast**: Static site generation with Astro's Islands architecture
- 🏝️ **Partial Hydration**: Interactive Preact components only where needed
- 🌍 **Bilingual**: Full internationalization support (English/Spanish)
- 🌙 **Theme Toggle**: Light/Dark mode with localStorage persistence
- 📱 **Fully Responsive**: Mobile-first design for all devices
- 🎨 **Custom Design System**: Tailwind CSS with custom colors, animations, and typography

### Interactive Components
- 🧭 **Smart Navigation**: Active section highlighting and smooth scrolling
- 📝 **Contact Form**: Formspree integration for email submissions
- 🔝 **Scroll to Top**: Lazy-loaded scroll utility
- 🍔 **Mobile Menu**: Responsive hamburger navigation
- 🌐 **Language Switcher**: Browser detection with manual override

### Developer Experience
- 🛠️ **Type-Safe**: Strict TypeScript throughout
- ✅ **Testing**: Vitest with React Testing Library
- 🔍 **Linting**: ESLint with TypeScript support
- 💅 **Formatting**: Prettier with Astro plugin
- 🚀 **CI/CD**: GitHub Actions pipeline (lint, test, type-check, build)
- 📊 **Coverage**: Test coverage reports available

### SEO & Accessibility
- 🔍 **SEO Optimized**: Comprehensive meta tags and Open Graph support
- ♿ **Accessible**: WCAG-compliant with semantic HTML and ARIA labels
- 🗺️ **Sitemap**: XML sitemap included
- 🤖 **Robots.txt**: Search engine crawler configuration

---

## Tech Stack

### Core Framework
- [Astro 5.x](https://astro.build/) - Modern static site generator
- [Preact](https://preactjs.com/) - Lightweight React alternative (3KB)
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### Libraries & Tools
- **State Management**: Preact Signals
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **Fonts**: Inter (self-hosted via Fontsource)
- **Forms**: Formspree integration
- **Optimization**: SVGO for icon optimization

### Development Tools
- Node.js 20+
- pnpm (package manager)
- Vite (build tool)
- Git (version control)

---

## Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── ci.yml                     # CI/CD pipeline
│
├── public/                            # Static assets (served as-is)
│   ├── cv/                            # Resume PDFs (EN/ES)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/                        # Images and icons
│   │   └── icons/                     # Technology icons (24 SVG files)
│   │
│   ├── components/
│   │   ├── islands/                   # Preact interactive components
│   │   │   ├── ContactForm.tsx        # Contact form with Formspree
│   │   │   ├── ThemeToggle.tsx        # Dark/light mode toggle
│   │   │   ├── LanguageSwitcher.tsx   # EN/ES language selector
│   │   │   ├── MobileNavigationMenu.tsx  # Mobile hamburger menu
│   │   │   ├── ActiveSectionHighlight.tsx  # Active nav indicator
│   │   │   ├── ScrollToTop.tsx        # Scroll to top button
│   │   │   └── ...                    # Section-specific components
│   │   │
│   │   ├── layout/                    # Layout components
│   │   │   ├── BaseLayout.astro       # Root HTML layout
│   │   │   ├── Header.astro           # Navigation header
│   │   │   └── Footer.astro           # Footer section
│   │   │
│   │   ├── sections/                  # Page sections
│   │   │   ├── Hero.astro             # Hero section
│   │   │   ├── Projects.astro         # Projects showcase
│   │   │   ├── Skills.astro           # Skills grid
│   │   │   ├── Experience.astro       # Work experience
│   │   │   ├── About.astro            # About section
│   │   │   └── Contact.astro          # Contact section
│   │   │
│   │   └── ui/                        # Reusable UI components
│   │       ├── Card.astro             # Card wrapper
│   │       └── Icon.tsx               # Icon component
│   │
│   ├── data/                          # Portfolio data
│   │   ├── projects.ts                # Project definitions
│   │   ├── skills.ts                  # Technical skills
│   │   ├── experience.ts              # Work experience
│   │   └── *.test.ts                  # Data tests
│   │
│   ├── i18n/                          # Internationalization
│   │   ├── config.ts                  # i18n configuration
│   │   ├── types.ts                   # Translation types
│   │   ├── detector.ts                # Language detection
│   │   ├── storage.ts                 # LocalStorage persistence
│   │   └── translations/              # Translation files
│   │       ├── en/                    # English translations
│   │       └── es/                    # Spanish translations
│   │
│   ├── layouts/                       # Page layouts
│   │   └── Layout.astro               # Default layout
│   │
│   ├── pages/                         # File-based routing
│   │   └── index.astro                # Home page
│   │
│   ├── stores/                        # Global state
│   │   └── language.ts                # Language state (Preact signals)
│   │
│   ├── styles/                        # Global styles
│   │   └── global.css                 # Tailwind + custom utilities
│   │
│   ├── types/                         # TypeScript definitions
│   │   └── portfolio.ts               # Portfolio data types
│   │
│   └── test/                          # Test configuration
│       └── setup.ts                   # Vitest setup
│
├── astro.config.mjs                   # Astro configuration
├── tailwind.config.mjs                # Tailwind customization
├── tsconfig.json                      # TypeScript config (strict)
├── vitest.config.ts                   # Test configuration
├── eslint.config.js                   # ESLint rules
├── .prettierrc                        # Prettier settings
├── svgo.config.js                     # SVG optimization
└── package.json                       # Project metadata
```

---

## Getting Started

### Prerequisites
- Node.js 20 or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/new-personal-portfolio.git
   cd new-personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
   Visit [http://localhost:4321](http://localhost:4321) to view your site.

4. **Build for production**
   ```bash
   pnpm build
   # or
   npm run build
   ```

5. **Preview the production build**
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

---

## Available Commands

| Command                | Action                                           |
| ---------------------- | ------------------------------------------------ |
| `pnpm install`         | Install dependencies                             |
| `pnpm dev`             | Start local dev server (`localhost:4321`)        |
| `pnpm build`           | Build production site to `./dist/`               |
| `pnpm preview`         | Preview your build locally                       |
| `pnpm type-check`      | Run TypeScript type checking                     |
| `pnpm lint`            | Lint source code with ESLint                     |
| `pnpm lint:fix`        | Auto-fix linting issues                          |
| `pnpm format`          | Format code with Prettier                        |
| `pnpm clean`           | Remove build artifacts                           |
| `pnpm optimize-icons`  | Optimize SVG icons with SVGO                     |
| `pnpm test`            | Run tests in watch mode                          |
| `pnpm test:ui`         | Run tests with visual UI                         |
| `pnpm test:run`        | Run tests once                                   |
| `pnpm test:coverage`   | Generate test coverage report                    |

---

## Customization

### Portfolio Content

1. **Personal Information**
   - Update contact information in `src/i18n/translations/en/contact.ts` and Spanish version
   - Modify hero section text in `src/i18n/translations/en/hero.ts`

2. **Projects**
   - Edit `src/data/projects.ts` to add/update your projects
   - Set `featured: true` for projects to display on homepage
   - Add project images to `src/assets/`

3. **Skills**
   - Update `src/data/skills.ts` with your technical skills
   - Categories: Frontend, Backend, Database, Tools
   - Skills are linked to icons in `src/assets/icons/`

4. **Work Experience**
   - Modify `src/data/experience.ts` with your work history
   - Add achievements and key technologies used

5. **About Section**
   - Edit about text in `src/i18n/translations/en/about.ts`

### Styling & Branding

1. **Colors**
   - Customize color palette in `tailwind.config.mjs`
   - Modify primary, accent, and gray color scales

2. **Typography**
   - Change fonts in `tailwind.config.mjs`
   - Default: Inter font family

3. **Animations**
   - Add/modify animations in `tailwind.config.mjs`
   - Current: fade-in, slide-up, float, pulse-slow

4. **Global Styles**
   - Edit `src/styles/global.css` for custom CSS
   - Tailwind directives and utilities

### Internationalization

1. **Add New Language**
   - Create new directory in `src/i18n/translations/`
   - Copy English translation files as template
   - Update `src/i18n/config.ts` to add language

2. **Modify Translations**
   - Edit files in `src/i18n/translations/en/` (English)
   - Edit files in `src/i18n/translations/es/` (Spanish)

### Contact Form

- Form submissions handled by Formspree
- Configure form endpoint in `src/components/islands/ContactForm.tsx`
- Update the Formspree endpoint URL with your own

### SEO & Meta Tags

- Edit site metadata in `astro.config.mjs`
- Update meta tags in `src/components/layout/BaseLayout.astro`
- Modify sitemap in `public/sitemap.xml`

---

## Testing

### Running Tests

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test:run

# Run tests with UI
pnpm test:ui

# Generate coverage report
pnpm test:coverage
```

### Test Files

- Unit tests for data: `src/data/*.test.ts`
- Component tests: `src/components/islands/*.test.tsx`
- i18n tests: `src/i18n/*.test.ts`

### Testing Stack

- **Vitest**: Fast unit test framework
- **Testing Library**: Component testing utilities
- **Happy-DOM**: Lightweight DOM implementation
- **Coverage**: v8 provider with HTML reports

---

## CI/CD Pipeline

### GitHub Actions

The project includes a comprehensive CI/CD pipeline (`.github/workflows/ci.yml`) that runs on:
- Push to `main` or `develop` branches
- Pull requests

### Pipeline Steps

1. **Setup**: Node.js 20 with pnpm caching
2. **Install**: Dependencies with frozen lockfile
3. **Lint**: ESLint code quality checks
4. **Type Check**: TypeScript validation
5. **Test**: Run Vitest test suite
6. **Build**: Production build to `./dist/`
7. **Artifact**: Upload build (7-day retention)

---

## Deployment

### Recommended Platforms

1. **Cloudflare Pages** (Recommended)
   - Connect GitHub repository
   - Build command: `pnpm build`
   - Output directory: `dist`
   - Node version: 20

2. **Vercel**
   - Import GitHub repository
   - Framework preset: Astro
   - Build command: `pnpm build`
   - Output directory: `dist`

3. **Netlify**
   - Import from Git
   - Build command: `pnpm build`
   - Publish directory: `dist`

### Manual Deployment

The `dist/` folder contains the production build and can be deployed to any static hosting provider.

---

## Performance

### Optimization Features

- **Static Site Generation**: Pre-rendered HTML for instant loading
- **Islands Architecture**: Minimal JavaScript, only where needed
- **Partial Hydration**: Interactive components load independently
- **SVG Optimization**: Automatic icon optimization with SVGO
- **Self-Hosted Fonts**: No external font CDN requests
- **CSS Purging**: Unused Tailwind classes removed
- **Code Splitting**: Automatic chunk splitting by Vite

### Lighthouse Scores

Target scores (production build):
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Learn More

### Documentation

- [Astro Documentation](https://docs.astro.build/)
- [Preact Documentation](https://preactjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)

### Astro Resources

- [Astro Discord Community](https://astro.build/chat)
- [Astro Integrations](https://astro.build/integrations/)
- [Astro Themes](https://astro.build/themes/)

---

## Author

**Kevin Benach**
Full Stack Developer

- GitHub: [@kevinbenach](https://github.com/kevinbenach)
- LinkedIn: [Kevin Benach](https://linkedin.com/in/kevin-benach)
- Website: [kevinbenach.com](https://kevinbenach.com)

---

## Acknowledgments

Built with modern web best practices and performance in mind. Feel free to fork and customize for your own portfolio!

---

**Tech Stack Summary**: Astro 5 + Preact + TypeScript + Tailwind CSS + Vitest + GitHub Actions + Cloudflare Pages
