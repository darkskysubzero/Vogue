import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { getAuth } from 'firebase/auth'


const Header = (props) => {
    const { currentUser } = props;

    const handleSignOut = () => {
        const auth = getAuth();
        auth.signOut();
        console.log("Signed out successfully!")
    }

    return (
        <div className="header">
            <Link to="/" className='logo'><img src={logo} /></Link>
            <div className="links">
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                {
                    currentUser ?
                        <a onClick={handleSignOut}>Sign Out</a> :
                        <Link to="/signin">Sign In</Link>
                }
            </div>
        </div>
    )
}

export default Header