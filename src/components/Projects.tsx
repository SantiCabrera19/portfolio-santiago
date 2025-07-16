'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, Play, Eye } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mis Proyectos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aplicaciones web completas desarrolladas con diferentes tecnologías
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary-500"
            >
              <div className="relative h-52 bg-gray-200 rounded-t-xl overflow-hidden">
                <img
                  src={project.title === 'CineForo' ? '/images/CineForos.png' : project.title === 'Sistema de Gestión de Convenios' ? '/images/Convenios-utn.png' : ''}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                  style={{ background: '#222' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center opacity-100 transition-opacity duration-300 p-4">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-3 rounded-full hover:bg-gray-200 transition-all duration-200 transform hover:scale-110"
                    >
                      <Github size={20} className="text-gray-900" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 p-3 rounded-full hover:bg-gray-200 transition-all duration-200 transform hover:scale-110"
                      >
                        <ExternalLink size={20} className="text-gray-900" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col items-center">
                {/* Thumbnail arriba */}
                {/* ELIMINADO: No más imagen extra aquí */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {project.description}
                </p>

                {/* Video embed */}
                {(project.title === 'CineForo' || project.title === 'Sistema de Gestión de Convenios') && (
                  <div className="w-full flex justify-center mb-4">
                    <div className="w-full" style={{ aspectRatio: '16/9' }}>
                      <iframe
                        src={project.title === 'CineForo'
                          ? 'https://www.youtube.com/embed/ckkhcqXZt2w'
                          : 'https://www.youtube.com/embed/ul0mDuwQc-w'}
                        title={project.title + ' Demo'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-xl border border-gray-200 shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
                >
                  <Eye size={16} />
                  {selectedProject === project.id ? 'Ocultar' : 'Ver más'}
                </button>

                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 