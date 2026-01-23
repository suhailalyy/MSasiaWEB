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
    const [isInternalHovered, setIsInternalHovered] = useState(false);
    const [isExternalHovered, setIsExternalHovered] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [menuLeft, setMenuLeft] = useState(0);
    const closeTimeoutRef = useRef(null);

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
            <header className="hidden md:block fixed top-5 left-0 w-full z-[1000000]">
                {/* Responsive Padding & Height: px-4 -> sm:px-6 -> lg:px-8 */}
                <div className="w-full relative flex items-center justify-between px-4 md:px-6 h-[56px] md:h-[64px] lg:h-[80px]">

                    {/* LEFT: External Logo */}
                    <a
                        href="/"
                        id="external-logo"
                        className={`flex items-center self-center transition-all duration-300 ${isScrolled && !isSearchExpanded
                            ? 'opacity-0 -translate-x-4'
                            : !isSearchExpanded
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-4 pointer-events-none'
                            }`}
                    >
                        {/* Logo Scales on Large Screens (lg:w-12) */}
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center flex-shrink-0 shadow-sm -mt-3">
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
                            background: 'rgba(255, 255, 255, 0.15)', /* More transparent */
                            backdropFilter: 'blur(30px) saturate(200%) contrast(1.1)', /* Heavier blur & pop */
                            WebkitBackdropFilter: 'blur(30px) saturate(200%) contrast(1.1)',
                            border: '1px solid rgba(255, 255, 255, 0.5)', /* Crisper border */
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.3)'
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

                                {/* Vertical Divider */}
                                <div className="h-4 md:h-5 lg:h-6 w-[1px] md:w-[1.5px] bg-gray-300/50 mx-1 md:mx-2 lg:mx-4"></div>

                                {/* SEARCH TRIGGER ICON */}
                                <button
                                    onClick={toggleSearch}
                                    className="p-1 text-gray-500 hover:text-gray-800 transition-colors outline-none !bg-transparent !border-none !shadow-none hover:!bg-transparent"
                                    aria-label="Open Search"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
                className="flex md:hidden fixed top-0 left-0 w-full z-40 pointer-events-none"
                style={{ background: 'transparent', boxShadow: 'none' }}
            >
                <div className="w-full flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4">
                    <nav
                        id="navbar-pill-mobile"
                        className="pointer-events-auto flex items-center gap-2 rounded-full backdrop-blur-md"
                        style={{
                            padding: '6px 10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            boxShadow: '0 8px 30px rgb(0,0,0,0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
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
            {
                isMobileMenuOpen && ReactDOM.createPortal(
                    <div className="fixed inset-0 z-[99999] bg-[#0f141f] text-white overflow-y-auto animate-fadeIn">
                        <div className="flex flex-col min-h-screen">
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between p-4 sm:p-5 lg:p-6 border-b border-gray-800 bg-[#111827]">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#47622A] to-[#799851] flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.76 0 3.41-.46 4.84-1.26C14.08 19.2 12 16.79 12 14c0-3.31 2.69-6 6-6 .68 0 1.34.11 1.95.32C18.46 4.93 15.48 2 12 2z" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-base sm:text-lg lg:text-xl tracking-wide">MS Asia</span>
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
                            <div className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5 lg:space-y-6">
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
                                                    <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-300 group-hover:text-white transition-colors">
                                                        {item}
                                                    </span>
                                                </a>
                                            ) : (
                                                <div
                                                    className="flex items-center justify-between group cursor-pointer"
                                                    onClick={() => setActiveMenu(activeMenu === item ? null : item)}
                                                >
                                                    <span className={`text-base sm:text-lg lg:text-xl font-medium transition-colors ${activeMenu === item ? 'text-[#47622A]' : 'text-gray-300 group-hover:text-white'}`}>
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
                                                <div className="mt-3 sm:mt-4 pl-3 sm:pl-4 lg:pl-5 space-y-4 sm:space-y-5 lg:space-y-6 animate-fadeIn">
                                                    {menuData.columns.map((col, colIdx) => (
                                                        <div key={colIdx}>
                                                            <h4 className="text-xs sm:text-sm lg:text-base font-bold text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#47622A]"></span>
                                                                {col.title}
                                                            </h4>
                                                            <ul className="space-y-2 sm:space-y-3 border-l border-gray-800 ml-0.5 pl-3 sm:pl-4">
                                                                {col.items.map((subItem, sIdx) => (
                                                                    <li key={sIdx}>
                                                                        <a href="#" className="block text-gray-400 hover:text-white text-sm sm:text-[15px] lg:text-base py-0.5">
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
                                <div className="pt-4 sm:pt-5 lg:pt-6 space-y-3 sm:space-y-4">
                                    <a href="#contact" className="flex items-center justify-center w-full py-2.5 sm:py-3 lg:py-4 bg-[#47622A] text-white rounded-xl text-sm sm:text-base lg:text-lg font-bold hover:bg-[#374426] transition-colors">
                                        Contact Us
                                    </a>
                                    <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm">
                                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                        <span>•</span>
                                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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