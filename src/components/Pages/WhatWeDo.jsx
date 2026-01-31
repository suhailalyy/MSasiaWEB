import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_MENU_DATA } from '../Navbar/NavbarData';

function WhatWeDo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = NAV_MENU_DATA["What We Do"];

    // Helper to generate URL slug
    const getSlug = (label) => {
        return label.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    };

    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans pb-20">
            {/* Hero */}
            <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 mb-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        What We Do
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive waste management solutions tailored for every sector.
                        From electronics to hazardous materials, we handle it all with compliance and care.
                    </p>
                </div>
            </div>

            {/* Service Categories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {data.columns.map((category, idx) => (
                    <div key={idx} className="mb-20 last:mb-0">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                            <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((item, i) => (
                                <Link
                                    to={`/services/${getSlug(item.label)}`}
                                    key={i}
                                    className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-lg transition-all group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-10 h-10 bg-[#47622A]/10 text-[#47622A] rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#47622A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#47622A] transition-colors">
                                        {item.label}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhatWeDo;
