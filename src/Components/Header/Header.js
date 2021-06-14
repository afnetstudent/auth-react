import React from 'react';
import {Route, Switch,Link} from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <div className="container">
        
        <nav className="nav">
            <div className="navbar-brand">
                <a href="#" style={{textDecoration:'none',color:'black'}}>Rent A Vehicle</a>
            </div>
        <ul >
                <li><Link style={{textDecoration:'none',color:'black'}} to="/home" >Home</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to="/blog">Blog</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to="/destination">Destination</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to="/contact">Contact</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} className="bg-danger p-2" to="/login">Login</Link></li>

            </ul>
        </nav>
    
        </div>
    );
};

export default Header;