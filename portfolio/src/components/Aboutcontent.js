import "./Aboutcontent.css";
import { Link } from "react-router-dom";
import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1> WHO AM I?</h1>
        <p>
          As a freelance web developer, I am pursuing a B.Tech in Electrical and Electronics Engineering
           from NIT Uttarakhand. I focus on creating websites with distinctive designs and excellent performance, 
           ensuring both aesthetic appeal and efficiency.
        </p>  
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>     
        </div>
      
      <div className="right">
       <div className="img-container"> 
        <div className="img-stack top">
         <img src="https://miro.medium.com/v2/resize:fit:700/1*mLE5ZxhtATxrwh20SL2Tlg.png"
         className="img" alt="true"
         />
        </div>
        <div className="img-stack bottom">
         <img src="https://miro.medium.com/v2/resize:fit:700/1*mLE5ZxhtATxrwh20SL2Tlg.png"
         className="img" alt="true"
         />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Aboutcontent
