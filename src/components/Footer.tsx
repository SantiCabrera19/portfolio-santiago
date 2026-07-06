'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-zinc-100 py-12 border-t border-dark-700/60">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">{profile.name}</h3>
            <p className="text-zinc-400 mb-4">{profile.title}</p>
            <p className="text-zinc-400 text-sm">
              Creando páginas y soluciones digitales a medida para comercios, profesionales y PyMEs de Resistencia.
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 rounded outline-none p-1 block">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 rounded outline-none p-1 block">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 rounded outline-none p-1 block">
                  Capacidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 rounded outline-none p-1 block">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md outline-none p-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="GitHub de Santiago Cabrera"
              >
                <Github size={24} aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md outline-none p-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="LinkedIn de Santiago Cabrera"
              >
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md outline-none p-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label="Enviar correo a Santiago Cabrera"
              >
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
          className="border-t border-dark-700/60 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desarrollado con Next.js, TypeScript y Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 