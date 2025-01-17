import React from "react";
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <nav className = 'navbar'>
                <ul className="nav-links">
                    <li><Link to={"/"} style={{ textDecoration: "none" }}>Home</Link></li>
                    {/* <li><a href ='#'>Profile</a></li> */}
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;