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
        <section className="industrial-hero">
            <div className="industrial-hero-container">
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
            <div className="industrial-hero-logos">
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

