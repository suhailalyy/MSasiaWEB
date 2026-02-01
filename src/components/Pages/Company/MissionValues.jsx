import React, { useEffect } from 'react';

const MissionValues = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans">
            {/* Hero Section */}
            <div className="relative py-24 lg:py-32 bg-gray-50 dark:bg-[#111] overflow-hidden">
                <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                    {/* Abstract Pattern */}
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" className="text-[#799851]" />
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                        Our Mission & <span className="text-[#799851]">Values</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Driving the future of sustainable waste management through innovation, integrity, and a relentless commitment to our planet.
                    </p>
                </div>
            </div>

            {/* Mission Statement */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/scene_corporate.png"
                                alt="Sustainability Mission"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#799851] rounded-2xl -z-10"></div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission Statement</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            At MS Asia, our mission is simple yet profound: to transform the world's waste into valuable resources. We are dedicated to providing cutting-edge, environmentally responsible waste management solutions that protect public health and preserve our natural ecosystems.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            We strive to set the global standard for industrial recycling, ensuring zero-landfill goals are not just a dream, but a reality for our partners and maximizing the circular economy potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Values</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Integrity",
                                desc: "We operate with unyielding honesty and transparency in every transaction.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Sustainability",
                                desc: "Our planet comes first. Every process is optimized to minimize environmental impact.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Innovation",
                                desc: "We constantly pioneer new technologies to solve complex waste challenges.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Safety",
                                desc: "The wellbeing of our team and community is non-negotiable.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Excellence",
                                desc: "We strive for perfection in compliance, service, and execution.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Partnership",
                                desc: "We build lasting relationships based on trust and mutual success.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            }
                        ].map((val, i) => (
                            <div key={i} className="p-8 bg-white dark:bg-[#111] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-[#799851] transition-all group">
                                <div className="w-16 h-16 bg-[#799851]/10 rounded-xl flex items-center justify-center text-[#799851] mb-6 group-hover:bg-[#799851] group-hover:text-white transition-colors duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{val.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionValues;
