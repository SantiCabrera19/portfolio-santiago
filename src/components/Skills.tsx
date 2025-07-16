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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Tecnologías
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para desarrollar aplicaciones web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 hover:shadow-xl dark:hover:shadow-primary-700/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <span className="text-xl w-6 h-6 flex items-center justify-center">
                      {iconMap[tech]}
                    </span>
                    <span className="text-gray-700 font-medium dark:text-gray-300">{tech}</span>
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
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {skillGroup.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-full font-medium shadow-md dark:bg-dark-700 dark:text-gray-200">
                    <span className="text-xl">
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