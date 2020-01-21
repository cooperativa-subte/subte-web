import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectDetail } from '../../../api/api'

import '../../../styles/ProjectDetail.scss'

export default function ProjectDetail() {
  let { id } = useParams();

  const [projectDetail, setProjectDetail] = useState(null)
  const [trabajosUrls, setTrabajosUrls] = useState([])

  useEffect(() => {

    getProjectDetail(id).then((project) => {

      setProjectDetail(project)
      setTrabajosUrls(project.trabajosUrls)
    })

  }, [id])

  return (
    <div className='container-fluid project-detail-container'>
      {
        projectDetail !== null ?

          <div className='row justify-content-center mt-5'>
            <div className='col-xl-11'>

              <div className='row justify-content-between mb-5'>
                <div className='col-12 col-md-6'>
                  <h2 className='negrita title'>{projectDetail.name}</h2>
                </div>
                <div className='col-12 col-md-6 text-left'>
                  <h3 className='subtitle negrita'>{projectDetail.shortDescription}</h3>
                </div>
              </div>

              <div className='row mb-5'>
                <div className='col-12 text-center'>
                  {
                    projectDetail.coverVideo ?
                      <iframe title='cover-video' width="1008" height="567" src={ projectDetail.coverVideo} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :
                      <img src={projectDetail.coverPhoto} alt='Cover Project' className='img-fluid' />
                  }

                </div>
              </div>

              <div className='row my-3'>

                <div className='col-12 col-md-6 '>
                  <div className='sticky-position font-medium'>
                    {
                      projectDetail.descriptionPharagraphs.map((p, i) => (
                        <p key={i} className='description-p'>{p}</p>
                      ))
                    }
                    <p className='description-p'><span className='negrita grey'>Cliente: </span>{projectDetail.client}</p>
                    <p className='description-p'><span className='negrita grey'>Sector: </span>{projectDetail.sector}</p>
                    <p className='description-p'><span className='negrita grey'>Tipo de Proyecto: </span>{projectDetail.tags}</p>
                    <p className='description-p'><span className='negrita grey'>Mes/Año: </span>{projectDetail.date}</p>
                  </div>
                </div>

                <div className='col-12 col-md-6'>
                  <div className='row'>
                    {
                      trabajosUrls.map((trabajo, index) => (
                        <div key={index} className='col-12 mt-4'>
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