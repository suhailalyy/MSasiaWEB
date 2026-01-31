import React, { useEffect } from 'react';

function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-4 border-gray-100 dark:border-gray-700">Terms of Service</h1>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mb-10 uppercase tracking-wider font-semibold">Last Updated: February 2026</p>

                    <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using
                            the MS Asia website operated by MS Asia ("us", "we", or "our").
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">1. Conditions of Use</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            We will provide their services to you, which are subject to the conditions stated below in this document.
                            Every time you visit this website, use its services or make a purchase, you accept the following conditions.
                            This is why we urge you to read them carefully.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">2. Privacy Policy</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Before you continue using our website, we advise you to read our privacy policy regarding our user data collection.
                            It will help you better understand our practices.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">3. Copyright</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Content published on this website (digital downloads, images, texts, graphics, logos) is the property of MS Asia
                            and/or its content creators and protected by international copyright laws.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">4. Communications</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            The entire communication with us is electronic. Every time you send us an email or visit our website,
                            you are going to be communicating with us. You hereby consent to receive communications from us.
                            We will communicate with you by posting news and notices on our website and by sending you emails.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-10 mb-4">5. Applicable Law</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            By visiting this website, you agree that the laws of Singapore, without regard to principles of conflict laws,
                            will govern these terms of service, or any dispute of any sort that might come between MS Asia and you, or its business partners and associates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsOfService;
