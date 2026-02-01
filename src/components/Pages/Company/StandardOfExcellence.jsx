import React, { useEffect } from 'react';

const StandardOfExcellence = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans">
            {/* Simple Clean Header */}
            <div className="py-24 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">Standard of Excellence</h1>
                <div className="w-24 h-1.5 bg-[#799851] mx-auto rounded-full mb-8"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Our promise is simple: we do it right, every single time. Excellence isn't an act, it's our habit.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-24">
                <div className="space-y-12">
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#799851] text-white flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Unwavering Compliance</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                We view regulations as the minimum starting point, not the goal. We rigorously adhere to all local, state, and international laws, ensuring our clients are never exposed to liability.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#799851] text-white flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Operational Precision</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                From scheduled pickups to complex remediation projects, our operations are planned to the minute. We respect your time and your facilities.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#799851] text-white flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Customer-Centricity</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                You are never just an account number. Dedicated account managers ensure personalized service and rapid resolution of any inquiries.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#799851] text-white flex items-center justify-center font-bold text-xl">4</div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Continuous Improvement</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                We constantly evaluate our technologies, training, and processes to find better, safer, and more efficient ways to serve you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandardOfExcellence;
