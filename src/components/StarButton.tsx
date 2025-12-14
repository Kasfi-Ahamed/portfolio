import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const STORAGE_KEY = 'portfolio-star-given';
const COUNT_API_NAMESPACE = 'kasfi-portfolio';
const COUNT_API_KEY = 'portfolio-stars';
const COUNT_API_URL = 'https://api.countapi.xyz';

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

// Fetch global star count from CountAPI
const fetchStarCount = async (): Promise<number> => {
  try {
    const response = await fetch(
      `${COUNT_API_URL}/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`
    );
    
    if (!response.ok) {
      // Counter doesn't exist yet, return 0
      return 0;
    }

    const data = await response.json();
    return data.value || 0;
  } catch (error) {
    console.warn('Failed to fetch star count:', error);
    return 0;
  }
};

// Increment global star count via CountAPI
const incrementStarCount = async (): Promise<number | null> => {
  try {
    // Try to hit (increment) the counter first
    let response = await fetch(
      `${COUNT_API_URL}/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`
    );

    // If counter doesn't exist (404), create it first
    if (response.status === 404 || !response.ok) {
      // Create the counter with initial value of 1
      const createUrl = `${COUNT_API_URL}/create?namespace=${COUNT_API_NAMESPACE}&key=${COUNT_API_KEY}&value=1`;
      const createResponse = await fetch(createUrl);
      
      if (createResponse.ok) {
        const createData = await createResponse.json();
        return createData.value || 1;
      }
      
      // If create also fails, return null
      console.error('Failed to create counter:', await createResponse.text());
      return null;
    }

    // Counter exists and was incremented successfully
    const data = await response.json();
    return data.value || null;
  } catch (error) {
    console.error('Failed to increment star count:', error);
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

    let isMounted = true;

    // Fetch global star count from API
    const loadStarCount = async () => {
      setLoading(true);
      try {
        const count = await fetchStarCount();
        if (isMounted) {
          setStarCount(count);
        }
      } catch (error) {
        console.error('Error loading star count:', error);
        if (isMounted) {
          setStarCount(0);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Set a timeout to ensure loading doesn't stay forever
    const timeout = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 5000);

    loadStarCount();

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  const handleStarClick = async () => {
    if (starred) {
      // User wants to remove star - but we'll keep it simple and not allow removal
      // to maintain global count integrity
      return;
    }

    // Prevent double-clicking
    if (loading) return;

    // Add star locally first for immediate feedback
    safeSetItem(STORAGE_KEY, 'true');
    setStarred(true);
    
    // Optimistically update the count for immediate UI feedback
    const optimisticCount = starCount + 1;
    setStarCount(optimisticCount);
    
    // Increment global count via API
    try {
      const newCount = await incrementStarCount();
      if (newCount !== null) {
        // Update with the actual count from API
        setStarCount(newCount);
      } else {
        // If API fails, refresh the count from server to get accurate value
        const refreshedCount = await fetchStarCount();
        setStarCount(refreshedCount);
      }
    } catch (error) {
      console.error('Error incrementing star count:', error);
      // On error, refresh to get the actual count
      const refreshedCount = await fetchStarCount();
      setStarCount(refreshedCount);
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
        {loading ? '0' : starCount}
      </span>
    </motion.button>
  );
}

