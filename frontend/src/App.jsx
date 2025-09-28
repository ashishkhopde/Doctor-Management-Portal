import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navebar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Doctors from './pages/Doctors'
import Treatments from './pages/Treatments';
import DoctorDetails from './pages/DoctorDetails';
import TreatmentsDetails from './pages/TreatmentsDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Doctors' element={<Doctors/>} />
        <Route path='/Treatments' element={<Treatments/>} />
        <Route path='/DoctorDetails/:id' element={<DoctorDetails/>} />
        <Route path='/TreatmentsDetails/:id' element={<TreatmentsDetails/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
