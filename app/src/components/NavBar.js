import React from 'react'
import '../styles/styles.css'
function NavBar() {
    return (
        <header>
            {/* <img className="logo" alt="logo" src="../images/logo.png"/> */}
            <nav>
                <ul className="nav_items">
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default NavBar
