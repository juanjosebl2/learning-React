import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { BreafCase } from '../components/BreafCase';
import { Contact } from '../components/Contact';
import { CV } from '../components/CV';
import { Services } from '../components/Services';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Error } from '../components/Error';

export const Rutes = () => {
  return (
    <BrowserRouter>
    
        {/* Header and navegation */}
        <HeaderNav/>

        {/* Core content */}
        <section className='content'>
          <Routes >
              <Route path="/" element={<Navigate to="/home"/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/breafcase" element={<BreafCase/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cv" element={<CV/>} />
              <Route path="/services" element={<Services/>} />
              <Route path='*' element={<Error/>} />

          </Routes>
        </section>

        {/* Footer */}
        <Footer/>

    </BrowserRouter>
  )
}
