

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
            {/* ===== FIXED THEME TOGGLE (GLOBAL) ===== */}
            <button
                onClick={toggleTheme}
                className="fixed top-6 right-5 z-[9999] p-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? (
                    <svg className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:-rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                )}
            </button>

            {/* ===== DESKTOP NAVBAR ===== */}
            <header
                className="hidden md:block fixed top-5 left-0 w-full z-40 pointer-events-none"
                style={{ background: 'transparent', boxShadow: 'none' }}
            >
                {/* Single clean container - relative for absolute centering */}
                <div className="w-full relative flex items-center justify-between py-2 px-8">

                    {/* LEFT: External Logo - Hidden when searching */}
                    <a
                        href="/"
                        id="external-logo"
                        className={`pointer-events-auto flex items-center transition-all duration-300 -translate-y-0.5 ${isScrolled && !isSearchExpanded ? 'opacity-0 -translate-x-4' :
                            !isSearchExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                            }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e85d2d] to-[#f4a574] flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                            </svg>
                        </div>
                    </a>

                    {/* CENTER: Navigation Pill - Transforms into Search Bar */}
                    <nav
                        id="navbar-pill-desktop"
                        className={`absolute left-1/2 -translate-x-1/2 pointer-events-auto flex items-center ${isSearchExpanded ? 'gap-2 w-[500px] justify-between' : 'gap-1'} rounded-full backdrop-blur-md border border-gray-200/40 shadow-sm transition-all duration-300 py-2 px-4`}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.7)'
                        }}
                    >
                        {isSearchExpanded ? (
                            /* ===== SEARCH MODE (IN-PILL) ===== */
                            <>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Search Website..."
                                    className="flex-1 bg-transparent !bg-transparent !border-none !outline-none !shadow-none !ring-0 text-gray-700 placeholder-gray-400 text-sm font-medium w-full h-[20px] leading-[20px] p-0 m-0 translate-y-[1px] self-center"
                                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                                    onBlur={() => { /* Optional: close on blur or keep open */ }}
                                />
                                <button
                                    onClick={toggleSearch}
                                    className="flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 transition-colors !bg-transparent hover:!bg-gray-100/50"
                                    type="button"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            /* ===== MENU MODE (STANDARD) ===== */
                            <>
                                {/* INTERNAL LOGO - Appears on scroll */}
                                <a
                                    href="/"
                                    className={`flex items-center transition-all duration-300 overflow-hidden ${isScrolled ? 'w-8 opacity-100 mr-1' : 'w-0 opacity-0 mr-0'
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#e85d2d] to-[#f4a574] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                        </svg>
                                    </div>
                                </a>

                                {/* NAV ITEMS */}
                                {[
                                    'What We Do',
                                    'Industries We Serve',
                                    'Company',
                                    'Blog',
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap"
                                    >
                                        {item}
                                    </a>
                                ))}

                                {/* SEARCH ICON - Minimal Design */}
                                <button
                                    onClick={toggleSearch}
                                    className="flex items-center justify-center p-1 bg-transparent hover:bg-transparent text-[#D1D5DB] hover:text-gray-500 transition-colors border-none outline-none shadow-none"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>

                                {/* INTERNAL CONTACT - Appears on scroll */}
                                <a
                                    href="#contact"
                                    className={`flex items-center gap-1.5 bg-[#e85d2d] hover:bg-[#d14d1f] text-white rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${isScrolled ? 'px-4 py-2 opacity-100 ml-1' : 'w-0 px-0 py-2 opacity-0 ml-0'
                                        }`}
                                >
                                    <span className="whitespace-nowrap">Contact Us</span>
                                </a>
                            </>
                        )}
                    </nav>

                    {/* RIGHT: Contact Button + Theme Toggle - Moved inward */}
                    <div className={`pointer-events-auto flex items-center gap-3 transition-all duration-300 mr-16 ${isScrolled && !isSearchExpanded ? 'opacity-0 translate-x-4' :
                        !isSearchExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                        }`}>
                        {/* Contact Us Button */}
                        <a
                            href="#contact"
                            id="external-contact"
                            className="flex items-center bg-[#e85d2d] hover:bg-[#d14d1f] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </header>

            {/* ===== MOBILE NAVBAR ===== */}
            <header
                className="flex md:hidden fixed top-0 left-0 w-full z-40 pointer-events-none"
                style={{ background: 'transparent', boxShadow: 'none' }}
            >
                <div className="w-full flex items-center justify-center py-3 px-4">
                    <nav
                        id="navbar-pill-mobile"
                        className="pointer-events-auto flex items-center gap-2 rounded-full backdrop-blur-md border border-gray-200/40 shadow-sm"
                        style={{
                            padding: '6px 10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)'
                        }}
                    >
                        {/* Mobile Logo */}
                        <a href="/" className="flex items-center">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#e85d2d] to-[#f4a574] flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                </svg>
                            </div>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full bg-[#e85d2d] text-white text-xs font-medium"
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

                        {/* Mobile Search - Gray button to match design */}
                        {/* Mobile Search - Minimal Design */}
                        <button
                            onClick={toggleSearch}
                            className="flex items-center justify-center p-1 bg-transparent hover:bg-transparent text-[#D1D5DB] hover:text-gray-500 transition-colors border-none outline-none shadow-none"
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Mobile Contact */}
                        <a
                            href="#contact"
                            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full bg-[#e85d2d] text-white text-xs font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <span>Contact</span>
                        </a>


                    </nav>
                </div>
            </header>

            {/* SearchBar Overlay Removed - Integrated into Pill */}
        </>
    )
}

export default NavbarPill
