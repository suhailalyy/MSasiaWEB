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

    return (
        <>
            {isExpanded && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-start justify-center pt-6 px-4"
                >
                    {/* VISIBLE Backdrop for click-to-dismiss */}
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                        onClick={toggleSearch}
                    />

                    {/* Search Container - Navbar Size Match */}
                    <div
                        className="relative w-full max-w-[800px] h-[55px] flex items-center gap-4 rounded-full bg-white shadow-2xl border border-gray-100 px-6 scale-100"
                        style={{
                            animation: 'popupAppear 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                            transformOrigin: 'center top'
                        }}
                    >
                        {/* Search Icon - Perfectly Center */}
                        <div className="flex items-center justify-center h-full">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Input Field - No Vertical Offset */}
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search Website..."
                            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-lg h-full font-medium"
                            style={{ paddingTop: 0, paddingBottom: 0, lineHeight: 'normal' }}
                        />

                        {/* Close Button - Vertically Centered Green Circle */}
                        <div className="flex items-center justify-center h-full">
                            <button
                                onClick={toggleSearch}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#47622A] text-white hover:bg-[#374426] transition-all duration-200 shadow-md transform hover:scale-105"
                                aria-label="Close search"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <style>{`
                        @keyframes popupAppear {
                            from { opacity: 0; transform: translateY(-20px) scale(0.95); }
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
