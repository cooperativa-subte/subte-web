import React, { useState, useEffect, useRef } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import { getProjects } from '../../api/_api'

import '../../styles/Projects.scss'

const ALL_PROJECTS = 'Todos'

const qs = require('qs')

export default function Projects(props) {

  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [tags, setTags] = useState([])
  const [activeTag, setActiveTag] = useState(ALL_PROJECTS)
  const [loading, setLoading] = useState(true);
  const [filter] = useState(() => (
    qs.parse(props.location.search.slice(1)).tag != null ? qs.parse(props.location.search.slice(1)).tag : ''
  ))

  let { url } = useRouteMatch();

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects)

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

      if (filter) {
        setFilteredProjects(projects.filter((project) => {
            return project.tags.indexOf(filter) !== -1
        }))
        setActiveTag(filter)
      } else {
        setFilteredProjects(projects)
      }
    })
  }, [filter])

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
    if (counter.current >= filteredProjects.length) {
      setLoading(false);
      counter.current = 0
    }
  }

  return (
    <div className='project-container container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <div className='row justify-content-start'>
            <div className='col-12 text-left tags-container overflow-auto py-2'>
              {
                tags.length > 0 &&
                tags.map((tag, i) => (
                  <span key={i} onClick={() => { filterProjects(tag) }} className={
                    activeTag === tag ? 'active tag-button float-left' : 'tag-button float-left'
                  }>{tag}</span>
                ))
              }
            </div>
          </div>
          <div className='row pb-4 project-cards-container mb-3'>
            {
              filteredProjects.length > 0 && filteredProjects.map((project, i) => {
                return (
                  <div key={project.id} className={`col-12 col-md-4 project-card-container text-left mt-4`}>

                    <Link to={`${url}/${project.url}`}>
                      <div className='spinner-container text-center' style={{ display: loading ? 'block' : 'none' }}>
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
                      <h5 className='mt-2'>{project.name}</h5>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}