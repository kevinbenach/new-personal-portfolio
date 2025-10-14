/**
 * Icon Component - Dynamic SVG Icon Loader
 *
 * This component automatically loads SVG icons from /src/assets/icons/
 * using Vite's glob import feature with raw string imports.
 *
 * HOW IT WORKS:
 * 1. Vite scans the icons folder at build time and imports SVGs as raw strings
 * 2. The component receives an icon name (e.g., "react", "typescript")
 * 3. It looks up the corresponding SVG and renders it inline
 * 4. The SVG inherits className for styling (colors, sizes, etc.)
 *
 * USAGE:
 * <Icon name="react" className="w-6 h-6 text-primary-600" />
 *
 * ADDING NEW ICONS:
 * 1. Download SVG from simpleicons.org or brand site
 * 2. Save it to /src/assets/icons/ with lowercase name (e.g., express.svg)
 * 3. Ensure SVG uses fill="currentColor" or stroke="currentColor"
 * 4. Run `pnpm optimize-icons` to optimize the SVG (optional)
 * 5. Use it: <Icon name="express" />
 */

interface IconProps {
  name: string;
  className?: string;
  ariaLabel?: string;
}

// Import all SVG files as raw strings at build time
// ?raw suffix tells Vite to import the file content as a string
const icons = import.meta.glob<string>('/src/assets/icons/*.svg', {
  eager: true, // Load all icons immediately (they're small, <2KB each)
  query: '?raw', // Import as raw string content
  import: 'default', // Get the default export (the string content)
});

// Helper function to get icon path from name
const getIconPath = (name: string) => `/src/assets/icons/${name}.svg`;

// Fallback star icon SVG
const fallbackIcon = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>`;

export default function Icon({ name, className = '', ariaLabel }: IconProps) {
  // Get the SVG string from the map
  const iconPath = getIconPath(name);
  let svgContent = icons[iconPath];

  // If icon doesn't exist, use fallback and warn
  if (!svgContent) {
    console.warn(
      `Icon "${name}" not found. Make sure ${name}.svg exists in /src/assets/icons/`
    );
    svgContent = fallbackIcon;
  }

  // Inject className and aria-label into the SVG string
  // This preserves existing attributes while adding our custom ones
  const svgWithClass = svgContent.replace(
    /<svg([^>]*)>/,
    (_match, attrs) => {
      // If there's already a class attribute, append to it; otherwise add it
      const hasClass = /class=/i.test(attrs);
      const hasAriaLabel = /aria-label=/i.test(attrs);

      let newAttrs = attrs;

      if (hasClass) {
        newAttrs = newAttrs.replace(/class="([^"]*)"/i, `class="$1 ${className}"`);
      } else {
        newAttrs += ` class="${className}"`;
      }

      if (!hasAriaLabel) {
        newAttrs += ` aria-label="${ariaLabel || `${name} icon`}"`;
      }

      return `<svg${newAttrs}>`;
    }
  );

  // Render the SVG as raw HTML using span wrapper to maintain inline behavior
  // Using span instead of div to preserve inline-flex/inline-block layouts
  // This is safe because we control the SVG sources (they're in our codebase)
  return (
    <span
      className="inline-flex items-center justify-center"
      dangerouslySetInnerHTML={{ __html: svgWithClass }}
    />
  );
}
