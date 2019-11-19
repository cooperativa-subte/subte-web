import React, { useState, useEffect, useRef } from 'react'

import { useParams } from 'react-router-dom'

import { getProjectDetail } from '../../../api/api'
import Carousel from '../../utils/Carousel'

import '../../../styles/ProjectDetail.scss'

export default function ProjectDetail() {
  let { id } = useParams();

  const [projectDetail, setProjectDetail] = useState(null)
  const [trabajosUrls, setTrabajosUrls] = useState([])

  useEffect(() => {
    getProjectDetail(id).then((response) => {

      setProjectDetail(response)
      setTrabajosUrls(response.trabajosUrls)
    })
  }, [id])

  return (
    <div className='project-detail-container'>
      {
        projectDetail !== null ?
          <div className='text-center mt-3'>
            <h2>{projectDetail.name}</h2>
            <div className='row justify-content-center mt-5'>
              <div className='col-4'>
                <img className='img-fluid' src={projectDetail.img} alt={projectDetail.name} />
              </div>
              <div className='col-5 text-left'>
                <p>{projectDetail.description}</p>
              </div>
            </div>
            <h2 className='mt-4'>Trabajos</h2>
            {
              trabajosUrls.length > 0 ?
                <Carousel urlsImgs={trabajosUrls} /> : <></>
            }
          </div> :
          'No hay nada'
      }

    </div>
  )
}