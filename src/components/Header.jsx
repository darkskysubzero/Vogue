import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"


const Header = () => {
    return (
        <div className="header">
            <Link to="/" className='logo'><img src={logo} /></Link>
            <div className="links">
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header