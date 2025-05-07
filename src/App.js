import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen font-sans transition-colors duration-500">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: darkMode ? '#111' : '#fff',
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: darkMode ? '#ffffff' : '#000000',
            },
            links: {
              enable: true,
              color: darkMode ? '#ffffff' : '#000000',
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
            number: {
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          fullScreen: { enable: true, zIndex: -1 },
        }}
      />

      {/* Toggle Switch */}
      <header className="flex justify-end p-4 relative z-10">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </header>

      {/* Hero */}
      <section className="text-center py-20 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-purple-500 dark:text-purple-400">Saran</span>
        </h1>
        <p className="text-xl mb-6">I build cool React apps 🚀</p>
        <a
          href="#projects"
          className="bg-purple-500 dark:bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 dark:hover:bg-purple-700 transition"
        >
          See My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>I’m a React developer passionate about building sleek, fast websites. Let’s create something amazing!</p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Spotiver</h3>
            <p className="mb-2">A Spotify Clone but better.</p>
            <a href="https://spotiver.netlify.app/" className="text-purple-500 dark:text-purple-400">
              View Demo →
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="mb-2">Description of your project.</p>
            <a href="https://www.google.com" className="text-purple-500 dark:text-purple-400">
              View Demo →
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="mb-2">Description of your project.</p>
            <a href="https://www.ign.com" className="text-purple-500 dark:text-purple-400">
              View Demo →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Let’s work together or just say hello ✉️</p>
        <a
          href="mailto:your@email.com"
          className="bg-purple-500 dark:bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 dark:hover:bg-purple-700 transition"
        >
          Say Hi!
        </a>
      </section>

      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 relative z-10">
        © {new Date().getFullYear()} raiden597
      </footer>
    </div>
  );
}

export default App;
