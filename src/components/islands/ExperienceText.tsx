import { t } from '@/stores/language';

export default function ExperienceText() {
  return (
    <div className="text-center mb-16">
      <h2 className="heading-lg mb-6">{t.value.experience.title}</h2>
      <p className="body-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {t.value.experience.subtitle}
      </p>
    </div>
  );
}
