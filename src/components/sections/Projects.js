import React, { useState, useEffect, useRef } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import { getProjects } from '../../api/api'

import '../../styles/Projects.scss'

const ALL_PROJECTS = 'Todos'

export default function Projects() {

  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [tags, setTags] = useState([])
  const [activeTag, setActiveTag] = useState(ALL_PROJECTS)
  const [loading, setLoading] = useState(true);

  let { url } = useRouteMatch();

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

  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= projects.length) {
      setLoading(false);
    }
  }

  return (
    <div className='project-container container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <div className='row pb-4 project-cards-container'>
            {
              filteredProjects.length > 0 && filteredProjects.map((project, i) => {
                return (
                  <div key={project.id} className={`col-12 col-md-4 project-card-container text-center mt-4`}>

                    <Link to={`${url}/${project.url}`}>
                      <h4>{project.name}</h4>
                      <div className='spinner-container' style={{ display: loading ? 'block' : 'none' }}>
                        <Spinner animation="border" role="status">
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      </div>
                      <img
                        style={{ display: loading ? 'none' : 'block' }}
                        key={i}
                        src={project.cardImgURI}
                        onLoad={imageLoaded}
                        alt={project.name}
                        className='img-fluid'
                      />
                    </Link>
                  </div>
                )
              })
            }
          </div>
          <div className='row justify-content-end'>
            <div className='col-xl-4 text-right tags-container overflow-auto py-2'>
              {
                tags.length > 0 &&
                tags.map((tag, i) => (
                  <span key={i} onClick={() => { filterProjects(tag) }} className={
                    activeTag === tag ? 'active tag-button' : 'tag-button'
                  }>{tag}</span>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}