import React, { useEffect } from 'react';

const SafetyStandards = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">Safety First. <br /> Always.</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Safety is not just a policy—it is our culture. We empower every employee to stop work if they perceive a risk.
                    </p>
                </div>

                {/* Protocols Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border-l-8 border-[#799851]">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Training</h3>
                        <p className="text-gray-600 dark:text-gray-400">Every team member undergoes rigorous, role-specific safety training before stepping onto the facility floor, with mandatory annual refreshers.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border-l-8 border-[#799851]">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">PPE Standards</h3>
                        <p className="text-gray-600 dark:text-gray-400">We mandate state-of-the-art Personal Protective Equipment for all personnel, exceeding regulatory requirements for every specific hazard zone.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border-l-8 border-[#799851]">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Emergency Response</h3>
                        <p className="text-gray-600 dark:text-gray-400">Our on-site HAZMAT teams are available 24/7 with dedicated rapid response vehicles and containment systems ready for any scenario.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border-l-8 border-[#799851]">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Regular Audits</h3>
                        <p className="text-gray-600 dark:text-gray-400">Internal and third-party safety audits are conducted monthly to identify potential hazards and continuously improve our protocols.</p>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border-l-8 border-[#799851]">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Health Monitoring</h3>
                        <p className="text-gray-600 dark:text-gray-400">We provide regular health screenings for employees handling sensitive materials to ensure long-term well-being.</p>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border-l-8 border-[#799851]">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Zero Accident Goal</h3>
                        <p className="text-gray-600 dark:text-gray-400">Our "Target Zero" initiative rewards teams for maintaining accident-free streaks and proactively reporting near-misses.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyStandards;
