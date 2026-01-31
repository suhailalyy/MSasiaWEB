import React, { useEffect } from 'react';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            id: 1,
            title: "The Future of E-Waste Recycling in Asia",
            excerpt: "How new regulations and technologies are reshaping the electronic waste landscape across Southeast Asia.",
            date: "Feb 10, 2026",
            category: "Industry News",
            image: "bg-blue-100 dark:bg-blue-900/20"
        },
        {
            id: 2,
            title: "Sustainable Disposal of Pharmaceutical Waste",
            excerpt: "Best practices for hospitals and clinics to ensure safe and compliant disposal of hazardous medical waste.",
            date: "Jan 28, 2026",
            category: "Compliance",
            image: "bg-green-100 dark:bg-green-900/20"
        },
        {
            id: 3,
            title: "Achieving Zero Landfill: A Case Study",
            excerpt: "How one manufacturing plant reduced their waste footprint by 95% within 12 months using our holistic solutions.",
            date: "Jan 15, 2026",
            category: "Case Studies",
            image: "bg-orange-100 dark:bg-orange-900/20"
        },
        {
            id: 4,
            title: "Understanding ISO 14001 Standards",
            excerpt: "A comprehensive guide to environmental management systems and why certification matters for your business.",
            date: "Dec 05, 2025",
            category: "Certification",
            image: "bg-purple-100 dark:bg-purple-900/20"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 font-sans pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">News, updates, and expert articles on waste management.</p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                            {/* Placeholder Image */}
                            <div className={`h-48 w-full ${post.image} flex items-center justify-center`}>
                                <span className="text-gray-400 font-medium">Image Placeholder</span>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-sm text-[#47622A] font-semibold mb-2">{post.category}</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#47622A] cursor-pointer transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white group cursor-pointer">
                                        Read More <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
