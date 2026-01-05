import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

function SearchBar({ isExpanded, toggleSearch }) {
    const inputRef = useRef(null)

    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isExpanded])

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isExpanded) {
                toggleSearch()
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isExpanded, toggleSearch])

    // Removed scroll lock useEffect to prevent layout shifts

    return (
        <>
            {/* Search Popup - Matches NavbarPill Design */}
            {isExpanded && createPortal(
                <div
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4"
                >
                    {/* Invisible Backdrop for click-to-dismiss */}
                    <div
                        className="fixed inset-0 bg-transparent"
                        onClick={toggleSearch}
                    />

                    {/* Search Container - Matches NavbarPill style exactly */}
                    <div
                        className="relative w-full max-w-[500px] flex items-center gap-2 rounded-full backdrop-blur-md border border-gray-200/40 shadow-sm py-2 px-6"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            animation: 'popupAppear 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        {/* Search Icon */}
                        <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                        {/* Input Field */}
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search..."
                            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 text-base h-full"
                        />

                        {/* Close Button - Minimal */}
                        <button
                            onClick={toggleSearch}
                            className="flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <style>{`
                        @keyframes popupAppear {
                            from { opacity: 0; transform: translateY(-8px) scale(0.98); }
                            to { opacity: 1; transform: translateY(0) scale(1); }
                        }
                    `}</style>
                </div>,
                document.body
            )}
        </>
    )
}

export default SearchBar
