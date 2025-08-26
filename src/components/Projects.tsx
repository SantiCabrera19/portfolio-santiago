'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const getYouTubeEmbedUrl = (url?: string): string | null => {
    if (!url) return null
    try {
      // youtu.be/<id>
      const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/)
      if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`

      // youtube.com/watch?v=<id>
      const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/)
      if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`

      // already an embed
      if (url.includes('/embed/')) return url
    } catch {}
    return null
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Mis Proyectos
          </h2>
          <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Aplicaciones web completas desarrolladas con diferentes tecnologías
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 mobile-gap">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary-500 mx-4 sm:mx-0"
            >
              {getYouTubeEmbedUrl(project.demo) && (
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={getYouTubeEmbedUrl(project.demo) || undefined}
                    title={project.title + ' Demo'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex space-x-1 sm:space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 sm:p-3 rounded-full shadow hover:bg-gray-200 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} className="text-gray-900 sm:w-5 sm:h-5" />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 sm:p-3 rounded-full shadow hover:bg-gray-200 transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} className="text-gray-900 sm:w-5 sm:h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              )}

              <div className="mobile-padding flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center px-2 sm:px-0">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 justify-center">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-primary-50 text-primary-600 text-xs sm:text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={14} className="sm:w-4 sm:h-4" />
                  {selectedProject === project.id ? 'Ocultar' : 'Ver más'}
                </motion.button>

                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 w-full"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base text-center">Características:</h4>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2 px-2 sm:px-0">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{feature}</span>
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