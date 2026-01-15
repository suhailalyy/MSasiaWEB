import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
        setActiveCategory(0);
    };

    const handleMenuLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
            setActiveCategory(null);
        }, 150);
    };

    const handleCategoryEnter = (index) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
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
                className="fixed top-6 right-5 z-[1000001] p-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
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
            <header className="hidden md:block fixed top-5 left-0 w-full z-[1000000]">
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
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                            </svg>
                        </div>
                    </a>

                    {/* CENTER: Navigation Pill */}
                    <nav
                        id="navbar-pill-desktop"
                        className={`absolute left-1/2 -translate-x-1/2 flex items-center ${isSearchExpanded ? 'gap-2 w-[600px] justify-between pl-3 pr-2' : 'gap-1'
                            } rounded-full backdrop-blur-xl border border-white/20 shadow-sm transition-all duration-300 h-[72px] px-4`}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4)'
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
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center flex-shrink-0">
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
                                            className={`flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap no-underline hover:no-underline bg-transparent hover:bg-transparent ${isActive
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
                                    className={`flex items-center gap-1.5 bg-[#47622A] hover:bg-[#374426] text-white rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${isScrolled ? 'px-4 py-2 opacity-100 ml-1' : 'w-0 px-0 py-2 opacity-0 ml-0'
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
                            className="flex items-center bg-[#47622A] hover:bg-[#374426] text-white rounded-full px-5 py-2.5 text-sm font-medium shadow-md transition-all"
                        >
                            Contact Us
                        </a>
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
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                </svg>
                            </div>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full bg-[#47622A] text-white text-xs font-medium"
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
                            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full bg-[#47622A] text-white text-xs font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <span>Contact</span>
                        </a>
                    </nav>
                </div>
            </header>
            {/* ===== MOBILE MENU OVERLAY ===== */}
            {isMobileMenuOpen && ReactDOM.createPortal(
                <div className="fixed inset-0 z-[99999] bg-[#0f141f] text-white overflow-y-auto animate-fadeIn">
                    <div className="flex flex-col min-h-screen">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-[#111827]">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                    </svg>
                                </div>
                                <span className="font-bold text-lg tracking-wide">MS Asia</span>
                            </div>
                            <button
                                onClick={toggleMobileMenu}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Content */}
                        <div className="flex-1 p-5 space-y-6">
                            {['What We Do', 'Industries We Serve', 'Company', 'Blog'].map((item, idx) => {
                                const menuData = NAV_MENU_DATA[item];
                                const isLink = !menuData;
                                const href = item === 'Blog' ? '/blog' : '#';

                                return (
                                    <div key={idx} className="border-b border-gray-800 pb-4 last:border-0">
                                        {isLink ? (
                                            <a
                                                href={href}
                                                className="flex items-center justify-between group cursor-pointer"
                                            >
                                                <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                                                    {item}
                                                </span>
                                            </a>
                                        ) : (
                                            <div
                                                className="flex items-center justify-between group cursor-pointer"
                                                onClick={() => setActiveMenu(activeMenu === item ? null : item)}
                                            >
                                                <span className={`text-lg font-medium transition-colors ${activeMenu === item ? 'text-[#47622A]' : 'text-gray-300 group-hover:text-white'}`}>
                                                    {item}
                                                </span>
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-300 text-gray-500 ${activeMenu === item ? 'rotate-180 text-[#47622A]' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        )}

                                        {/* Mobile Submenu Accordion */}
                                        {menuData && activeMenu === item && (
                                            <div className="mt-4 pl-4 space-y-6 animate-fadeIn">
                                                {menuData.columns.map((col, colIdx) => (
                                                    <div key={colIdx}>
                                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#47622A]"></span>
                                                            {col.title}
                                                        </h4>
                                                        <ul className="space-y-3 border-l border-gray-800 ml-0.5 pl-4">
                                                            {col.items.map((subItem, sIdx) => (
                                                                <li key={sIdx}>
                                                                    <a href="#" className="block text-gray-400 hover:text-white text-[15px] py-0.5">
                                                                        {subItem}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Mobile Actions */}
                            <div className="pt-6 space-y-4">
                                <a href="#contact" className="flex items-center justify-center w-full py-3 bg-[#47622A] text-white rounded-xl font-bold hover:bg-[#374426] transition-colors">
                                    Contact Us
                                </a>
                                <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                    <span>•</span>
                                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}

export default NavbarPill;
