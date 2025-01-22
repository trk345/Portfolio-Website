import React from "react";
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'; // Import the home icon

function Navbar(){
    return(
        <div>
            <nav className = 'navbar'>
                <ul className="nav-links">
                    <li><Link to={"/"} style={{ textDecoration: "none" }}>
                    <FaHome size={30} style={{ paddingRight:"15px", verticalAlign:"middle", transition: "color 0.3s"}}/>
                    {/* <span style={{ verticalAlign: "middle" }}>Tawhid's Portfolio</span> */}
                    </Link>
                    <span style={{verticalAlign:"middle",color:"white",fontSize:"25px",fontWeight:"bold"}}>Tawhid's Portfolio</span>
                    </li>
                    {/* <li><a href ='#'>Profile</a></li> */}
                    {/* <li><Link to={"/contact"}>Contact</Link></li> */}
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;