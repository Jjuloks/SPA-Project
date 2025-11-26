import React from 'react';
import { NavLink } from 'react-router-dom';
import '../comp/NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to='/' 

                >Home</NavLink>
            <NavLink to='/products' >Form</NavLink>
            <NavLink to='/concat' >Data Graph</NavLink>
                                                  
        </div>
    );
}

export default NavBar;
