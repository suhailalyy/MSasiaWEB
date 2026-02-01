import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_MENU_DATA } from '../Navbar/NavbarData';

function Industries() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = NAV_MENU_DATA["Industries We Serve"];

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 font-sans pb-20">
            {/* Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    Industries We Serve
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Trusted partners across healthcare, manufacturing, public sectors, and more.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {data.columns.map((category, idx) => (
                    <div key={idx} className="mb-16">
                        <h2 className="text-2xl font-bold text-[#47622A] mb-8 border-b border-gray-200 dark:border-gray-800 pb-4 inline-block">
                            {category.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((item, i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {item.label}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <Link
                                        to={`/industries/${item.label.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                        className="text-sm font-semibold text-[#47622A] hover:underline cursor-pointer inline-flex items-center gap-1"
                                    >
                                        View Solutions &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Industries;
