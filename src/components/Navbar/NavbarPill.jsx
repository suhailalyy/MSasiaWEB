import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NAV_MENU_DATA } from './NavbarData';
import MegaMenu from './MegaMenu';
import './MegaMenu.css';

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
    // Mega Menu State
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileActiveL1, setMobileActiveL1] = useState(null); // Isolated Mobile L1 State
    const [activeSubMenu, setActiveSubMenu] = useState(null); // Level 2 Accordion State
    const [isInternalHovered, setIsInternalHovered] = useState(false);
    const [isExternalHovered, setIsExternalHovered] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [menuLeft, setMenuLeft] = useState(0);
    const closeTimeoutRef = useRef(null);

    // Smooth Scroll to Top for Logo
    const handleHomeClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Close mobile menu if it's open
        if (isMobileMenuOpen) toggleMobileMenu();
    };

    const handleMenuEnter = (e, menuName) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        if (e && e.currentTarget) {
            const rect = e.currentTarget.getBoundingClientRect();
            setMenuLeft(rect.left + rect.width / 2);
        }
        setActiveMenu(menuName);
        setActiveCategory(0);
    };

    const handleMenuLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
            setActiveCategory(null);
        }, 150);
    };

    const dropdownItems = ['What We Do', 'Industries We Serve', 'Company'];

    return (
        <>
            {/* ===== DESKTOP NAVBAR ===== */}
            <header className="hidden md:block fixed top-5 left-0 w-full z-[1000000] [&_*]:!border-0 [&_*]:!shadow-none [&_*]:!outline-none [&_*]:!ring-0">

                {/* Inner Div */}
                <div className="w-full relative flex items-center justify-between px-4 md:px-6 h-[56px] md:h-[64px] lg:h-[80px]">

                    {/* LEFT: External Logo */}
                    <a
                        href="/"
                        id="external-logo"
                        className={`flex items-center self-center transition-all duration-300 ${isScrolled && !isSearchExpanded
                            ? 'opacity-0 -translate-x-4 pointer-events-none'
                            : !isSearchExpanded
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-4 pointer-events-none'
                            }`}
                    >
                        {/* Logo Scales on Large Screens (lg:w-12) */}
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center flex-shrink-0 shadow-sm -mt-[16px]">
                            <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                            </svg>
                        </div>
                    </a>

                    {/* CENTER: Navigation Pill */}
                    <nav
                        id="navbar-pill-desktop"
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center rounded-full h-[56px] md:h-[60px] lg:h-[72px] transition-all duration-500 ease-in-out ${isSearchExpanded
                            ? 'w-[400px] md:w-[500px] lg:w-[650px] p-2 lg:p-3 justify-between'
                            : 'w-auto px-2 md:px-3 lg:px-6 gap-0.5 md:gap-1 lg:gap-2'
                            }`}
                        style={{
                            background: isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                            backdropFilter: isScrolled ? 'blur(30px) saturate(200%) contrast(1.1)' : 'none',
                            WebkitBackdropFilter: isScrolled ? 'blur(30px) saturate(200%) contrast(1.1)' : 'none',
                            border: 'none',
                            outline: 'none',
                            boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.02)' : 'none'
                        }}
                    >
                        {!isSearchExpanded ? (
                            <>
                                {/* Internal Logo on scroll */}
                                <a
                                    href="/"
                                    className={`flex items-center transition-all duration-300 overflow-hidden ${isScrolled ? 'w-7 md:w-8 lg:w-9 opacity-100 mr-1 md:mr-2' : 'w-0 opacity-0 mr-0'
                                        }`}
                                >
                                    <div className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-lg bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                        </svg>
                                    </div>
                                </a>

                                {/* NAV ITEMS */}
                                {['What We Do', 'Industries We Serve', 'Company', 'Blog'].map((item) => {
                                    const hasDropdown = dropdownItems.includes(item);
                                    const isActive = activeMenu === item;

                                    return (
                                        <a
                                            key={item}
                                            href={hasDropdown ? '#' : '/blog'}
                                            className={`flex items-center gap-0.5 md:gap-1 p-[8px] text-xs md:text-sm lg:text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap no-underline hover:no-underline bg-transparent hover:bg-transparent ${isActive
                                                ? '!text-[#799851]'
                                                : 'text-black hover:text-[#799851]'
                                                }`}
                                            onMouseEnter={(e) => hasDropdown && handleMenuEnter(e, item)}
                                            onMouseLeave={handleMenuLeave}
                                            onClick={(e) => hasDropdown && e.preventDefault()}
                                        >
                                            {item}
                                            {hasDropdown && (
                                                <svg
                                                    className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </a>
                                    );
                                })}

                                {/* SEARCH TRIGGER ICON */}
                                <button
                                    onClick={toggleSearch}
                                    className="p-1 text-gray-500 hover:text-gray-800 transition-colors outline-none !bg-transparent !border-none !shadow-none hover:!bg-transparent"
                                    style={{ transform: 'none' }}
                                    aria-label="Open Search"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'none' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>

                                {/* Internal Contact (Visible on Scroll) */}
                                <a
                                    href="#contact"
                                    onMouseEnter={() => setIsInternalHovered(true)}
                                    onMouseLeave={() => setIsInternalHovered(false)}
                                    style={{
                                        backgroundColor: isInternalHovered ? '#ffffff' : '#47622A',
                                        color: isInternalHovered ? '#47622A' : '#ffffff',
                                        borderColor: isInternalHovered ? '#47622A' : 'transparent'
                                    }}
                                    className={`flex items-center justify-center gap-1 md:gap-1.5 border hover:border-[#47622A] rounded-full text-xs md:text-sm lg:text-base font-medium transition-all duration-300 overflow-hidden no-underline hover:no-underline box-border ${isScrolled ? 'px-3 md:px-4 lg:px-6 h-8 md:h-9 lg:h-11 w-auto opacity-100 ml-0' : 'w-0 px-0 h-8 md:h-9 lg:h-11 opacity-0 ml-0 overflow-hidden'
                                        }`}
                                >
                                    <span className="whitespace-nowrap" style={{ color: isInternalHovered ? '#47622A' : '#ffffff' }}>Contact Us</span>
                                </a>
                            </>
                        ) : (
                            /* === IN-PLACE SEARCH UI === */
                            <div className="w-full flex items-center justify-between h-full animate-fadeIn">
                                {/* LEFT: Search Icon */}
                                <div className="flex h-10 w-10 lg:h-12 lg:w-12 flex-none items-center justify-center rounded-full bg-transparent text-gray-500 ml-1">
                                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                {/* MIDDLE: Input Field */}
                                <div className="flex-1 h-full flex items-center justify-center">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full bg-transparent text-lg lg:text-xl text-left text-gray-700 outline-none border-none ring-0 focus:ring-0 placeholder:text-gray-400 mt-1 pt-1 mb-1 pb-0 pl-2"
                                        autoFocus
                                    />
                                </div>

                                {/* RIGHT: Close Button */}
                                <button
                                    onClick={toggleSearch}
                                    style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }}
                                    className="mr-2 !bg-transparent !shadow-none !border-none !outline-none text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </nav>

                    {/* RIGHT: External Contact Button & Theme Toggle */}
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-5">
                        {/* External Contact (Fades on Scroll) */}
                        <div className={`transition-all duration-300 -mt-1 ${isScrolled
                            ? 'opacity-0 translate-x-4 pointer-events-none'
                            : 'opacity-100 translate-x-0'
                            }`}>
                            <a
                                href="#contact"
                                id="external-contact"
                                onMouseEnter={() => setIsExternalHovered(true)}
                                onMouseLeave={() => setIsExternalHovered(false)}
                                style={{
                                    backgroundColor: isExternalHovered ? '#ffffff' : '#47622A',
                                    color: isExternalHovered ? '#47622A' : '#ffffff',
                                    borderColor: isExternalHovered ? '#47622A' : 'transparent'
                                }}
                                className="flex items-center justify-center border hover:border-[#47622A] rounded-full px-3 md:px-5 lg:px-7 h-8 md:h-9 lg:h-11 text-xs md:text-sm lg:text-base font-medium shadow-md transition-all no-underline hover:no-underline box-border"
                            >
                                <span style={{ color: isExternalHovered ? '#47622A' : '#ffffff' }}>Contact Us</span>
                            </a>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group p-0"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? (
                                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-500 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-200 group-hover:-rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* ===== DROPDOWN PORTAL (MEGA MENU) ===== */}
            {ReactDOM.createPortal(
                <MegaMenu
                    activeMenu={activeMenu}
                    isVisible={!!activeMenu}
                    onMouseEnter={() => {
                        if (closeTimeoutRef.current) {
                            clearTimeout(closeTimeoutRef.current);
                            closeTimeoutRef.current = null;
                        }
                    }}
                    onMouseLeave={handleMenuLeave}
                />,
                document.body
            )}

            {/* ===== MOBILE NAVBAR (UNCHANGED BUT RESPONSIVE) ===== */}
            <header
                className="flex md:hidden fixed top-0 left-0 w-full z-40 pointer-events-none transition-all duration-300"
                style={{ background: 'transparent', boxShadow: 'none' }}
            >
                <div className="w-full flex items-center justify-center py-2 sm:py-3 px-2 transition-all duration-300">
                    <nav
                        id="navbar-pill-mobile"
                        className="pointer-events-auto flex items-center justify-between gap-2 rounded-full backdrop-blur-xl transition-all duration-300"
                        style={{
                            width: '95%',
                            maxWidth: '440px',
                            minHeight: '62px',
                            padding: '10px',
                            backgroundColor: isMobileScrolled ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                            backdropFilter: isMobileScrolled ? 'blur(20px) saturate(180%)' : 'none',
                            boxShadow: 'none',
                            border: 'none',
                            outline: 'none'
                        }}
                    >
                        {!isSearchExpanded ? (
                            <>
                                <div className="flex items-center gap-3">
                                    {/* Mobile Menu Button - Text Version */}
                                    <button
                                        onClick={toggleMobileMenu}
                                        className="group flex items-center justify-center w-auto px-4 h-11 rounded-full bg-[#47622A] shadow-md border border-[#3e5524] active:scale-95 transition-all"
                                        aria-label="Toggle Menu"
                                    >
                                        <span className="text-white font-bold text-sm tracking-wide">
                                            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
                                        </span>
                                    </button>
                                </div>

                                {/* CENTER: Mobile Logo */}
                                <a
                                    href="/"
                                    onClick={handleHomeClick}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 transition-transform duration-300"
                                >
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center shadow-sm">
                                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                        </svg>
                                    </div>
                                </a>

                                {/* Mobile Contact - Right Aligned */}
                                <div className="flex items-center gap-2">
                                    <a
                                        href="#contact"
                                        className="flex items-center justify-center gap-1.5 px-5 h-11 rounded-full bg-[#47622A] text-white font-bold text-sm transition-transform active:scale-95 whitespace-nowrap shadow-md border border-[#3e5524]"
                                    >
                                        <span>Contact</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </>
                        ) : (
                            /* === MOBILE SEARCH UI === */
                            <div className="w-full flex items-center h-full animate-fadeIn px-[10px] bg-white/10 rounded-full">
                                <div className="flex-none flex items-center text-[#47622A]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 bg-transparent text-base text-gray-700 outline-none border-none ring-0 focus:ring-0 placeholder:text-gray-400 mx-[10px] h-full"
                                    autoFocus
                                />
                                <button
                                    onClick={toggleSearch}
                                    className="flex-none p-1 text-gray-400 hover:text-red-500 transition-colors !bg-transparent !border-none !shadow-none outline-none"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </nav>
                </div>
            </header>

            {/* ===== MOBILE MENU OVERLAY ===== */}
            {
                isMobileMenuOpen && ReactDOM.createPortal(
                    <div className="fixed inset-0 z-[99999] bg-white text-gray-900 overflow-y-auto animate-fadeIn"> {/* White BG */}
                        <div className="flex flex-col min-h-screen">
                            {/* Mobile Header (Inside Menu) */}
                            <div className="flex items-center justify-between p-[10px] border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50 overflow-hidden min-h-[64px]">
                                {!isSearchExpanded ? (
                                    <>
                                        {/* LEFT: Logo */}
                                        <a
                                            href="/"
                                            onClick={handleHomeClick}
                                            className="flex items-center gap-2 relative z-10 transition-all duration-300"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center shadow-sm">
                                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                                </svg>
                                            </div>
                                            <span className="font-bold text-lg tracking-tight text-[#111827] whitespace-nowrap">MS Asia</span>
                                        </a>

                                        {/* MIDDLE: Search Icon - Absolute Centered */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                            <button
                                                onClick={toggleSearch}
                                                className="p-2 text-gray-500 hover:text-[#47622A] active:scale-90 transition-all rounded-full hover:bg-gray-100/50 !bg-transparent !border-none !shadow-none outline-none"
                                                aria-label="Open Search"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* RIGHT: Close Button */}
                                        <div className="flex items-center relative z-10">
                                            <button
                                                onClick={toggleMobileMenu}
                                                className="flex items-center justify-center gap-1.5 px-3 h-9 rounded-full bg-white border border-gray-200 shadow-sm active:scale-95 transition-all hover:bg-gray-50"
                                                aria-label="Close Menu"
                                            >
                                                <span className="font-bold text-[10px] text-black tracking-wider">CLOSE</span>
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 18L18 6M6 6l12 12" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    /* === DRAWER SEARCH UI === */
                                    <div className="w-full h-full flex items-center animate-fadeIn px-[10px] absolute inset-0 bg-white/95 backdrop-blur-sm z-50">
                                        <div className="flex-none flex items-center justify-center p-[10px] text-[#47622A]">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search MS Asia..."
                                            className="flex-1 bg-transparent text-lg text-gray-800 outline-none border-none ring-0 focus:ring-0 placeholder:text-gray-400 mx-2 h-full"
                                            autoFocus
                                        />
                                        <button
                                            onClick={toggleSearch}
                                            className="flex-none p-[10px] text-gray-400 hover:text-red-500 transition-colors !bg-transparent !border-none !shadow-none outline-none flex items-center justify-center"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Content - 3-Level Nested Accordion Logic */}
                            <div className="flex-1 p-[10px] overflow-y-auto">
                                <div className="space-y-0">
                                    {['What We Do', 'Industries We Serve', 'Company', 'Blog'].map((item, idx) => {
                                        const menuData = NAV_MENU_DATA[item];
                                        // HARDCODED: Force Accordion mode for these specific items
                                        const isAccordion = item === 'What We Do' || item === 'Industries We Serve' || item === 'Company';
                                        const isLink = !isAccordion;
                                        const href = item === 'Blog' ? '/blog' : '#';
                                        const isL1Active = mobileActiveL1 === item; // Use Isolated State

                                        return (
                                            <div key={idx} className="border-b border-gray-100 last:border-0">
                                                {isLink ? (
                                                    // === LEVEL 1: DIRECT LINK ===
                                                    <a
                                                        href={href}
                                                        className="flex items-center justify-between py-[10px] group cursor-pointer"
                                                    >
                                                        <span className="text-lg font-bold text-gray-800 group-hover:text-[#47622A] transition-colors">
                                                            {item}
                                                        </span>
                                                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#47622A] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    // === LEVEL 1: ACCORDION PARENT ===
                                                    <div
                                                        className="py-0"
                                                        onMouseEnter={() => setMobileActiveL1(item)}
                                                    >
                                                        <div
                                                            className="flex items-center justify-between py-[10px] cursor-pointer group"
                                                            onClick={() => {
                                                                setMobileActiveL1(isL1Active ? null : item);
                                                            }}
                                                        >
                                                            <span className={`text-lg font-bold transition-colors ${isL1Active ? 'text-[#47622A]' : 'text-gray-800'}`}>
                                                                {item}
                                                            </span>
                                                            <div className={`transition-transform duration-300 ${isL1Active ? 'rotate-180' : ''}`}>
                                                                <svg className={`w-5 h-5 ${isL1Active ? 'text-[#47622A]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </div>
                                                        </div>

                                                        {/* LEVEL 2: CATEGORIES (Sub-Menu) */}
                                                        <div
                                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isL1Active ? 'max-h-[2000px] opacity-100 pb-[10px]' : 'max-h-0 opacity-0'}`}
                                                        >
                                                            <div className="space-y-1">
                                                                {(menuData?.columns || []).map((col, colIdx) => {
                                                                    const isL2Active = activeSubMenu === col.title; // Level 2 Expanded?

                                                                    return (
                                                                        <div
                                                                            key={colIdx}
                                                                            className="rounded-lg overflow-hidden"
                                                                            onMouseEnter={() => setActiveSubMenu(col.title)}
                                                                        >
                                                                            {/* Level 2 Header */}
                                                                            <div
                                                                                className={`flex items-center justify-between p-[10px] cursor-pointer transition-colors ${isL2Active ? 'bg-gray-100 text-[#47622A]' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                                                                                onClick={() => setActiveSubMenu(isL2Active ? null : col.title)}
                                                                            >
                                                                                <span className="text-base font-semibold">
                                                                                    {col.title}
                                                                                </span>
                                                                                {/* Clean Chevron Icon for Level 2 */}
                                                                                <div className={`transition-transform duration-300 ${isL2Active ? 'rotate-180' : ''}`}>
                                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                                                    </svg>
                                                                                </div>
                                                                            </div>

                                                                            {/* LEVEL 3: SERVICES (Items) */}
                                                                            <div
                                                                                className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${isL2Active ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                                                            >
                                                                                <ul className="space-y-0.5 list-none pl-[10px] m-0">
                                                                                    {col.items.map((subItem, sIdx) => (
                                                                                        <li key={sIdx} className="m-0 p-0">
                                                                                            <a href="#" className="block p-[10px] text-base font-medium text-gray-600 hover:text-[#47622A] hover:bg-gray-50 rounded-lg transition-colors">
                                                                                                {subItem.label || subItem}
                                                                                            </a>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Call to Action & Footer */}
                                <div className="mt-auto p-[10px]">
                                    <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400">
                                        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <a href="#" className="hover:text-gray-600">Terms of Service</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    );
}

export default NavbarPill;