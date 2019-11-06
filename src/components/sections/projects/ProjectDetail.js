import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { getProjectDetail } from '../../../api/api'

export default function ProjectDetail() {
  let { id } = useParams();

  const [projectDetail, setProjectDetail] = useState(null)

  useEffect(() => {
    getProjectDetail(id).then((response) => {

      setProjectDetail(response)
    })
  }, [id])

  return (
    <div>
      {
        projectDetail !== null ?
          <div className='text-center mt-3'>
            <h2>{projectDetail.name}</h2>
            <div className='row justify-content-center mt-5'>
              <div className='col-4'>
                <img className='img-fluid' src={projectDetail.img} alt={projectDetail.name} />
              </div>
              <div className='col-5'>
                <p>{projectDetail.description}</p>
              </div>
            </div>
          </div> :
          'No hay nada'
      }

    </div>
  )
}