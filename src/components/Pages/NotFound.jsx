
import React, { useEffect } from 'react';

function NotFound() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center text-center px-4 transition-colors duration-300 font-sans pb-20">
            <h1 className="text-[12rem] leading-none font-bold text-[#47622A]/5 select-none -mb-16 dark:text-white/5">
                404
            </h1>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Page Not Found
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#47622A] text-white font-semibold rounded-full hover:bg-[#3d5423] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Return Home
                </a>
            </div>
        </div>
    );
}

export default NotFound;
