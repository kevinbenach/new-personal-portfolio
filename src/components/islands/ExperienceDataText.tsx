import { t, currentLanguage } from '@/stores/language';

interface ExperienceDataTextProps {
  experiences: any[];
}

export default function ExperienceDataText({ experiences }: ExperienceDataTextProps) {
  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = currentLanguage.value === 'es' ? 'es-ES' : 'en-US';
    return date.toLocaleDateString(locale, { month: 'short', year: 'numeric' });
  };

  // Calculate duration
  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const diffTime = end.getTime() - start.getTime();
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    if (diffMonths < 12) {
      return `${diffMonths} ${diffMonths > 1 ? t.value.experience.duration.months : t.value.experience.duration.month}`;
    }

    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;

    if (remainingMonths === 0) {
      return `${years} ${years > 1 ? t.value.experience.duration.years : t.value.experience.duration.year}`;
    }

    return `${years} ${years > 1 ? t.value.experience.duration.years : t.value.experience.duration.year} ${remainingMonths} ${remainingMonths > 1 ? t.value.experience.duration.months : t.value.experience.duration.month}`;
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced Timeline line with gradient */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 dark:from-primary-800 dark:via-primary-700 dark:to-primary-800 transform md:-translate-x-px rounded-full shadow-sm"></div>

      {experiences.map((experience, index) => (
        <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>

          {/* Enhanced Timeline dot with gradient ring */}
          <div className={`absolute w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700 rounded-full border-4 border-white dark:border-gray-800 shadow-xl
            left-2 md:left-1/2 transform md:-translate-x-6 top-6 flex items-center justify-center group hover:scale-110 transition-transform duration-300`}>

            {/* Icon inside dot */}
            <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
            </div>

            {/* Animated ring for current position */}
            {!experience.endDate && (
              <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping"></div>
            )}
          </div>

          {/* Current position indicator */}
          {!experience.endDate && (
            <div className={`absolute px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg
              left-16 md:left-1/2 md:transform md:-translate-x-1/2 top-0 animate-pulse`}>
              {t.value.experience.current}
            </div>
          )}

          {/* Enhanced Content Card */}
          <div
            className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}
                        group relative overflow-hidden`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Card Background with Subtle Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-750 dark:to-gray-800 rounded-2xl"></div>
            <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-500"></div>

            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            {/* Card Content */}
            <div className="relative p-8 md:p-10">
              {/* Date and Duration */}
              <div className="mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                  <div className="text-primary-700 dark:text-primary-300 font-semibold text-lg mb-2 lg:mb-0">
                    {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : t.value.experience.present}
                  </div>
                  <div className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full ${
                    experience.endDate
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/50 dark:to-emerald-900/50 dark:text-green-200 shadow-sm'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      experience.endDate ? 'bg-gray-400' : 'bg-green-500 animate-pulse'
                    }`}></div>
                    {calculateDuration(experience.startDate, experience.endDate)}
                  </div>
                </div>
              </div>

              {/* Position and Company */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {experience.position}
                </h3>
                <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 mb-4">
                  {experience.company}
                </h4>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                  {t.value.experience.technologiesUsed}
                </h5>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 dark:from-primary-900/30 dark:to-primary-800/30 dark:text-primary-200 border border-primary-200 dark:border-primary-800 hover:scale-105 transition-transform duration-200 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-lg flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t.value.experience.keyAchievements}
                  </h5>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement: string, achIndex: number) => (
                      <li key={achIndex} className="flex items-start group/achievement">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/achievement:scale-110 transition-transform duration-200 shadow-sm">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}