'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center mobile-hero-spacing pt-16 sm:pt-20 bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-center mobile-gap">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 mb-6 lg:mb-0"
          >
            <Image
              src={profile.avatar}
              alt="Foto de Santiago"
              width={180}
              height={180}
              className="w-32 h-32 sm:w-44 sm:h-44 lg:w-60 lg:h-60 rounded-2xl shadow-xl border-2 border-gray-700 object-cover mx-auto"
              priority
              quality={100}
              unoptimized
            />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            >
              Hola, soy <span className="text-primary-600">{profile.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mobile-text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 lg:mb-8"
            >
              {profile.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mobile-text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0"
            >
              {profile.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0"
            >
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-2.5 sm:py-3"
              >
                Ver Proyectos
              </a>
              <a
                href="/Santiago-Cabrera-CV.pdf"
                download
                className="btn-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Descargar CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-600 transition-colors duration-200 p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-600 transition-colors duration-200 p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                className="text-gray-300 hover:text-primary-600 transition-colors duration-200 p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <a href="#about" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2"
            >
              <ArrowDown size={20} className="text-gray-500 sm:w-6 sm:h-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero