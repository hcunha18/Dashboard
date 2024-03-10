import { useEffect } from 'react';

export const useScroll = () => {
    const scrollToSection = (hash = null) => {
        hash =  hash ?? window.location.hash;
        if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
    useEffect(() => {
      scrollToSection();

      window.addEventListener('hashchange', scrollToSection);
  
      return () => window.removeEventListener('hashchange', scrollToSection);

    }, [window.location]); 


    return {
        scrollToSection
    };

  };
