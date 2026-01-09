import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_MENU_DATA } from './NavbarData';
import './MegaMenu.css';

// Content content map for Mega Menu Interactivity
const CATEGORY_CONTENT_MAP = {
    'Electronics': {
        title: 'ELECTRONICS',
        heading: 'E-Waste & IT Asset Disposal',
        description: 'Secure, compliant disposal of electronic waste, IT equipment, and data-bearing devices with certified destruction and recycling.',
        services: ['Corporate IT Scrap Disposal', 'E-Waste Recycling', 'HPLC Solvent Waste Collection', 'Motor & Transformer Scrap', 'Wire & Cable Scrap'],
        buttonText: 'Explore Electronics'
    },
    'Industrial & Construction': {
        title: 'INDUSTRIAL & CONSTRUCTION',
        heading: 'Heavy Industry Waste Solutions',
        description: 'Comprehensive waste management for construction sites, manufacturing plants, and industrial facilities.',
        services: ['Battery Scrap Collection', 'Chemical Packing', 'Construction & Demolition Scrap', 'HVAC Scrap Recovery'],
        buttonText: 'Explore Industrial'
    },
    'Metals': {
        title: 'METALS',
        heading: 'Metal Scrap Recycling',
        description: 'Efficient processing and recycling of ferrous and non-ferrous metals with maximum recovery value.',
        services: ['Aluminium Scrap Recy...', 'Brass & Bronze Scrap', 'Ferrous Metal Scrap', 'Heavy Equipment Scrap', 'Industrial Machinery'],
        buttonText: 'Explore Metals'
    },
    'Recyclables': {
        title: 'RECYCLABLES',
        heading: 'Sustainable Recycling Services',
        description: 'Discover our comprehensive solutions for recyclables. We ensure compliant, sustainable, and efficient handling.',
        services: ['Glass Waste Recycling', 'Paper & Cardboard Recy...', 'Plastic Scrap Processing', 'Rubber & Tyre Scrap'],
        buttonText: 'Explore Recyclables'
    },
    'Special Waste Services': {
        title: 'SPECIAL WASTE SERVICES',
        heading: 'Hazardous & Medical Waste Management',
        description: 'Safe handling and disposal of regulated, hazardous, and medical waste with full compliance.',
        services: ['Biohazardous Medical W...', 'Pharmaceutical Waste', 'Regulated Medical Waste', 'Sharps Disposal'],
        buttonText: 'Explore Special Services'
    },
    'Healthcare': {
        title: 'HEALTHCARE',
        heading: 'Medical Waste Solutions',
        description: 'Specialized waste management for hospitals, clinics, and healthcare facilities ensuring safety and compliance.',
        services: ['Hospitals & Health Systems', 'Clinics & Urgent Care', 'Dental Clinics', 'Veterinary Clinics'],
        buttonText: 'Explore Healthcare'
    },
    'Pharmacy, Labs & Research': {
        title: 'PHARMACY & LABS',
        heading: 'Pharmaceutical Disposal',
        description: 'Expert disposal services for pharmacies, laboratories, and research centers dealing with effectively managing waste.',
        services: ['Retail Pharmacies', 'Compounding Pharmacies', 'Research Labs', 'Blood Banks'],
        buttonText: 'Explore Pharma'
    },
    'Other Industries': {
        title: 'OTHER INDUSTRIES',
        heading: 'Commercial Waste Services',
        description: 'Tailored waste management solutions for educational institutions, government bodies, and manufacturing sectors.',
        services: ['Education Institutions', 'Government & Military', 'General Manufacturing', 'Utilities & Energy'],
        buttonText: 'Explore Industries'
    }
};




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

                    {/* BACKDROP BLUR */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Wrapper - FULL WIDTH FIXED */}
                    <div
                        className={`fixed top-[84px] left-0 w-full pt-2 pointer-events-auto z-[999999]`}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleMenuLeave}
                    >

                        {/* HACKTHEBOX STYLE DARK MEGA MENU - TRUE FULL WIDTH BACKGROUND, PROPERLY CONSTRAINED CONTENT */}
                        <div className="bg-[#1A1A1A] w-full border-t-2 border-[#47622A] shadow-2xl flex justify-center relative z-50">
                            <div className="w-full max-w-[1280px] flex flex-row min-h-[500px] bg-[#1A1A1A] overflow-hidden">
                                {isCompanyMenu ? (
                                    /* ===== COMPANY DROPDOWN (Dark Simple) ===== */
                                    /* ===== COMPANY DROPDOWN (Dark Simple) ===== */
                                    <div className="w-full bg-[#1A1A1A] flex flex-col">
                                        <div className="flex-1 flex flex-row">
                                            {currentMenuData.columns.map((column, colIdx) => (
                                                <div key={colIdx} className="flex-1 flex flex-col">
                                                    <div className="px-5 py-3 bg-[#1A1A1A] flex flex-col gap-1">
                                                        <p className="text-[13px] font-bold text-[#47622A] uppercase tracking-widest leading-none !m-0">{column.title}</p>
                                                        <p className="text-[13px] text-gray-400 !m-0 leading-tight">{column.description}</p>
                                                    </div>
                                                    <ul className="flex flex-col m-0 p-0 w-full bg-[#1A1A1A] list-none">
                                                        {column.items.map((subItem, idx) => (
                                                            <li key={idx} className="w-full">
                                                                <a
                                                                    href="#"
                                                                    className="group flex items-center justify-between text-[14px] font-medium text-gray-300 hover:text-white hover:bg-[#47622A]/20 px-5 py-2 w-full transition-all duration-200 last:border-none uppercase tracking-wide"
                                                                >
                                                                    <span>{subItem}</span>
                                                                    <svg className="w-4 h-4 text-[#47622A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    /* ===== 3-PANEL LAYOUT (Categories | Items | Promo) ===== */
                                    <>
                                        {/* PANEL 1: CATEGORIES (Left - Fixed %) */}
                                        <div className="w-[25%] min-w-[280px] bg-[#1A1A1A] flex flex-col">
                                            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                                                {currentMenuData.columns.map((column, colIdx) => (
                                                    <div
                                                        key={colIdx}
                                                        onMouseEnter={() => handleCategoryEnter(colIdx)}
                                                        className={`w-full px-6 py-2 cursor-pointer flex items-center justify-between transition-all duration-200 group last:border-none ${activeCategory === colIdx
                                                            ? 'bg-[#47622A] text-white'
                                                            : 'text-gray-400 hover:text-white hover:bg-[#47622A]/10'
                                                            }`}
                                                    >
                                                        <span className={`text-[15px] font-medium transition-transform duration-300 ${activeCategory === colIdx ? 'translate-x-2' : ''}`}>{column.title}</span>
                                                        {activeCategory === colIdx && (
                                                            <motion.div
                                                                layoutId="active-indicator"
                                                                className="w-1 absolute left-0 h-full bg-white"
                                                                transition={{ duration: 0.3 }}
                                                            />
                                                        )}

                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* PANEL 2: ITEMS (Middle - Flexible) */}
                                        {/* PANEL 2: ITEMS (Middle - Flexible) */}
                                        <div className="flex-1 bg-[#1A1A1A] flex flex-col">
                                            {activeCategory !== null && currentMenuData.columns[activeCategory] && (
                                                <motion.div
                                                    key={activeCategory}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                    className="h-full flex flex-col"
                                                >
                                                    <div className="px-4 py-3 flex items-center justify-between bg-[#1A1A1A]">
                                                        <h3 className="text-[20px] font-bold text-white flex items-center gap-3 m-0 leading-none">
                                                            {currentMenuData.columns[activeCategory].title}
                                                        </h3>
                                                        <a
                                                            href="#"
                                                            className="text-[11px] font-bold text-[#47622A] hover:text-white uppercase tracking-wider transition-colors"
                                                        >
                                                            View All →
                                                        </a>
                                                    </div>

                                                    <ul className="grid grid-cols-2 w-full m-0 p-0 flex-1 content-start bg-[#1A1A1A] list-none">
                                                        {currentMenuData.columns[activeCategory].items.map((subItem, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: idx * 0.02 }}
                                                                className=""
                                                            >
                                                                <a
                                                                    href="#"
                                                                    className="block w-full h-full px-5 py-2 text-[14px] text-gray-400 hover:text-white hover:bg-[#47622A]/10 transition-colors duration-200"
                                                                >
                                                                    {subItem}
                                                                </a>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </div>


                                        {/* PANEL 3: DYNAMIC INTERACTIVE (Right - Fixed %) */}
                                        <div className="w-[30%] min-w-[320px] bg-[#1d2633] relative overflow-hidden group">
                                            <AnimatePresence mode="wait">
                                                {activeCategory !== null ? (
                                                    <motion.div
                                                        key={activeCategory}
                                                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                                        exit={{ opacity: 0, filter: 'blur(5px)' }}
                                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                                        className="absolute inset-0 flex flex-col h-full"
                                                    >
                                                        <div className="p-8 flex flex-col h-full relative z-10">
                                                            <h4 className="text-white text-xl font-bold mb-0 pb-2 leading-tight m-0">
                                                                {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.heading || 'Explore Services'}
                                                            </h4>
                                                            <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-4 m-0 py-3">
                                                                {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.description}
                                                            </p>

                                                            {/* Compact Service List */}
                                                            <ul className="flex flex-col !m-0 !p-0 !mt-0 flex-1 w-full list-none">
                                                                {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.services.map((service, i) => (
                                                                    <motion.li
                                                                        key={i}
                                                                        initial={{ opacity: 0, x: 20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                                                        className="flex items-center gap-1.5 text-[13px] text-gray-400 !m-0 !mb-0 py-1.5 last:border-none"
                                                                    >

                                                                        <span className="truncate">{service}</span>
                                                                    </motion.li>
                                                                ))}
                                                            </ul>

                                                            {/* Bottom Button */}
                                                            <div className="mt-0 pt-6">
                                                                <a href="#" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider hover:text-[#47622A] transition-colors">
                                                                    {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.buttonText}
                                                                    <span>→</span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        {/* Background Glow */}
                                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#47622A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                                                    </motion.div>
                                                ) : (
                                                    /* Default State */
                                                    <motion.div
                                                        key="default"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="absolute inset-0 p-8 flex flex-col justify-end h-full"
                                                    >
                                                        <div className="relative z-10">
                                                            <div className="w-14 h-14 bg-[#47622A] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-[#47622A]/20">
                                                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-white text-2xl font-bold mb-3 m-0">Partner with MS Asia</h4>
                                                            <p className="text-gray-400 text-[14px] leading-relaxed max-w-[300px] m-0">
                                                                Discover comprehensive waste management solutions tailored for your industry.
                                                            </p>
                                                        </div>
                                                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e85d2d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
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
            {/* ===== MOBILE MENU OVERLAY ===== */}
            {isMobileMenuOpen && ReactDOM.createPortal(
                <div className="fixed inset-0 z-[99999] bg-[#0f141f] text-white overflow-y-auto animate-fadeIn">
                    <div className="flex flex-col min-h-screen">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-[#111827]">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#e85d2d] to-[#f4a574] flex items-center justify-center">
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
                                                <span className={`text-lg font-medium transition-colors ${activeMenu === item ? 'text-[#e85d2d]' : 'text-gray-300 group-hover:text-white'}`}>
                                                    {item}
                                                </span>
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-300 text-gray-500 ${activeMenu === item ? 'rotate-180 text-[#e85d2d]' : ''}`}
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
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#e85d2d]"></span>
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
                                <a href="#contact" className="flex items-center justify-center w-full py-3 bg-[#e85d2d] text-white rounded-xl font-bold hover:bg-[#d14d1f] transition-colors">
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
