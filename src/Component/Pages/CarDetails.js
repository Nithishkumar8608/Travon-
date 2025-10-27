import React, { useState } from "react";
import { useParams } from "react-router-dom";
import carData from "../../Cars.json";

import car1 from "../../assets/cars-slide-01.jpg";
import car2 from "../../assets/cars-slide-02.jpg";
import car3 from "../../assets/cars-slide-03.jpg";
import car4 from "../../assets/cars-slide-04.jpg";
import car5 from "../../assets/banner-car.jpg";
import car6 from "../../assets/cars-slide-05.jpg";

import "react-datepicker/dist/react-datepicker.css";

const CarsDetails = () => {
  const { id } = useParams();

  const car = Array.isArray(carData)
    ? carData.find((c) => c.id === id.toString())
    : carData.cars?.find((c) => c.id === id.toString());

  const imageMap = {
    "cars-slide-01.jpg": car1,
    "cars-slide-02.jpg": car2,
    "cars-slide-03.jpg": car3,
    "cars-slide-04.jpg": car4,
    "banner-car.jpg": car5,
    "cars-slide-05.jpg": car6,
  };

  const carImage = imageMap[car?.image];

  const [openIndex, setOpenIndex] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rentalConditions = [
    {
      title: "Rental Conditions",
      content: "The minimum age for renting a car is 21 years old.",
    },
    {
      title: "Insurance Coverage",
      content:
        "All rentals include basic insurance coverage. Additional coverage options are available at an extra cost.",
    },
    {
      title: "Fuel Policy",
      content:
        "Renters are required to return the car with the same fuel level as at the start of the rental period.",
    },
    {
      title: "Late Return Policy",
      content:
        "Late returns may incur additional charges. Please inform us in advance if you anticipate a delay.",
    },
    {
      title: "Payment Methods",
      content: "We accept major credit cards, debit cards, and cash payments.",
    },
  ];

  if (!car)
    return <div className="text-center text-white mt-5">Car Not Found</div>;

  return (
    <>
      {/* ===== Banner Section ===== */}
      <div className="bg-dark text-white font-roboto">
        <div
          className="position-relative d-flex align-items-end px-3 px-md-5 py-4 py-md-5"
          style={{
            height: "55vh",
            backgroundImage: `url(${carImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
          <div className="position-relative z-1">
            <h6 className="text-uppercase fw-bold text-warning">
              Luxury Cars
            </h6>
            <h1 className="fw-bold fs-2 fs-md-1">{car.name}</h1>
          </div>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="bg-dark text-white px-3 px-md-5 py-5">
        <div className="container">
          <div className="row g-5">
            {/* === Left Content === */}
            <div className="col-12 col-lg-8">
              {/* --- General Information --- */}
              <section className="mb-5">
                <h5 className="fw-bold text-warning mb-3">
                  General Information
                </h5>
                <h2 className="fw-bold mb-4">Know about our car service</h2>
                <p className="text-light small">
                  Lorem pretium fermentum quam, sit amet cursus ante sollicitudin
                  velen morbi consesua the miss sustion consation porttitor orci
                  sit amet iaculis nisan. Lorem pretium fermentum quam sit amet
                  cursus ante sollicitudin velen fermen morbinetion consesua the
                  risus consequation the porttiton.
                </p>

                <div className="d-flex flex-column gap-3 mt-4">
                  {["24/7 Roadside Assistance", "Free Cancellation & Return", "Rent Now Pay When You Arrive"].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="d-flex align-items-center gap-3"
                      >
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-warning"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className="ri-check-double-line"></i>
                        </div>
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </section>

              {/* --- Amenities --- */}
              <section className="mb-5">
                <h5 className="fw-bold text-warning mb-3">Amenities</h5>
                <h2 className="fw-bold mb-4">Premium amenities and features</h2>

                <div className="d-flex flex-column gap-3">
                  {["Power Steering", "Spare Tyre", "Tool Kit"].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="d-flex align-items-center gap-3"
                      >
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-warning"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className="ri-check-double-line"></i>
                        </div>
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </section>

              {/* --- Rental Conditions --- */}
              <section>
                <h5 className="fw-bold text-warning mb-3">
                  Rental Conditions
                </h5>
                <h2 className="fw-bold mb-4">Policies and Agreement</h2>

                <div className="accordion" id="rentalAccordion">
                  {rentalConditions.map((item, index) => (
                    <div
                      key={index}
                      className="accordion-item bg-secondary border-0 mb-3 rounded"
                    >
                      <h2
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                      >
                        <button
                          className={`accordion-button ${openIndex === index ? "" : "collapsed"
                            } bg-secondary text-white`}
                          type="button"
                        >
                          <span className="me-2 fw-medium">
                            {index + 1}. {item.title}
                          </span>
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${openIndex === index ? "show" : ""
                          }`}
                      >
                        <div className="accordion-body text-light small">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="col-12 col-lg-4">
              <div className="bg-dark rounded-4 p-4 p-md-5 shadow-lg  d-flex flex-column justify-content-between">

                {/* Price Section */}
                <div className="text-center mb-5">
                  <h4 className="fw-bold text-warning mb-2">${car.price}</h4>
                  <p className="text-white-50 mb-0">Rent Per Day</p>
                  <div className="border-bottom border-secondary mt-3"></div>
                </div>

                {/* Car Features */}
                <ul className="list-unstyled fs-6 mb-5">
                  <li className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                    <span><i className="ri-door-line text-warning me-2"></i> Doors</span>
                    <span className="text-white">{car.door}</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                    <span><i className="ri-user-line text-warning me-2"></i> Passenger</span>
                    <span className="text-white">{car.passengers}</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                    <span><i className="ri-settings-5-line text-warning me-2"></i> Transmission</span>
                    <span className="text-white">{car.transmission}</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                    <span><i className="ri-suitcase-line text-warning me-2"></i> Luggage</span>
                    <span className="text-white">{car.Bages}</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary">
                    <span><i className="ri-windy-line text-warning me-2"></i> Air Condition</span>
                    <span className="text-white">Yes</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-2">
                    <span><i className="ri-calendar-line text-warning me-2"></i> Age</span>
                    <span className="text-white">25+</span>
                  </li>
                </ul>

                {/* Button Section */}
                <div className="mt-auto gap-3">
                  <button
                    onClick={() => setShowModel(true)}
                    className="btn btn-warning text-dark fw-semibold rounded-2 py-2 w-50"
                  >
                    Book Now
                  </button>
                  
                </div>
              </div>
            </div>

            {/* ===== Booking Modal ===== */}
            {showModel && (
              <div className="modal show fade d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-md">
                  <div className="modal-content bg-dark text-warning rounded-4 p-2 p-md-3">
                    <div className="modal-header border-0">
                      <h5 className="modal-title">Book Your Dream Car</h5>
                      <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={() => setShowModel(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setShowModel(false);
                          setShowSuccessModal(true);
                        }}
                      >
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label">Full Name*</label>
                            <input type="text" required className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Email*</label>
                            <input type="email" required className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Phone*</label>
                            <input type="tel" required className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Car Type*</label>
                            <select className="form-select" required>
                              <option hidden>Choose Car Type</option>
                              <option>Lamborghini</option>
                              <option>Rolls Royce</option>
                              <option>Bentley</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Pick-Up Location*</label>
                            <select className="form-select" required>
                              <option hidden>Pick-Up Location</option>
                              <option>Dubai</option>
                              <option>Abu Dhabi</option>
                              <option>Sharjah</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Drop-Off Location*</label>
                            <select className="form-select" required>
                              <option hidden>Drop-Off Location</option>
                              <option>Dubai</option>
                              <option>Abu Dhabi</option>
                              <option>Sharjah</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Pick-Up Date*</label>
                            <input type="date" className="form-control" required />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Drop-Off Date*</label>
                            <input type="date" className="form-control" required />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Additional Notes</label>
                            <textarea
                              rows="3"
                              className="form-control"
                              placeholder="Write any special request..."
                            ></textarea>
                          </div>
                        </div>

                        <div className="mt-4 text-center">
                          <button
                            type="submit"
                            className="btn btn-warning w-100 py-2 fw-bold text-dark"
                          >
                            Rent Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===== Success Modal ===== */}
            {showSuccessModal && (
              <div className="modal show fade d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                  <div className="modal-content text-dark">
                    <div className="modal-body text-center p-5">
                      <h4 className="fw-bold text-success mb-3">
                        Booking Confirmed!
                      </h4>
                      <p>Your car has been successfully booked.</p>
                      <button
                        className="btn btn-success mt-3"
                        onClick={() => setShowSuccessModal(false)}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsDetails;
