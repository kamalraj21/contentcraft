import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far the user has scrolled
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${scrollPx / winHeightPx * 100}`;
      
      setScrollProgress(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-1 bg-violet-100">
        <div 
          className="h-full bg-gradient-to-r from-violet-400 to-pink-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;