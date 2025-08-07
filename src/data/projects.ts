export const projects = [
  {
    id: 1,
    title: "CineForo",
    description: "Plataforma de foros y reseñas de películas, con sistema de usuarios, comentarios y panel de administración.",
    longDescription: "Aplicación web full-stack desarrollada con Django y SQLite. Incluye sistema completo de CRUD para películas, reseñas con likes AJAX, autenticación de usuarios, panel de administración y diseño responsive.",
    image: "/images/CineForos.png",
    demo: "https://www.youtube.com/watch?v=ckkhcqXZt2w",
    github: "https://github.com/SantiCabrera19/cineforo",
    live: "https://devsanticabrera.pythonanywhere.com/",
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    features: [
      "Sistema de usuarios",
      "Foros y reseñas",
      "Panel de administración",
      "Responsive",
    ],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Convenios",
    description: "Sistema web para gestión de convenios institucionales, CRUD, autenticación y panel de administración.",
    longDescription: "Aplicación web empresarial con sistema de roles (admin/user), gestión completa de convenios, flujo de aprobaciones, notificaciones por email con Resend, validaciones con Zod y dashboard administrativo.",
    image: "/images/Convenios-utn.png", 
    demo: "https://www.youtube.com/watch?v=ul0mDuwQc-w",
    github: "https://github.com/SantiCabrera19/Convenios-UTN",
    live: "https://convenios-utn.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    features: [
      "Gestión de convenios",
      "Autenticación",
      "Panel administrativo",
      "Notificaciones",
      "Responsive",
    ],
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Notes App",
    description: "Aplicación moderna de notas con sistema de etiquetas, filtros y búsqueda en tiempo real.",
    longDescription: "Aplicación full-stack completa para tomar notas con funcionalidades avanzadas como etiquetado, filtrado por etiquetas, búsqueda en tiempo real, archivo de notas y gestión completa de etiquetas. Desarrollada con React, Node.js, TypeScript y PostgreSQL.",
    image: "/images/NotesApp.png",
    demo: "https://youtu.be/-DpWfx7qKoM",
    github: "https://github.com/SantiCabrera19/notes-app",
    live: "https://notes-app-flax-eight.vercel.app/",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Prisma"],
    features: [
      "CRUD de notas",
      "Sistema de etiquetas",
      "Búsqueda en tiempo real",
      "Filtros avanzados",
      "Archivo de notas",
      "Responsive",
    ],
    category: "Full Stack"
  }
] 