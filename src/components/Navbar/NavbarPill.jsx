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

                        {/* HACKTHEBOX STYLE DARK MEGA MENU - TRUE FULL WIDTH */}
                        <div className="bg-[#1A1A1A] w-full rounded-none shadow-2xl overflow-hidden border-t-2 border-[#47622A] flex flex-row min-h-[500px]">
                            {isCompanyMenu ? (
                                /* ===== COMPANY DROPDOWN (Dark Simple) ===== */
                                /* ===== COMPANY DROPDOWN (Dark Simple) ===== */
                                <div className="p-10 w-full bg-[#1A1A1A] flex justify-center">
                                    <div className="max-w-[1000px] w-full">
                                        <div className="grid grid-cols-2 gap-20">
                                            {currentMenuData.columns.map((column, colIdx) => (
                                                <div key={colIdx} className="flex flex-col">
                                                    <div className="mb-6 pb-4 border-b border-[#333333]">
                                                        <p className="text-[13px] font-bold text-[#47622A] uppercase tracking-widest mb-2">{column.title}</p>
                                                        <p className="text-[13px] text-gray-400">{column.description}</p>
                                                    </div>
                                                    <ul className="space-y-4 list-none m-0 p-0">
                                                        {column.items.map((subItem, idx) => (
                                                            <li key={idx}>
                                                                <a
                                                                    href="#"
                                                                    className="group flex items-center justify-between text-[15px] font-medium text-gray-300 hover:text-white transition-all duration-200 pl-2 hover:pl-0 hover:bg-[#47622A]/20 hover:px-4 py-2 rounded-lg -ml-2"
                                                                >
                                                                    <span>{subItem}</span>
                                                                    <svg className="w-4 h-4 text-[#47622A] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                </div>
                            ) : (
                                /* ===== 3-PANEL LAYOUT (Categories | Items | Promo) ===== */
                                <>
                                    {/* PANEL 1: CATEGORIES (Left - Fixed %) */}
                                    <div className="w-[22%] min-w-[280px] bg-[#1A1A1A] py-10 flex flex-col justify-between border-r border-[#333333]">
                                        <div>
                                            <p className="text-[12px] font-bold text-gray-500 uppercase tracking-widest px-8 mb-6">Categories</p>
                                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                                {currentMenuData.columns.map((column, colIdx) => (
                                                    <div
                                                        key={colIdx}
                                                        onMouseEnter={() => handleCategoryEnter(colIdx)}
                                                        className={`px-8 py-4 cursor-pointer flex items-center justify-between transition-all duration-200 ${activeCategory === colIdx
                                                            ? 'bg-[#47622A] text-white border-r-4 border-white'
                                                            : 'text-gray-400 hover:text-white hover:bg-[#47622A]/20'
                                                            }`}
                                                    >
                                                        <span className="text-[15px] font-medium">{column.title}</span>
                                                        {activeCategory === colIdx && (
                                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* PANEL 2: ITEMS (Middle - Flexible) */}
                                    <div className="flex-1 bg-[#1A1A1A] py-10 px-12 flex flex-col border-l border-[#333333]">
                                        {activeCategory !== null && currentMenuData.columns[activeCategory] && (
                                            <div className="animate-fadeIn h-full flex flex-col">
                                                <p className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-3">Services</p>
                                                <h3 className="text-[24px] font-bold text-white mb-8 flex items-center gap-3">
                                                    {currentMenuData.columns[activeCategory].title}
                                                    <span className="text-[#47622A] text-lg font-normal">→</span>
                                                </h3>

                                                <ul className="grid grid-cols-2 gap-x-12 gap-y-4 list-none m-0 p-0 mb-8">
                                                    {currentMenuData.columns[activeCategory].items.map((subItem, idx) => (
                                                        <li key={idx}>
                                                            <a
                                                                href="#"
                                                                className="block text-[15px] text-gray-400 hover:text-[#47622A] hover:translate-x-1 transition-all duration-200"
                                                            >
                                                                {subItem}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* View All Button */}
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#47622A] hover:text-white transition-colors duration-200 uppercase tracking-wide group mt-auto"
                                                >
                                                    View All {currentMenuData.columns[activeCategory].title}
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        )}
                                    </div>


                                    {/* PANEL 3: DYNAMIC INTERACTIVE (Right - Fixed %) */}
                                    <div className="w-[28%] min-w-[380px] bg-[#1A1A1A] border-l border-[#333333] relative overflow-hidden group">
                                        <AnimatePresence mode="wait">
                                            {activeCategory !== null ? (
                                                <motion.div
                                                    key={activeCategory}
                                                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0 p-10 flex flex-col justify-between h-full"
                                                >
                                                    {/* Top Content (Fixed Position) */}
                                                    <div className="relative z-10">
                                                        <p className="text-[11px] font-bold text-[#47622A] uppercase tracking-widest mb-4">
                                                            {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.title || 'CATEGORY'}
                                                        </p>
                                                        <h4 className="text-white text-3xl font-bold mb-5 leading-tight">
                                                            {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.heading || 'Explore Services'}
                                                        </h4>
                                                        <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                                                            {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.description}
                                                        </p>

                                                        {/* Mini Service List */}
                                                        <ul className="space-y-3 mb-10">
                                                            {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.services.map((service, i) => (
                                                                <li key={i} className="flex items-center gap-3 text-[14px] text-gray-500">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#47622A]"></div>
                                                                    <span className="truncate">{service}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Bottom Content (Button) */}
                                                    <div className="relative z-10 mt-auto">
                                                        <a href="#" className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                                            {CATEGORY_CONTENT_MAP[currentMenuData.columns[activeCategory].title]?.buttonText}
                                                            <span className="text-[#47622A]">→</span>
                                                        </a>
                                                    </div>

                                                    {/* Background Glow */}
                                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#47622A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                                                </motion.div>
                                            ) : (
                                                /* Default State: Partner with MS Asia */
                                                <motion.div
                                                    key="default"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0 p-10 flex flex-col justify-end h-full"
                                                >
                                                    <div className="relative z-10">
                                                        <div className="w-16 h-16 bg-[#47622A] rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-[#47622A]/20">
                                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-white text-3xl font-bold mb-4">Partner with MS Asia</h4>
                                                        <p className="text-gray-400 text-[15px] mb-10 leading-relaxed max-w-[320px]">
                                                            Discover comprehensive waste management solutions tailored for your industry.
                                                        </p>
                                                        <a href="#contact" className="inline-block bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-8 py-3.5 rounded-lg transition-colors border border-white/10">
                                                            Get Started
                                                        </a>
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
