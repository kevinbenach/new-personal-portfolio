import { t } from '@/stores/language';

export default function SkillsText() {
  return (
    <>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-6">{t.value.skills.title}</h2>
        <p className="body-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t.value.skills.subtitle}
        </p>
      </div>
    </>
  );
}
