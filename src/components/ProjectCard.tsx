import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/portfolio';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-background-secondary border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent" />
        <div className="relative z-10 text-center p-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-text-secondary">{project.description}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="text-primary hover:text-primary-light font-medium text-sm transition-colors"
          >
            View Details →
          </Link>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-border transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

