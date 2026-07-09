import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollSpy from './components/ScrollSpy'
import Skills from './components/Skills'

export default function Home() {
    return (
        <main className='min-h-screen bg-white dark:bg-[#0F1115] transition-colors duration-300'>
            <ScrollSpy />
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </main>
    )
}
