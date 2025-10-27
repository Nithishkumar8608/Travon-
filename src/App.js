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
import Login from "./Component/Pages/Login";
function App() {
  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
    <BrowserRouter>
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
