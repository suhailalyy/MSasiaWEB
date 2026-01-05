import React from 'react';
import './ScrapShowcase.css';
import metalImg from '../../assets/metal.png';
import plasticImg from '../../assets/plastic.png';
import ewasteImg from '../../assets/ewaste.png';

const ScrapShowcase = () => {
    const scraps = [
        {
            id: 1,
            title: 'METAL SCRAP',
            description: 'High-quality industrial metal scrap processing. We handle steel, aluminum, copper, and iron with efficiency and precision for maximum recycling value.',
            image: metalImg
        },
        {
            id: 2,
            title: 'PLASTIC SCRAP',
            description: 'Comprehensive plastic recycling solutions. From PET bottles to industrial HDPE, we transform plastic waste into reusable raw materials.',
            image: plasticImg
        },
        {
            id: 3,
            title: 'E-WASTE',
            description: 'Secure and eco-friendly electronic waste disposal. We ensure data destruction and recovery of precious metals from circuit boards and devices.',
            image: ewasteImg
        }
    ];

    return (
        <section className="scrap-showcase-section">
            <div className="scrap-container">
                {scraps.map((scrap) => (
                    <div key={scrap.id} className="scrap-card">
                        <div className="card-image-wrapper">
                            <img src={scrap.image} alt={scrap.title} className="card-image" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{scrap.title}</h3>
                            <p className="card-description">{scrap.description}</p>
                            <div className="card-actions">
                                <button className="card-btn know-more-btn">Know More</button>
                                <button className="card-btn book-now-btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScrapShowcase;
