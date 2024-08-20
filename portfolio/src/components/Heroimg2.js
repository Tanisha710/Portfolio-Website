import "./Heroimg2.css";
import React, { Component } from 'react'
/*const se kuch nhi hoga class lenge*/
/*passing heading as props method used and change value dynamically*/
class Heroimg2 extends Component {
  render()
  {
    return (
        <div className="hero-img">
            <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            </div>
        </div>
      )
  }
}

export default Heroimg2
