import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // REMOVED: Router not installed
import { NAV_MENU_DATA } from './NavbarData';
import './MegaMenu.css';

// Content content map for Mega Menu Interactivity
const CATEGORY_CONTENT_MAP = {
    'Electronics': {
        heading: 'E-Waste & IT Asset Disposal',
        description: 'Secure, compliant disposal of electronic waste, IT equipment, and data-bearing devices with certified destruction and recycling.',
        buttonText: 'Explore Electronics',
        image: '/images/scene_electronics.png'
    },
    'Industrial & Construction': {
        heading: 'Heavy Industry Waste Solutions',
        description: 'Comprehensive waste management for construction sites, manufacturing plants, and industrial facilities.',
        buttonText: 'Explore Industrial',
        image: '/images/scene_industrial.png'
    },
    'Metals': {
        heading: 'Metal Scrap Recycling',
        description: 'Efficient processing and recycling of ferrous and non-ferrous metals with maximum recovery value.',
        buttonText: 'Explore Metals',
        image: '/images/scene_metals.png'
    },
    'Recyclables': {
        heading: 'Sustainable Recycling Services',
        description: 'Discover our comprehensive solutions for recyclables. We ensure compliant, sustainable, and efficient handling.',
        buttonText: 'Explore Recyclables',
        image: '/images/scene_recyclables.png'
    },
    'Special Waste Services': {
        heading: 'Hazardous & Medical Waste Management',
        description: 'Safe handling and disposal of regulated, hazardous, and medical waste with full compliance.',
        buttonText: 'Explore Special Services',
        image: '/images/scene_healthcare.png'
    },
    'Healthcare': {
        heading: 'Medical Waste Solutions',
        description: 'Specialized waste management for hospitals, clinics, and healthcare facilities ensuring safety and compliance.',
        buttonText: 'Explore Healthcare',
        image: '/images/scene_healthcare.png'
    },
    'Pharmacy, Labs & Research': {
        heading: 'Pharmaceutical Disposal',
        description: 'Expert disposal services for pharmacies, laboratories, and research centers dealing with effectively managing waste.',
        buttonText: 'Explore Pharma',
        image: '/images/scene_pharma.png'
    },
    'Other Industries': {
        heading: 'Commercial Waste Services',
        description: 'Tailored waste management solutions for educational institutions, government bodies, and manufacturing sectors.',
        buttonText: 'Explore Industries',
        image: '/images/scene_industrial.png'
    },
    'Overview': {
        heading: 'About MS Asia',
        description: 'Leading the way in sustainable waste management. Learn about our mission, values, and commitment to excellence.',
        buttonText: 'Who We Are',
        image: '/images/scene_corporate.png'
    },
    'More': {
        heading: 'Join Our Team',
        description: 'Building a better future together. Explore career opportunities, client success stories, and contact us directly.',
        buttonText: 'Work With Us',
        image: '/images/scene_corporate.png'
    }
};

const MegaMenu = ({ activeMenu, isVisible, onMouseEnter, onMouseLeave }) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    // Reset to first category whenever the main menu changes
    useEffect(() => {
        if (isVisible) {
            setActiveCategoryIndex(0);
        }
    }, [activeMenu, isVisible]);

    if (!activeMenu || !isVisible) return null;

    const menuData = NAV_MENU_DATA[activeMenu];
    if (!menuData || !menuData.columns) return null;

    // Get the currently active category data
    const activeCategoryData = menuData.columns[activeCategoryIndex];
    const activeCategoryTitle = activeCategoryData?.title;
    const content = CATEGORY_CONTENT_MAP[activeCategoryTitle];

    // Fallback image if one isn't defined
    const featuredImage = content?.image || '/images/scene_industrial.png';

    return (
        <>
            {/* Backdrop Blur Overlay */}
            <div className="mega-menu-backdrop" />

            {/* Hover Bridge to prevent menu from closing when moving mouse down */}
            <div
                className="mega-menu-bridge"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />

            {/* Main Container */}
            <div
                className="mega-menu-container animate-dropdown"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className="mega-menu-wrapper">
                    <div className="mega-menu-grid">

                        {/* COL 1: SIDEBAR (Categories) */}
                        <div className="mm-sidebar">
                            <h3 className="mm-section-title">Categories</h3>
                            <ul className="mm-category-list">
                                {menuData.columns.map((column, index) => (
                                    <li
                                        key={index}
                                        className={`mm-category-item ${index === activeCategoryIndex ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveCategoryIndex(index)}
                                    >
                                        <span className="mm-category-text">{column.title}</span>
                                        <svg className="mm-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COL 2: SUB-MENU (Links for Active Category) */}
                        <div className="mm-submenu">
                            {/* Header removed as per request */}

                            <ul className="mm-link-list custom-scrollbar">
                                {activeCategoryData?.items?.map((item, idx) => (
                                    <li key={idx}>
                                        {/* Changed Link to a tag because react-router-dom is not installed */}
                                        <a href="#" className="mm-link-item">
                                            <span className="mm-link-icon">›</span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COL 3: FEATURED CARD (Promo) */}
                        <div className="mm-promo">
                            <div className="mm-promo-card">
                                <div className="featured-image-placeholder">
                                    <img
                                        src={featuredImage}
                                        alt={`${activeCategoryTitle} Featured Visual`}
                                        className="w-full h-full object-cover"
                                    />
                                    <span className="mm-promo-tag">Featured</span>
                                </div>
                                <div className="mm-promo-content">
                                    <h3>{content?.heading || 'Market Leader'}</h3>
                                    <p>{content?.description || `Discover why MS Asia is the preferred partner for ${activeCategoryTitle || 'Industry'} solutions.`}</p>
                                    <button className="mm-promo-btn">
                                        {content?.buttonText || 'Learn More'}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenu;