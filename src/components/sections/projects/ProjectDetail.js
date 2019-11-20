import React, { useState, useEffect } from 'react'

import { Modal, Carousel } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

import { getProjectDetail } from '../../../api/api'
import CustomCarousel from '../../utils/CustomCarousel'

import '../../../styles/ProjectDetail.scss'

export default function ProjectDetail() {
  let { id } = useParams();

  const [projectDetail, setProjectDetail] = useState(null)
  const [trabajosUrls, setTrabajosUrls] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    getProjectDetail(id).then((response) => {

      setProjectDetail(response)
      setTrabajosUrls(response.trabajosUrls)
    })
  }, [id])

  function handleImgClick(index) {
    setShowModal(true)
    setCarouselIndex(index);
  }

  const handleSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
    setDirection(e.direction);
  }

  return (
    <div className='container-fluid project-detail-container'>
      {
        projectDetail !== null ?
          <div className='text-center mt-5'>
            <div className='row text-left'>
              <div className='col-4 ml-5'>
                <h2 className=''>{projectDetail.name}</h2>
              </div>
              <div className='col-4 offset-xl-2'>
                <p>{projectDetail.shortDescription}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-11 ml-5'>
                <img src={projectDetail.coverPhoto} alt='Cover Project' className='img-fluid' />
              </div>
            </div>
            <div className='row mt-5 ml-5'>
              <div className='col-5 text-left pl-0'>
                <p>{projectDetail.description}</p>
              </div>
              <div className='col-6'>
                <img className='img-fluid' src={projectDetail.img} alt={projectDetail.name} />
              </div>
            </div>
            <h2 className='mt-4'>Trabajos</h2>
            {
              trabajosUrls.length > 0 ?
                <CustomCarousel urlsImgs={trabajosUrls} onImgClick={handleImgClick} /> : <></>
            }
          </div> :
          'No hay nada'
      }
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={carouselIndex} indicators={false} direction={direction} onSelect={handleSelect}>
            {
              trabajosUrls.map((trabajo, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={trabajo.highRes}
                      alt="Trabajos"
                    />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </Modal.Body>
      </Modal>

    </div>
  )
}