import './ContactSection.css'


const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Left Side: Images */}
                <div className="contact-images">
                    <img
                        src="/images/contact1.png"
                        alt="Industrial Facility"
                        className="contact-img"
                    />
                    <img
                        src="/images/contact2.png"
                        alt="Project Discussion"
                        className="contact-img"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="contact-content">
                    <span className="contact-label">SEND US EMAIL</span>
                    <h2 className="contact-heading">Let’s discuss a project</h2>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="contact-field">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="john Doe"
                                className="contact-input"
                            />
                        </div>

                        <div className="contact-row">
                            <div className="contact-field">
                                <label>E-mail Address</label>
                                <input
                                    type="email"
                                    placeholder="samplename@gmail.com"
                                    className="contact-input"
                                />
                            </div>
                            <div className="contact-field">
                                <label>Phone No</label>
                                <input
                                    type="tel"
                                    placeholder="Phone no"
                                    className="contact-input"
                                />
                            </div>
                        </div>

                        <div className="contact-field">
                            <label>Product Name</label>
                            <div className="select-wrapper">
                                <select className="contact-select">
                                    <option value="" disabled selected>Choose Product</option>
                                    <option value="scrap">Industrial Scrap</option>
                                    <option value="metal">Metal Recycling</option>
                                    <option value="plastic">Plastic Waste</option>
                                    <option value="electronics">Electronics</option>
                                </select>
                            </div>
                        </div>

                        <div className="contact-field">
                            <label>Message</label>
                            <textarea
                                placeholder="Text Here..."
                                className="contact-textarea"
                            ></textarea>
                        </div>

                        <div className="contact-submit-wrapper">
                            <button type="submit" className="contact-submit-btn">
                                {/* Simple Arrow Up icon using SVG to avoid dependency issues if react-icons not present */}
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
