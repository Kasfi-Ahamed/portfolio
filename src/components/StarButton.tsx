import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const STORAGE_KEY = 'portfolio-star-given';
const COUNT_KEY = 'portfolio-star-count';

// Safe localStorage helpers with error handling
const safeGetItem = (key: string): string | null => {
  try {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('localStorage access failed:', error);
    return null;
  }
};

const safeSetItem = (key: string, value: string): boolean => {
  try {
    if (typeof window === 'undefined') return false;
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn('localStorage write failed:', error);
    return false;
  }
};

const safeRemoveItem = (key: string): boolean => {
  try {
    if (typeof window === 'undefined') return false;
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn('localStorage remove failed:', error);
    return false;
  }
};

export function StarButton() {
  const [starred, setStarred] = useState(false);
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    // Check if user has already given a star
    const hasStarred = safeGetItem(STORAGE_KEY) === 'true';
    setStarred(hasStarred);

    // Get current star count from localStorage
    const countStr = safeGetItem(COUNT_KEY) || '0';
    const count = parseInt(countStr, 10);
    if (!isNaN(count)) {
      setStarCount(count);
    }
  }, []);

  const handleStarClick = () => {
    if (starred) {
      // Remove star
      safeRemoveItem(STORAGE_KEY);
      setStarred(false);
      const newCount = Math.max(0, starCount - 1);
      setStarCount(newCount);
      safeSetItem(COUNT_KEY, newCount.toString());
    } else {
      // Add star
      safeSetItem(STORAGE_KEY, 'true');
      setStarred(true);
      const newCount = starCount + 1;
      setStarCount(newCount);
      safeSetItem(COUNT_KEY, newCount.toString());
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

