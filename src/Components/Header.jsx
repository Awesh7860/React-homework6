import React from 'react'
import {Link} from "react-router-dom"
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
function Header() {
  return (
    <>
    <nav>
        <div className="logo"><h1>logo</h1></div>
        <div className="menu">
            <Link to={"/"} >Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>
        <div className="icons">
            <FaFacebookF></FaFacebookF>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
        </div>

    </nav>
    </>
  )
}

export default Header