import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    'Industrial & Public': {
        heading: 'Public Sector Solutions',
        description: 'Waste management solutions for government agencies, transportation hubs, and public facilities.',
        buttonText: 'Explore Public Sector',
        image: '/images/scene_industrial.png'
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

const MegaMenu = ({ activeMenu, isVisible, onMouseEnter, onMouseLeave, onClose }) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [hoveredLink, setHoveredLink] = useState(null);

    // Helper to generate URL slug from label
    const getSlug = (label) => {
        return label.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    };

    // Reset state whenever the main menu changes
    useEffect(() => {
        if (isVisible) {
            setActiveCategoryIndex(0);
            setHoveredLink(null);
        }
    }, [activeMenu, isVisible]);

    if (!activeMenu || !isVisible) return null;

    const menuData = NAV_MENU_DATA[activeMenu];
    if (!menuData || !menuData.columns) return null;

    // Get the currently active category data
    const activeCategoryData = menuData.columns[activeCategoryIndex];
    const activeCategoryTitle = activeCategoryData?.title;
    const content = CATEGORY_CONTENT_MAP[activeCategoryTitle];

    // Determine what to show in the promo card
    // Priority: Hovered Link Data > Active Category Content > Fallback
    const displayImage = hoveredLink?.image || content?.image || '/images/scene_industrial.png';
    const displayHeading = hoveredLink?.label || content?.heading || 'Market Leader';
    const displayDesc = hoveredLink?.desc || content?.description || `Discover why MS Asia is the preferred partner for ${activeCategoryTitle || 'Industry'} solutions.`;
    const displayButton = hoveredLink ? 'View Details' : (content?.buttonText || 'Learn More');

    // Slug for promo button (uses hovered link slug or active category roughly)
    const promoSlug = hoveredLink ? getSlug(hoveredLink.label) : (activeCategoryTitle ? getSlug(activeCategoryTitle) : '');

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
                            <h6 className="mm-section-title text-center">Categories</h6>
                            <ul className="mm-category-list">
                                {menuData.columns.map((column, index) => (
                                    <li
                                        key={index}
                                        className={`mm-category-item ${index === activeCategoryIndex ? 'active' : ''}`}
                                        onMouseEnter={() => {
                                            setActiveCategoryIndex(index);
                                            setHoveredLink(null);
                                        }}
                                    >
                                        <h6 className="m-0 p-0 font-medium mm-category-text">{column.title}</h6>
                                        <svg className="mm-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COL 2: SUB-MENU (Links for Active Category) */}
                        <div className="mm-submenu">
                            <ul className="mm-link-list custom-scrollbar">
                                {activeCategoryData?.items?.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={`/services/${getSlug(item.label)}`}
                                            className="mm-link-item group"
                                            onMouseEnter={() => setHoveredLink(item)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                            onClick={onClose}
                                        >
                                            <h6 className="m-0 p-0 font-normal normal-case tracking-normal">{item.label}</h6>
                                            <svg className="mm-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COL 3: FEATURED CARD (Promo / Dynamic Preview) */}
                        <div className="mm-promo">
                            <div className="mm-promo-card">
                                <div className="featured-image-placeholder">
                                    <img
                                        src={displayImage}
                                        alt="Featured Visual"
                                        className="w-full h-full object-cover transition-opacity duration-300"
                                        onError={(e) => { e.target.onerror = null; e.target.src = '/images/scene_industrial.png'; }}
                                    />
                                    <span className="mm-promo-tag">
                                        {hoveredLink ? 'Preview' : 'Featured'}
                                    </span>
                                </div>
                                <div className="mm-promo-content">
                                    <h5>{displayHeading}</h5>
                                    <p>{displayDesc}</p>
                                    <Link
                                        to={`/services/${promoSlug}`}
                                        className="mm-promo-btn"
                                        onClick={onClose}
                                    >
                                        {displayButton}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
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
