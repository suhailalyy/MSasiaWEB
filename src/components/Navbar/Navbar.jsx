import { useState, useEffect } from 'react'
import NavbarPill from './NavbarPill'

function Navbar({ isDark, toggleTheme }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileScrolled, setIsMobileScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
            setIsMobileScrolled(scrollPosition > 30)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Toggle functions
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    const toggleSearch = () => setIsSearchExpanded(!isSearchExpanded)

    return (
        <NavbarPill
            isScrolled={isScrolled}
            isMobileScrolled={isMobileScrolled}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            isSearchExpanded={isSearchExpanded}
            toggleSearch={toggleSearch}
            isDark={isDark}
            toggleTheme={toggleTheme}
        />
    )
}

export default Navbar
