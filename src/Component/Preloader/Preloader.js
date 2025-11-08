import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ duration = 1500, onFinish }) => {
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), duration);
    return () => clearTimeout(t);
  }, [duration, onFinish]);

  return (
    <div className="preloader-overlay" role="status" aria-label="Loading">
      <div className="preloader-card">
        <div className="preloader-ring" aria-hidden>
          <span className="ring-segment"></span>
          <span className="ring-segment"></span>
          <span className="ring-segment"></span>
          <i className="bi bi-car-front-fill preloader-icon" />
        </div>

        <div className="preloader-text">
          <h1 className="brand">Travon</h1>
          <p className="tagline">Premium car rentals — driven by trust</p>
        </div>

        <div className="preloader-bar" aria-hidden>
          <div className="bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;