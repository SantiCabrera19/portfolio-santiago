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
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    // ─── EmailJS config from environment variables ─────────────────────
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSubmitted(true)
        reset()
      })
      .catch(() => {
        setSubmitError('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.')
      })
      .finally(() => {
        setIsSubmitting(false)
        setTimeout(() => {
          setIsSubmitted(false)
          setSubmitError(null)
        }, 4000)
      });
  }

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    }).catch(() => {
      // Silently fail — clipboard API may not be available in all contexts
    })
  }

  return (
    <section id="contact" className="section-padding bg-dark-900 border-t border-dark-700/60">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                  <Mail size={24} className="text-primary-500" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-white text-sm">Email</h4>
                  <div className="flex items-center">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-zinc-300 hover:text-primary-500 transition-colors duration-200 break-all rounded-md focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
                    >
                      {profile.email}
                    </a>
                    <button
                      onClick={() => handleCopy(profile.email, 'email')}
                      className="ml-3 p-2.5 rounded-md hover:bg-dark-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                      aria-label="Copiar dirección de email"
                    >
                      {copiedField === 'email' ? (
                        <Check size={16} className="text-green-500" aria-hidden="true" />
                      ) : (
                        <Copy size={16} className="text-zinc-500" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                  <FaWhatsapp size={24} className="text-primary-500" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-white text-sm">WhatsApp</h4>
                  <div className="flex items-center">
                    <a
                      href={`https://wa.me/${profile.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-primary-500 transition-colors duration-200 rounded-md focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
                    >
                      {profile.whatsapp}
                    </a>
                    <button
                      onClick={() => handleCopy(profile.whatsapp, 'whatsapp')}
                      className="ml-3 p-2.5 rounded-md hover:bg-dark-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                      aria-label="Copiar número de WhatsApp"
                    >
                      {copiedField === 'whatsapp' ? (
                        <Check size={16} className="text-green-500" aria-hidden="true" />
                      ) : (
                        <Copy size={16} className="text-zinc-500" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                  <MapPin size={24} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Ubicación</h4>
                  <p className="text-zinc-300">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 glass-card shadow-lg">
              <h4 className="font-semibold text-white mb-4">
                Disponibilidad
              </h4>
              <p className="text-zinc-300 mb-4 text-sm sm:text-base leading-relaxed">
                Actualmente disponible para proyectos y soluciones a medida en la región de Resistencia y alrededores.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm text-zinc-400">Disponible para trabajar</span>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'El nombre es requerido' })}
                  className="input-custom focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
                  autoComplete="name"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  inputMode="email"
                  {...register('email', { required: 'El email es requerido' })}
                  className="input-custom focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
                  autoComplete="email"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'El mensaje es requerido' })}
                  className="input-custom focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
                  disabled={isSubmitting || isSubmitted}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>
                )}
              </div>
              {submitError && (
                <p className="text-red-500 text-sm text-center font-medium">
                  {submitError}
                </p>
              )}
              <motion.button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 min-h-[44px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 focus-visible:ring-offset-dark-900 outline-none
                  ${isSubmitted ? 'bg-green-500 text-white' : 'bg-primary-600 text-white hover:bg-primary-700'}
                  ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={22} aria-hidden="true" /> ¡Enviado!
                  </>
                ) : (
                  <>
                    <Send size={20} aria-hidden="true" /> Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 