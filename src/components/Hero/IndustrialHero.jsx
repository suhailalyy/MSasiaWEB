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
                    {/* Main Heading */}
                    <h1 className="industrial-hero-heading">
                        Pharmaceutical Waste Management & Compliance Solutions
                    </h1>

                    {/* Sub-heading */}
                    <p className="industrial-hero-subheading">
                        Ms Asia delivers certified collection, recycling, and disposal services for pharmaceutical and industrial waste across Southeast Asia — ensuring regulatory compliance at every step.
                    </p>

                    {/* Feature Points */}
                    <div className="industrial-hero-features">
                        <div className="industrial-hero-feature">
                            <div className="industrial-hero-feature-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>Compliant Collection & Transport</span>
                        </div>
                        <div className="industrial-hero-feature">
                            <div className="industrial-hero-feature-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>Eco-Friendly Recycling & Recovery</span>
                        </div>
                        <div className="industrial-hero-feature">
                            <div className="industrial-hero-feature-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>Manufacturing Waste Disposal</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="industrial-hero-cta">
                        <a href="#contact" className="industrial-btn-primary">
                            Get Waste Audit
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a href="#services" className="industrial-btn-secondary">
                            View Services
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE (40%) */}
                <div className="industrial-hero-image">
                    <div className="industrial-hero-image-wrapper">
                        {/* Placeholder for industrial image */}
                        <div className="industrial-hero-placeholder">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Industrial Facility</span>
                        </div>
                        {/* Certification Badge */}
                        <div className="industrial-hero-badge">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>ISO 14001 Certified</span>
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

