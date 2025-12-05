import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Column 1 - Message */}
          <div className="space-y-3">
            <h3 className="text-xl text-white font-semibold">Thank you for visiting</h3>
            <p className="text-sm">
              Thank you for reviewing my resume. I look forward to the opportunity to contribute to your team.
            </p>
            <p className="text-sm">
              Passionate about building real-world web applications using the MERN stack.
            </p>
            <p className="text-sm">Available for full-time roles, internships, and remote opportunities.</p>
          </div>

          {/* Column 2 - Quick links */}
          <div>
            <h4 className="text-lg text-white font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#projects" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => document.getElementById('skills')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/assets/Rehena_Resume.pdf" download className="hover:text-white transition">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social & contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg text-white font-semibold mb-3">Connect with me</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-3">
              <a href="https://github.com/Rehenabegum109" target="_blank" rel="noreferrer" className="text-xl hover:text-white transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/rehena-begum-057894396" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-300 transition">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-400 transition">
                <FaFacebook />
              </a>
            </div>

            <div className="text-sm text-gray-400">
              <p>LinkedIn: <a className="hover:text-white" href="https://linkedin.com/in/rehena-begum-057894396" target="_blank" rel="noreferrer">linkedin.com/in/rehena-begum-057894396</a></p>
              <p className="mt-1">GitHub: <a className="hover:text-white" href="https://github.com/Rehenabegum109" target="_blank" rel="noreferrer">github.com/Rehenabegum109</a></p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Rehena Begum — All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToTop}
              className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow-sm transition"
              aria-label="Back to top"
            >
              Back to top
            </button>
            <span className="text-xs text-gray-500">Built with ❤️ • MERN / React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
