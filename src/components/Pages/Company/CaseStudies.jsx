import React, { useEffect } from 'react';

const CaseStudies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cases = [
        {
            title: "Large-Scale E-Waste Decommissioning",
            client: "Fortune 500 Financial Firm",
            challenge: "Securely disposing of 15,000+ data center servers across 10 locations within 30 days.",
            solution: "Deployed mobile shredding units to all sites, securely destroyed hard drives on-premises, and recycled remaining metals.",
            result: "100% data destruction certification, 450 tons of metal recycled, zero landfill waste."
        },
        {
            title: "Hazardous Chemical Cleanup",
            client: "Industrial Manufacturing Plant",
            challenge: "Legacy waste pit containing unidentified chemical mixtures requiring immediate remediation.",
            solution: "Conducted hazmat sampling, identified contaminants, and utilized specialized vacuum trucks for extraction and neutralization.",
            result: "Site cleared in 72 hours, fully compliant with EPA standards, zero safety incidents."
        },
        {
            title: "Hospital Waste Stream Optimization",
            client: "Regional Healthcare Network",
            challenge: "Escalating disposal costs due to improper segregation of regulated medical waste vs. municipal waste.",
            solution: "Implemented color-coded bin systems, staff training programs, and regular audit schedules.",
            result: "30% cost reduction in year one, 40% reduction in red-bag waste volume."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">Case Studies</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Real-world examples of complex challenges solved with precision and expertise.
                    </p>
                </div>

                <div className="space-y-12">
                    {cases.map((c, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-[#799851] transition-all group">
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                <div className="bg-[#799851] p-8 text-white flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                                    <div className="text-sm opacity-90 font-semibold uppercase tracking-wider">{c.client}</div>
                                </div>
                                <div className="lg:col-span-2 p-8 lg:p-12">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Challenge</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{c.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Solution</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{c.solution}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Result</h4>
                                            <p className="font-semibold text-[#799851] text-sm leading-relaxed">{c.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
