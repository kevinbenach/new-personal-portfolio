import { t } from '@/stores/language';

export default function AboutText() {
  return (
    <>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-6">{t.value.about.title}</h2>
        <p className="body-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t.value.about.subtitle}
        </p>
      </div>

      {/* About Content */}
      <div className="order-1 lg:order-2 space-y-6">
        <div>
          <h3 className="heading-md mb-4 text-primary-600 dark:text-primary-400">
            {t.value.about.greeting}
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>{t.value.about.description1}</p>
            <p>{t.value.about.description2}</p>
            <p>{t.value.about.description3}</p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="p-6 text-center bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              3+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t.value.about.stats.experience}
            </div>
          </div>

          <div className="p-6 text-center bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              50+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t.value.about.stats.projects}
            </div>
          </div>

          <div className="p-6 text-center bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t.value.about.stats.technologies}
            </div>
          </div>

          <div className="p-6 text-center bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              ∞
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t.value.about.stats.coffee}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
