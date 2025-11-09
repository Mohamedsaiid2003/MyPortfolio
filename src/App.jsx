import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Loading from './components/Loading';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SEO from './components/SEO';

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen transition-colors duration-500">
      <SEO />
      
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'} text-white dark:text-white`}>
        
        {/* Navbar صغير ومركز في النص */}
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-black/70 dark:bg-black/70 rounded-full px-6 py-2.5 border border-white/10 shadow-xl">
          <div className="flex items-center gap-6 text-sm">
            {['home', 'service', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-purple-400 transition capitalize font-medium"
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {darkMode ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-indigo-600" />}
            </button>
          </div>
        </nav>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="pt-20">
            <Reveal><Hero /></Reveal>
            <Reveal delay={0.2}><Services /></Reveal>
            <Reveal delay={0.3}><Skills /></Reveal>
            <Reveal delay={0.4}><Projects /></Reveal>
            <Reveal delay={0.5}><Contact /></Reveal>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;