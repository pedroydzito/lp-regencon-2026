import { useEffect } from 'react';

/**
 * useCardSpotlight
 * 
 * Adds a radial gradient "spotlight" effect that follows the mouse cursor
 * inside any element with the `.card-hover` class. Works via CSS custom
 * properties (--mouse-x, --mouse-y) updated on mousemove, rendered via
 * the .card-hover::before pseudo-element defined in index.css.
 */
export default function useCardSpotlight() {
  useEffect(() => {
    function handleMouseMove(e) {
      // Walk up from the event target to find the nearest .card-hover ancestor
      let el = e.target;
      while (el && el !== document.body) {
        if (el.classList && el.classList.contains('card-hover')) {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          el.style.setProperty('--mouse-x', `${x}px`);
          el.style.setProperty('--mouse-y', `${y}px`);
          el.classList.add('spotlight-active');
          break;
        }
        el = el.parentElement;
      }
    }

    function handleMouseLeave(e) {
      let el = e.target;
      while (el && el !== document.body) {
        if (el.classList && el.classList.contains('card-hover')) {
          el.classList.remove('spotlight-active');
          break;
        }
        el = el.parentElement;
      }
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);
}
