import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Event Management",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=60",
      description: "Event Management platform for creating and managing events.",
      liveLink: "https://event-managment-chi.vercel.app",
      github: "https://github.com/Rehenabegum109/event-management-client"
    },
    {
      id: 2,
      name: "Game Library",
      image: "https://images.unsplash.com/photo-1698188667999-753bc61fcca4?auto=format&fit=crop&w=600&q=60",
      description: "A React-based platform to browse, search, and explore popular games.",
      liveLink: "https://celebrated-concha-37366a.netlify.app",
      github: "https://github.com/Rehenabegum109/game-library"
    },
    {
      id: 3,
      name: "Hero Apps",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=700&q=60",
      description: "A React-based platform showcasing superhero apps with interactive UI.",
      liveLink: "https://glowing-fox-536f20.netlify.app",
      github: "https://github.com/Rehenabegum109/B12-A40-Hero-Apps"
    }
  ];

  return (
    <section id="projects" className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm">
                    {project.description.length > 110
                      ? project.description.substring(0, 110) + "..."
                      : project.description}
                  </p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded font-medium transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded font-medium transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
