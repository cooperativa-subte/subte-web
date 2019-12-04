import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectDetail } from '../../../api/api'

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
    <div className='container-fluid project-detail-container'>
      {
        projectDetail !== null ?

          <div className='row justify-content-center mt-5'>
            <div className='col-xl-11'>

              <div className='row justify-content-between'>
                <div className='col-12 col-md-4'>
                  <h2 className='negrita'>{projectDetail.name}</h2>
                </div>
                <div className='col-12 col-md-5 text-right'>
                  <p>{projectDetail.shortDescription}</p>
                </div>
              </div>

              <div className='row'>
                <div className='col-12'>
                  <img src={projectDetail.coverPhoto} alt='Cover Project' className='img-fluid' />
                </div>
              </div>

              <div className='row justify-content-between my-3'>
                <div className='col-12 col-md-5'>
                  <p className='sticky-position'>{projectDetail.description}</p>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='row'>
                    {
                      trabajosUrls.map((trabajo, index) => (
                        <div key={index} className='col-12 mt-2'>
                          <img className='img-fluid' src={trabajo.lowRes} alt={`Projecto ${index}`} />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div> : <></>
      }
    </div>
  )
}