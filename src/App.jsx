import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import IndustrialHero from './components/Hero/IndustrialHero'
import ScrapShowcase from './components/ScrapShowcase/ScrapShowcase'
import WorkProcess from './components/WorkProcess'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

function App() {
    const [isDark, setIsDark] = useState(false)

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    // Toggle theme function
    const toggleTheme = () => {
        setIsDark(!isDark)
        if (!isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <>
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <IndustrialHero />
            <ScrapShowcase />
            <WorkProcess />
            <ContactSection />
            <Footer />
        </>
    )
}

export default App
