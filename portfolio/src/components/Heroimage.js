import "./Heroimage.css";
import React from 'react'
import {Link} from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src="https://img.freepik.com/free-vector/solve-mystery-magic-universe-with-night-sky-view-banner_1017-50626.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user"/>
        </div>
      
      <div className="content">
        <p> HI, I'm a freelancer.</p>
        <h1>Frontend Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
