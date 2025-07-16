'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20 bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <Image
              src={profile.avatar}
              alt="Foto de Santiago"
              width={240}
              height={240}
              className="rounded-2xl shadow-xl border-2 border-gray-700 object-cover"
              priority
              quality={100}
              unoptimized
            />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Hola, soy <span className="text-primary-600">{profile.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              {profile.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-300 mb-12"
            >
              {profile.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                Ver Proyectos
              </a>
              <a
                href="/Santiago-Cabrera-CV.pdf"
                download
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Descargar CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-600 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-600 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-300 hover:text-primary-600 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#projects" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2"
            >
              <ArrowDown size={24} className="text-gray-500" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 