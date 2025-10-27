import React, { useEffect, useState } from 'react'
import aboutImage from '../../assets/teams-banner.jpg';

const Counter = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalDuration = 2000; // 2 sec
    let incrementTime = 20; // ms
    let step = Math.ceil((end / totalDuration) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="col-md-3 text-center">
      <i className={`bi ${icon} text-warning fs-1 mb-3`}></i>
      <h2 className="fw-bold">{count}+</h2>
      <p>{label}</p>
    </div>

  );
};

const About = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner-section about-banner-section d-flex justify-content-center align-items-center">
        <div className="banner-section-content text-center position-relative">
          <h1 className="fs-1 fw-semibold text-warning">
            <span className="text-white">About</span> Us
          </h1>
        </div>
      </div>

      {/* About Content */}
      <div className=" bg-dark text-white px-4 px-lg-5 py-5">
        <div className="container">
          {/* Company Story */}
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <img
                src={aboutImage}
                alt="Our Cars"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-uppercase fw-semibold text-warning mb-3">
                Who we Are
              </h2>
              <p
                className="text-white mb-4"
                style={{ textAlign: "justify" }}
              >
                We started with a mission to make travel hassle-free. With 500+
                cars and 1000+ happy customers, we’re the fastest-growing car
                rental company in the region.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="luxury-cars text-warning py-5">
            <h2 className="text-center mb-5">
              Why <span className="text-white">Choose Us?</span>
            </h2>
            <div className="row g-4">
              <div className="col-md-3 col-xl-3 ">
                <div className=" bg-secondary text-white rounded shadow p-4  text-center h-100">
                  <i className="bi bi-car-front text-warning  display-4"></i>
                  <h5 className="mt-3 text-white">Wide Selection</h5>
                  <p className="text-white">Choose from economy to luxury cars.</p>
                </div>
              </div>

              <div className="col-md-3 col-xl-3">
                <div className=" bg-secondary text-white rounded shadow p-4 text-center h-100">
                  <i className="bi bi-cash-coin text-warning  display-4 "></i>
                  <h5 className="mt-3">Affordable</h5>
                  <p>Best prices with no hidden fees.</p>
                </div>
              </div>
              <div className="col-md-3 col-xl-3">
                <div className=" bg-secondary text-white rounded shadow p-4 text-center h-100">
                  <i className="bi bi-headset display-4 text-warning"></i>
                  <h5 className="mt-3">24/7 Support</h5>
                  <p>Always here to help you.</p>
                </div>
              </div>
              <div className="col-md-3 col-xl-3">
                <div className=" bg-secondary text-white rounded shadow p-4 text-center h-100">
                  <i className="bi bi-geo-alt display-4 text-warning"></i>
                  <h5 className="mt-3">Easy Pick-up</h5>
                  <p>Pick-up & drop services available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Counter Section */}
          <section className="bg-dark text-white py-5">
            <div className="container">
              <div className="row">
                <Counter target={500} label="Cars Available" icon="bi-car-front-fill" />
                <Counter target={1000} label="Happy Customers" icon="bi-emoji-smile-fill" />
                <Counter target={25} label="Cities Covered" icon="bi-geo-alt-fill" />
                <Counter target={5} label="Years of Service" icon="bi-clock-history" />
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default About;