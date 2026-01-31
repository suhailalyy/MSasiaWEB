import React, { useEffect } from 'react';

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">Privacy Policy</h1>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mb-10 uppercase tracking-wider font-semibold">Last Updated: February 2026</p>

                    <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            At MS Asia, we utilize various technologies to improve your browsing experience.
                            This privacy policy details how we collect, use, and protect your personal information.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">1. Information We Collect</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            We collect information you provide directly to us, such as when you fill out a contact form,
                            request a quote, or sign up for our newsletter. This may include your name, email address,
                            phone number, and company details.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-3 mb-6 leading-relaxed">
                            <li>To provide and maintain our services</li>
                            <li>To notify you about changes to our services</li>
                            <li>To allow you to participate in interactive features when you choose to do so</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information so that we can improve our service</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">3. Data Security</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            The security of your data is important to us, but remember that no method of transmission over
                            the Internet, or method of electronic storage is 100% secure. While we strive to use
                            commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">4. Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@msasia.com" className="text-[#47622A] hover:underline font-medium">info@msasia.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
