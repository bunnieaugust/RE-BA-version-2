import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';
import { LiquidGlass } from '../ui/liquid-glass';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.impact, href: '/impact' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      {isScrolled && (
        <div className="absolute inset-0 px-4 md:px-8 pointer-events-none">
          <LiquidGlass className="w-full h-full rounded-full border-brand-charcoal/5" />
        </div>
      )}
      <div className="section-container flex items-center justify-between relative z-10">
        {/* Left: Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-green">
            RE:BA
          </span>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-brand-green py-2',
                  isActive ? 'text-brand-green' : 'text-brand-charcoal/80'
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-green"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-brand-beige/30 text-brand-charcoal hover:bg-brand-beige/50 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          {/* Segmented Language Switcher */}
          <div className="flex items-center bg-brand-beige/30 rounded-full p-1">
            <button
              onClick={() => setLanguage('vi')}
              className={cn(
                'text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200',
                language === 'vi' ? 'bg-white text-brand-green shadow-sm' : 'text-brand-charcoal/60 hover:text-brand-charcoal'
              )}
            >
              VI
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200',
                language === 'en' ? 'bg-white text-brand-green shadow-sm' : 'text-brand-charcoal/60 hover:text-brand-charcoal'
              )}
            >
              EN
            </button>
          </div>
          
          <Link
            to="/partnership"
            className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-green-light hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            {t.nav.partner}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-brand-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-ivory pt-24 px-6 pb-8 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Language Switcher - Near Top */}
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-brand-charcoal/5">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-brand-charcoal/60 uppercase tracking-wider">Ngôn ngữ & Giao diện</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* Theme Toggle Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-brand-beige/30 text-brand-charcoal"
                    aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                  >
                    {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                  </button>

                  <div className="flex items-center bg-brand-beige/30 rounded-full p-1">
                  <button
                    onClick={() => setLanguage('vi')}
                    className={cn(
                      'text-sm font-medium px-4 py-2 rounded-full transition-all duration-200',
                      language === 'vi' ? 'bg-white text-brand-green shadow-sm' : 'text-brand-charcoal/60'
                    )}
                  >
                    VI
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={cn(
                      'text-sm font-medium px-4 py-2 rounded-full transition-all duration-200',
                      language === 'en' ? 'bg-white text-brand-green shadow-sm' : 'text-brand-charcoal/60'
                    )}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Nav Links - Large Spacing */}
              <nav className="flex flex-col gap-10 mb-12">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "text-4xl font-serif tracking-tight transition-colors",
                        isActive ? "text-brand-green" : "text-brand-charcoal"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="mt-auto">
                {/* Mobile CTA - Full Width Bottom */}
                <Link
                  to="/partnership"
                  className="bg-brand-green text-white block w-full py-5 rounded-full text-center text-lg font-medium hover:bg-brand-green-light transition-colors shadow-md"
                >
                  {t.nav.partner}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
