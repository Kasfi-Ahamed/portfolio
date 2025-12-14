import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { StarButton } from './StarButton';
import { personalInfo } from '../data/portfolio';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/research', label: 'Research' },
  { path: '/about', label: 'About' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/contact', label: 'Contact' },
];

export function Navbar() {
  const location = useLocation();
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only check for hero photo on home page
      if (location.pathname === '/') {
        const heroPhoto = document.getElementById('hero-photo');
        if (heroPhoto) {
          const rect = heroPhoto.getBoundingClientRect();
          // Show photo in navbar when hero photo is out of view
          setShowPhoto(rect.bottom < 0);
        } else {
          setShowPhoto(false);
        }
      } else {
        // On other pages, show photo by default
        setShowPhoto(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 text-xl font-bold text-text hover:text-primary transition-colors">
            {personalInfo.photo && (showPhoto || location.pathname !== '/') && (
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-8 h-8 rounded object-cover border-2 border-primary/30"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <span>{personalInfo.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background-secondary border border-border">
              <StarButton />
              <span className="text-xs text-text-secondary">Love my Portfolio</span>
            </div>
            <ThemeToggle />
            <a
              href={personalInfo.resume}
              download="Kasfi_Resume.pdf"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              <span>My Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4 flex items-center gap-4 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-text-secondary hover:text-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

