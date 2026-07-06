import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ClientWrapper from '@/components/ClientWrapper'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ClientWrapper />
    </main>
  )
} 