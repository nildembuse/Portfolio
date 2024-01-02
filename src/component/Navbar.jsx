import React, { useState} from "react";
import "./navbar.css";

 function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className="navbar">
        <a className="title" href="/">Portfolio</a>
        <div className="menu">
        <img className="menuBtn" src="/src/assets/nav/menuIcon.png" alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className="menuItems">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
    </nav>
)
}
export default Navbar