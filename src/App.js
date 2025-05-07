import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaArrowUp } from 'react-icons/fa';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative bg-gray-900 dark:bg-white text-white dark:text-gray-900 min-h-screen font-sans">
      <header className="flex justify-end p-4 relative z-10">
        <button
          onClick={toggleDarkMode}
          className="text-2xl p-2 rounded-full bg-purple-500 dark:bg-purple-300 text-white dark:text-gray-900 transition"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <motion.section
        className="text-center py-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-purple-400 dark:text-purple-600">Saran</span>
        </h1>
        <p className="text-xl mb-6">I build cool React apps 🚀</p>
        <a
          href="#projects"
          className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition"
        >
          See My Work
        </a>
      </motion.section>

      <motion.section
        id="about"
        className="py-20 px-4 max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I’m a React developer passionate about building sleek, fast websites. Let’s create
          something amazing!
        </p>
      </motion.section>

      <motion.section
        id="skills"
        className="py-20 px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB','WordPress','PHP'].map((skill) => (
            <span
              key={skill}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 px-4 max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="Spotiver"
            description="A Spotify Clone but better."
            link="https://spotiver.netlify.app/"
          />
          <ProjectCard
            title="Project 2"
            description="Description of your project."
            link="https://www.google.com"
          />
          <ProjectCard
            title="Project 3"
            description="Description of your project."
            link="https://www.ign.com"
          />
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Let’s work together or just say hello ✉️</p>
        <a
          href="mailto:saranjitthind24@gmail.com"
          className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition"
        >
          Say Hi!
        </a>
      </motion.section>

      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 relative z-10">
        © {new Date().getFullYear()} raiden597
      </footer>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg hover:scale-105 transform transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <a
        href={link}
        className="text-purple-400 dark:text-purple-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Demo →
      </a>
    </div>
  );
}

export default App;
