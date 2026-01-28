import React from 'react';
import { useParams } from 'react-router-dom';

const DynamicServicePage = () => {
    const { slug } = useParams();

    // Helper to format slug back to Title Case
    const formatTitle = (s) => {
        if (!s) return "Service Details";
        return s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const serviceName = formatTitle(slug);
    const breadcrumbs = ["Home", "Services"];

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
            {/* 1. HERO SECTION */}
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
                {/* Background Image Placeholder (Industrial Theme) */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1530124560676-586cad324960?q=80&w=2070&auto=format&fit=crop')`,
                    }}
                >
                    {/* Dark Overlay for legibility */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center items-start text-white">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-4 animate-fadeIn" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm font-medium text-gray-200">
                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li className="hover:text-white transition-colors cursor-pointer">
                                        {item}
                                    </li>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </React.Fragment>
                            ))}
                            <li className="text-white font-semibold">{serviceName}</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 animate-slideInLeft text-white">
                        {serviceName}
                    </h1>
                    <div className="w-24 h-1.5 bg-[#799851] rounded-full animate-widthGrow"></div>
                </div>
            </div>

            {/* 2. MAIN BODY (Split Layout) */}
            <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                    {/* LEFT SIDE: Content (Col 1-2) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Main Description */}
                        <section className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#47622A] rounded-full"></span>
                                Service Overview
                            </h2>
                            <p className="leading-relaxed mb-6">
                                We provide comprehensive industrial waste management solutions tailored to the unique needs of pharmaceutical and chemical manufacturing. Our approach prioritizes compliance, environmental safety, and operational efficiency, ensuring that your facility meets all regulatory standards while minimizing its ecological footprint.
                            </p>
                            <p className="leading-relaxed">
                                Our team of certified professionals utilizes state-of-the-art technology and industry-best practices to handle, transport, and dispose of hazardous materials with the utmost care and precision.
                            </p>
                        </section>

                        {/* HIGHLIGHTS BOX */}
                        <div className="bg-[#47622A]/5 dark:bg-[#47622A]/10 border border-[#47622A]/10 dark:border-[#47622A]/20 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden group">
                            {/* Subtle Background Decoration */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#799851]/10 rounded-full blur-3xl group-hover:bg-[#799851]/20 transition-all duration-500"></div>

                            <h3 className="text-2xl font-bold text-[#47622A] dark:text-[#799851] mb-8 relative z-10">Key Features & Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                {
                                    /* ... cards ... */
                                }
                                {
                                    /* Note: Re-writing the map to avoid partial match issues with complex nested code */
                                }
                                {[
                                    { title: "Zero Leakage Policy", desc: "Advanced containment systems for all hazardous transport." },
                                    { title: "24/7 Monitoring", desc: "Real-time tracking of waste processing cycles." },
                                    { title: "ISO Certified", desc: "Fully compliant with international environmental standards." },
                                    { title: "Custom Disposal", desc: "Tailored strategies for complex chemical waste streams." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-gray-50 dark:border-gray-800 hover:border-[#799851]/30 transition-all">
                                        <div className="flex-none w-10 h-10 rounded-lg bg-[#47622A] flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black dark:text-white mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Content / Bullet Points */}
                        <section className="space-y-6 text-gray-700 dark:text-gray-300">
                            <h3 className="text-2xl font-bold text-black dark:text-white">Why Partner With MS Asia?</h3>
                            <ul className="space-y-4 list-none p-0">
                                {[
                                    "Dedicated hazardous waste experts with decades of experience.",
                                    "Comprehensive audit trails for every disposal action.",
                                    "Cost-effective recycling programs for non-hazardous medical waste.",
                                    "Emergency spill response and containment services available 24/7."
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#799851] flex-none"></span>
                                        <span className="text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* RIGHT SIDE: SIDEBAR (Col 3) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8 animate-fadeInRight">

                            {/* QUICK CONTACT CARD */}
                            <div className="bg-black text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#47622A]/40 to-transparent pointer-events-none"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-4 tracking-tight">Need a Custom Quote?</h3>
                                    <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                                        Contact our experts today for a personalized analysis of your facility's waste requirements.
                                    </p>

                                    <button className="w-full bg-[#799851] hover:bg-[#47622A] text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 mb-6">
                                        Get Your Audit
                                    </button>

                                    <div className="space-y-4 border-t border-white/10 pt-6">
                                        <div className="flex items-center gap-4 text-sm hover:text-[#799851] transition-colors cursor-pointer group">
                                            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#799851]/20">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <span>+1 (234) 567-890</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm hover:text-[#799851] transition-colors cursor-pointer group">
                                            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#799851]/20">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span>solutions@msasia.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RELATED SERVICES */}
                            <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                                <h3 className="text-xl font-bold text-black dark:text-white mb-6">Expertise Areas</h3>
                                <ul className="space-y-3 p-0 m-0 list-none">
                                    {[
                                        "Chemical Waste Disposal",
                                        "Medical Waste Solutions",
                                        "Asset Recovery",
                                        "Compliance Auditing",
                                        "Sustainability Consulting"
                                    ].map((service, i) => (
                                        <li key={i}>
                                            <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:text-[#47622A] dark:text-gray-300 dark:hover:text-[#799851] hover:shadow-sm transition-all group border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                                <span className="font-medium">{service}</span>
                                                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DynamicServicePage;
