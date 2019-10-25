import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { getProjectDetail } from '../../../api/api'

export default function ProjectDetail() {
  let { id } = useParams();

  const [projectDetail, setProjectDetail] = useState({})

  useEffect(() => {
    getProjectDetail(id).then((response) => {
      setProjectDetail(response)
      console.log(response);

    })
  }, [])

  return (
    <div>
      {
        projectDetail !== {} ?
          // <img src={img} alt={projectDetail.name} /> :
          console.log('nada') : 
          'No hay nada'
      }

    </div>
  )
}