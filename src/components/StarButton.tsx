import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const STORAGE_KEY = 'portfolio-star-given';
const API_URL = '/api/stars';

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

// Fetch global star count from API
const fetchStarCount = async (): Promise<number> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch star count');
    const data = await response.json();
    return data.count || 0;
  } catch (error) {
    console.warn('Failed to fetch star count:', error);
    return 0;
  }
};

// Increment global star count via API
const incrementStarCount = async (): Promise<number | null> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Failed to increment star count');
    const data = await response.json();
    return data.count || null;
  } catch (error) {
    console.warn('Failed to increment star count:', error);
    return null;
  }
};

export function StarButton() {
  const [starred, setStarred] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has already given a star (local check)
    const hasStarred = safeGetItem(STORAGE_KEY) === 'true';
    setStarred(hasStarred);

    // Fetch global star count from API
    const loadStarCount = async () => {
      setLoading(true);
      const count = await fetchStarCount();
      setStarCount(count);
      setLoading(false);
    };

    loadStarCount();
  }, []);

  const handleStarClick = async () => {
    if (starred) {
      // User wants to remove star - but we'll keep it simple and not allow removal
      // to maintain global count integrity
      return;
    }

    // Add star
    safeSetItem(STORAGE_KEY, 'true');
    setStarred(true);
    
    // Increment global count via API
    const newCount = await incrementStarCount();
    if (newCount !== null) {
      setStarCount(newCount);
    } else {
      // Fallback: increment locally if API fails
      setStarCount((prev) => prev + 1);
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
      <span className="text-sm font-semibold">
        {loading ? '...' : starCount}
      </span>
    </motion.button>
  );
}

