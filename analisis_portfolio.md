# Propuesta de Reestructuración de Portfolio — Santiago Cabrera

Este documento detalla el diagnóstico del portfolio de Santiago Cabrera, la propuesta de textos adaptados al comercio local (sin tecnicismos) y un prompt final optimizado para entregárselo al agente ejecutor.

---

## 1. Datos Generales de Identidad y Estructura

* **Nombre de Marca:** Santiago (o Santiago Cabrera). Sin nombres de agencia de fantasía.
* **Redes y Contacto:** Se mantienen los datos de contacto actuales (Email, Teléfono, Ubicación: Resistencia, Chaco). Los enlaces de GitHub y LinkedIn se mantienen discretos en el footer.
* **Propósito:** Mostrar cercanía, confianza, y soluciones aplicables al comercio físico local (Rotiserías, Consultorios, Ferreterías, Gimnasios).

---

## 2. Plan de Reestructuración de Textos

### 2.1 Hero / Presentación Principal

* **Título:** *"Digitalizo tu negocio con soluciones rápidas y a tu medida."*
* **Subtítulo:** *"Hola, soy Santiago. Desarrollo páginas web y sistemas sencillos para comercios, estudios jurídicos y profesionales en Resistencia. Te ayudo a captar más clientes, automatizar turnos y ordenar tus ventas de forma simple, con soporte presencial y cara a cara."*

---

### 2.2 Sobre Mí / Pilares de Servicio

Reemplazar los bloques abstractos por estos tres pilares de valor:

1. **Soporte Presencial y Mate de por Medio:**
   * *Descripción:* "Soy de acá, de Resistencia. Si tenés una duda con tu sistema o querés cambiar algo, nos sentamos en tu local a charlarlo y lo resolvemos en el día. Sin llamadas frías ni demoras de soporte."
2. **Diseño a tu Gusto:**
   * *Descripción:* "Vos elegís la estética. Me mostrás fotos, páginas que te inspiren o ideas de colores, y yo me encargo de hacerlas realidad y adaptarlas a tu marca."
3. **Carga Rápida en la Calle:**
   * *Descripción:* "Desarrollo sistemas livianos y rápidos. Tus clientes van a poder abrir tu carta o turnero al instante, incluso con mala señal 3G/4G y sin tener que descargar ninguna aplicación."

---

### 2.3 Experiencia Laboral Destacada (Apex America)

Agregar un bloque de experiencia laboral enfocado en las habilidades interpersonales y de atención:

* **Puesto:** Especialista en Atención y Soporte al Cliente (Apex America)
* **Enfoque a comunicar:** 
  * *Descripción:* "Experiencia en gestión de canales de atención y resolución de conflictos para grandes marcas en Apex America. Este rol me dio la capacidad de escuchar las necesidades reales de la gente, traducir problemas técnicos a un lenguaje simple y brindar soluciones rápidas bajo presión. Entiendo que detrás de cada línea de código hay una persona que necesita que su herramienta funcione sin trabas."

---

### 2.4 Proyectos (Catálogo de Soluciones Activas)

Reemplazar los proyectos académicos por las demos comerciales reales:

1. **Menú Digital para Salón (Rotiserías & Bares):**
   * *Tagline:* "Carta offline de alta velocidad."
   * *Descripción:* "Una carta digital de alto contraste que carga al instante y funciona sin internet en el salón. Diseñada para que el cliente elija sus platos y le muestre la pantalla al mozo, eliminando la fricción y las demoras."
   * *Enlace:* `/demos/gastronomia`
2. **Turnero y Ficha de Pacientes (Estudios & Consultorios):**
   * *Tagline:* "Agenda inteligente y pre-filtrado de casos."
   * *Descripción:* "Un turnero para que tus clientes agenden su cita y completen datos básicos de su consulta antes de escribirte por WhatsApp. Ideal para organizar las consultas de abogados, médicos y psicólogos."
   * *Enlace:* `/demos/odontologo`
3. **Catálogo de Stock Rápido (Ferreterías, Corralones & Distribuidores):**
   * *Tagline:* "Inventario mayorista y cotización instantánea."
   * *Descripción:* "Una vidriera rápida y organizada por categorías para mostrar herramientas, materiales y precios. Tus clientes arman su lista de compra y te piden presupuesto directo a tu WhatsApp en un solo clic."
   * *Enlace:* `/demos/ferreteria`
4. **Pizarrón de Entrenamiento y Rutinas (Gimnasios):**
   * *Tagline:* "Rutinas en el celular para tus alumnos."
   * *Descripción:* "Tu pizarrón interactivo de entrenamiento. Los alumnos siguen sus rutinas diarias desde el celular y la administración controla la asistencia y vencimientos de cuotas sin papeles."
   * *Enlace:* `/demos/gimnasio`

---

### 2.5 Habilidades / Capacidades Traducidas

* **📱 Aplicación Web Instalable (PWA):** Tus clientes pueden agregar tu web a su pantalla de inicio como si fuera una app, sin pasar por App Store.
* **⚡ Carga Instantánea:** Sitios web optimizados para cargar en menos de 1.5 segundos con conexiones lentas en la calle.
* **📂 Bases de Datos Seguras:** Guardado automático de stock, clientes y deudas para descargar en Excel cuando quieras.
* **🔑 Control de Seguridad:** Consola interna con clave numérica para que solo vos y tus operadores cambien precios y vean la caja.

---

## 3. Extra Tip (Feature Interactiva para el Portfolio)

> [!TIP]
> **Filtro Dinámico por Rubro:**
> Agregar botones simples con la pregunta: *¿Qué negocio tenés?*
> `[Tengo una Rotisería/Bar]` `[Tengo un Estudio/Consultorio]` `[Tengo una Ferretería]` `[Tengo un Gimnasio]`
> Al hacer clic en uno, se destacan las demos correspondientes mediante una transición limpia y se ocultan los proyectos irrelevantes.

---

## 4. Prompt para el Agente Ejecutor

Copiá y pegá el siguiente mensaje al agente encargado del desarrollo del portfolio:

```text
Hola. Necesito que actualices por completo mi portfolio web basándote en la propuesta detallada en el documento 'analisis_portfolio.md'.

Las pautas clave para el desarrollo son:
1. Cambiar la orientación profesional: Ya no me presento como un desarrollador de software corporativo abstracto (Full Stack), sino como un profesional que desarrolla páginas y sistemas a medida para comercios, profesionales y PyMEs locales de Resistencia.
2. Eliminar toda la jerga técnica innecesaria para un comerciante (quitar Next.js, Supabase, Django, APIs, etc.) en los títulos y descripciones principales. Reemplazarlos por el valor de negocio (sitios rápidos, turneros, catálogos interactivos, etc.).
3. Reestructurar las secciones de Hero, Sobre Mí, Experiencia Laboral (incorporando el bloque de Apex America enfocado en atención y comunicación) y Habilidades según el archivo markdown adjunto.
4. Cambiar la lista de proyectos para mostrar las 4 soluciones activas del catálogo de demos locales (Gastronomía, Turnero/Estudio, Catálogo/Ferretería y Gimnasio) con los textos simplificados provistos en el documento.
5. Si es posible, implementá el "Extra Tip" del filtro dinámico interactivo en la sección de proyectos para que el cliente pueda elegir su rubro y ver la demo que le corresponde.

Por favor, lee el archivo 'analisis_portfolio.md' completo para tener el detalle de los textos exactos de cada sección antes de escribir el código.
```
