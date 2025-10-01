import { t } from '@/stores/language';

export default function ExperienceResume() {
  return (
    <div id="resume-download" className="mt-20 text-center scroll-mt-20">
      <div className="relative max-w-4xl mx-auto">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl transform rotate-1"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-primary-50 dark:from-primary-800/20 dark:to-primary-900/20 rounded-2xl transform -rotate-1"></div>

        {/* Content */}
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-12">
          <div className="max-w-2xl mx-auto">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/50 rounded-full">
                <svg
                  className="w-8 h-8 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t.value.experience.wantToKnowMore}
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t.value.experience.resumeDescription}
            </p>

            {/* Download Buttons - Static labels for clarity */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/cv/resume-en.pdf"
                download
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-lg">Download Resume</span>
              </a>
              <a
                href="/cv/resume-es.pdf"
                download
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-lg">Descargar Currículum</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}