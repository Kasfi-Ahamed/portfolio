import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import type { Recommendation } from '../data/portfolio';

interface RecommendationCardProps {
  recommendation: Recommendation;
  index?: number;
}

export function RecommendationCard({ recommendation, index = 0 }: RecommendationCardProps) {
  const isPlaceholder = recommendation.name === 'LinkedIn Recommendations';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-background-secondary border border-border rounded-xl p-6 ${isPlaceholder ? 'opacity-60' : ''}`}
    >
      <p className="text-text-secondary mb-6 italic">"{recommendation.quote}"</p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-text">{recommendation.name}</h4>
          {recommendation.role && (
            <p className="text-sm text-text-secondary">
              {recommendation.role}
              {recommendation.organisation && ` at ${recommendation.organisation}`}
            </p>
          )}
        </div>
        
        {!isPlaceholder && (
          <a
            href={recommendation.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-border transition-colors text-primary"
            aria-label="View on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

