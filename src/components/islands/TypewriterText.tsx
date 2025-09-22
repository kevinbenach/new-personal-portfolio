import { useState, useEffect } from 'preact/hooks';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
}

export default function TypewriterText({ texts, className = '' }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[currentTextIndex];
    let typeSpeed = 100;

    const typeWriter = () => {
      if (isDeleting) {
        // Deleting characters
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
        typeSpeed = 50; // Faster deletion
      } else {
        // Typing characters
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
        typeSpeed = 100; // Normal typing speed
      }

      // Check if we've finished typing the current word
      if (!isDeleting && currentCharIndex === currentText.length) {
        // Finished typing, wait then start deleting
        typeSpeed = 2000; // Pause before deleting
        setIsDeleting(true);
      } else if (isDeleting && currentCharIndex === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
        typeSpeed = 200; // Brief pause before typing next word
      }
    };

    const timeoutId = setTimeout(typeWriter, typeSpeed);

    // Cleanup timeout on unmount or dependency change
    return () => clearTimeout(timeoutId);
  }, [currentTextIndex, currentCharIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}