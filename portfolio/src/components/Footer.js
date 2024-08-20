import { FaInstagram, FaPhone } from "react-icons/fa6";
import "./Footer.css";

import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FaGithub ,FaLinkedin,FaTwitterSquare} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                    <h4>Tanisha Kumari</h4>
                    <p>As a freelance web developer, I am pursuing a B.Tech in Electrical and Electronics Engineering from NIT Uttarakhand. 
                      I focus on creating websites with distinctive designs and excellent performance, ensuring both aesthetic appeal and efficiency.
                    </p>
                <div className="social">
                  <a href="https://github.com/Tanisha710">
                <h4><FaGithub size={20} style={{color:"#fff" , marginRight:"2rem"}} /></h4>
                </a>
                <a href="https://www.linkedin.com/in/tanisha-kumari-311ba2228">
                <h4><FaLinkedin size={20} style={{color:"#fff" , marginRight:"2rem"}} /></h4>
                </a>
                <a href="">
                <h4><FaTwitterSquare size={20} style={{color:"#fff" , marginRight:"2rem"}} /></h4>
                </a>
                <a href="">
                <h4><FaInstagram size={20} style={{color:"#fff" , marginRight:"2rem"}} /></h4>
                </a>
                </div>
            </div>

            <div className="right">
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/> +91 9973429881</h4>
                </div>

                <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}} />tanishatrivedi0710@gamil.com</h4>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer

