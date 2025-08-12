import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaArrowUp, FaPhp, FaElementor, FaYinYang, FaApple, FaAndroid, FaLocationArrow, FaDrum, FaLinkedin, FaFileAlt, FaJs, FaMoneyBill } from 'react-icons/fa';
import { FaReact, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';
import Microlink from '@microlink/react';

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
          className="bg-purple-300 dark:bg-purple-700 font-semibold px-8 py-3 rounded-full hover:scale-110 transform"
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
        I’m a developer obsessed with crafting sleek, minimalist websites/web-apps that not only look beautiful but perform brilliantly.
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
          {['React', 'Tailwind CSS','Next.js', 'Node.js', 'Express', 'MongoDB','WordPress','PHP','Bootstrap'].map((skill,i) => (
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
            description="A Spotify Clone with Custom UI/UX. Search for an artist and get the artist's top 10 tracks."
            link="https://spotiver.netlify.app/"
            techStack={[
            {  icon: FaReact },
            {  icon: SiTailwindcss },
            {  icon: FaDrum }
                       ]}
          />
          <ProjectCard
            title="Weddah"
            description="A Weather App. Search for weather of any place on this app. Uses the OpenWeather API."
            link="https://weatherlala.netlify.app/"
            techStack={[
            {  icon: FaReact },
            {  icon: SiTailwindcss },
            {  icon: FaLocationArrow }
                       ]}
          />
          <ProjectCard
            title="To-do"
            description="A to-do App. Track all your tasks here. You can also export them to your calendar!"
            link="https://to-do-five-steel.vercel.app/"
            techStack={[
            {  icon: SiNextdotjs },
            {  icon: SiTailwindcss },
            {  icon: SiTypescript }
                       ]}
          />
          <ProjectCard
            title="Generic Tech"
            description="A Tech Blog which focuses on tech stuff."
            link="https://sran590813479.wordpress.com/"
            techStack={[
            { icon: FaWordpress },
            { icon: FaPhp },
            { icon: FaElementor }
                       ]}
          />
          <ProjectCard
            title="Expense Tracker"
            description="Track your expenses using this app. Very useful insights available."
            link="https://expense-tracker-roan-kappa.vercel.app/"
            techStack={[
            { icon: FaReact },
            { icon: FaJs },
            { icon: FaMoneyBill }
                       ]}
          />
          <ProjectCard
            title="Upcoming Project"
            description="Coming soon.."
            link="https://github.com/raiden597"
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
  className="py-20 text-center relative z-10 px-4 sm:px-6 lg:px-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl font-bold mb-6">Let's Build Together!</h2>
  <p className="mb-8 font-medium text-base md:text-lg lg:text-lg">
    Let's work together or just say hi ✉️
  </p>

  <form
    onSubmit={async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      await fetch("https://formspree.io/f/mqalnlqz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      alert("Thanks for reaching out! I'll get back to you soon.");
      e.target.reset();
    }}
    className="max-w-lg mx-auto space-y-4"
  >
    <div>
      <label htmlFor="name" className="block font-medium mb-1 text-left">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
      />
    </div>

    <div>
      <label htmlFor="email" className="block font-medium mb-1 text-left">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
      />
    </div>

    <div>
      <label htmlFor="message" className="block font-medium mb-1 text-left">Message</label>
      <textarea
        name="message"
        id="message"
        required
        rows="5"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
      />
    </div>

    <button
      type="submit"
      className="bg-purple-300 dark:bg-purple-700 font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
    >
      Send Message
    </button>
  </form>

  <div className="flex justify-center gap-4 mt-10">
    <a
      href="https://www.linkedin.com/in/saranjit-thind/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="p-3 rounded-full bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-white text-xl hover:scale-110 transition"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://drive.google.com/file/d/1sd05X2DEQ06WRAah6Exu44UMlTWfQNh3/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Resume"
      className="p-3 rounded-full bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-white text-xl hover:scale-110 transition"
    >
      <FaFileAlt />
    </a>
  </div>
</motion.section>


      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 relative z-10">
        © {new Date().getFullYear()} Saran
      </footer>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-500 dark:bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

function ProjectCard({ title, description, link, techStack = [] }) {
  const [showPreview, setShowPreview] = useState(false);
  const hoverTimeout = useRef(null);
  const cardRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close preview on outside tap (mobile only)
  useEffect(() => {
    const handleTouchOutside = (event) => {
      if (
        isTouchDevice &&
        showPreview &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        setShowPreview(false);
      }
    };

    document.addEventListener('touchstart', handleTouchOutside);
    return () => document.removeEventListener('touchstart', handleTouchOutside);
  }, [showPreview, isTouchDevice]);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      hoverTimeout.current = setTimeout(() => setShowPreview(true), 200);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      clearTimeout(hoverTimeout.current);
      setShowPreview(false);
    }
  };

  const handleClick = (e) => {
    if (isTouchDevice) {
      e.stopPropagation();
      setShowPreview((prev) => !prev);
    }
  };

  const isDark =
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark');

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 cursor-pointer md:cursor-default"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2 font-medium">{description}</p>

      <div className="flex flex-wrap gap-3 mb-3">
        {techStack.map(({ icon: Icon }, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-1 bg-purple-100 text-purple-800 px-3 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="text-lg" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            key="microlink"
          >
            <Microlink
              url={link}
              size="small"
              theme={isDark ? 'dark' : 'light'}
              style={{
                width: '100%',
                maxWidth: '100%',
                borderRadius: '10px',
                marginTop: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              sandbox="allow-scripts allow-same-origin"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


export default App;
