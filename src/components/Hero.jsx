import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Download, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              BACKEND
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                JAVA DEVELOPER
              </span>
            </h1>

            <p className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
              <strong>I build powerful and secure backend systems using Spring Boot, with PostgreSQL databases, and deploy them on the cloud.</strong>
            </p>

            {/* الأزرار */}
            <div className="flex gap-4 flex-wrap items-center">
              <a href="#projects" className="btn-primary">
                Projects
              </a>

              {/* زر CV */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCVOpen(true)}
                className="btn-outline flex items-center gap-2 px-5 py-2.5"
              >
                <FileText size={18} />
                CV
              </motion.button>

              <a href="#contact" className="btn-outline">Contact</a>
            </div>

            {/* السوشيال ميديا */}
            <div className="flex gap-6 mt-8">
              <a 
                href="https://github.com/Mohamedsaiid2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 dark:text-purple-400 hover:opacity-80 transition"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-saeed-2343ba318/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 dark:text-purple-400 hover:opacity-80 transition"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="mailto:mohamed1292003@hotmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 dark:text-purple-400 hover:opacity-80 transition"
              >
                <Mail size={28} />
              </a>
            </div>
          </motion.div>

          {/* الصورة */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-[14px] border-purple-500/60 shadow-2xl glow">
              <img 
                src="/images/E0D4BADD-6073-4314-AC12-4A8AEFA5DEAA_1_105_c-artguru.jpeg" 
                alt="Mohamed Saiid" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Viewer داخل الموقع */}
      <AnimatePresence>
        {isCVOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCVOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* CV Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-8 z-50 flex flex-col bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">View CV</h3>
                <div className="flex gap-2">
                  <a
                    href="/cv/Mohamed_Saiid_CV.pdf"
                    download
                    className="p-2 rounded-full bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400 transition"
                    title="Download"
                  >
                    <Download size={20} />
                  </a>
                  <button
                    onClick={() => setIsCVOpen(false)}
                    className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 transition"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-800 p-2">
                <iframe
                  src="/CV.pdf"
                  className="w-full h-full rounded-xl border-0"
                  title="CV"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}