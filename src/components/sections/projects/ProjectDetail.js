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
            <h2>Trabajos</h2>
            {
              trabajosUrls.length > 0 ?
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    {
                      trabajosUrls.map((trabajoUrl, index) => {
                        return (
                          <li data-target="#carouselExampleIndicators" data-slide-to={index}></li>
                        )
                      })
                    }

                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                  </ol>
                  <div className="carousel-inner">
                    {
                      trabajosUrls.map((trabajoUrl, index) => {
                        return (
                          <div className="carousel-item">
                            <img src={trabajoUrl} alt={`${projectDetail.name} work ${index}`} className='d-block w-100' />
                          </div>
                        )
                      })
                    }
{/* 
                    <div className="carousel-item">
                      <img className="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="..." alt="Third slide" />
                    </div> */}
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                // <div className='row carousel-container'>
                //   {
                //     trabajosUrls.map((trabajoUrl, index) => {
                //       return (
                //         <div className='col' key={index}>
                //           <img src={trabajoUrl} alt={`${projectDetail.name} work ${index}`} className='' />
                //         </div>
                //       )
                //     })
                //   }
                // </div>
                :
                <></>
            }
          </div> :
          'No hay nada'
      }

    </div>
  )
}