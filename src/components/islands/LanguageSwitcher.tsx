import { useEffect } from 'preact/hooks';
import { currentLanguage, initializeLanguage, switchLanguage } from '@/stores/language';

// Professional SVG flag components
const USFlag = () => (
  <svg className="w-5 h-5" viewBox="0 0 21 15" fill="none">
    <rect width="21" height="15" fill="#B22234"/>
    <rect width="21" height="1.15" y="1.15" fill="white"/>
    <rect width="21" height="1.15" y="3.46" fill="white"/>
    <rect width="21" height="1.15" y="5.77" fill="white"/>
    <rect width="21" height="1.15" y="8.08" fill="white"/>
    <rect width="21" height="1.15" y="10.38" fill="white"/>
    <rect width="21" height="1.15" y="12.69" fill="white"/>
    <rect width="8.4" height="8.08" fill="#3C3B6E"/>
    <g fill="white">
      <circle cx="1.5" cy="1.5" r="0.3"/>
      <circle cx="3" cy="1.5" r="0.3"/>
      <circle cx="4.5" cy="1.5" r="0.3"/>
      <circle cx="6" cy="1.5" r="0.3"/>
      <circle cx="7.5" cy="1.5" r="0.3"/>
      <circle cx="2.25" cy="2.5" r="0.3"/>
      <circle cx="3.75" cy="2.5" r="0.3"/>
      <circle cx="5.25" cy="2.5" r="0.3"/>
      <circle cx="6.75" cy="2.5" r="0.3"/>
      <circle cx="1.5" cy="3.5" r="0.3"/>
      <circle cx="3" cy="3.5" r="0.3"/>
      <circle cx="4.5" cy="3.5" r="0.3"/>
      <circle cx="6" cy="3.5" r="0.3"/>
      <circle cx="7.5" cy="3.5" r="0.3"/>
      <circle cx="2.25" cy="4.5" r="0.3"/>
      <circle cx="3.75" cy="4.5" r="0.3"/>
      <circle cx="5.25" cy="4.5" r="0.3"/>
      <circle cx="6.75" cy="4.5" r="0.3"/>
      <circle cx="1.5" cy="5.5" r="0.3"/>
      <circle cx="3" cy="5.5" r="0.3"/>
      <circle cx="4.5" cy="5.5" r="0.3"/>
      <circle cx="6" cy="5.5" r="0.3"/>
      <circle cx="7.5" cy="5.5" r="0.3"/>
      <circle cx="2.25" cy="6.5" r="0.3"/>
      <circle cx="3.75" cy="6.5" r="0.3"/>
      <circle cx="5.25" cy="6.5" r="0.3"/>
      <circle cx="6.75" cy="6.5" r="0.3"/>
    </g>
  </svg>
);

const SpainFlag = () => (
  <svg className="w-5 h-5" viewBox="0 0 21 15" fill="none">
    <rect width="21" height="15" fill="#AA151B"/>
    <rect width="21" height="9" y="3" fill="#F1BF00"/>
    <rect width="21" height="3" fill="#AA151B"/>
    <rect width="21" height="3" y="12" fill="#AA151B"/>
  </svg>
);

export default function LanguageSwitcher() {
  // Initialize language on mount
  useEffect(() => {
    initializeLanguage();
  }, []);

  const handleLanguageSwitch = () => {
    switchLanguage();
  };

  return (
    <button
      type="button"
      onClick={handleLanguageSwitch}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 group"
      aria-label={`Switch to ${currentLanguage.value === 'en' ? 'Spanish' : 'English'}`}
      title={`Switch to ${currentLanguage.value === 'en' ? 'Español' : 'English'}`}
    >
      <span className="sr-only">
        Switch to {currentLanguage.value === 'en' ? 'Spanish' : 'English'}
      </span>

      {/* Flag with smooth transition */}
      <div className="relative">
        <div className="transform group-hover:scale-110 transition-transform duration-200">
          {currentLanguage.value === 'en' ? <USFlag /> : <SpainFlag />}
        </div>

        {/* Language label */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded shadow-lg">
          {currentLanguage.value === 'en' ? 'EN' : 'ES'}
        </div>

        {/* Active indicator */}
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
    </button>
  );
}