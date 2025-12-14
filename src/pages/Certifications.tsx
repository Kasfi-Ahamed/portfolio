import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Linkedin } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export function Certifications() {
  return (
    <>
      <Helmet>
        <title>Certifications - {personalInfo.name}</title>
        <meta name="description" content={`Certifications and credentials earned by ${personalInfo.name}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and credentials that validate my expertise"
        />

        {certifications.length > 0 ? (
          <>
            <div className="mb-6 text-center">
              <a
                href="https://www.linkedin.com/in/kasfi-ahamed-8a81241b4/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                View all on LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background-secondary rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="w-6 h-6 text-primary flex-shrink-0" />
                        <h3 className="text-xl font-semibold">{cert.name}</h3>
                      </div>
                      <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                        <span>Issued: {cert.date}</span>
                        {cert.credentialId && (
                          <span className="font-mono">ID: {cert.credentialId}</span>
                        )}
                      </div>
                      {/* Skills for HackerRank certifications */}
                      {cert.name.includes('HackerRank') && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {cert.name.includes('Problem Solving') && (
                            <>
                              <Badge variant="secondary">Problem Solving</Badge>
                              <Badge variant="secondary">Python</Badge>
                            </>
                          )}
                          {cert.name.includes('Python') && !cert.name.includes('Problem Solving') && (
                            <Badge variant="secondary">Python</Badge>
                          )}
                        </div>
                      )}
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex-shrink-0"
                        aria-label="View on LinkedIn"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Award className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <p className="text-lg text-text-secondary">
              Certifications will be displayed here once added.
            </p>
            <p className="text-sm text-text-secondary mt-2">
              Update the certifications array in <code className="text-primary">src/data/portfolio.ts</code>
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}

