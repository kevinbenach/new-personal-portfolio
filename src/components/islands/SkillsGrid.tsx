import { skillCategories, skills } from '@/data/skills';
import { t } from '@/stores/language';
import Icon from '@/components/ui/Icon';

const skillsByCategory = skillCategories.map((category) => ({
  ...category,
  skills: skills.filter((skill) => skill.category === category.id),
}));

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {skillsByCategory.map((category) => (
        <div
          key={category.id}
          className="
            group
            p-8
            rounded-2xl
            bg-white/80 dark:bg-gray-900/80
            border border-gray-200 dark:border-gray-700
            shadow-sm
            transition
            hover:shadow-lg
            hover:border-primary-300 dark:hover:border-primary-600
            relative
            overflow-hidden
          "
        >
          <div className="flex items-center mb-6">
            <div
              className={`w-4 h-4 rounded-full mr-3 ${
                category.color === 'primary'
                  ? 'bg-primary-500'
                  : category.color === 'accent'
                    ? 'bg-accent-500'
                    : category.color === 'success'
                      ? 'bg-green-500'
                      : 'bg-yellow-500'
              }`}
            />
            <h3 className="heading-md text-gray-900 dark:text-white">
              {t.value.skills.categories[category.id]}
            </h3>
            <span className="ml-auto px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-xs">
              {category.skills.length}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="
                  flex items-center
                  p-3
                  rounded-lg
                  bg-white/60 dark:bg-gray-800/60
                  border border-gray-100 dark:border-gray-700
                  shadow
                  transition
                  hover:bg-primary-50/80 hover:dark:bg-primary-900/40
                  hover:border-primary-300 hover:dark:border-primary-600
                "
              >
                <Icon
                  name={skill.iconName || 'default'}
                  className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  ariaLabel={`${skill.name} icon`}
                />
                <span className="font-medium text-gray-900 dark:text-white text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
