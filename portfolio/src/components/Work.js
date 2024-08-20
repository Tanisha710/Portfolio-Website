import { NavLink } from "react-router-dom";
import "./Workcard.css";
import Card from "./Card";
import Workcarddata from "./Workcarddata";
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1> 
        <div className="project-container">
           {
            Workcarddata.map((val,ind) => {
                return(
               <Card
               key={ind}
               img={val.img} 
               title={val.title}
               text={val.text}
               view={val.view}
               />
                )})
           }
        </div>
    </div>
  )
}

export default Work;
