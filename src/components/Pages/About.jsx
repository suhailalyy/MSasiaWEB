import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#47622A]/10 text-[#47622A] font-bold text-xs tracking-wider uppercase mb-6">
                        Who We Are
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                        Empowering Sustainable <br className="hidden md:block" />
                        <span className="text-[#47622A]">Waste Management</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        At MS Asia, we are dedicated to revolutionizing the way industries handle waste.
                        Our mission is to provide compliant, efficient, and eco-friendly solutions that protect our planet while maximizing value for our clients.
                    </p>
                </div>
            </div>

            {/* Stats / Values Section */}
            <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4 transition-colors duration-300 border-t border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Card 1 */}
                        <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                            <div className="w-16 h-16 bg-[#47622A]/10 text-[#47622A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#47622A] group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Compliance First</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Strictly adhering to international environmental regulations and ISO standards.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                            <div className="w-16 h-16 bg-[#47622A]/10 text-[#47622A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#47622A] group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Utilizing cutting-edge technology for efficient recycling and resource recovery.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                            <div className="w-16 h-16 bg-[#47622A]/10 text-[#47622A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#47622A] group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Sustainability</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Committed to a circular economy and reducing global carbon footprints.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 text-center px-4 bg-white dark:bg-gray-950">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to make a difference?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                        Join hundreds of companies that trust MS Asia for their sustainable waste management needs.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#47622A] text-white font-semibold rounded-full hover:bg-[#3d5423] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
