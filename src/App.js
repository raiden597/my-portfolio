import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaArrowUp, FaPhp, FaElementor, FaYinYang, FaApple, FaAndroid, FaLocationArrow, FaDrum } from 'react-icons/fa';
import { FaReact, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage on initial load
    return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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

  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-500">
       <header className="flex justify-end p-4 relative z-10">
        <button
          onClick={toggleDarkMode}
          className="text-2xl p-2 rounded-full bg-purple-500 dark:bg-purple-600 text-white transition hover:scale-110"
          aria-label="Toggle dark mode"
        >
          <motion.div whileTap={{ rotate: 360 }}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </motion.div>
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
        <p className="text-xl mb-6 font-medium">I build cool stuff.</p>
        <a
          href="#projects"
          className="bg-purple-500 font-semibold px-8 py-3 rounded-full hover:bg-purple-600 hover:scale-110 transform"
        >
          Projects
        </a>
      </motion.section>

      <motion.section
        id="about"
        className="py-20 px-4 max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="font-medium text-base md:text-lg lg:text-lg">
        I’m a developer obsessed with crafting sleek, minimalist websites that not only look beautiful but perform brilliantly.
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
          {['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB','WordPress','PHP','Bootstrap'].map((skill,i) => (
            <span
              key={skill}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold animate-horizontal-wave"
              style={{ animationDelay: `${i * 0.5}s` }}
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
            description="A Spotify Clone with Custom UI/UX."
            link="https://spotiver.netlify.app/"
            techStack={[
            {  icon: FaReact },
            {  icon: SiTailwindcss },
            {  icon: FaDrum }
                       ]}
          />
          <ProjectCard
            title="Weddah"
            description="A Weather App."
            link="https://weatherlala.netlify.app/"
            techStack={[
            {  icon: FaReact },
            {  icon: SiTailwindcss },
            {  icon: FaLocationArrow }
                       ]}
          />
          <ProjectCard
            title="Generic Tech"
            description="A Tech Blog."
            link="https://sran590813479.wordpress.com/"
            techStack={[
            { icon: FaWordpress },
            { icon: FaPhp },
            { icon: FaElementor }
                       ]}
          />
          <ProjectCard
            title="Upcoming Project"
            description="Coming soon.."
            link="https://www.ign.com"
            techStack={[
            { icon: FaYinYang },
            { icon: FaApple },
            { icon: FaAndroid }
                       ]}
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
        <h2 className="text-3xl font-bold mb-4">Let's Build Together!</h2>
        <p className="mb-6 font-medium text-base md:text-lg lg:text-lg">Let’s work together or just say hi ✉️</p>
        <a
          href="mailto:saranjitthind24@gmail.com"
          className="bg-purple-500 font-semibold px-8 py-3 rounded-full hover:bg-purple-600 hover:scale-110 transition transform"
        >
          Say Hi!
        </a>
        <div className="flex justify-center gap-4 mt-6">
          <a href="https://www.linkedin.com/in/saranjit-thind/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-semibold">
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1sd05X2DEQ06WRAah6Exu44UMlTWfQNh3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-semibold">
            Resume
          </a>
        </div>
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

function ProjectCard({ title, description, link, techStack = [] }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2 font-medium">{description}</p>

      <div className="flex flex-wrap gap-3 mb-3">
        {techStack.map(({ icon: Icon }, index) => (
          <div key={index} className="flex items-center gap-1 bg-purple-100 text-purple-800 px-3 py-2 rounded-full">
            <Icon className="text-lg" /> 
          </div>
        ))}
      </div>

      <a
        href={link}
        className="text-purple-600 dark:text-purple-400 font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Project →
      </a>
    </div>
  );
}



export default App;
