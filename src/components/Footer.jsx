import {NavLink} from 'react-router-dom';
import footerStyle from "../styles/footerstyle.module.css"

import {Facebook, Instagram  } from 'lucide-react';

const Footer = () => {
  return (
    <div className={footerStyle.MainContainer}>
        <div>
            <div>
                <p style={{fontSize: "1.2rem"}}>&copy; 2025 Clad's Place. All rights reserved.</p>
            </div>
        
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About Us</NavLink> </li>
                <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                <li><NavLink>Privacy Policy</NavLink></li>
                <li><NavLink>Terms of Service</NavLink></li>
            </ul>
        </div>

        <div>
            <p><Facebook /></p>
            <p><Instagram /></p>
        </div>
        
      
    </div>
  )
}

export default Footer
