import SearchBar from '../common/SearchBar'

function NavbarPill({
    isScrolled,
    isMobileScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    isSearchExpanded,
    toggleSearch,
    isDark,
    toggleTheme,
}) {
    return (
        <>
            {/* ===== DESKTOP NAVBAR (hidden on mobile) ===== */}
            <div className="hidden md:flex fixed top-6 left-0 w-full justify-center z-40 pointer-events-none px-4">
                <nav
                    id="navbar-pill-desktop"
                    className={`glass-pill pointer-events-auto rounded-full px-4 py-2.5 flex items-center gap-2 transition-all duration-500 bg-brand-bg-card/90 backdrop-blur-md border border-brand-border-soft shadow-lg ${isScrolled ? 'scrolled' : ''}`}
                >
                    {/* INTERNAL LOGO (appears on scroll) */}
                    <a
                        href="/"
                        className={`internal-element navbar-logo flex items-center gap-2 no-underline transition-all duration-300 ${isScrolled ? 'visible-state' : 'opacity-0 max-w-0 overflow-hidden'}`}
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-heading-h1 to-brand-icon-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                            MA
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <ul className="flex items-center gap-1">
                        <li>
                            <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                                What We Do
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                                Industries We Serve
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                                Company
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                                Blog
                            </a>
                        </li>
                    </ul>

                    {/* DIVIDER */}
                    <div className="h-6 w-px bg-brand-border-divider mx-1"></div>

                    {/* SEARCH BUTTON */}
                    <SearchBar isExpanded={isSearchExpanded} toggleSearch={toggleSearch} />

                    {/* INTERNAL CONTACT (appears on scroll) */}
                    <a
                        href="#contact"
                        className={`internal-element flex bg-brand-btn-primary hover:bg-brand-btn-primary-hover !text-white rounded-full px-4 py-1.5 text-sm font-semibold shadow-md transition-all items-center gap-1 ${isScrolled ? 'visible-state' : 'opacity-0 max-w-0 overflow-hidden'}`}
                    >
                        <span>Contact Us</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </nav>
            </div>

            {/* ===== MOBILE NAVBAR (hidden on desktop) - Glass Pill ===== */}
            <div className="flex md:hidden fixed top-6 left-0 w-full justify-center items-center z-40 pointer-events-none px-4">
                {/* MOBILE: Main Navbar Pill */}
                <nav
                    id="navbar-pill-mobile"
                    className={`pointer-events-auto rounded-full px-3 py-2 flex items-center gap-3 transition-all duration-500 bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg ${isMobileScrolled ? 'mobile-scrolled' : ''}`}
                >
                    {/* MOBILE: MA Logo */}
                    <a href="/" className="navbar-logo flex items-center no-underline">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-heading-h1 to-brand-icon-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                            MA
                        </div>
                    </a>

                    {/* MOBILE: Menu Button - Icon on top, text below */}
                    <button
                        onClick={toggleMobileMenu}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-brand-heading-h1 text-white hover:bg-brand-heading-h1/90 transition-colors flex flex-col items-center gap-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                        <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
                    </button>

                    {/* MOBILE: Search Icon */}
                    <button
                        onClick={toggleSearch}
                        className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* MOBILE: Contact Button - Icon on top, text below */}
                    <a
                        href="#contact"
                        className="bg-brand-btn-primary hover:bg-brand-btn-primary-hover text-white rounded-full px-3 py-1.5 text-xs font-semibold shadow-md transition-all flex flex-col items-center gap-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span>Contact</span>
                    </a>
                </nav>
            </div>

            {/* ===== MOBILE THEME TOGGLE - Separate from navbar pill (phone only ≤640px) ===== */}
            <button
                onClick={toggleTheme}
                id="mobile-theme-toggle-separate"
                className="md:hidden pointer-events-auto fixed top-6 right-4 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg text-gray-600 hover:text-gray-900 hover:bg-white transition-all mobile-theme-toggle-outside"
            >
                {isDark ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                )}
            </button>
        </>
    )
}

export default NavbarPill
