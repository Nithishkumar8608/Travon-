import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Autoplay, Pagination } from "swiper/modules";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import aboutImage from "../../assets/about.jpg";
import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
import car3 from "../../assets/car-3.jpg";
import car4 from "../../assets/car-4.jpg";
import car5 from "../../assets/car-5.jpg";
import car6 from "../../assets/car-6.jpg";

import test1 from "../../assets/test-1.jpg";
import test2 from "../../assets/test-2.jpg";
import test3 from "../../assets/test-3.jpg";
import test4 from "../../assets/test-4.jpg";
import test5 from "../../assets/test-5.jpg";

import brand1 from '../../assets/brand-1.png';
import brand2 from '../../assets/brand-2.png';
import brand3 from '../../assets/brand-3.png';
import brand4 from '../../assets/brand-4.png';
import brand5 from '../../assets/brand-5.png';
import brand6 from '../../assets/brand-6.png';
import brand7 from '../../assets/brand-7.png';

const Cars = [
  {
    id: "1",
    name: "Lamborghini Urus",
    image: car1,
    door: "4",
    passengers: "5",
    transmission: "auto",
    Bages: "2 Bages",
    price: "750",
  },
  {
    id: "2",
    name: "Ferrari Roma",
    image: car2,
    door: "4",
    passengers: "5",
    transmission: "auto",
    Bages: "2 Bages",
    price: "500",
  },
  {
    id: "3",
    name: "Porsche 911",
    image: car3,
    door: "4",
    passengers: "5",
    transmission: "auto",
    Bages: "2 Bages",
    price: "700",
  },
  {
    id: "4",
    name: "Bugati Mistral",
    image: car4,
    door: "4",
    passengers: "5",
    transmission: "auto",
    Bages: "2 Bages",
    price: "800",
  },
  {
    id: "5",
    name: "Aston Martin DBX",
    image: car5,
    door: "4",
    passengers: "5",
    transmission: "auto",
    Bages: "2 Bages",
    price: "1000",
  },
  {
    id: "6",
    name: "Bentley Bentayga",
    image: car6,
    door: "4",
    passengers: "5",
    transmission: "auto",
    Bages: "2 Bages",
    price: "1000",
  },
];

