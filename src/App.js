import React, { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 min-h-screen font-sans">
      <header className="flex justify-end p-4">
        <button
          onClick={toggleDarkMode}
          className="bg-purple-500 px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-20">
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
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I’m a React developer passionate about building sleek, fast websites. Let’s create
          something amazing!
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Spotiver</h3>
            <p className="mb-2">A Spotify Clone but better.</p>
            <a href="https://spotiver.netlify.app/" className="text-purple-400 dark:text-purple-600">
              View Demo →
            </a>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="mb-2">Description of your project.</p>
            <a href="https://www.google.com" className="text-purple-400 dark:text-purple-600">
              View Demo →
            </a>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="mb-2">Description of your project.</p>
            <a href="https://www.ign.com" className="text-purple-400 dark:text-purple-600">
              View Demo →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Let’s work together or just say hello ✉️</p>
        <a
          href="mailto:your@email.com"
          className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition"
        >
          Say Hi!
        </a>
      </section>

      <footer className="text-center py-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} raiden597
      </footer>
    </div>
  );
}

export default App;
