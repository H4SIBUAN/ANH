import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Scroll-to-top floating button component.
 * Appears after scrolling down 400px.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
