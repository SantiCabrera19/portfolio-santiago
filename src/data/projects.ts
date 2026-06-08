export const projects = [
  {
    id: 1,
    title: "Menú Digital para Salón (Rotiserías & Bares)",
    description: "Carta offline de alta velocidad.",
    longDescription: "Una carta digital de alto contraste que carga al instante y funciona sin internet en el salón. Diseñada para que el cliente elija sus platos y le muestre la pantalla al mozo, eliminando la fricción y las demoras.",
    image: "/images/gastronomia_mockup.png",
    live: "https://resistencia-pwas.vercel.app/gastronomia",
    features: [
      "Funciona offline una vez cargada",
      "Alto contraste para lectura al sol o en interiores oscuros",
      "Carga ultra rápida sin descargas",
      "Optimizado para celulares antiguos"
    ],
    rubro: "gastronomia",
    rubroLabel: "Tengo una Rotisería/Bar"
  },
  {
    id: 2,
    title: "Turnero y Ficha de Pacientes (Estudios & Consultorios)",
    description: "Agenda inteligente y pre-filtrado de casos.",
    longDescription: "Un turnero para que tus clientes agenden su cita y completen datos básicos de su consulta antes de escribirte por WhatsApp. Ideal para organizar las consultas de abogados, médicos y psicólogos.",
    image: "/images/turnero_mockup.png",
    live: "https://resistencia-pwas.vercel.app/odontologo",
    features: [
      "Pre-filtrado de información relevante",
      "Reserva de citas automática 24/7",
      "Confirmación directa vía WhatsApp",
      "Base de datos de pacientes/clientes integrada"
    ],
    rubro: "profesional",
    rubroLabel: "Tengo un Estudio/Consultorio"
  },
  {
    id: 3,
    title: "Catálogo de Stock Rápido (Ferreterías, Corralones & Distribuidores)",
    description: "Inventario mayorista y cotización instantánea.",
    longDescription: "Una vidriera rápida y organizada por categorías para mostrar herramientas, materiales y precios. Tus clientes arman su lista de compra y te piden presupuesto directo a tu WhatsApp en un solo clic.",
    image: "/images/catalog_mockup.png",
    live: "https://resistencia-pwas.vercel.app/ferreteria",
    features: [
      "Buscador y filtros veloces por categorías",
      "Carrito de presupuestos sin pasarela de pago obligatoria",
      "Envío de lista ordenada directo a WhatsApp",
      "Fácil actualización de stock y precios"
    ],
    rubro: "comercio",
    rubroLabel: "Tengo una Ferretería/Corralón"
  },
  {
    id: 4,
    title: "Pizarrón de Entrenamiento y Rutinas (Gimnasios)",
    description: "Rutinas en el celular para tus alumnos.",
    longDescription: "Tu pizarrón interactivo de entrenamiento. Los alumnos siguen sus rutinas diarias desde el celular y la administración controla la asistencia y vencimientos de cuotas sin papeles.",
    image: "/images/gym_mockup.png",
    live: "https://resistencia-pwas.vercel.app/gimnasio",
    features: [
      "Seguimiento diario de ejercicios por alumno",
      "Control administrativo de cuotas y vencimientos",
      "Interfaz súper sencilla sin descargas",
      "Acceso rápido mediante código QR en el salón"
    ],
    rubro: "bienestar",
    rubroLabel: "Tengo un Gimnasio"
  },
  {
    id: 5,
    title: "Resistencia PWAs",
    description: "Catálogo central de soluciones progresivas.",
    longDescription: "Plataforma centralizadora desarrollada para alojar soluciones de software instalables (PWAs). Permite a los comerciantes y profesionales de la región experimentar en tiempo real con cartas digitales offline, turneros automáticos y sistemas de inventario diseñados para el mercado local.",
    image: "/images/resistencia_pwas.png",
    live: "https://resistencia-pwas.vercel.app/",
    features: [
      "Centraliza todas las demos activas",
      "Instalable directamente en el celular (PWA)",
      "Acceso rápido mediante códigos QR únicos",
      "Optimizado para conexiones móviles locales"
    ],
    rubro: "otros",
    rubroLabel: "Plataforma Principal / Catálogo"
  },
  {
    id: 6,
    title: "ElectroStore E-commerce",
    description: "E-commerce moderno de electrodomésticos con catálogo, filtros avanzados, carrito de compras y sistema de autenticación.",
    longDescription: "Plataforma e-commerce full-stack construida con Next.js 15 y Supabase. Incluye catálogo de productos con filtros avanzados, búsqueda en tiempo real, carrito de compras, sistema de ofertas, checkout simulado y diseño responsive mobile-first inspirado en Mercado Libre.",
    image: "/images/ElectroStore.png",
    demo: "https://youtu.be/ER05ys3znIk",
    github: "https://github.com/SantiCabrera19/electrostore-ecommerce",
    live: "",
    features: [
      "Catálogo con filtros avanzados",
      "Búsqueda en tiempo real",
      "Carrito de compras",
      "Sistema de ofertas",
      "Checkout simulado",
      "Autenticación",
      "Mobile-first responsive",
    ],
    rubro: "comercio",
    rubroLabel: "Comercio / E-commerce"
  },
  {
    id: 7,
    title: "CineForo",
    description: "Plataforma de foros y reseñas de películas, con sistema de usuarios, comentarios y panel de administración.",
    longDescription: "Aplicación web full-stack desarrollada con Django y SQLite. Incluye sistema completo de CRUD para películas, reseñas con likes AJAX, autenticación de usuarios, panel de administración y diseño responsive.",
    image: "/images/CineForos.png",
    demo: "https://www.youtube.com/watch?v=ckkhcqXZt2w",
    github: "https://github.com/SantiCabrera19/cineforo",
    live: "",
    features: [
      "Sistema de usuarios",
      "Foros y reseñas",
      "Panel de administración",
      "Responsive",
    ],
    rubro: "otros",
    rubroLabel: "Proyecto Personal / Foro"
  },
  {
    id: 8,
    title: "Sistema de Gestión de Convenios",
    description: "Sistema web para gestión de convenios institucionales, CRUD, autenticación y panel de administración.",
    longDescription: "Aplicación web empresarial con sistema de roles (admin/user), gestión completa de convenios, flujo de aprobaciones, notificaciones por email con Resend, validaciones con Zod y dashboard administrativo.",
    image: "/images/Convenios-utn.png",
    demo: "https://www.youtube.com/watch?v=ul0mDuwQc-w",
    github: "https://github.com/SantiCabrera19/Convenios-UTN",
    live: "",
    features: [
      "Gestión de convenios",
      "Autenticación",
      "Panel administrativo",
      "Notificaciones",
      "Responsive",
    ],
    rubro: "profesional",
    rubroLabel: "Gestión Institucional / UTN"
  },
  {
    id: 9,
    title: "Notes App",
    description: "Aplicación moderna de notas con sistema de etiquetas, filtros y búsqueda en tiempo real.",
    longDescription: "Aplicación full-stack completa para tomar notas con funcionalidades avanzadas como etiquetado, filtrado por etiquetas, búsqueda en tiempo real, archivo de notas y gestión completa de etiquetas. Desarrollada con React, Node.js, TypeScript y PostgreSQL.",
    image: "/images/NotesApp.png",
    demo: "https://www.youtube.com/watch?v=bzECnMQ7STQ",
    github: "https://github.com/SantiCabrera19/notes-app",
    live: "",
    features: [
      "CRUD de notas",
      "Sistema de etiquetas",
      "Búsqueda en tiempo real",
      "Filtros avanzados",
      "Archivo de notas",
      "Responsive",
    ],
    rubro: "otros",
    rubroLabel: "Proyecto Personal / Utilidad"
  }
]
 