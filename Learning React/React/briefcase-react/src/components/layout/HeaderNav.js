import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>J</span>
            <h3>Juan Barrera WEB</h3>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to='/home' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/breafcase' className={({isActive}) => isActive ? "active" : ""}>BreafCase</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/cv' className={({isActive}) => isActive ? "active" : ""}>CV</NavLink>
                </li>
                <li>
                    <NavLink to='/services' className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
