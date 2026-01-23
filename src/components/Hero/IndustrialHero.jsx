import LogoLoop from '../common/LogoLoop'

function IndustrialHero() {
    // Partner logos from /partnerslogo/ directory
    const partnerLogos = [
        '/partnerslogo/Alkem_Laboratories_logo.svg',
        '/partnerslogo/patanjali.svg',
        '/partnerslogo/pritam-international.svg',
        '/partnerslogo/indica-logo.svg',
        '/partnerslogo/klintoz_logo.svg',
        '/partnerslogo/Himalaya_logos.svg',
        '/partnerslogo/fena_corp_logo_mob.svg',
        '/partnerslogo/cipla.logo.svg',
    ]

    return (
        /* CHANGE: Added Tailwind responsive padding classes with '!' to override CSS.
           - !px-4 sm:!px-6 lg:!px-8 : Matches the video's responsive horizontal spacing.
           - !pt-32 etc : Controls top padding responsively (Mobile vs Laptop).
           - preserved 'industrial-hero' class to keep your Background Color intact.
        */
        <section className="industrial-hero !px-4 sm:!px-6 lg:!px-8 !pt-28 !pb-0 sm:!pt-36 sm:!pb-0 lg:!pt-44 lg:!pb-0 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-black">
            {/* Ambient Background Glow for Glass Effect Visibility */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#799851]/10 via-transparent to-transparent pointer-events-none dark:opacity-20" />

            {/* Added max-w-7xl and mx-auto to center content professionally on large screens */}
            <div className="industrial-hero-container max-w-7xl mx-auto w-full">

                {/* LEFT CONTENT (60%) */}
                <div className="industrial-hero-content">
                    {/* New Pill Badge */}
                    <div className="industrial-hero-pill-badge">
                        ISO 14001 Certified
                    </div>

                    {/* Main Heading */}
                    <h1 className="industrial-hero-heading">
                        Pharmaceutical Waste Management & Compliance Solutions
                    </h1>

                    {/* Sub-heading */}
                    <p className="industrial-hero-subheading">
                        Ms Asia delivers certified collection, recycling, and disposal services across Southeast Asia.
                    </p>

                    {/* CTA Buttons */}
                    <div className="industrial-hero-cta">
                        <a href="#audit" className="industrial-btn-primary">
                            Get Waste Audit
                        </a>
                        <a href="#services" className="industrial-btn-secondary">
                            View Services
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE (40%) */}
                <div className="industrial-hero-image">
                    <div className="industrial-hero-image-wrapper">
                        {/* Blob Background handled in CSS ::before */}

                        {/* Placeholder for industrial image */}
                        <div className="industrial-hero-placeholder">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Industrial Facility</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Loop Section - Trusted Partners */}
            <div className="industrial-hero-logos mt-12 sm:mt-16">
                <p className="text-center text-sm text-brand-text-muted mb-6 font-medium tracking-wide uppercase">
                    Trusted By Industry Leaders & Certified Partners
                </p>
                <LogoLoop
                    items={partnerLogos}
                    speed={30}
                    direction="left"
                    logoHeight={48}
                    gap={56}
                    pauseOnHover={true}
                    fadeEdges={true}
                    scaleOnHover={true}
                />
            </div>
        </section>
    )
}

export default IndustrialHero
