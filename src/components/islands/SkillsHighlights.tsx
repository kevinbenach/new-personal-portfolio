import { t } from '@/stores/language';

const highlights = [
  'Solidity',
  'Web3',
  'Kubernetes',
  'Bun',
  'Hono',
  'AI Development',
  'Blockchain',
];

export default function SkillsHighlights() {
  return (
    <div className="text-center">
      <h3 className="heading-md mb-8 text-gray-900 dark:text-white">
        {t.value.skills.currentlyLearning}
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {highlights.map((tech) => (
          <span
            key={tech}
            className="
              px-4 py-2
              rounded-lg
              bg-white/70 dark:bg-gray-900/60
              border border-gray-200 dark:border-gray-700
              text-gray-700 dark:text-gray-200
              shadow-sm
              backdrop-blur-sm
              transition
              hover:bg-primary-50/80 hover:dark:bg-primary-900/40
              hover:border-primary-300 hover:dark:border-primary-600
              hover:shadow-md
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
