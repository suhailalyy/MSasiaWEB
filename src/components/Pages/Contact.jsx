import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 font-sans pb-24">
            {/* Hero / Intro */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-[#47622A]/10 text-[#47622A] font-bold text-xs tracking-wider uppercase mb-6">
                    Get In Touch
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                    Have a question about our waste management solutions?
                    Reach out to our expert team for a consultation or quote.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-12">
                        {/* Contact Details */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                Company Information
                                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4"></div>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-white dark:bg-gray-800 flex items-center justify-center rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-[#47622A] group-hover:bg-[#47622A] group-hover:text-white transition-all duration-300 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Headquarters</h3>
                                        <p className="text-lg text-gray-900 dark:text-white leading-relaxed font-medium">
                                            123 Pharma District,<br />
                                            Singapore 018956
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-white dark:bg-gray-800 flex items-center justify-center rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-[#47622A] group-hover:bg-[#47622A] group-hover:text-white transition-all duration-300 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Phone</h3>
                                        <p className="text-lg text-gray-900 dark:text-white font-medium">
                                            <a href="tel:+6561234567" className="hover:text-[#47622A] transition-colors">+65 6123 4567</a>
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 bg-white dark:bg-gray-800 flex items-center justify-center rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-[#47622A] group-hover:bg-[#47622A] group-hover:text-white transition-all duration-300 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Email</h3>
                                        <a href="mailto:info@msasia.com" className="text-lg text-gray-900 dark:text-white font-medium hover:text-[#47622A] transition-colors">
                                            info@msasia.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 sm:h-80 bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-inner relative flex items-center justify-center group border-4 border-white dark:border-gray-800">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/map-light.png')] opacity-30"></div>
                            <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                                <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg text-[#47622A]">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <span className="bg-white/90 dark:bg-gray-900/90 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm backdrop-blur-sm">
                                    Google Map Embed
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 border border-blue-50 dark:border-gray-800 sticky top-24">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send us a Message</h2>
                            <p className="text-gray-500 dark:text-gray-400">Fill out the form below and we'll get back to you shortly.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[#47622A] focus:bg-white dark:focus:bg-gray-900 focus:ring-0 outline-none transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[#47622A] focus:bg-white dark:focus:bg-gray-900 focus:ring-0 outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[#47622A] focus:bg-white dark:focus:bg-gray-900 focus:ring-0 outline-none transition-all duration-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service Interest</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white focus:border-[#47622A] focus:bg-white dark:focus:bg-gray-900 focus:ring-0 outline-none transition-all duration-300 appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Industrial Scrap Management</option>
                                        <option>Hazardous Waste Disposal</option>
                                        <option>Electronics Recycling (E-Waste)</option>
                                        <option>Sustainability Consulting</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell us about your requirements..."
                                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[#47622A] focus:bg-white dark:focus:bg-gray-900 focus:ring-0 outline-none transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-[#47622A] text-white font-bold rounded-xl shadow-lg shadow-[#47622A]/20 hover:shadow-xl hover:shadow-[#47622A]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                                <span>Send Message</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
