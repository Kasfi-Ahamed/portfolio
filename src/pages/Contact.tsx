import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Toast } from '../components/Toast';
import { copyToClipboard } from '../utils/helpers';

export function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (success) {
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = encodeURIComponent(
      `Hello,\n\nMy name is ${name}.\n\n${message}\n\nBest regards,\n${name}\n${email}`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Helmet>
        <title>Contact - {personalInfo.name}</title>
        <meta name="description" content={`Contact ${personalInfo.name}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to discussing new projects, creative ideas, or opportunities."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-6 bg-background-secondary rounded-xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-text-secondary">{personalInfo.email}</p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyEmail();
                }}
                className="p-2 rounded-lg hover:bg-border transition-colors"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-text-secondary" />
                )}
              </button>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-background-secondary rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-3 bg-primary/20 rounded-lg">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-sm text-text-secondary">Connect with me</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-background-secondary rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-3 bg-primary/20 rounded-lg">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <p className="text-sm text-text-secondary">View my code</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <Toast
        message="Email copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

