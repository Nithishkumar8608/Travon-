import React from 'react'

const Contact = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="banner-section about-banner-section d-flex justify-content-center align-items-center">
                <div className="banner-section-content text-center position-relative">
                    <h6 className="text-uppercase text-warning">Get In Touch</h6>
                    <h1 className="fs-1 fw-semibold text-warning">
                        <span className="text-white">Contact</span> Us
                    </h1>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-dark text-white px-4 px-lg-5 py-5">
                <div className="container">
                    {/* Contact Info */}
                    <div className="row g-4 mb-5">
                        <div className="col-md-3">
                            <div className="contact-item bg-secondary text-white rounded shadow p-4 text-center h-100">
                                <i className="bi bi-envelope text-warning display-4"></i>
                                <h5 className="mt-3">Email Us</h5>
                                <p>Info@Travon.com</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-item bg-secondary text-white rounded shadow p-4 text-center h-100">
                                <i className="bi bi-geo-alt text-warning display-4"></i>
                                <h5 className="mt-3">Our Address</h5>
                                <p>Madurai, Tamilnadu</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-item bg-secondary text-white rounded shadow p-4 text-center h-100">
                                <i className="bi bi-clock text-warning display-4"></i>
                                <h5 className="mt-3">Opening Hours</h5>
                                <p>Mon-Sun: 8 AM - 7 PM</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-item bg-secondary text-white rounded shadow p-4 text-center h-100">
                                <i className="bi bi-telephone text-warning display-4"></i>
                                <h5 className="mt-3">Call Us</h5>
                                <p>‪+91 2314-765-809‬</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form & Map */}
                    <div className="row g-5 align-items-start">
                        <div className="col-lg-6">
                            <h2 className="text-white fw-semibold mb-4 text-center">Get In Touch</h2>
                            <form className="contact-inputs">
                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="form-control bg-secondary text-white border-0 py-3 px-4"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="form-control bg-secondary text-white border-0 py-3 px-4"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Your Number"
                                            className="form-control bg-secondary text-white border-0 py-3 px-4"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="form-control bg-secondary text-white border-0 py-3 px-4"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <textarea
                                        cols="30"
                                        rows="6"
                                        placeholder="Your Message"
                                        className="form-control bg-secondary text-white border-0 py-3 px-4"
                                        required
                                    ></textarea>
                                </div>

                                <button type="button" className="btn btn-warning fw-semibold px-4 py-2">
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Map Section */}
                        <div className="col-lg-6">
                            <div className="w-100 rounded overflow-hidden shadow" style={{ height: "400px" }}>
                                <iframe
                                    className="w-100 h-100"
                                    title="Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.576648973659!2d78.11977567462092!3d9.925201992917634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041dfb5a5e8f6b%3A0x8c5a0f6177fdf6e6!2sMadurai%20Kamaraj%20University!5e0!3m2!1sen!2sin!4v1696116226146!5m2!1sen!2sin"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact