import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="text-white bg-dark d-flex flex-column justify-content-center align-items-center px-4 px-lg-5 pt-5">

                {/* Top Contact Section */}
                <div className="row g-3 mb-5 align-items-center justify-content-center text-center border border-dark w-100">
                    <div className="col-md-3 d-flex flex-row align-items-center gap-3 p-4 border-end border-dark">
                        <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                            <i className="ri-phone-line fs-4"></i>
                        </div>
                        <div>
                            <h5 className="fw-semibold ">Call us</h5>
                            <p className="mb-0">+034 32-432-4524</p>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex flex-row align-items-center gap-3 p-4 border-end border-dark">
                        <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                            <i className="ri-mail-line fs-4"></i>
                        </div>
                        <div>
                            <h5 className="fw-semibold">Write to us</h5>
                            <p className="mb-0">info@travon.com</p>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex flex-row align-items-center gap-3 p-4">
                        <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                            <i className="ri-map-pin-line fs-4"></i>
                        </div>
                        <div>
                            <h5 className="fw-semibold">Address</h5>
                            <p className="mb-0">Madurai, Tamilnadu</p>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className=" border-secondary pb-5 w-100 text-white px-3">
                    <div className="row gy-5">
                        {/* About */}
                        <div className="col-md-3">
                            <Link to="/" ><img src="" alt="Logo" style={{ width: "150px" }} /></Link>
                            <p className="text-white mb-4">
                                Rent a Car offers a big choice of vehicles for all your driving needs. We have the perfect car to meet your needs.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="/" className="border border-warning text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="/" className="border border-warning text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="/" className="border border-warning text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-3">
                            <h4 className="h5 fw-semibold mb-3 footer-menu text-warning">Quick Links</h4>
                            <ul className="list-unstyled text-secondary">
                                <li className="mb-2"><Link className="nav-link text-white" to="/">Home</Link></li>
                                <li className="mb-2"><Link className="nav-link text-white" to="/about">About</Link></li>
                                <li className="mb-2"><Link className="nav-link text-white" to="/services">Services</Link></li>
                                <li className="mb-2"><Link className="nav-link text-white" to="/cars">Cars</Link></li>
                                <li className="mb-2"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="h5 fw-semibold mb-3 text-warning">Useful Links</h4>
                            <ul className="list-unstyled text-secondary">
                                <li className="mb-2"><a href="/" className="text-decoration-none text-secondary hover-link">Home</a></li>
                                <li className="mb-2"><a href="/" className="text-decoration-none text-secondary hover-link">About</a></li>
                                <li className="mb-2"><a href="/" className="text-decoration-none text-secondary hover-link">Services</a></li>
                                <li className="mb-2"><a href="/" className="text-decoration-none text-secondary hover-link">Car</a></li>
                                <li className="mb-2"><a href="/" className="text-decoration-none text-secondary hover-link">Contact</a></li>
                            </ul>
                        </div>

                        {/* Subscribe */}
                        <div className="col-md-3">
                            <h4 className="h5 fw-semibold mb-3 text-warning">Subscribe</h4>
                            <p className="text-secondary small mb-3">Lorem ipsum dolor</p>
                            <div className="input-group">
                                <input type="email" className="form-control bg-dark text-white border-warning" placeholder="Your email address" />
                                <button className="btn btn-warning text-dark">
                                    <i className="ri-arrow-right-up-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-secondary text-center py-4 border-top border-secondary w-100">
                    <p className="mb-0">
                        2025 <span className="text-white">Travon.com</span>. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer