import React from 'react'
import './Project.css';

function Project() {
  return (
    <div className='project-container'>
      <div className='project-upperside'>
        <h1>Notre projet actuel</h1>
      </div>
      <div className='project-downside'>
        <h2>
          Reims Racing
        </h2>
        <div className='project-downside-text'>
          Reims racing est un jeu de course bientôt disponible sur apple iOS. 
          <br />
          Le jeu prend place dans les rues iconiques de Reims, reconstituées en 3D.
        </div>
      </div>
    </div>
  )
}

export default Project