'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center mobile-hero-spacing pt-20 bg-dark-900 relative">
      <div className="container-custom z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center mobile-gap">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 mb-6 lg:mb-0"
          >
            <Image
              src={profile.avatar}
              alt="Foto de perfil de Santiago Cabrera"
              width={180}
              height={180}
              className="w-32 h-32 sm:w-44 sm:h-44 lg:w-60 lg:h-60 rounded-2xl shadow-xl border border-dark-700/60 object-cover mx-auto"
              priority
              quality={100}
              unoptimized
            />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {profile.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mobile-text-lg text-zinc-300 mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0 text-center lg:text-left leading-relaxed font-normal"
            >
              {profile.description}
            </motion.p>

             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0"
             >
               <a
                 href="#projects"
                 className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 px-6 min-h-[44px]"
               >
                 Ver Soluciones
               </a>
               <a
                 href="/Santiago-Cabrera-CV.pdf"
                 download
                 className="btn-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base py-3 px-6 min-h-[44px]"
               >
                 <Download size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                 Descargar CV
               </a>
             </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary-500 transition-colors duration-200 p-2 rounded-md focus-visible:ring-2 focus-visible:ring-primary-500 outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub de Santiago Cabrera"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary-500 transition-colors duration-200 p-2 rounded-md focus-visible:ring-2 focus-visible:ring-primary-500 outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn de Santiago Cabrera"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                className="text-zinc-400 hover:text-primary-500 transition-colors duration-200 p-2 rounded-md focus-visible:ring-2 focus-visible:ring-primary-500 outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Enviar correo a Santiago Cabrera"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <a href="#about" aria-label="Ir a sección sobre mí" className="focus-visible:ring-2 focus-visible:ring-primary-500 rounded-full outline-none flex items-center justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} className="text-zinc-500 sm:w-6 sm:h-6" aria-hidden="true" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero