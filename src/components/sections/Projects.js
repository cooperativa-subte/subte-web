import React, { useState, useEffect } from 'react'

import { getProjects } from '../../api/api'

import ProjectCard from './ProjectCard'

import '../../styles/Projects.scss'

export default function Projects() {

  const [projects, setProjects] = useState([])

  useEffect( () => {
    getProjects().then( (response) => {
      setProjects(response)
    } )
  }, [] )

  return (
    <div className='project-container container'>
      <div className='container'>
        <div className='row mb-4'>
          {
            projects ? projects.map((project) => {
            return (
              <ProjectCard key={project.id} project={project}></ProjectCard>
            )
          }) : ''}
        </div>
      </div>
    </div>
  )
}