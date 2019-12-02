import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'

import '../../styles/ProjectCard.scss'

function ProjectCard({ project }) {

  let { url } = useRouteMatch();

  return (
    <div className='col-4 project-card-container text-center mt-4'>
      <Link to={`${url}/${project.url}`}>
        <h4>{project.name}</h4>
        <img className='img-fluid' src={project.imgCover} alt={project.name} />
      </Link>
    </div>
  )
}


export default ProjectCard