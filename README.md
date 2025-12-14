# Portfolio Website

This is my personal portfolio website showcasing my work as an Applied AI/ML Engineer. The site features a modern, professional design with dark mode by default, smooth animations, and a comprehensive display of my projects, experience, education, and skills.

## Overview

The portfolio website serves as a central hub for my professional presence, highlighting my expertise in AI/ML engineering and full-stack software development. It includes sections for projects, research publications, certifications, and contact information, all built with modern web technologies and best practices.

## Tech Stack

- **React 19** - Modern UI framework for building interactive user interfaces
- **TypeScript** - Type-safe JavaScript for improved code quality and maintainability
- **Vite** - Fast build tool and development server for optimal performance
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Client-side routing for single-page application navigation
- **Framer Motion** - Animation library for smooth, performant transitions
- **Lucide React** - Icon library providing consistent, scalable icons
- **React Helmet Async** - SEO optimization and dynamic meta tag management

## Project Structure

```
src/
  components/     # Reusable UI components (Navbar, Footer, ProjectCard, etc.)
  pages/          # Page components (Home, Projects, About, Contact, etc.)
  layout/         # Layout wrapper component
  data/           # Portfolio data and configuration (portfolio.ts)
  utils/          # Utility functions and helpers
  hooks/          # Custom React hooks (useTheme, etc.)
```

## Features

- Dark mode by default with theme toggle functionality
- Fully responsive design optimized for all device sizes
- Smooth page transitions and micro-interactions using Framer Motion
- SEO optimized with dynamic meta tags and semantic HTML
- Accessible design with ARIA labels and keyboard navigation support
- Project showcase with filtering and search capabilities
- Contact form with email integration
- Experience timeline with detailed role descriptions
- Skills categorization and display
- Research publications section with Google Scholar integration
- Certifications display with verification links
- Star counter feature for visitor engagement
- Resume download functionality

## Installation

Install project dependencies:

```bash
npm install
```

If you encounter peer dependency conflicts, use:

```bash
npm install --legacy-peer-deps
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

All portfolio content is centralized in `src/data/portfolio.ts`. Update the following sections to customize:

- Personal information (name, title, subtitle, summary, contact details)
- Social media links (GitHub, LinkedIn)
- Skills and expertise
- Projects with descriptions, tech stacks, and GitHub links
- Work experience with detailed descriptions
- Education history
- Certifications with verification links
- Research publications
- Interests

Place your resume PDF at `/public/resume.pdf` and your profile photo at `/public/photo.jpg`.

Theme customization can be done in `src/index.css` by modifying CSS variables for colors, typography, and spacing.

## Deployment

### Vercel Deployment

The project is configured for seamless deployment on Vercel:

1. Push the repository to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite configuration
4. Deploy with default settings

The `vercel.json` file includes SPA routing configuration to ensure all routes work correctly.

Build settings:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20.x or higher

### Alternative Deployment

The project can be deployed to any static hosting service that supports single-page applications. Ensure the hosting service is configured to redirect all routes to `index.html` for client-side routing to function properly.

## Browser Support

The website is optimized for modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and personal. All rights reserved.

## Author

Kasfi Ahamed - Applied AI/ML Engineer
