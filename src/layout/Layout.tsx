import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useTheme } from '../hooks/useTheme';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-background text-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

