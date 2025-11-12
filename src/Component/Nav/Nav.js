import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Login from "../Pages/Auth/Login";


const Nav = () => {
  //const [showLogin, setShowLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // background color on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg position-fixed w-100 top-0 ${scrolled ? "bg-dark shadow-sm" : "bg-transparent"
          }`}
        style={{
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          zIndex: 999,
        }}
      >
        <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
          {/* Brand / Logo */}
          <Link className="navbar-brand text-white fw-bold" to="/">
            <img src="" alt="Logo" style={{ width: "150px" }} />
          </Link>

          {/*  Search bar next to hamburger in mobile */}
          <div
            className="d-flex d-lg-none align-items-center border border-secondary rounded-pill px-3 gap-2 me-2"
            style={{ maxWidth: "10rem", fontSize: "0.875rem" }}
          >
            <i className="bi bi-search text-white"></i>
            <input
              type="text"
              className="form-control border-0 bg-transparent py-1 w-100 text-white placeholder-white"
              placeholder="Search"
              style={{ boxShadow: "none", outline: "none" }}
            />
          </div>

          {/* Hamburger for mobile */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu collapses on mobile */}
          <div
            className="collapse navbar-collapse justify-content-center text-center"
            id="navbarNav"
          >
            {/* Added gap between nav items for desktop */}
            <ul className="menu navbar-nav align-items-center mb-3 mb-lg-0 me-lg-4 gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/cars">Cars</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>

              {/* Mobile Login Button */}
              <li className="nav-item d-lg-none mt-3">
                <button
                  // onClick={() => setShowLogin(true)}
                  className="btn rounded nav-btn text-white"
                  style={{ backgroundColor: "#007bff" }}
                ><Link to="/login" className="text-white text-decoration-none">
                    Login</Link>
                </button>
              </li>
            </ul>

            {/* Desktop Search bar */}
            <div
              className="d-none d-lg-flex align-items-center border border-secondary rounded-pill px-3 gap-2 ms-lg-4"
              style={{ maxWidth: "14rem", fontSize: "0.875rem" }}
            >
              <i className="bi bi-search text-white"></i>
              <input
                type="text"
                className="form-control border-0 bg-transparent py-1 w-100 text-white placeholder-white"
                placeholder="Search Cars"
                style={{ boxShadow: "none", outline: "none" }}
              />
            </div>
          </div>

          {/* Desktop Login button */}
          <button
            //onClick={() => setShowLogin(true)}
            className="btn rounded nav-btn text-white ms-lg-3 d-none d-lg-inline-block"
            style={{ backgroundColor: "#007bff" }}
          ><Link to="/login" className="text-white text-decoration-none">
              Login</Link>

          </button>
        </div>
      </nav>

      {/* Login modal */}
      {/* {showLogin && <Login setShowLogin={setShowLogin} />} */}
    </>
  );
};

export default Nav;