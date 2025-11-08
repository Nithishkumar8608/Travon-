import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav/Nav';

import Home from './Component/Pages/Home';
import Footer from './Component/Footer/Footer';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Service from './Component/Pages/Service';
import Car from './Component/Pages/Car';
import CarsDetails from './Component/Pages/CarDetails';
import { useState } from "react";
import Login from "./Component/Pages/Auth/Login";
import Register from "./Component/Pages/Auth/Register";
import {Toaster} from 'react-hot-toast';
import { useEffect } from "react";
import Preloader from "./Component/Preloader/Preloader";
function App() {
  const[showLogin,setShowLogin] = useState(false);
// show preloader on first mount
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
    {loading && <Preloader onFinish={() => setLoading(false)} duration={1500} />}

    <BrowserRouter>
    <Toaster/>
    {showLogin && <Login setShowLogin={setShowLogin}/>}

    <Nav setShowLogin={setShowLogin}/>
    <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Service/>}></Route>
    <Route path='/cars' element={<Car/>}></Route>
    <Route path='/car/:id' element={<CarsDetails />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
