import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NAV_MENU_DATA } from './NavbarData';
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
    const [activeCategory, setActiveCategory] = useState(null);
    const [menuLeft, setMenuLeft] = useState(0); // Dynamic center position
    const closeTimeoutRef = useRef(null);

    const handleMenuEnter = (e, menuName) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }

        // Calculate center of the triggered element
        if (e && e.currentTarget) {
            const rect = e.currentTarget.getBoundingClientRect();
            setMenuLeft(rect.left + rect.width / 2);
        }

        setActiveMenu(menuName);
        setActiveCategory(null);
    };

    const handleMenuLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
            setActiveCategory(null);
        }, 150);
    };

    const handleCategoryEnter = (index) => {
        setActiveCategory(index);
    };

    const handleDropdownEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    // Nav items configuration
    const dropdownItems = ['What We Do', 'Industries We Serve', 'Company'];

    // Get current menu data
    const currentMenuData = activeMenu ? NAV_MENU_DATA[activeMenu] : null;
    const isCompanyMenu = activeMenu === 'Company';



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
            <header className="hidden md:block fixed top-5 left-0 w-full z-40">
                <div className="w-full relative flex items-center justify-between py-2 px-8">

                    {/* LEFT: External Logo */}
                    <a
                        href="/"
                        id="external-logo"
                        className={`flex items-center transition-all duration-300 -translate-y-0.5 ${isScrolled && !isSearchExpanded
                            ? 'opacity-0 -translate-x-4'
                            : !isSearchExpanded
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-4 pointer-events-none'
                            }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e85d2d] to-[#f4a574] flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                            </svg>
                        </div>
                    </a>

                    {/* CENTER: Navigation Pill */}
                    <nav
                        id="navbar-pill-desktop"
                        className={`absolute left-1/2 -translate-x-1/2 flex items-center ${isSearchExpanded ? 'gap-2 w-[600px] justify-between pl-3 pr-2' : 'gap-1'
                            } rounded-full backdrop-blur-md border border-gray-200/40 shadow-sm transition-all duration-300 py-2 px-4`}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)'
                        }}
                    >
                        {isSearchExpanded ? (
                            /* ===== SEARCH MODE ===== */
                            <>
                                <div className="flex items-center justify-center h-full pl-2">
                                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Search Website..."
                                    className="flex-1 bg-transparent !border-none !outline-none !shadow-none !ring-0 text-gray-700 placeholder-gray-400 text-base font-medium w-full mx-3"
                                    style={{ border: 'none', outline: 'none', boxShadow: 'none', padding: 0, lineHeight: 'normal' }}
                                />
                                <button
                                    onClick={toggleSearch}
                                    className="flex-shrink-0 w-8 h-8 min-w-[32px] min-h-[32px] flex items-center justify-center rounded-full bg-[#47622A] text-white hover:bg-[#374426] transition-all duration-200 shadow-md transform hover:scale-105"
                                    type="button"
                                    aria-label="Close search"
                                >
                                    <svg className="w-4 h-4 block" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: 'block' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            /* ===== MENU MODE ===== */
                            <>
                                {/* Internal Logo on scroll */}
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

                                {/* NAV ITEMS - No dropdown inside, just triggers */}
                                {['What We Do', 'Industries We Serve', 'Company', 'Blog'].map((item) => {
                                    const hasDropdown = dropdownItems.includes(item);
                                    const isActive = activeMenu === item;

                                    return (
                                        <a
                                            key={item}
                                            href={hasDropdown ? '#' : '/blog'}
                                            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${isActive
                                                ? 'text-[#e85d2d] bg-orange-50'
                                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                                }`}
                                            onMouseEnter={(e) => hasDropdown && handleMenuEnter(e, item)}
                                            onMouseLeave={handleMenuLeave}
                                            onClick={(e) => hasDropdown && e.preventDefault()}
                                        >
                                            {item}
                                            {hasDropdown && (
                                                <svg
                                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </a>
                                    );
                                })}

                                {/* Search Icon */}
                                <button
                                    onClick={toggleSearch}
                                    className="flex items-center justify-center p-1 bg-transparent hover:bg-transparent text-gray-400 hover:text-gray-600 transition-colors border-none outline-none shadow-none"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>

                                {/* Internal Contact on scroll */}
                                <a
                                    href="#contact"
                                    className={`flex items-center gap-1.5 bg-[#e85d2d] hover:bg-[#d14d1f] text-white rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${isScrolled ? 'px-4 py-2 opacity-100 ml-1' : 'w-0 px-0 py-2 opacity-0 ml-0'
                                        }`}
                                >
                                    <span className="whitespace-nowrap">Contact Us</span>
                                </a>
                            </>
                        )}
                    </nav>

                    {/* RIGHT: External Contact Button */}
                    <div className={`flex items-center gap-3 transition-all duration-300 mr-16 ${isScrolled && !isSearchExpanded
                        ? 'opacity-0 translate-x-4'
                        : !isSearchExpanded
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-4 pointer-events-none'
                        }`}>
                        <a
                            href="#contact"
                            id="external-contact"
                            className="flex items-center bg-[#e85d2d] hover:bg-[#d14d1f] text-white rounded-full px-5 py-2.5 text-sm font-medium shadow-md transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </header>

            {/* ===== DROPDOWN PORTAL - Rendered at body level ===== */}
            {activeMenu && currentMenuData && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 pointer-events-none z-[999999]"
                >
                    {/* INJECTED STYLE FIX FOR DARK MODE */}
                    <style>{`
                        .force-dark-text { color: #111827 !important; }
                        .force-dark-text:hover { color: #e85d2d !important; }
                    `}</style>

                    {/* Wrapper - DYNAMICALLY CENTERED RELATIVE TO HEADING */}
                    <div
                        className={`absolute top-[84px] pt-2 pointer-events-auto inline-block`}
                        style={{
                            left: `${menuLeft}px`,
                            transform: 'translateX(-50%)'
                        }}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleMenuLeave}
                    >

                        {/* MAIN CARD (Company or Categories) */}
                        <div className={`bg-white rounded-xl shadow-2xl border-t-4 border-[#e85d2d] animate-dropdown-vertical overflow-hidden relative z-30 ${isCompanyMenu ? 'min-w-[200px]' : 'min-w-[200px] max-w-[400px]'}`}>
                            {isCompanyMenu ? (
                                /* ===== SIMPLE COMPANY DROPDOWN ===== */
                                <div className="p-5">
                                    <ul className="space-y-4 list-none m-0 p-0">
                                        {currentMenuData.columns[0].items.map((subItem, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href="#"
                                                    className="block text-sm force-dark-text transition-colors duration-200"
                                                >
                                                    {subItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                /* ===== LEFT SIDEBAR - Categories ===== */
                                <div className="bg-gray-50 py-4">
                                    {currentMenuData.columns.map((column, colIdx) => (
                                        <div
                                            key={colIdx}
                                            className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-200 whitespace-nowrap ${activeCategory === colIdx
                                                ? 'bg-[#e85d2d]'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-200'
                                                }`}
                                            onMouseEnter={() => handleCategoryEnter(colIdx)}
                                        >
                                            <span
                                                className="text-sm font-medium pr-8"
                                                style={{ color: activeCategory === colIdx ? '#ffffff' : '#111827' }}
                                            >
                                                {column.title}
                                            </span>
                                            <svg
                                                className={`w-4 h-4 ${activeCategory === colIdx ? 'text-white' : 'text-gray-400'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* SUB-MENU CARD (Right Panel) - Separate Floating Card POSITONED ABSOLUTE */}
                        {!isCompanyMenu && activeCategory !== null && currentMenuData.columns[activeCategory] && (
                            <div className="absolute top-2 left-full ml-1 min-w-[150px] whitespace-nowrap bg-white rounded-xl shadow-2xl border-t-4 border-[#e85d2d] animate-fadeIn overflow-hidden z-20">
                                <div className="p-5">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 hidden">
                                        {currentMenuData.columns[activeCategory].title}
                                    </h4>
                                    <ul className="space-y-3 list-none m-0 p-0">
                                        {currentMenuData.columns[activeCategory].items.map((subItem, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href="#"
                                                    className="block text-sm force-dark-text transition-colors duration-200"
                                                >
                                                    {subItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}

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

                        {/* Mobile Search */}
                        <button
                            onClick={toggleSearch}
                            className="flex items-center justify-center p-1 bg-transparent text-gray-400 hover:text-gray-500 transition-colors border-none outline-none shadow-none"
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
        </>
    );
}

export default NavbarPill;
