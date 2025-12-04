import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import Logo from '../assets/spabackground.jpg'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbarlinks"> 
            <NavLink to='/' 

                >Home</NavLink>
            <NavLink to='/products' >Form</NavLink>
            <NavLink to='/concat' >Data Graph</NavLink>
                      </div>                            
        </div>
    );
}

export default NavBar;
