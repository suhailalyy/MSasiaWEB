import './WorkProcess.css'

const steps = [
    {
        number: '01',
        image: '/images/step1.jpg',
        title: 'Scrap Evaluation'
    },
    {
        number: '02',
        image: '/images/step2.jpg',
        title: 'Pickup & Logistics'
    },
    {
        number: '03',
        image: '/images/step3.jpg',
        title: 'Weighing Process'
    },
    {
        number: '04',
        image: '/images/step4.jpg',
        title: 'Instant Payment'
    }
]

function WorkProcess() {
    return (
        <section className="work-process-section">
            <div className="work-process-container">
                {/* Section Label */}
                <span className="work-process-label">OUR WORK PROCESS</span>

                {/* Section Heading */}
                <h2 className="work-process-heading">
                    Easy Steps to Sell Your Industrial Scrap
                </h2>

                {/* Steps Grid */}
                <div className="work-process-grid">
                    {steps.map((step, index) => (
                        <div className="work-process-step" key={index}>
                            {/* Image with Badge */}
                            <div className="work-process-image-wrapper">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="work-process-image"
                                />
                                <span className="work-process-badge">{step.number}</span>
                            </div>

                            {/* Step Title */}
                            <h3 className="work-process-title">{step.title}</h3>

                            {/* Connector Line (will only show on desktop via CSS) */}
                            <div className="work-process-connector"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkProcess
