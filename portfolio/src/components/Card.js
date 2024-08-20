import { NavLink } from "react-router-dom";
import "./Workcard.css";
import React from 'react'

const Card = (props) => {
  return (
    <div className="project-card">
             <img src={props.img} 
             alt="image"/>
             <h2 className="project-title">{props.title}</h2>
             <div className="project-details">
                <p>{props.text }</p>
                <div className="pro-btns"> 
                    <NavLink to={props.view} className="btn"> view 
                    </NavLink>
                    <NavLink to={props.view} className="btn"> source 
                    </NavLink>
                </div>
             </div>
            </div>
  )
}

export default Card
