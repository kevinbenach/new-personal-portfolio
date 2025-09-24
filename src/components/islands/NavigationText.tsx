import { t } from '@/stores/language';

export default function NavigationText() {
  // This component automatically re-renders when language changes
  // because it uses the computed 't' signal

  const translatedItems = [
    { name: t.value.navigation.home, href: '#home' },
    { name: t.value.navigation.projects, href: '#projects' },
    { name: t.value.navigation.skills, href: '#skills' },
    { name: t.value.navigation.experience, href: '#experience' },
    { name: t.value.navigation.contact, href: '#contact' },
  ];

  return (
    <>
      {translatedItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus-ring"
        >
          {item.name}
        </a>
      ))}
    </>
  );
}