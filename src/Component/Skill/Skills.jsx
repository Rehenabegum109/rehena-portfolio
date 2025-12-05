import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiNetlify, SiTailwindcss, SiVercel } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJsSquare />, level: 85 },
    { name: "React", icon: <FaReact />, level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 75 },
    { name: "Next.js", icon: null, level: 70 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "Express.js", icon: <SiExpress />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    { name: "Database", icon: <FaDatabase />, level: 85 },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt />, level: 85 },
    { name: "VS Code", icon: null, level: 90 },
    { name: "Vercel", icon: <SiVercel />, level: 80 },
    { name: "Netlify", icon: <SiNetlify />, level: 75 },
    { name: "Firebase", icon: <SiFirebase />, level: 70 },
  ];

  const renderSkill = (skill) => (
    <div key={skill.name} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="flex items-center gap-2">
          {skill.icon && <span className="w-5 h-5">{skill.icon}</span>}
          {skill.name}
        </span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full  rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
          className="bg-blue-500 h-3 rounded-full"
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          My Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-4 text-center">Frontend</h3>
            {frontendSkills.map(renderSkill)}
          </div>

          {/* Backend */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-green-500 transition">
            <h3 className="text-2xl font-semibold mb-4 text-center">Backend</h3>
            {backendSkills.map(renderSkill)}
          </div>

          {/* Tools & Deployment */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500 transition">
            <h3 className="text-2xl font-semibold mb-4 text-center">Tools & Deployment</h3>
            {tools.map(renderSkill)}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
