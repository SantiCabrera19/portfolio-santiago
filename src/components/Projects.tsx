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
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-3 rounded-full shadow hover:bg-gray-200 transition-all duration-200 transform hover:scale-110"
                    >
                      <Github size={20} className="text-gray-900" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 p-3 rounded-full shadow hover:bg-gray-200 transition-all duration-200 transform hover:scale-110"
                      >
                        <ExternalLink size={20} className="text-gray-900" />
                      </a>
                    )}
                  </div>
                </div>
              )}

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
                {getYouTubeEmbedUrl(project.demo) && (
                  <div className="w-full flex justify-center mb-4">
                    <div className="w-full" style={{ aspectRatio: '16/9' }}>
                      <iframe
                        src={getYouTubeEmbedUrl(project.demo) || undefined}
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