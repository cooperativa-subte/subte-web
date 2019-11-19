import React, { useState, useEffect } from 'react'

import { Link, useRouteMatch } from 'react-router-dom'
import '../../styles/ProjectCard.scss'

let OnImagesLoaded = require('react-on-images-loaded');


class ProjectCard extends React.Component {
  constructor() {
    super()
    this.state = {
      showImages: false
    }
  }
  runAfterImagesLoaded(elements) {
    console.log('hola')
    console.log(elements)
  }
  runTimeoutFunction(elements) {
    console.log('hola2')
    console.log(elements)
  }
  render() {

    let {project} = this.props

    return (
      <div className='col-4 project-card-container text-center mt-4'>
        <h4>{project.name}</h4>
        <Link to={`hola`}>

          <OnImagesLoaded
            onLoaded={this.runAfterImagesLoaded.bind(this)}
            onTimeout={this.runTimeoutFunction.bind(this)}
            timeout={7000}
          >
            {
              <img className='img-fluid' src={project.imgCover} alt={project.name} />
            }
          </OnImagesLoaded>
        </Link>
      </div>
    )
  }
}


export default ProjectCard