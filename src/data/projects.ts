export const projects = [
  {
    id: 1,
    title: "CineForo",
    description: "Plataforma de foros y reseñas de películas, con sistema de usuarios, comentarios y panel de administración.",
    longDescription: "Aplicación web full-stack desarrollada con Django y SQLite. Incluye sistema completo de CRUD para películas, reseñas con likes AJAX, autenticación de usuarios, panel de administración y diseño responsive.",
    image: "/images/cineforo.png",
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
    image: "/images/convenios.png", 
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
  }
] 