import React from 'react'
import "./SitesWeb.css"
import {ReactComponent as Pencil} from "../../img/sitesinternet/pencil.svg";
import {ReactComponent as Person} from "../../img/sitesinternet/person.svg";
import {ReactComponent as Screens} from "../../img/sitesinternet/screens.svg";
import {ReactComponent as Seo} from "../../img/sitesinternet/seo.svg";
import {ReactComponent as Cloud} from "../../img/sitesinternet/cloud.svg";
import { Link } from "react-router-dom";
function Sitesweb() {
  return (
    <div className='sites-container'>
     
      <div className='sites-b1'>
        <div className='sites-b1-lines'>
        <h1><div className='sites-b1-lines-title'>
            DÉVELOPPEZ VOTRE PRÉSENCE DIGITALE
          </div></h1>

          <div className='sites-b1-lines-1'>
            <div className='sites-b1-lines-1-pair-logo'>
            <Person/>
            </div>
            <div className='sites-b1-lines-1-pair-text'>
              Définition de votre besoin
            </div>
          </div>
          
          <div className='sites-b1-lines-1'>
            <div className='sites-b1-lines-1-pair-logo'>
            <Pencil/>
            </div>
            <div className='sites-b1-lines-1-pair-text'>
              Création de l'identité visuelle
            </div>
          </div>

          <div className='sites-b1-lines-1'>
            <div className='sites-b1-lines-1-pair-logo'>
              <Screens/>
            </div>
            <div className='sites-b1-lines-1-pair-text'>
              Mise en place du prototype
            </div>
          </div>

          <div className='sites-b1-lines-1'>
            <div className='sites-b1-lines-1-pair-logo'>
              <Seo />
            </div>
            <div className='sites-b1-lines-1-pair-text'>
              Optimisation SEO
            </div>
          </div>
          <div className='sites-b1-lines-1'>
            <div className='sites-b1-lines-1-pair-logo'>
              <Cloud />
            </div>
            <div className='sites-b1-lines-1-pair-text'>
              Hébergement en ligne
            </div>
          </div>
          
        
        </div>
        <h2 id="nous-contacter-sitesweb"><Link  to="Contact"> Nous contacter</Link></h2>
      </div>
    </div>
  )
}

export default Sitesweb