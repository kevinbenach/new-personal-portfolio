import { t } from '@/stores/language';
import Button from '@/components/ui/Button.astro';

export default function HeroText() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {/* Name */}
      <div>
        <h1 className="heading-xl mb-4">
          <span className="text-gray-900 dark:text-white">{t.value.hero.name}</span>
        </h1>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-600 dark:text-primary-400 mb-8">
          {t.value.hero.title}
        </h2>
      </div>

      {/* Description */}
      <div>
        <p className="body-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {t.value.hero.description}
        </p>
      </div>

      {/* Brief About Resume */}
      <div className="mb-12 max-w-3xl mx-auto">
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.value.about.description1}
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center items-center gap-8 mt-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-primary-600 dark:text-primary-400 text-lg">3+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.value.about.stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-primary-600 dark:text-primary-400 text-lg">50+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.value.about.stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-primary-600 dark:text-primary-400 text-lg">15+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.value.about.stats.technologies}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {t.value.hero.viewWork}
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {t.value.hero.getInTouch}
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16">
        <a
          href="#projects"
          className="inline-flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 group"
          aria-label="Scroll to projects section"
        >
          <span className="text-sm font-medium mb-2">View My Work</span>
          <svg
            className="h-6 w-6 group-hover:text-primary-600 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
}