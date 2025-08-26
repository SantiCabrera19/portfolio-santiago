'use client'

import { motion } from 'framer-motion'
import { skills, learning } from '@/data/profile'
import {
  FaReact, FaPython, FaDocker, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiDjango, SiSqlite, SiPostgresql,
  SiVercel, SiGooglecloud, SiMongodb, SiExpress, SiNestjs, SiGraphql
} from 'react-icons/si'
import { TbApi, TbBrandPython } from 'react-icons/tb'
import Image from 'next/image'

const iconMap: { [key: string]: React.ReactNode } = {
  // Frontend
  'React': <FaReact className="text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'HTML/CSS': <span className="flex items-center gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></span>,
  
  // Backend
  'Django': <SiDjango className="text-[#092E20] dark:text-white" />,
  'Python': <FaPython className="text-[#3776AB]" />,
  'Node.js': <FaNodeJs className="text-[#339933]" />,
  'Supabase': <Image src="/images/supabase.svg" alt="Supabase" width={24} height={24} className="inline-block" />,

  // Database
  'SQLite': <SiSqlite className="text-[#003B57] dark:text-white" />,
  'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
  'MySQL': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width={24} height={24} className="inline-block" />,

  // Tools & Cloud
  'Git': <FaGitAlt className="text-[#F05032]" />,
  'Vercel': <SiVercel className="text-black dark:text-white" />,
  'PythonAnywhere': <TbBrandPython className="text-[#3776AB]" />,
  'Google Cloud': <SiGooglecloud className="text-[#4285F4]" />,
  'Resend API': <TbApi className="text-gray-500 dark:text-gray-300" />,

  // Learning
  'Docker': <FaDocker className="text-[#2496ED]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'Express.js': <SiExpress className="text-black dark:text-white" />,
  'Nest.js': <SiNestjs className="text-[#E0234E]" />,
  'GraphQL': <SiGraphql className="text-[#E10098]" />,
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
            Skills & Tecnologías
          </h2>
          <p className="mobile-text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Tecnologías y herramientas que utilizo para desarrollar aplicaciones web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mobile-gap mb-8 sm:mb-12 lg:mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg mobile-padding hover:shadow-xl dark:hover:shadow-primary-700/10 transition-all duration-300 mx-4 sm:mx-0"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {skillGroup.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                      {iconMap[tech]}
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 font-medium dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {learning.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg mobile-padding transition-all duration-300 mx-4 sm:mx-0"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4">
                {skillGroup.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-800 rounded-full font-medium shadow-md dark:bg-dark-700 dark:text-gray-200 text-sm sm:text-base">
                    <span className="text-base sm:text-lg lg:text-xl">
                      {iconMap[tech]}
                    </span>
                    <span>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 