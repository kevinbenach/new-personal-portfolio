import { useEffect } from 'preact/hooks';

interface ActiveSectionHighlightProps {
  sections: string[];
}

export default function ActiveSectionHighlight({
  sections,
}: ActiveSectionHighlightProps) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active class from all nav links
          document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
            link.classList.remove('text-primary-600', 'dark:text-primary-400');
          });

          // Add active class to current section's nav link
          const activeLink = document.querySelector(
            `nav a[href="#${entry.target.id}"]`
          );
          if (activeLink) {
            activeLink.classList.add(
              'text-primary-600',
              'dark:text-primary-400'
            );
          }
        }
      });
    }, observerOptions);

    // Observe sections when they exist
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [sections]);

  // This component doesn't render anything visible
  return null;
}
