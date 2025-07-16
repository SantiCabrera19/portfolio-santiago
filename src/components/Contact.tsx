'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { profile } from '@/data/profile'
import { Mail, MapPin, Send, CheckCircle, Copy, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

type FormData = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true)

    // --- EmailJS directo con los datos del usuario ---
    const serviceId = 'service_br1315f'
    const templateId = 'template_ka27gbj'
    const publicKey = 't7evccPbM53Xnoiiu'

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setIsSubmitted(true)
        reset()
      })
      .catch((err) => {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.')
      })
      .finally(() => {
        setIsSubmitting(false)
        setTimeout(() => setIsSubmitted(false), 4000)
      });
  }

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000) // Reset after 2 seconds
    }).catch(err => {
      console.error('Error al copiar texto:', err)
    })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                  <div className="flex items-center">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-gray-900 hover:text-primary-600 transition-colors duration-200 break-all"
                    >
                      {profile.email}
                    </a>
                    <button
                      onClick={() => handleCopy(profile.email, 'email')}
                      className="ml-3 p-1.5 rounded-md hover:bg-gray-200 transition-colors"
                      aria-label="Copiar email"
                    >
                      {copiedField === 'email' ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <FaWhatsapp size={24} className="text-primary-600" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 text-sm">WhatsApp</h4>
                  <div className="flex items-center">
                    <a
                      href={`https://wa.me/${profile.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-primary-600 transition-colors duration-200"
                    >
                      {profile.whatsapp}
                    </a>
                    <button
                      onClick={() => handleCopy(profile.whatsapp, 'whatsapp')}
                      className="ml-3 p-1.5 rounded-md hover:bg-gray-200 transition-colors"
                      aria-label="Copiar WhatsApp"
                    >
                      {copiedField === 'whatsapp' ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Ubicación</h4>
                  <p className="text-gray-900">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">
                Disponibilidad
              </h4>
              <p className="text-gray-600 mb-4">
                Actualmente disponible para proyectos freelance y oportunidades laborales.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Disponible</span>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'El nombre es requerido' })}
                  className="input-custom"
                  autoComplete="off"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'El email es requerido' })}
                  className="input-custom"
                  autoComplete="off"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'El mensaje es requerido' })}
                  className="input-custom"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>
                )}
              </div>
              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-lg font-semibold transition-colors duration-200
                  ${isSubmitted ? 'bg-green-500 text-white' : 'bg-primary-600 text-white hover:bg-primary-700'}
                  ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={22} /> ¡Enviado!
                  </>
                ) : (
                  <>
                    <Send size={20} /> Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 