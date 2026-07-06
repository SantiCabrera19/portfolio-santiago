'use client'

import { motion } from 'framer-motion'
import { Coffee, Palette, Zap, Headphones } from 'lucide-react'
import { experience } from '@/data/profile'

const About = () => {
  const pillars = [
    {
      title: "Soporte Presencial y Mate de por Medio",
      description: "Soy de acá, de Resistencia. Si tenés una duda con tu sistema o querés cambiar algo, nos sentamos en tu local a charlarlo y lo resolvemos en el día. Sin llamadas frías ni demoras de soporte.",
      icon: <Coffee size={28} className="text-primary-500" />
    },
    {
      title: "Diseño a tu Gusto",
      description: "Vos elegís la estética. Me mostrás fotos, páginas que te inspiren o ideas de colores, y yo me encargo de hacerlas realidad y adaptarlas a tu marca.",
      icon: <Palette size={28} className="text-primary-500" />
    },
    {
      title: "Carga Rápida en la Calle",
      description: "Desarrollo sistemas livianos y rápidos. Tus clientes van a poder abrir tu carta o turnero al instante, incluso con mala señal 3G/4G y sin tener que descargar ninguna aplicación.",
      icon: <Zap size={28} className="text-primary-500" />
    }
  ]

  const apexExp = experience[0]

  return (
    <section id="about" className="section-padding bg-dark-900 border-t border-dark-700/60">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre Mí
          </h2>
          <p className="mobile-text-lg text-zinc-400 max-w-2xl mx-auto">
            Pilares sobre los que construyo mis soluciones comerciales
          </p>
        </motion.div>

        {/* Pilares de servicio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-8 glass-card glass-card-hover"
            >
              <div className="mb-4 flex items-center gap-3">
                {pillar.icon}
                <h3 className="text-xl font-bold text-white">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Experiencia Apex */}
        {apexExp && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 glass-card glass-card-hover max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Headphones size={28} className="text-primary-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {apexExp.title}
                  </h3>
                  <p className="text-zinc-300 font-medium text-sm sm:text-base">
                    {apexExp.company}
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs sm:text-sm rounded-full font-semibold self-start sm:self-center">
                {apexExp.period}
              </span>
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              {apexExp.description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default About