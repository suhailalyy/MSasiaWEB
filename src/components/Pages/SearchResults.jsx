import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Mock search logic
        if (query) {
            // Simulate results based on query presence
            setResults([
                {
                    title: `Industrial Scrap Management for "${query}"`,
                    desc: "Comprehensive solutions for industrial waste disposal...",
                    link: "/services/industrial-machinery-scrap"
                },
                {
                    title: `compliance regulations related to ${query}`,
                    desc: "Understanding the legal framework for waste management...",
                    link: "/about"
                }
            ]);
        }
    }, [query]);

    return (
        <div className="pt-32 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Search Results
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                    Showing results for <span className="font-semibold text-gray-900 dark:text-white">"{query}"</span>
                </p>

                {results.length > 0 ? (
                    <div className="space-y-8">
                        {results.map((res, index) => (
                            <div key={index} className="group">
                                <Link to={res.link} className="block">
                                    <h3 className="text-xl font-bold text-[#47622A] group-hover:underline mb-1">
                                        {res.title}
                                    </h3>
                                </Link>
                                <p className="text-green-800/60 dark:text-green-500/60 text-sm mb-2 font-mono">
                                    https://msasia.com{res.link}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {res.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 text-center">
                        <p className="text-gray-500 text-lg">No results found for "{query}".</p>
                        <p className="text-gray-400 text-sm">Validating simple mock functionality.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResults;
