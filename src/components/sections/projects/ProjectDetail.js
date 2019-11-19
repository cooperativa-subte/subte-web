import React, { useState, useEffect } from 'react'

import { Modal, Button, Carousel } from 'react-bootstrap'

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