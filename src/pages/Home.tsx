import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { personalInfo, projects, skills, recommendations } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { RecommendationCard } from '../components/RecommendationCard';
import { Badge } from '../components/Badge';

export function Home() {
  const featuredProjects = projects.slice(0, 3);
  const skillCategories = {
    'AI/ML': skills.filter((s) => s.category === 'AI/ML'),
    'Software Dev': skills.filter((s) => s.category === 'Software Dev'),
  };

  return (
    <>
      <Helmet>
        <title>{personalInfo.name} - {personalInfo.title}</title>
        <meta name="description" content={personalInfo.subtitle} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Photo */}
            {personalInfo.photo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8 flex justify-center"
                id="hero-photo"
              >
                <div className="relative">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover border-4 border-primary/30 shadow-lg"
                    onError={(e) => {
                      // Hide image if it doesn't exist
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary-light/20 blur-xl -z-10" />
                </div>
              </motion.div>
            )}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-text via-text to-text-secondary bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-text">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              {personalInfo.subtitle}
            </p>

            {/* Currently pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Link
                to="/projects?category=AI/ML"
                className="inline-block"
              >
                <Badge variant="primary" className="text-sm cursor-pointer hover:opacity-80 transition-opacity">
                  AI/ML Engineering
                </Badge>
              </Link>
              <Link
                to="/projects?category=Web"
                className="inline-block"
              >
                <Badge variant="primary" className="text-sm cursor-pointer hover:opacity-80 transition-opacity">
                  Software Development
                </Badge>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-background-secondary border border-border text-text rounded-lg hover:bg-border transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background-secondary hover:bg-border transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background-secondary hover:bg-border transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-lg bg-background-secondary hover:bg-border transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of my recent work across AI/ML and software development"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with across AI/ML and software development"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="bg-background-secondary rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <section className="py-20 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Recommendations"
              subtitle="Verified LinkedIn recommendations from people I've worked with"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <RecommendationCard key={index} recommendation={rec} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Strip */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl p-12 border border-primary/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-background-secondary rounded-lg hover:bg-border transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-background-secondary rounded-lg hover:bg-border transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

