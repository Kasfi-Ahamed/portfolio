import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolio';
import { Badge } from '../components/Badge';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-primary hover:text-primary-light">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  return (
    <>
      <Helmet>
        <title>{project.title} - {personalInfo.name}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-text-secondary hover:text-text mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </motion.button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="primary">{project.category}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-text-secondary mb-6">{project.description}</p>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Long Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span className="text-text-secondary">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Gallery Placeholder */}
        {project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((_image, index) => (
                <div
                  key={index}
                  className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg flex items-center justify-center border border-border"
                >
                  <span className="text-text-secondary">Image {index + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between pt-8 border-t border-border"
        >
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <div>
                <div className="text-xs">Previous</div>
                <div className="font-medium">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors"
            >
              <div className="text-right">
                <div className="text-xs">Next</div>
                <div className="font-medium">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </>
  );
}

