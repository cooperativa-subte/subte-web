import React, { useState, useEffect } from 'react'

import { getProjects } from '../../api/api'

import ProjectCard from './ProjectCard'

import '../../styles/Projects.scss'

const ALL_PROJECTS = 'Todos'

export default function Projects() {

  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [tags, setTags] = useState([])
  const [activeTag, setActiveTag] = useState('')

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects)
      setFilteredProjects(projects)
      setTags(projects.reduce((acc, currVal) => {
        if (currVal.tags) {
          currVal.tags.forEach((tag) => {
            if (acc.indexOf(tag) === -1) {
              acc.push(tag)
            }
          })
        }
        return acc;
      }, [ALL_PROJECTS]))
    })
  }, [])

  let filterProjects = (tag) => {
    if (tag !== activeTag) {
      setActiveTag(tag)
    }
    setFilteredProjects(projects.filter((project) => {
      if (tag === ALL_PROJECTS) {
        return true
      } else {
        return project.tags.indexOf(tag) !== -1
      }
    }))
  }

  return (
    <div className='project-container container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <div className='row'>
            <div className='col-xl-12 text-right tags-container'>
              {
                tags.length > 0 &&
                tags.map((tag, i) => (
                  <span key={i} onClick={() => { filterProjects(tag) }} className={
                    activeTag === tag ? 'active tag-button': 'tag-button'
                  }>{tag}</span>
                ))
              }
            </div>
            {
              filteredProjects.length > 0 && filteredProjects.map((project) => {
                return (
                  <ProjectCard key={project.id} project={project}></ProjectCard>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}