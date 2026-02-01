import React, { useEffect } from 'react';

const Testimonials = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const testimonials = [
        {
            quote: "MS Asia completely transformed our waste handling process. What used to be a logistical headache is now a seamless, automated workflow. Their recycling reports also help us meet our corporate sustainability goals.",
            author: "Sarah Jenkins",
            role: "Operations Director",
            company: "TechFlow Manufacturing"
        },
        {
            quote: "Reliability is key in the medical field. MS Asia has never missed a pickup, and their documentation is always audit-ready. A true partner in compliance.",
            author: "Dr. Ahmed Al-Fayed",
            role: "Hospital Administrator",
            company: "City General Hospital"
        },
        {
            quote: "We had a complex chemical disposal need that other vendors turned away. The team at MS Asia engineered a custom solution that was both safe and cost-effective.",
            author: "Michael Chen",
            role: "EHS Manager",
            company: "Apex Chemical Labs"
        },
        {
            quote: "Transparent pricing and exceptional customer service. It's rare to find a waste management partner that actually cares about your business's bottom line.",
            author: "Jessica Williams",
            role: "Facility Manager",
            company: "Global Logistics Hub"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">Client Success Stories</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from the partners we serve every day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-[#111] p-10 rounded-3xl relative">
                            <span className="text-6xl text-[#799851] opacity-20 font-serif absolute top-6 left-6">"</span>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 relative z-10 italic leading-relaxed">
                                {item.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center font-bold text-gray-500">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{item.author}</h4>
                                    <div className="text-sm text-[#799851]">{item.role}, {item.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo Wall Placeholder */}
                <div className="mt-24 pt-10 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-center text-gray-400 mb-8 uppercase tracking-widest text-sm font-bold">Trusted By Industry Leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        {/* Placeholders for logos */}
                        <div className="text-2xl font-black text-gray-300">SAMSUNG</div>
                        <div className="text-2xl font-black text-gray-300">PFIZER</div>
                        <div className="text-2xl font-black text-gray-300">BOEING</div>
                        <div className="text-2xl font-black text-gray-300">TESLA</div>
                        <div className="text-2xl font-black text-gray-300">SHELL</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
