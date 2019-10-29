import React from 'react'
import Img from 'react-image'
import { Link, useRouteMatch } from 'react-router-dom'
import ImgSpinner from 'react-image'

function ProjectCard(props) {

  let { url } = useRouteMatch();

  const { project } = props;

  return (
    <div className='col-4 project-card-container text-center mt-4'>
      <h4>{project.name}</h4>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <Link to={`${url}/${project.url}`}>
            <Img className='img-fluid' src={[project.imgCover]} alt={project.name} loader={ <ImgSpinner/> } />
          </Link>
        </div>
      </div>
    </div>
  )
}


export default ProjectCard