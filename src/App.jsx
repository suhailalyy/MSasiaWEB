import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import IndustrialHero from './components/Hero/IndustrialHero'
import ScrapShowcase from './components/ScrapShowcase/ScrapShowcase'
import WorkProcess from './components/WorkProcess'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import DynamicServicePage from './components/Services/DynamicServicePage'
import About from './components/Pages/About'
import PrivacyPolicy from './components/Pages/Legal/PrivacyPolicy'
import TermsOfService from './components/Pages/Legal/TermsOfService'
import NotFound from './components/Pages/NotFound'
import Careers from './components/Pages/Careers'
import Blog from './components/Pages/Blog'
import SearchResults from './components/Pages/SearchResults'
import WhatWeDo from './components/Pages/WhatWeDo'
import Industries from './components/Pages/Industries'
import Contact from './components/Pages/Contact'

// HomePage Component (Existing Content)
const HomePage = () => (
    <>
        <IndustrialHero />
        <ScrapShowcase />
        <WorkProcess />
        <ContactSection />
    </>
);

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
        <Router>
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/:slug" element={<DynamicServicePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
