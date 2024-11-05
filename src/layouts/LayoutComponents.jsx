import React, { useState, useEffect } from 'react';
import { theme } from '../utils/theme';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export const Navigation = ({ links, isMainNav }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Home Link */}
          <div className="flex items-center">
            <a 
              href="/contentcraft/" 
              className="text-sm text-violet-700 hover:text-violet-900 transition-colors"
            >
              Home
            </a>
          </div>

          {/* Right: Navigation */}
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  ${link.isButton 
                    ? 'px-4 py-2 bg-gradient-to-r from-violet-200 to-pink-200 text-violet-900 rounded-lg hover:from-violet-300 hover:to-pink-300 transition-colors'
                    : `text-sm text-violet-700 hover:text-violet-900 transition-colors
                      ${activeSection === link.href.substring(1) 
                        ? 'text-violet-900 font-medium' 
                        : ''}`
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};