import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollSpy from './components/ScrollSpy';
import Skills from './components/Skills';

export default function Home() {
    return (
        <>
            <ScrollSpy />
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}
