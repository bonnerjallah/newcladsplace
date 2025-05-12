import { NavLink, Outlet } from "react-router-dom"

import navbarstyle from "../styles/navbarstyle.module.css"


const Navbar = () => {


  return (
    <>
        <nav>
            <div className={navbarstyle.mainContainer}>
                <div className={navbarstyle.logoContainer}>
                    <NavLink>
                        <img src="/cplogo.png" alt="clads place logo" />
                        <h1>Clad's Place</h1>
                    </NavLink>
                </div>
                

                <ul className={navbarstyle.navLinks}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ContactUs">Contact</NavLink>
                    </li>
                </ul>
                
            </div>
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar
