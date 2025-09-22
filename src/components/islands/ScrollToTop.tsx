import { useState, useEffect } from 'preact/hooks';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-40 h-12 w-12 rounded-full
        bg-primary-600 text-white shadow-lg transition-all duration-300
        hover:bg-primary-700 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:bg-primary-500 dark:hover:bg-primary-600
        ${isVisible ? 'block' : 'hidden'}
      `}
      aria-label="Scroll to top"
    >
      <svg className="h-6 w-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}