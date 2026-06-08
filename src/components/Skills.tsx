'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/profile'
import { Smartphone, Zap, Database, Shield } from 'lucide-react'

const iconMap: { [key: string]: React.ReactNode } = {
  Smartphone: <Smartphone size={32} className="text-primary-500" />,
  Zap: <Zap size={32} className="text-primary-500" />,
  Database: <Database size={32} className="text-primary-500" />,
  Shield: <Shield size={32} className="text-primary-500" />,
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Capacidades de mis Sistemas
          </h2>
          <p className="mobile-text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Características clave que potencian el crecimiento y rendimiento de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow hover:shadow-md hover:border-primary-500/50 transition-all duration-300 flex flex-col items-center text-center mx-4 sm:mx-0"
            >
              <div className="mb-4 flex items-center justify-center p-3 bg-primary-50 rounded-xl">
                {iconMap[skill.icon]}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills