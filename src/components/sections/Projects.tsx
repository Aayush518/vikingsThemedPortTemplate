import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Shield, ExternalLink, X, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Valhalla Dashboard",
    description: "A modern analytics dashboard with Norse-inspired design",
    image: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?auto=format&fit=crop&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    details: [
      "Real-time data visualization with D3.js",
      "Dark mode with Norse-inspired themes",
      "Responsive design for all devices",
      "Advanced filtering and sorting capabilities"
    ]
  },
  {
    id: 2,
    title: "Mjolnir Task Manager",
    description: "Project management tool with the power of Thor's hammer",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    details: [
      "Real-time collaboration features",
      "Advanced task tracking system",
      "Integrated chat functionality",
      "Automated workflow management"
    ]
  },
  {
    id: 3,
    title: "Yggdrasil Social",
    description: "A social network connecting the nine worlds",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    details: [
      "Real-time messaging system",
      "Multi-language support",
      "Advanced user profiles",
      "Content moderation system"
    ]
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/norse.png')] opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle className="justify-center">Conquests</SectionTitle>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Behold the digital realms I have conquered and the kingdoms I have built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition-all duration-300" />
              <div className="relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-norse">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-sm px-3 py-1 bg-gray-800 text-yellow-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="h-64 sm:h-96 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="text-3xl font-bold mb-4 font-norse">{selectedProject.title}</h2>
                <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-norse">Battle Features</h3>
                  <ul className="space-y-3">
                    {selectedProject.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <Shield className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-300">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 text-yellow-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-8">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Visit Site</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 border border-yellow-600 hover:bg-yellow-600/20 rounded-lg transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};