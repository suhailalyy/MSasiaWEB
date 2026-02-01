import React, { useEffect } from 'react';

const Certifications = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans">
            {/* Header */}
            <div className="bg-[#111] text-white py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#799851]/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Certifications & Compliance</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Setting the benchmark for industry standards. We are fully licensed, insured, and certified to handle your most critical waste streams.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Cert Card 1 */}
                    <div className="flex gap-6 p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-[#0a0a0a] hover:shadow-xl transition-shadow">
                        <div className="w-24 h-24 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-md text-[#799851] font-black text-xl border-4 border-[#799851]">
                            ISO
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ISO 14001:2015</h3>
                            <p className="text-[#799851] font-semibold mb-3">Environmental Management Systems</p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Certified for our effective environmental management system, ensuring we meet our environmental responsibilities in a systematic manner that contributes to the environmental pillar of sustainability.
                            </p>
                        </div>
                    </div>

                    {/* Cert Card 2 */}
                    <div className="flex gap-6 p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-[#0a0a0a] hover:shadow-xl transition-shadow">
                        <div className="w-24 h-24 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-md text-[#799851] font-black text-xl border-4 border-[#799851]">
                            ISO
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ISO 9001:2015</h3>
                            <p className="text-[#799851] font-semibold mb-3">Quality Management Systems</p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Demonstrating our ability to consistently provide products and services that meet customer and applicable statutory and regulatory requirements.
                            </p>
                        </div>
                    </div>

                    {/* Cert Card 3 */}
                    <div className="flex gap-6 p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-[#0a0a0a] hover:shadow-xl transition-shadow">
                        <div className="w-24 h-24 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-md text-[#799851] font-black text-xl border-4 border-[#799851]">
                            45001
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ISO 45001:2018</h3>
                            <p className="text-[#799851] font-semibold mb-3">Occupational Health & Safety</p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Providing safe and healthy workplaces by preventing work-related injury and ill health, as well as by proactively improving its OH&S performance.
                            </p>
                        </div>
                    </div>

                    {/* Cert Card 4 */}
                    <div className="flex gap-6 p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-[#0a0a0a] hover:shadow-xl transition-shadow">
                        <div className="w-24 h-24 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-md text-[#799851] font-black text-xl border-4 border-[#799851]">
                            R2
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">R2v3 Certified</h3>
                            <p className="text-[#799851] font-semibold mb-3">Responsible Recycling</p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                The premier global standard for the electronics reuse and recycling industry, ensuring meaningful data protection and sustainable practices.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Badges / Associations */}
                <div className="mt-20 text-center">
                    <h4 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-10">Memberships & Associations</h4>
                    <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="text-2xl font-black text-gray-300">BIR</div>
                        <div className="text-2xl font-black text-gray-300">ISRI</div>
                        <div className="text-2xl font-black text-gray-300">SWANA</div>
                        <div className="text-2xl font-black text-gray-300">NRA</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
