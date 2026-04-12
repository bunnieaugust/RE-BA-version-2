import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Impact } from './pages/Impact';
import { Contact } from './pages/Contact';
import { Partnership } from './pages/Partnership';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingScreen } from './components/ui/loading-screen';
import { ChatWidget } from './components/ui/chat-widget';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partnership" element={<Partnership />} />
    </Routes>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full min-h-screen"
              >
                <Layout>
                  <AnimatedRoutes />
                </Layout>
                <ChatWidget />
              </motion.div>
            )}
          </AnimatePresence>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
