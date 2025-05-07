import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m <span className="text-purple-400">Your Name</span></h1>
        <p className="text-xl mb-6">I build cool React apps 🚀</p>
        <a href="#projects" className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition">
          See My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>I’m a React developer passionate about building sleek, fast websites. Let’s create something amazing!</p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="mb-2">Description of your project.</p>
            <a href="#" className="text-purple-400">View Demo →</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="mb-2">Description of your project.</p>
            <a href="#" className="text-purple-400">View Demo →</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="mb-2">Description of your project.</p>
            <a href="#" className="text-purple-400">View Demo →</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Let’s work together or just say hello ✉️</p>
        <a href="mailto:your@email.com" className="bg-purple-500 px-6 py-3 rounded-full hover:bg-purple-600 transition">
          Say Hi!
        </a>
      </section>

      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}

export default App;
