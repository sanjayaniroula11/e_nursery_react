import React from 'react'
import logo from '../images/Logo.svg'

function Header() {
  return (
    <header>
            <nav>
                <div className="navigation-container">
                    <div className="logo">
                        <img src={logo} className="logo-image" alt=""></img>
                    </div>
                    <div class="links">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Shop By Category</a></li>
                            <li><a href=""> <img src="images/user.svg" className="user-image" alt=""></img></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Header