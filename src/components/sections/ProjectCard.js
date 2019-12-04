import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'

import '../../styles/ProjectCard.scss'

function ProjectCard({ project }) {

  let { url } = useRouteMatch();

  return (
    <Link to={`${url}/${project.url}`}>
      <h4>{project.name}</h4>
      <img className='img-fluid' src={project.imgCover} alt={project.name} />
    </Link>
  )
}


export default ProjectCard