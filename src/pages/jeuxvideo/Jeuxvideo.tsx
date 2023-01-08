import React from 'react'
import { Outlet } from 'react-router-dom'
import "./JeuxVideo.css"
import Project from '../../components/Project/Project'
function Jeuxvideo() {

  

  return (
  <div className='jv-home-container'>
    <Project />
  </div>
  )
}

export default Jeuxvideo