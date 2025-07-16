'use client'

import { motion } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface NavigationArrowsProps {
  currentSection: string
}

const sections = ['home', 'about', 'projects', 'skills', 'contact']

const NavigationArrows = ({ currentSection }: NavigationArrowsProps) => {
  const currentIndex = sections.indexOf(currentSection)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < sections.length - 1

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-2">
      {hasPrevious && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection(sections[currentIndex - 1])}
          className="p-3 bg-gray-800 hover:bg-primary-600 rounded-full shadow-lg transition-colors duration-200"
          aria-label={`Ir a ${sections[currentIndex - 1]}`}
        >
          <ChevronUp size={20} className="text-white" />
        </motion.button>
      )}
      
      {hasNext && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection(sections[currentIndex + 1])}
          className="p-3 bg-gray-800 hover:bg-primary-600 rounded-full shadow-lg transition-colors duration-200"
          aria-label={`Ir a ${sections[currentIndex + 1]}`}
        >
          <ChevronDown size={20} className="text-white" />
        </motion.button>
      )}
    </div>
  )
}

export default NavigationArrows 