# 🚀 Kevin's Personal Portfolio

Welcome to my modern, responsive, and blazing-fast developer portfolio, built with [Astro](https://astro.build/), TypeScript, and Tailwind CSS! 🌟

---

## ✨ Features

- ⚡ **Lightning Fast**: Static site generation with Astro for optimal performance
- 🎨 **Modern UI**: Clean, minimal, and accessible design with Tailwind CSS
- 📱 **Responsive**: Looks great on all devices
- 🌙 **Dark Mode**: Automatic and manual dark mode support
- 🧩 **Component-Based**: Modular, reusable Astro and TypeScript components
- 🛠️ **Type-Safe**: Built with TypeScript for reliability
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- ♿ **Accessible**: WCAG 2.1 AA compliance
- 📝 **Easily Customizable**: Update your data and content in one place

---

## �️ Tech Stack

- [Astro 5.x](https://astro.build/) (Static Site Generator)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (with custom design system)
- [SCSS/SASS](https://sass-lang.com/) (optional, for custom styles)
- [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) (recommended deployment)

---

## 📁 Project Structure

```text
/
├── public/                # Static assets (served as-is)
│   └── favicon.svg
├── src/
│   ├── assets/            # Images, SVGs, etc.
│   ├── components/        # UI, layout, section, and icon components
│   │   ├── layout/        # Header, Footer, BaseLayout
│   │   ├── sections/      # Hero, About, Projects, etc.
│   │   ├── ui/            # Button, Card, Badge, etc.
│   │   └── icons/         # SVG icon components
│   ├── data/              # Portfolio data (experience, projects, skills)
│   ├── layouts/           # Page layout templates
│   ├── pages/             # Route-based pages (Astro file-based routing)
│   ├── styles/            # Global and custom CSS
│   └── types/             # TypeScript type definitions
├── package.json           # Project metadata and scripts
├── tailwind.config.mjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── astro.config.mjs       # Astro configuration
└── README.md              # This file
```

---

## ⚙️ Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

   Visit [http://localhost:4321](http://localhost:4321) to view your site.

3. **Build for production**

   ```bash
   pnpm build
   # or
   npm run build
   # or
   yarn build
   ```

4. **Preview the production build**
   ```bash
   pnpm preview
   # or
   npm run preview
   # or
   yarn preview
   ```

---

## �‍💻 Customization

- **Portfolio Data**: Update your info in `src/data/experience.ts`, `src/data/projects.ts`, and `src/data/skills.ts`.
- **Site Metadata**: Edit SEO and meta tags in `src/components/layout/BaseLayout.astro` and `src/layouts/Layout.astro`.
- **Branding & Theme**: Adjust colors and fonts in `tailwind.config.mjs` and `src/styles/global.css`.
- **Components**: Reuse or extend components in `src/components/` for new sections or UI elements.
- **Routing**: Add new pages in `src/pages/` (Astro's file-based routing).

---

## 🧞 Useful Commands

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `pnpm install`    | Install dependencies                      |
| `pnpm dev`        | Start local dev server (`localhost:4321`) |
| `pnpm build`      | Build production site to `./dist/`        |
| `pnpm preview`    | Preview your build locally                |
| `pnpm lint`       | Lint source code with ESLint              |
| `pnpm lint:fix`   | Auto-fix linting issues                   |
| `pnpm type-check` | Run TypeScript type checking              |
| `pnpm format`     | Format code with Prettier                 |
| `pnpm clean`      | Remove build artifacts                    |

---

## 🌐 Deployment

Deploy your site to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static hosting provider. The output is in the `dist/` folder after running `pnpm build`.

---

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 👤 Author

**Kevin Benach**  
[GitHub](https://github.com/kevinbenach) • [LinkedIn](https://linkedin.com/in/kevin)

---

> 💡 _Inspired by modern web best practices. Feel free to fork and customize!_
