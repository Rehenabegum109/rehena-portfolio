import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* About Text */}
        <motion.div
          className="text-center max-w-3xl mx-auto text-gray-300 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Hi! I'm <strong>Rehena Begum</strong>, a passionate web developer with expertise in React, Node.js, and Tailwind CSS. I love creating interactive and responsive web applications.
          </p>
          <p>
            I enjoy solving complex problems, continuously learning new technologies, and contributing to projects that make an impact. Outside of coding, I love painting and exploring creative design ideas.
          </p>
        </motion.div>

        {/* Highlights / Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            "Web Development",
            "Design & Creativity",
            "Continuous Learning",
            "Problem Solving",
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800 bg-opacity-30 rounded-lg px-5 py-3 cursor-pointer hover:bg-opacity-50 transition font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
