export const projects = [
  {
    id: 1,
    title: "CineForo",
    description: "Blog de películas completo con sistema de reseñas, autenticación de usuarios y gestión de contenido. Deployado en PythonAnywhere.",
    longDescription: "Aplicación web full-stack desarrollada con Django y SQLite. Incluye sistema completo de CRUD para películas, reseñas con likes AJAX, autenticación de usuarios, panel de administración y diseño responsive.",
    image: "/images/cineforo.png",
    demo: "https://youtube.com/watch?v=DEMO_CINEFORO",
    github: "https://github.com/SantiCabrera19/cineforo",
    live: "https://cineforo.pythonanywhere.com",
    tech: ["Django", "Python", "SQLite", "HTML/CSS", "JavaScript"],
    features: [
      "Sistema de autenticación completo",
      "CRUD de películas y reseñas", 
      "Likes con AJAX",
      "Panel de administración",
      "Diseño responsive",
      "Deploy en PythonAnywhere"
    ],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Convenios",
    description: "Sistema completo de gestión de convenios con roles de administrador y usuario, sistema de aprobaciones y notificaciones por email.",
    longDescription: "Aplicación web empresarial con sistema de roles (admin/user), gestión completa de convenios, flujo de aprobaciones, notificaciones por email con Resend, validaciones con Zod y dashboard administrativo.",
    image: "/images/convenios.png", 
    demo: "https://youtube.com/watch?v=DEMO_CONVENIOS",
    github: "https://github.com/SantiCabrera19/Convenios-UTN",
    live: "https://convenios-app.vercel.app",
    tech: ["Next.js", "TypeScript", "Zod", "Resend", "Tailwind CSS"],
    features: [
      "Sistema de roles (Admin/User)",
      "CRUD completo de convenios",
      "Flujo de aprobaciones",
      "Notificaciones por email",
      "Validaciones con Zod",
      "Dashboard administrativo",
      "Deploy en Vercel"
    ],
    category: "Full Stack"
  }
] 