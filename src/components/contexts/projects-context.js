import React, { createContext, useContext, useEffect, useState } from 'react'

import { makeGetRequest } from '../../api/_api'

export const ProjectsContext = createContext()

// export the context as useAuth0
export const useProjects = () => useContext(ProjectsContext)

export function ProjectsProvider({children}) {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    const projectsResponse = await makeGetRequest('http://localhost:1337/proyectos')
    console.log(projectsResponse)
  }

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  )
}