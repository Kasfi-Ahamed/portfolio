import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Heart } from 'lucide-react';
import { personalInfo, experience, education, skills, certifications, interests } from '../data/portfolio';
import { Badge } from '../components/Badge';

export function About() {
  const skillCategories = {
    'AI Engineering': skills.filter((s) => s.category === 'AI/ML'),
    'Software Development': skills.filter((s) => s.category === 'Software Dev'),
  };

  return (
    <>
      <Helmet>
        <title>About - {personalInfo.name}</title>
        <meta name="description" content={`About ${personalInfo.name} - ${personalInfo.title}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Bio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          {personalInfo.photo && (
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover border-4 border-primary/30 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary-light/20 blur-xl -z-10" />
              </div>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{personalInfo.name}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
            {personalInfo.summary}
          </p>
        </motion.section>

        {/* What I'm Strong At */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">What I'm Strong At</h2>
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="bg-background-secondary rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                <p className="text-text-secondary mb-4">
                  {category === 'AI Engineering' &&
                    'Building and deploying machine learning models, working with LLMs, and creating AI-powered applications.'}
                  {category === 'Software Development' &&
                    'Developing full-stack applications, designing APIs, and writing maintainable, tested code.'}
                </p>
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
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="bg-background-secondary rounded-xl p-6 border border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-text-secondary">{exp.period}</span>
                    </div>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-text-secondary">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education */}
        {education.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-background-secondary rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-text-secondary">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Certifications Preview */}
        {certifications.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Certifications</h2>
              <Link
                to="/certifications"
                className="flex items-center gap-2 text-primary hover:text-primary-light font-medium"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.slice(0, 4).map((cert, index) => (
                <div key={index} className="bg-background-secondary rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                  </div>
                  <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                  <p className="text-xs text-text-secondary">{cert.date}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Interests */}
        {interests.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge key={index} variant="primary" className="text-base py-2 px-4">
                  <Heart className="w-4 h-4 inline mr-2" />
                  {interest.name}
                </Badge>
              ))}
            </div>
          </motion.section>
        )}

        {/* What I'm Looking For */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl p-8 border border-primary/30"
        >
          <h2 className="text-2xl font-bold mb-4">What I'm Looking For</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            I'm always open to new opportunities that allow me to work on challenging problems 
            at the intersection of AI and software development. Whether it's building AI-powered 
            products, developing production-grade ML systems, or creating intelligent applications, 
            I'm excited to contribute to innovative projects and teams.
          </p>
        </motion.section>
      </div>
    </>
  );
}

