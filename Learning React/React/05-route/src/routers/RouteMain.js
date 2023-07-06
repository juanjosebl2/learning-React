import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Main } from '../components/Main';
import { Contact } from '../components/Contact';
import { Article } from '../components/Article';
import { Error } from '../components/Error';
import '../App.css';
import { PanelControl } from '../components/PanelControl';
import { Home } from '../components/panel/Home';
import { Management } from '../components/panel/Management';

export const RouteMain = () => {
  return (

    <BrowserRouter>

        <h1>Header</h1>
        <hr/>
        
        <nav>
            <ul>
                <li><NavLink 
                    to="/main" 
                    className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/article" >Article</NavLink></li>
                <li><NavLink to="/panel" >Panel Control</NavLink></li>

            </ul>
        </nav>

        <h1>Menu</h1>
        <hr/>

        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/main' element={<Main />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/article/:name/:lastname' element={<Article />} />
            <Route path='/article/:name' element={<Article />} />
            <Route path='/article' element={<Article />} />
            <Route path='/redirection' element={<Navigate to="/article/juan/linde" />} />

            <Route path='/panel/*' element={<PanelControl/>} />
                <Route path='home' element={<Home />} />
                <Route path='management' element={<Management />} />
            
            <Route path='*' element={<Error />} />
        </Routes>
        <hr/>

        <footer>
            Foot the page
        </footer>

    </BrowserRouter>
  )
}
