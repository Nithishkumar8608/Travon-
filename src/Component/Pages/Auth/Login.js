import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthImage from '../../../assets/Porshce.gif';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {

            // Required fields validation
            if (!email || !password) {
                return toast.error('All fields are required');
            }

            // Email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                return toast.error('Enter a valid email address');
            }

            // Password basic check
            if (password.length < 6) {
                return toast.error('Password must be at least 6 characters');
            }

            setLoading(true);

            console.log('auth form data', { email, password });

            setTimeout(() => {
                setEmail('');
                setPassword('');
                setLoading(false);

                toast.success('Login Successful');
                navigate('/');
            }, 1200);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div
            className="container-fluid min-vh-100 d-flex align-items-start justify-content-center px-3 py-5"
            style={{
                background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="row w-100 shadow-lg rounded-4 overflow-hidden mt-5"
                style={{
                    maxWidth: '850px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                {/* GIF Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="col-12 col-md-5 p-0 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: '#222' }}
                >
                    <motion.img
                        src={AuthImage}
                        alt="auth"
                        className="img-fluid"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            maxHeight: 'none',
                            opacity: 0.9,
                        }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                    />
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="col-12 col-md-7 text-white d-flex flex-column justify-content-start p-4 p-md-5"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <h3 className="text-center mb-4 fw-bold text-warning mt-3">
                        Login Form
                    </h3>

                    <form onSubmit={handleSubmit} className="mt-4 mb-0">

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control bg-transparent text-white border-light"
                                placeholder="Enter Email"
                                id="exampleInputEmail"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword" className="form-label text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control bg-transparent text-white border-light"
                                placeholder="Enter Password"
                                id="exampleInputPassword"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={loading}
                            className="btn btn-warning w-100 fw-bold mt-3 mb-0"
                        >
                            {loading ? "Processing..." : "Login"}
                        </motion.button>

                        <div className="mb-3">
                            <h5>Don't Have Account ? <Link to='/register'>Register</Link></h5>
                        </div>

                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;
