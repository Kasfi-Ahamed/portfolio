import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import { personalInfo, googleScholarUrl } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export function Research() {
  return (
    <>
      <Helmet>
        <title>Research - {personalInfo.name}</title>
        <meta name="description" content={`Research publications by ${personalInfo.name}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Research Publications"
          subtitle="My published research papers and contributions to the academic community"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            View all my research publications, citations, and academic contributions on Google Scholar.
          </p>
          <a
            href={googleScholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
          >
            <FileText className="w-5 h-5" />
            View on Google Scholar
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </>
  );
}
