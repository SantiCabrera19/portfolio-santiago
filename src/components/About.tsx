'use client'

import { motion } from 'framer-motion'
import { Code, Gamepad2, Music, Users, BookOpen, Database, Globe } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre Mí
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Lado Profesional en card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Code size={28} className="text-primary-600" />
              <Globe size={24} className="text-primary-500" />
              <Database size={24} className="text-primary-500" />
              Mi Stack Profesional
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Me defiendo tanto en el <strong>backend</strong> como en el <strong>frontend</strong>.<br /><br />
              En backend disfruto construyendo sistemas robustos y eficientes con <strong>Django</strong> y <strong>Supabase</strong>.<br /><br />
              En frontend, me especializo en <strong>Next.js</strong> (con Vite y Supabase), y también manejo vistas template en Django, HTML y CSS cuando hace falta. Mi objetivo es conectar el cliente con el servidor de manera fluida, asegurando una experiencia funcional y agradable.
            </p>
          </motion.div>

          {/* Lado Personal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Gamepad2 size={28} className="text-primary-600" />
              Hobbies y Tiempo Libre
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg text-gray-700">
                <Music size={20} className="text-primary-500"/>
                Música chill para programar
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-700">
                <BookOpen size={20} className="text-primary-500"/>
                Leer mangas y lore de videojuegos
              </li>
              <li className="flex items-center gap-3 text-lg text-gray-700">
                <Users size={20} className="text-primary-500"/>
                Tiempo con familia y amigos
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 