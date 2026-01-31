import React, { useEffect } from 'react';

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openings = [
        { title: "Waste Management Specialist", type: "Full-time", location: "Singapore", id: 1 },
        { title: "Environmental Compliance Officer", type: "Full-time", location: "Kuala Lumpur, Malaysia", id: 2 },
        { title: "Logistics Coordinator", type: "Full-time", location: "Bangkok, Thailand", id: 3 },
    ];

    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">
            {/* Hero */}
            <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4 mb-16">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-[#47622A] font-bold tracking-wider text-sm uppercase mb-4 block">Careers</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        Join Our Team
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Build a sustainable future with us. We are looking for passionate individuals dedicated to environmental impact.
                    </p>
                </div>
            </div>

            {/* Why Work With Us */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Why Work With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Impact", desc: "Your work directly contributes to a cleaner, greener planet." },
                        { title: "Growth", desc: "Continuous learning opportunities and career advancement." },
                        { title: "Culture", desc: "A collaborative, inclusive, and safety-first work environment." }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Openings */}
            <div className="max-w-4xl mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Current Openings</h2>
                <div className="space-y-4">
                    {openings.map((job) => (
                        <div key={job.id} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-[#47622A] transition-colors group">
                            <div className="mb-4 sm:mb-0">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#47622A] transition-colors">{job.title}</h3>
                                <div className="text-sm text-gray-500 mt-1 flex gap-4">
                                    <span>{job.location}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg group-hover:bg-[#47622A] group-hover:text-white transition-all text-sm">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-[#47622A] py-16 px-4 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Don't see your role?</h2>
                <p className="text-white/80 mb-8 max-w-lg mx-auto">
                    We are always looking for talent. Send your resume to our HR team.
                </p>
                <a href="mailto:careers@msasia.com" className="inline-block px-8 py-3 bg-white text-[#47622A] font-bold rounded-full hover:bg-gray-100 transition-colors">
                    Email Us
                </a>
            </div>
        </div>
    );
}

export default Careers;
