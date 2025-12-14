# Portfolio Website - Kasfi Ahamed

A premium, modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features dark mode by default, smooth animations, and a clean, professional design.

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Helmet Async** - SEO

## 📦 Installation

```bash
# Install dependencies
npm install

# Or with legacy peer deps (if needed)
npm install --legacy-peer-deps
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
src/
  components/     # Reusable UI components
  pages/          # Page components
  layout/         # Layout wrapper
  data/           # Portfolio data (portfolio.ts)
  utils/          # Utility functions
  hooks/          # Custom React hooks
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal info (name, title, subtitle, email)
- Social links (GitHub, LinkedIn)
- Skills
- Projects
- Experience
- Recommendations

### Update Resume

Place your resume PDF at `/public/resume.pdf`

### Theme Customization

Edit `src/index.css` to customize:
- Color variables (light/dark mode)
- Typography
- Spacing

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings
5. Deploy!

### Important Notes

- The `vercel.json` file is already configured for SPA routing
- No additional configuration needed
- Build command: `npm run build`
- Output directory: `dist`

## 🎯 Features

- ✅ Dark mode by default with theme toggle
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with React Helmet
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Fast loading and optimized
- ✅ Project showcase with filtering
- ✅ Contact form (mailto:)
- ✅ Experience timeline
- ✅ Skills showcase
- ✅ Recommendations section

## 📝 License

MIT

## 👤 Author

Kasfi Ahamed
