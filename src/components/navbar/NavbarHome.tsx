import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import typing from "../../img/cironstudio.jpg"


function NavbarHome() {

    
  const [style,setStyle] = useState("test");

  const changeStyleToFalse = () => {
    let test : boolean = (document.getElementById("nav-check") as HTMLInputElement).checked = false;
    console.log('devrait uncheck');
  }
  



  return (
    <div className="nav">
  <input type="checkbox" id="nav-check"></input>
  <div className="nav-header">
    <div className="nav-title">
      
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <Link onClick={changeStyleToFalse} to="/"><img id='cironstudiologo' src={typing} alt="" /></Link>
  <div className="nav-links">

                <Link onClick={changeStyleToFalse} to="Home" id='logo'></Link>
                <Link onClick={changeStyleToFalse} to="/">Accueil</Link>
                <Link onClick={changeStyleToFalse} to="Sitesweb">Sites Web</Link>
                <Link onClick={changeStyleToFalse} to="Jeuxvideo">Jeux video</Link>
                <Link onClick={changeStyleToFalse} to="Contact">Nous contacter</Link>
  </div>
</div>
  )
}

export default NavbarHome