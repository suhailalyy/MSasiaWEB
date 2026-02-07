import { useRef, useEffect, useState } from 'react'

function LogoLoop({
    items = [],
    speed = 40,
    direction = 'left',
    logoHeight = 40,
    gap = 48,
    pauseOnHover = true,
    fadeEdges = true,
    scaleOnHover = false
}) {
    const containerRef = useRef(null)
    const scrollRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)
    const positionRef = useRef(0)
    const animationRef = useRef(null)

    // Clone items to create seamless loop
    const duplicatedItems = [...items, ...items, ...items]

    useEffect(() => {
        const scrollElement = scrollRef.current
        if (!scrollElement) return

        let lastTime = performance.now()

        const animate = (currentTime) => {
            const deltaTime = (currentTime - lastTime) / 1000 // Convert to seconds
            lastTime = currentTime

            if (!isPaused) {
                const totalWidth = scrollElement.scrollWidth / 3

                if (direction === 'left') {
                    positionRef.current -= speed * deltaTime
                    if (positionRef.current <= -totalWidth) {
                        positionRef.current += totalWidth
                    }
                } else {
                    positionRef.current += speed * deltaTime
                    if (positionRef.current >= 0) {
                        positionRef.current -= totalWidth
                    }
                }

                // Use translate3d for GPU acceleration and smoother rendering
                scrollElement.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [speed, direction, isPaused])

    return (
        <div
            ref={containerRef}
            className="logo-loop-container"
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            style={{
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
            }}
        >
            {/* Fade edges */}
            {fadeEdges && (
                <>
                    <div
                        className="logo-loop-fade-left"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '100px',
                            background: 'linear-gradient(to right, var(--brand-bg-main, #f8fafc), transparent)',
                            zIndex: 2,
                            pointerEvents: 'none',
                        }}
                    />
                    <div
                        className="logo-loop-fade-right"
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: '100px',
                            background: 'linear-gradient(to left, var(--brand-bg-main, #f8fafc), transparent)',
                            zIndex: 2,
                            pointerEvents: 'none',
                        }}
                    />
                </>
            )}

            {/* Scrolling content */}
            <div
                ref={scrollRef}
                className="logo-loop-scroll"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: `${gap}px`,
                    width: 'max-content',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    perspective: 1000,
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={index}
                        className="logo-loop-item"
                        style={{
                            height: `${logoHeight}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                            opacity: 0.7,
                            cursor: scaleOnHover ? 'pointer' : 'default',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1'
                            if (scaleOnHover) {
                                e.currentTarget.style.transform = 'scale(1.1)'
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0.7'
                            if (scaleOnHover) {
                                e.currentTarget.style.transform = 'scale(1)'
                            }
                        }}
                    >
                        {typeof item === 'string' ? (
                            <img
                                src={item}
                                alt={`Logo ${index + 1}`}
                                style={{
                                    height: '100%',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    // filter: 'grayscale(100%) brightness(1.2)', // Removed to show original colors
                                }}
                            />
                        ) : (
                            item
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoLoop

