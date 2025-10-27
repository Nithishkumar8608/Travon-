import React, { useEffect, useState } from "react";

const Login = ({ setShowLogin }) => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setShowLogin(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setShowLogin]);

  return (
    <>
      {/* Overlay Background */}
      <div
        onClick={() => setShowLogin(false)}
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center"
        style={{ zIndex: 1050 }}
      >
        {/* Modal Box */}
        <form
          onSubmit={onSubmitHandler}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-4 shadow-lg p-4 p-md-5"
          style={{ width: "90%", maxWidth: "400px" }}
        >
          <h4 className="text-center mb-4 fw-semibold">
            <span className="text-primary">User</span>{" "}
            {state === "login" ? "Login" : "Sign Up"}
          </h4>

          {state === "register" && (
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter your name"
                className="form-control"
                type="text"
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="form-control"
              type="email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="form-control"
              type="password"
              required
            />
          </div>

          {/* Toggle between Login / Register */}
          {state === "register" ? (
            <p className="text-center small mb-3">
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-primary fw-medium"
                style={{ cursor: "pointer" }}
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="text-center small mb-3">
              Don’t have an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-primary fw-medium"
                style={{ cursor: "pointer" }}
              >
                Click here
              </span>
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold py-2"
          >
            {state === "register" ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;