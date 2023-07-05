import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Main } from '../components/Main';
import { Contact } from '../components/Contact';
import { Article } from '../components/Article';
import { Error } from '../components/Error';
import '../App.css';

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
                <li><NavLink to="/article/" >Article</NavLink></li>

            </ul>
        </nav>

        <h1>Menu</h1>
        <hr/>

        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Main' element={<Main />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Article/:name/:lastname' element={<Article />} />
            <Route path='*' element={<Error />} />
        </Routes>
        <hr/>

        <footer>
            Foot the page
        </footer>

    </BrowserRouter>
  )
}
