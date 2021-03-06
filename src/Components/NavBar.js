import React from 'react';
import {Link} from "react-router-dom"


const NavBar=()=> {
    const navStyle={
        color:"white",
        textDecoration: "none",
        fontSize: "16px",
        padding:"15px 5px",
    }
    return (
        <div>
            <nav id="nav-bar">
                <div className="nav-links">
                    <div><Link to="/" style={navStyle}>HOME</Link></div>
                    <div><Link to="cakes" style={navStyle}>CAKES</Link></div>
                    <div><Link to="cookies" style={navStyle}>COOKIES</Link></div>
                    <div><Link to="breakfast" style={navStyle}>BREAKFAST</Link></div>
                </div>                
            </nav>
        </div>
    );    
}

export default NavBar;