/*parent file for all the pages to make home about contact pages create another folder*/
import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";
/*navbar wagera sab components m aaega*/

function App(){
 return (
    /*routes call krenge upar wale files ka agr routes apply krenge to address specify krna padega usk liye path likhenge*/
    <>
    <Routes>
        <Route path ="/"  element={<Home/>} />
        <Route path ="/project"  element={<Project/>} />
        <Route path ="/about"  element={<About/>} />
        <Route path ="/contact"  element={<Contact/>} />
    </Routes>
    </>
 )
}

export default App;