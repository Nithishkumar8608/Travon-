import React, { useState } from "react";
import { Link } from "react-router-dom";
import car1 from "../../assets/cars-slide-01.jpg";
import car2 from "../../assets/cars-slide-02.jpg";
import car3 from "../../assets/cars-slide-05.jpg";
import car4 from "../../assets/cars-slide-03.jpg";
import car5 from "../../assets/banner-car.jpg";
import car6 from "../../assets/cars-slide-04.jpg";

const CarsList = [
    { id: "1", name: "Lamborghini Urus", brand: "Lambo", image: car1, door: "4", passengers: "5", transmission: "auto", Bages: "2 Bages", price: "750" },
    { id: "2", name: "Ferrari Roma", brand: "Ferrari", image: car2, door: "4", passengers: "5", transmission: "auto", Bages: "2 Bages", price: "500" },
    { id: "3", name: "Rolls Royce", brand: "Rolls", image: car3, door: "4", passengers: "5", transmission: "auto", Bages: "2 Bages", price: "700" },
    { id: "4", name: "Bugati Mistral", brand: "Bugati", image: car4, door: "4", passengers: "5", transmission: "auto", Bages: "2 Bages", price: "800" },
    { id: "5", name: "Aston Martin DBX", brand: "Aston", image: car5, door: "4", passengers: "5", transmission: "auto", Bages: "2 Bages", price: "1000" },
    { id: "6", name: "Bentley Bentayga", brand: "Bentley", image: car6, door: "4", passengers: "5", transmission: "auto", Bages: "2 Bages", price: "1000" },
];

const Cars = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);

    // Handle selecting or deselecting filters
    const toggleBrand = (brand) => {
        if (brand === "All") {
            setSelectedBrands([]); // Reset all filters
        } else {
            setSelectedBrands((prev) =>
                prev.includes(brand)
                    ? prev.filter((b) => b !== brand) // Remove if already selected
                    : [...prev, brand] // Add if not selected
            );
        }
    };

    // Filter logic
    const filteredCars =
        selectedBrands.length === 0
            ? CarsList
            : CarsList.filter((car) => selectedBrands.includes(car.brand));

    return (
        <>
            {/* Banner Section */}
            <div className="banner-section about-banner-section d-flex justify-content-center align-items-center">
                <div className="banner-section-content text-center position-relative">
                    <h6 className="text-uppercase text-warning">Enjoy Your Rides</h6>
                    <h1 className="fs-1 fw-semibold text-warning">
                        <span className="text-white">Cars</span> List
                    </h1>
                </div>
            </div>

            {/* Cars Section */}
            <div className="bg-dark text-white px-4 px-lg-5 py-5">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="recommended-btns mb-4 d-flex flex-wrap gap-2 justify-content-center">
                        {["All", "Lambo", "Aston", "Rolls", "Bugati", "Audi", "Bentley"].map((brand) => (
                            <button
                                key={brand}
                                className={`btn ${selectedBrands.includes(brand) || (brand === "All" && selectedBrands.length === 0)
                                    ? "btn-warning"
                                    : "btn-outline-warning"
                                    }`}
                                onClick={() => toggleBrand(brand)}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>

                    {/* Cars Grid */}
                    <div className="flex-grow-1 animate-fade-in">
                        <div className="row g-4">
                            {filteredCars.length > 0 ? (
                                filteredCars.map((car) => (
                                    <div key={car.id} className="col-12 col-md-6 col-xl-4">
                                        <div className="car-card bg-secondary text-white rounded shadow p-4 h-100">
                                            <img src={car.image} alt={car.name} className="img-fluid mb-3 object-cover rounded" />
                                            <h5 className="fw-semibold">{car.name}</h5>
                                            <ul className="list-unstyled small mb-2">
                                                <li><i className="ri-door-line mr-2 text-warning"></i> {car.door} Doors</li>
                                                <li><i className="ri-user-line mr-2 text-warning  "></i> {car.passengers} Passengers</li>
                                                <li><i className="ri-settings-2-line mr-2 text-warning"></i> {car.transmission}</li>
                                                <li><i className="ri-suitcase-line mr-2 text-warning"></i> {car.Bages}</li>
                                            </ul>
                                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                                <p className="text-warning fw-bold fs-5 mb-0">
                                                    ${car.price}
                                                    <span className="fs-6 text-white">/day</span>
                                                </p>
                                                <Link to={`/car/${car.id}`}>
                                                    <button className="btn btn-warning text-dark rounded-pill btn-sm">
                                                        Details
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-5">
                                    <h5 className="text-muted">No cars found for selected filters.</h5>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cars;