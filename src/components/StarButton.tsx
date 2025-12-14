import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const STORAGE_KEY = 'portfolio-star-given';

export function StarButton() {
  const [starred, setStarred] = useState(false);
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    // Check if user has already given a star
    const hasStarred = localStorage.getItem(STORAGE_KEY) === 'true';
    setStarred(hasStarred);

    // Get current star count from localStorage
    const count = parseInt(localStorage.getItem('portfolio-star-count') || '0', 10);
    setStarCount(count);
  }, []);

  const handleStarClick = () => {
    if (starred) {
      // Remove star
      localStorage.removeItem(STORAGE_KEY);
      setStarred(false);
      const newCount = Math.max(0, starCount - 1);
      setStarCount(newCount);
      localStorage.setItem('portfolio-star-count', newCount.toString());
    } else {
      // Add star
      localStorage.setItem(STORAGE_KEY, 'true');
      setStarred(true);
      const newCount = starCount + 1;
      setStarCount(newCount);
      localStorage.setItem('portfolio-star-count', newCount.toString());
    }
  };

  return (
    <motion.button
      onClick={handleStarClick}
      className={`flex items-center gap-1.5 transition-colors ${
        starred
          ? 'text-primary'
          : 'text-text-secondary hover:text-primary'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={starred ? 'Remove star' : 'Give star'}
    >
      <Star className={`w-4 h-4 ${starred ? 'fill-primary' : ''}`} />
      <span className="text-sm font-semibold">{starCount}</span>
    </motion.button>
  );
}

