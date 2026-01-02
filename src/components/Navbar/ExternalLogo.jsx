function ExternalLogo({ isHidden }) {
    return (
        <div className="hidden md:block fixed top-10 left-6 md:left-12 z-50 pointer-events-none">
            <div
                className={`external-element pointer-events-auto flex items-center gap-3 transition-all duration-500 ${isHidden ? 'hidden-state' : ''
                    }`}
            >
                <a href="/" className="navbar-logo flex items-center gap-2 no-underline">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-heading-h1 to-brand-icon-primary flex items-center justify-center text-white font-bold text-base shadow-lg">
                        MA
                    </div>
                    <span className="text-xl font-bold text-brand-heading-h1 hidden sm:block">
                        Ms Asia
                    </span>
                </a>
            </div>
        </div>
    )
}

export default ExternalLogo
