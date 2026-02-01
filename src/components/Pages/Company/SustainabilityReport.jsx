import React, { useEffect } from 'react';

const SustainabilityReport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans">
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src="/images/step4.jpg"
                    className="w-full h-full object-cover"
                    alt="Green Forest"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl font-bold mb-4">2025 Sustainability Report</h1>
                        <p className="text-xl max-w-2xl mx-auto">Measuring our impact, transparency in our progress.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Intro */}
                <div className="prose dark:prose-invert max-w-none mb-20 text-center">
                    <h2 className="text-3xl font-bold">A Commitment to the Planet</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                        This year, we diverted over 50,000 tons of waste from landfills. But our work is far from done.
                        Our annual report details our carbon footprint reduction strategies, water conservation efforts,
                        and community engagement initiatives.
                    </p>
                </div>

                {/* Charts / Data Grid Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl text-center">
                        <div className="text-4xl font-bold text-[#799851] mb-2">50k+</div>
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tons Diverted</div>
                    </div>
                    <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl text-center">
                        <div className="text-4xl font-bold text-[#799851] mb-2">12M</div>
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">kWh Energy Saved</div>
                    </div>
                    <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl text-center">
                        <div className="text-4xl font-bold text-[#799851] mb-2">35%</div>
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Carbon Reduction</div>
                    </div>
                    <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl text-center">
                        <div className="text-4xl font-bold text-[#799851] mb-2">100%</div>
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Compliance Rate</div>
                    </div>
                </div>

                {/* Download CTA */}
                <div className="bg-[#111] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Read the Full Report</h2>
                        <p className="text-gray-400 mb-8">Dive deep into our methodology, case studies, and future roadmap.</p>
                        <button className="bg-[#799851] hover:bg-[#5a743a] text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download PDF (2.4MB)
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#799851] rounded-full filter blur-[100px] opacity-20"></div>
                </div>
            </div>
        </div>
    );
};

export default SustainabilityReport;
