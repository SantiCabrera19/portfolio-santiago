'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Capacidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ]

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="fixed top-0 w-full bg-dark-900/85 backdrop-blur-md z-50 border-b border-dark-700/60 shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between md:justify-center md:space-x-12 h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-xl font-bold text-primary-500 flex items-center gap-2"
            >
              <span style={{fontSize: '1.2rem', lineHeight: 1}} className="sm:text-2xl" aria-hidden="true">🧉</span>
              <a href="#home" className="focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md outline-none">Santiago</a>
            </motion.div>
 
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-primary-500 transition-colors duration-200 py-2 px-3 text-sm font-medium focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md outline-none inline-flex items-center min-h-[44px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
 
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-3 text-zinc-300 hover:text-primary-500 transition-colors z-60 rounded-md focus-visible:ring-2 focus-visible:ring-primary-500 outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-nav-overlay"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-nav-content"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-item rounded-md focus-visible:ring-2 focus-visible:ring-primary-500 px-4 py-2 outline-none"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Botón de cerrar en móvil */}
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 p-3 bg-dark-800/60 border border-dark-700/60 rounded-full text-zinc-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header