const Home = () => {
  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null);

  const opencalendar = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  const [returnDate, setReturnDate] = useState(null);
  const returnPickerRef = useRef(null);

  const openreturenCalendar = () => {
    if (returnPickerRef.current) {
      returnPickerRef.current.setFocus();
    }
  };

  return (
    <>

      <div className="hero w-100 vh-100 overflow-hidden position-relative">
        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          speed={1500}
          className="w-100 h-100"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero-slide d-flex align-items-center px-3 px-sm-5 h-100">
              <div className="text-white">
                <span className="text-uppercase small fw-bold">Premium</span>
                <h1 className="display-3 fw-bold my-3">Rental Car</h1>
                <p className="fs-5 text-light">
                  You can Rent any of our Luxury Cars
                </p>
                <p className="my-4 text-light w-75">
                  Experience Premium car rentals with comfort, style and perfect
                  for road trips, business travel
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-slide hero-slide2 d-flex align-items-center px-3 px-sm-5 h-100">
              <div className="text-white">
                <span className="text-uppercase small fw-bold">Premium</span>
                <h1 className="display-3 fw-bold my-3">Rental Car</h1>
                <p className="fs-5 text-light">
                  You can Rent any of our Luxury Cars
                </p>
                <p className="my-4 text-light w-75">
                  Experience Premium car rentals with comfort, style and perfect
                  for road trips, business travel
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Booking Options */}
        <div
          className="book-option bg-dark text-white w-100 w-md-75 mx-auto rounded shadow-lg p-4 position-absolute start-50 translate-middle-x"
          style={{ bottom: "40px", maxWidth: "1200px" }}
        >
          <div className="row g-3">
            {/* Drop Down 1 */}
            <div className="col-12 col-sm-6 col-lg border p-2 border-secondary rounded d-flex  mx-2 align-items-center position-relative">
              <button
                className="bg-transparent text-secondary w-100 text-center border rounded d-flex justify-content-between align-items-center"
                data-bs-toggle="dropdown"
              >
                Select Car Type{" "}
                <i className="bi bi-caret-down-fill text-warning"></i>
              </button>
              <ul className="dropdown-menu bg-dark text-white border border-warning">
                <li>
                  <button className="dropdown-item text-white">Sports Cars</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Convertible</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Luxury Cars</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Small Cars</button>
                </li>
              </ul>
            </div>

            {/* Drop Down 2 */}
            <div className="col-12 col-sm-6 col-lg border p-2 border-secondary rounded mx-2 d-flex align-items-center position-relative">
              <button
                className="bg-transparent text-secondary w-100 text-center border rounded d-flex justify-content-between align-items-center"
                data-bs-toggle="dropdown"
              >
                Pick Up Location{" "}
                <i className="bi bi-caret-down-fill text-warning"></i>
              </button>
              <ul className="dropdown-menu bg-dark text-white border border-warning">
                <li>
                  <button className="dropdown-item text-white">Sharjah</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Dubai</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Alain</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Abu Dhabi</button>
                </li>
              </ul>
            </div>

            {/* Pick Up Date */}
            <div
              className="col-12 col-sm-6 col-lg border p-2 border-secondary rounded d-flex mx-2 align-items-center"
              onClick={opencalendar}
            >
              <DatePicker
                selected={pickUpDate}
                onChange={(date) => setPickUpDate(date)}
                dateFormat="dd MMM yyyy"
                placeholderText="Pick Up Date"
                ref={datePickerRef}
                className={`form-control bg-dark text-white border-0 w-100 ${!pickUpDate ? "text-muted" : ""
                  }`}
                calendarClassName="dark-datepicker"
                popperPlacement="bottom-start"
              />
              <i className="bi bi-calendar text-warning ms-2"></i>
            </div>

            {/* Drop Down 3 */}
            <div className="col-12 col-sm-6 col-lg  border p-2 border-secondary rounded d-flex align-items-center mx-2 position-relative">
              <button
                className="bg-transparent text-secondary w-100 text-center border rounded d-flex justify-content-between align-items-center"
                data-bs-toggle="dropdown"
              >
                Drop Off Location{" "}
                <i className="bi bi-caret-down-fill text-warning"></i>
              </button>
              <ul className="dropdown-menu bg-dark text-white border border-warning">
                <li>
                  <button className="dropdown-item text-white">Sharjah</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Dubai</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Alain</button>
                </li>
                <li>
                  <button className="dropdown-item text-white">Abu Dhabi</button>
                </li>
              </ul>
            </div>

            {/* Return Date */}
            <div
              className="col-12 col-sm-6 col-lg border p-2 border-secondary rounded d-flex align-items-center mx-2"
              onClick={openreturenCalendar}
            >
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="dd MMM yyyy"
                placeholderText="Return Date"
                ref={returnPickerRef}
                className={`form-control bg-dark text-white border-0 w-100 ${!returnDate ? "text-muted" : ""
                  }`}
                calendarClassName="dark-datepicker"
                popperPlacement="bottom-start"
              />
              <i className="bi bi-calendar text-warning ms-2"></i>
            </div>
          </div>
        </div>
      </div>


      {/* About Section */}
      <div className="about bg-dark text-white px-4 px-lg-5 py-5">
        <div className="container">

          {/* Brands */}
          <div className="footer-brands bg-dark w-100 px-lg-5 px-4 py-5">
            <Swiper
              spaceBetween={0}
              slidesPerView={5}
              loop={true}
              speed={1500}
              autoplay={{ delay: 2000 }}
              className="footer-brands-swiper"
              breakpoints={{
                1399: {
                  slidesPerView: 5
                },
                767: {
                  slidesPerView: 5
                },
                575: {
                  slidesPerView: 4
                },
                0: {
                  slidesPerView: 3
                }
              }}
            >
              <SwiperSlide>
                <div className="brand-image overflow-hidden h-100 w-100 position-relative">
                  <img
                    src={brand1}
                    alt="brand-image"
                    className="img-fluid w-100 h-100 object-fit-cover transition"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image overflow-hidden h-100 w-100 position-relative">
                  <img
                    src={brand2}
                    alt="brand-image"
                    className="img-fluid w-100 h-100 object-fit-cover transition"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image overflow-hidden h-100 w-100 position-relative">
                  <img
                    src={brand3}
                    alt="brand-image"
                    className="img-fluid w-100 h-100 object-fit-cover transition"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image overflow-hidden h-100 w-100 position-relative">
                  <img
                    src={brand4}
                    alt="brand-image"
                    className="img-fluid w-100 h-100 object-fit-cover transition"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image overflow-hidden h-100 w-100 position-relative">
                  <img
                    src={brand5}
                    alt="brand-image"
                    className="img-fluid w-100 h-100 object-fit-cover transition"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image overflow-hidden h-100 w-100 position-relative">
                  <img
                    src={brand6}
                    alt="brand-image"
                    className="img-fluid w-100 h-100 object-fit-cover transition"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-image overflow-hidden h-100 w-100 position-relative">
                  <img
                    src={brand7}
                    alt="brand-image"
                    className="img-fluid w-100 h-100 object-fit-cover transition"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>


          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <p className="text-uppercase small fw-semibold text-warning mb-2">
                Travon
              </p>
              <h2 className="fw-bold mb-3">
                We are More Than <br />
                <span className="text-warning">A Car Rental Company</span>
              </h2>
              <p className="text-white mb-4">car repair</p>

              <div className="mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-warning"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="ri-check-double-line"></i>
                  </div>
                  <span>Sports and Luxury Cars</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-warning"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="ri-check-double-line"></i>
                  </div>
                  <span>Economy Cars</span>
                </div>
              </div>

              <button className="about-btn px-4 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-2">
                Read More <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 position-relative">
              <img src={aboutImage} alt="" className="img-fluid rounded-3" />

              <div className="curv position-absolute top-150 start-30 translate-middle">
                <div className="about-item-curv section-item-curv">
                  <i className="ri-play-line fs-4"></i>
                </div>
              </div>
            </div>

            {/* Luxury Cars */}
            <div className="luxury-cars text-white py-5">
              <div className="text-center mb-5">
                <p
                  className="text-uppercase small text-warning mb-2"
                  style={{ letterSpacing: "2px" }}
                >
                  Select Your Cars
                </p>
                <h2 className="fw-bold mb-3">
                  Luxury <span className="text-warning">Car Fleet</span>
                </h2>
              </div>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                speed={1500}
                className="pb-4 custom-swiper"
              >
                {Cars.map((car) => (
                  <SwiperSlide key={car.id}>
                    <div className="bg-dark rounded overflow-hidden h-100 shadow-sm">
                      {/* Image */}
                      <img
                        src={car.image}
                        alt={car.name}
                        className="img-fluid w-100"
                        style={{ height: "280px", objectFit: "cover" }}
                      />

                      {/* Card Body */}
                      <div className="p-4">
                        <h3 className="h5 fw-semibold text-white">{car.name}</h3>

                        {/* Car Info */}
                        <div className="d-flex flex-wrap gap-3 small mt-3 text-secondary">
                          <span>
                            <i className="bi bi-door-closed text-warning me-1"></i>
                            {car.door}
                          </span>
                          <span>
                            <i className="bi bi-people text-warning me-1"></i>
                            {car.passengers}
                          </span>
                          <span>
                            <i className="bi bi-gear text-warning me-1"></i>
                            {car.transmission}
                          </span>
                          <span>
                            <i className="bi bi-briefcase text-warning me-1"></i>
                            {car.Bages}
                          </span>
                        </div>

                        {/* Footer (Details + Price) */}
                        <div className="mt-4 d-flex justify-content-between align-items-center">
                          <button className="btn btn-warning text-dark rounded-pill btn-sm">
                            Details
                          </button>
                          <p className="text-warning fw-bold fs-5 mb-0">
                            ${car.price}
                            <span className="fs-6 text-white">/day</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Services */}
            <div className="our-service py-5 bg-dark">
              <div className="our-service-content mb-5 text-center text-white">
                <p className="text-uppercase small letter-spacing text-warning mb-2">
                  What We Do
                </p>
                <h2 className="fw-bold mb-3">Our Services</h2>
              </div>

              <div className="our-service-wrapper container">
                <div className="row g-4">
                  <div className="col-12 col-lg-6 col-xl-4">
                    <div className="service-item position-relative text-white rounded-4 bg-black p-4 h-100">
                      <h5 className="fw-semibold fs-4 mb-3">Daily Car Rental</h5>
                      <p className="text-white fs-5">lorem ipsum</p>
                      <div className="curv position-absolute bottom-0 end-0 p-3">
                        <div className="service-item-curv section-item-curv fw-bold">
                          1.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6 col-xl-4">
                    <div className="service-item position-relative text-white rounded-4 bg-black p-4 h-100">
                      <h5 className="fw-semibold fs-4 mb-3">Monthly Car Rental</h5>
                      <p className="text-white fs-5">lorem ipsum</p>
                      <div className="curv position-absolute bottom-0 end-0 p-3">
                        <div className="service-item-curv section-item-curv fw-bold">
                          2.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6 col-xl-4">
                    <div className="service-item position-relative text-white rounded-4 bg-black p-4 h-100">
                      <h5 className="fw-semibold fs-4 mb-3">Annual Car Rental</h5>
                      <p className="text-white fs-5">lorem ipsum</p>
                      <div className="curv position-absolute bottom-0 end-0 p-3">
                        <div className="service-item-curv section-item-curv fw-bold">
                          3.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="Testimonials px-4 px-lg-5 py-5 bg-dark">
              <div className="our-service-content mb-5 text-center text-white">
                <p className="text-uppercase small text-warning mb-2">
                  Testimonials
                </p>
                <h2 className="fw-bold mb-3">
                  What Client <span className="text-warning">Say</span>
                </h2>
              </div>

              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  1024: { slidesPerView: 2 },
                  1400: { slidesPerView: 3 },
                }}
              >
                <SwiperSlide>
                  <div className="rounded-4 bg-secondary text-start p-4 shadow h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="fs-1 text-warning me-3">"</span>

                      <div className="stars d-flex">
                        {/* Stars */}
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                      </div>
                    </div>

                    <p className="text-light flex-grow-1 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>

                    <div className="d-flex align-items-center">
                      <img
                        src={test1}
                        alt="user"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold text-warning">Olivia Brown</h6>
                        <small className="text-light">Customer</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="rounded-4 bg-secondary text-start p-4 shadow h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="fs-1 text-warning me-3">"</span>

                      <div className="stars d-flex">
                        {/* Stars */}
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                      </div>
                    </div>

                    <p className="text-light flex-grow-1 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>

                    <div className="d-flex align-items-center">
                      <img
                        src={test2}
                        alt="user"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold text-warning">John Doe</h6>
                        <small className="text-light">Customer</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-4 bg-secondary text-start p-4 shadow h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="fs-1 text-warning me-3">"</span>

                      <div className="stars d-flex">
                        {/* Stars */}
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                      </div>
                    </div>

                    <p className="text-light flex-grow-1 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>

                    <div className="d-flex align-items-center">
                      <img
                        src={test3}
                        alt="user"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold text-warning">Nancy</h6>
                        <small className="text-light">Customer</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-4 bg-secondary text-start p-4 shadow h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="fs-1 text-warning me-3">"</span>

                      <div className="stars d-flex">
                        {/* Stars */}
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                      </div>
                    </div>

                    <p className="text-light flex-grow-1 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>

                    <div className="d-flex align-items-center">
                      <img
                        src={test4}
                        alt="user"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold text-warning">Emily Martin</h6>
                        <small className="text-light">Customer</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-4 bg-secondary text-start p-4 shadow h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="fs-1 text-warning me-3">"</span>

                      <div className="stars d-flex">
                        {/* Stars */}
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                      </div>
                    </div>

                    <p className="text-light flex-grow-1 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>

                    <div className="d-flex align-items-center">
                      <img
                        src={test5}
                        alt="user"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold text-warning">Dan Martin</h6>
                        <small className="text-light">Customer</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-banner text-white px-4 px-lg-5 py-5">
        <div className="footer-banner-content text-white position-relative">
          <p className="text-uppercase text-warning text-center small mb-2" >
            Rent Your Car
          </p>
          <h2 className="fw-bold mb-3 text-center text-white" >
            Interested in Renting?
          </h2>
          <p className="py-3 text-center">Don't hesitate and send us a message</p>
          <div className="footer-banner-button mt-4 d-flex flex-column flex-sm-row gap-3 text-black">
            <button className=" about-btn px-4 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-2">
              <i className="fa-brands fa-whatsapp pe-2 fs-4"></i>
              Whatsapp
            </button>

            <button className=" about-btn px-4 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-2">
              Rent Now
              <i className="ri-arrow-right-up-line fs-4 ps-2"></i>
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;