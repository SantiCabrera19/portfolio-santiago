'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Eye, MessageCircle, Github } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const [selectedRubro, setSelectedRubro] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const rubros = [
    { id: 'all', label: 'Ver todos' },
    { id: 'gastronomia', label: 'Rotisería/Bar' },
    { id: 'profesional', label: 'Estudio/Consultorio' },
    { id: 'comercio', label: 'Ferretería/Comercio' },
    { id: 'bienestar', label: 'Gimnasio' },
    { id: 'otros', label: 'Otros Proyectos' },
  ]

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

  const filteredProjects = selectedRubro === 'all'
    ? projects
    : projects.filter(project => project.rubro === selectedRubro)

  return (
    <section id="projects" className="section-padding bg-gray-900 border-t border-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mis Soluciones y Proyectos
          </h2>
          <p className="mobile-text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Sistemas rápidos y a medida listos para tu negocio, junto con desarrollos de software a medida.
          </p>
        </motion.div>

        {/* Filtros dinámicos */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-lg text-gray-300 font-semibold mb-4 text-center">
            ¿Qué negocio tenés o qué buscás?
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-4xl px-4">
            {rubros.map((rubro) => (
              <motion.button
                key={rubro.id}
                onClick={() => {
                  setSelectedRubro(rubro.id)
                  setSelectedProject(null)
                }}
                className={`px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-200 font-medium
                  ${selectedRubro === rubro.id
                    ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-600/35'
                    : 'bg-dark-800 border-gray-700 text-gray-300 hover:border-primary-500 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {rubro.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grilla de Proyectos */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 flex flex-col h-full"
              >
                {/* Mockup Preview / YouTube Embed */}
                <div className="relative w-full overflow-hidden bg-gray-950" style={{ aspectRatio: '16/9' }}>
                  {project.demo ? (
                    <iframe
                      src={getYouTubeEmbedUrl(project.demo) || undefined}
                      title={project.title + ' Demo'}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  )}
                  {project.live && !project.demo && (
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 text-white p-2.5 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
                        title="Probar demo en vivo"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  )}
                </div>

                {/* Contenido de Tarjeta */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-primary-400 font-semibold uppercase tracking-wider mb-2">
                    {project.rubroLabel}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-100 font-medium mb-3 text-sm">
                    {project.description}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base py-2.5"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} />
                        Probar Demo
                      </motion.a>
                    )}
                    {project.github ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 text-gray-300 hover:text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} />
                        Ver Código
                      </motion.a>
                    ) : (
                      <motion.a
                        href={`https://wa.me/543624280817?text=Hola%20Santiago!%20Me%20interesa%20la%20solución%20de%20${encodeURIComponent(project.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 text-gray-300 hover:text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageCircle size={16} className="text-emerald-500" />
                        Consultar
                      </motion.a>
                    )}
                  </div>

                  {/* Toggle ver más */}
                  <div className="mt-4 pt-4 border-t border-gray-700/50 flex flex-col items-center">
                    <motion.button
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      className="text-gray-400 hover:text-white font-medium flex items-center gap-2 text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={14} />
                      {selectedProject === project.id ? 'Ocultar características' : 'Ver características técnicas'}
                    </motion.button>

                    <AnimatePresence>
                      {selectedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 w-full text-left overflow-hidden"
                        >
                          <ul className="space-y-1.5 pt-2">
                            {project.features.map((feature) => (
                              <li key={feature} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span className="leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 