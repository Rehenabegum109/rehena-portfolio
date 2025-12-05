import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img from '../../assets/Image/WhatsApp Image 2025-11-29 at 18.49.48_a61ddab3.jpg';
import { motion } from 'framer-motion'; // animation library

const Banner = () => {
  return (
    <section className="text-white py-20 " id="home">
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">

        {/* Text Content */}
        <motion.div 
          className="lg:flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Rehena</h1>
          <p className="mt-4 text-gray-300 text-lg">
            MERN Stack Developer — building responsive and accessible web apps.
          </p>

          {/* Buttons */}
          <motion.div 
            className="mt-6 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="/Rehena_Resume.pdf" 
              download 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition transform hover:scale-105"
            >
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="border border-gray-600 px-4 py-2 rounded hover:border-blue-400 transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="mt-6 flex items-center gap-4 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://github.com/Rehenabegum109" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-blue-400 transition" />
            </a>
            <a href="https://linkedin.com/in/rehena-begum-057894396" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="mt-8 lg:mt-0 lg:w-96 lg:flex-shrink-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden shadow-lg transform hover:scale-105 transition">
            <img 
              src={img} 
              alt="Rehena" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;
