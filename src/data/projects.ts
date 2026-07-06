export const projects = [
  {
    id: 1,
    title: "Menú Digital para Salón (Rotiserías & Bares)",
    description: "Carta offline de alta velocidad.",
    longDescription: "Una carta digital de alto contraste que carga al instante y funciona sin internet en el salón. Diseñada para que el cliente elija sus platos y le muestre la pantalla al mozo, eliminando la fricción y las demoras.",
    image: "/images/gastronomia_mockup.webp",
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
    image: "/images/turnero_mockup.webp",
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
    image: "/images/catalog_mockup.webp",
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
    image: "/images/gym_mockup.webp",
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
    longDescription: "Catálogo interactivo que agrupa mis aplicaciones web progresivas (PWA) diseñadas para comercios y profesionales. Permite a los clientes locales probar y experimentar las cartas digitales offline, turneros y sistemas de stock en tiempo real.",
    image: "/images/resistencia_pwas.webp",
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
    longDescription: "Tienda online completa con catálogo auto-administrado, carrito de compras dinámico y buscador inteligente. Desarrollada con Next.js y Supabase para garantizar persistencia segura de datos y cargas instantáneas.",
    image: "/images/ElectroStore.webp",
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
    longDescription: "Red social y foro de cine donde los usuarios califican películas, participan en debates y dejan opiniones con interacciones dinámicas. Desarrollado con Django, SQLite y llamadas asíncronas con AJAX.",
    image: "/images/CineForos.webp",
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
    longDescription: "Sistema administrativo desarrollado para la UTN. Gestiona convenios mediante un flujo de firma digital y aprobaciones por roles de usuario, notificaciones automáticas por correo y un panel estadístico integrado.",
    image: "/images/Convenios-utn.webp",
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
    longDescription: "Bloc de notas dinámico con etiquetado por categorías, archivador y buscador de texto en tiempo real. Construido con React, Express, TypeScript y bases de datos PostgreSQL.",
    image: "/images/NotesApp.webp",
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