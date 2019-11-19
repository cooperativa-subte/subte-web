import React, { useState, useRef } from 'react'

import LeftArrow from '../../images/left-arrow.svg'
import RightArrow from '../../images/right-arrow.svg'

export default function CustomCarousel({ urlsImgs: trabajosUrls, onImgClick }) {

  const [carouselItems, setCarouselItems] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselElement = useRef(null)

  function showModal(index) {
    onImgClick(index)
  }

  function passSlides(direction) {

    if (direction === 'back') {

      if (carouselItems[currentIndex + 1]) carouselItems[currentIndex + 1].classList.remove('active')
      if (carouselItems[currentIndex + 2]) carouselItems[currentIndex + 2].classList.remove('active')

      if (carouselItems[currentIndex - 1]) carouselItems[currentIndex - 1].classList.add('active')
      if (carouselItems[currentIndex - 2]) carouselItems[currentIndex - 2].classList.add('active')

      setCurrentIndex(currentIndex - 2)

    } else {

      carouselItems[currentIndex].classList.remove('active')
      carouselItems[currentIndex + 1].classList.remove('active')

      if (carouselItems[currentIndex + 3]) carouselItems[currentIndex + 3].classList.add('active')
      if (carouselItems[currentIndex + 4]) carouselItems[currentIndex + 4].classList.add('active')

      setCurrentIndex(currentIndex + 2)

    }
  }

  return (
    <div className='my-3 mb-5'>
      {
        trabajosUrls.length > 0 ?
          <div className='carousel-container row justify-content-center'>
            <div className='col-1 align-self-center text-right'>
              {
                currentIndex >= 2 ?
                  <img className='arrow' src={LeftArrow} onClick={() => { passSlides('back') }} alt='Back Arrow' /> :
                  <></>
              }

            </div>
            <div className='col-6 align-items-center'>
              <div className='carousel-items-container row' ref={carouselElement} onLoad={() => { setCarouselItems(carouselElement.current.children) }}>
                {
                  trabajosUrls.map((trabajo, index) => {
                    return (
                      <div key={index} className={`s-carousel-item col-4  ${index < 3 ? 'active' : ''}`}>
                        <img src={trabajo.lowRes} alt='1' className='img-fluid' onClick={() => { showModal(index) }} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='col-1 align-self-center text-left'>
              {
                carouselItems.length - currentIndex > 2 ?
                  <img className='arrow' src={RightArrow} onClick={() => { passSlides('fw') }} alt='Forward Arrow' /> :
                  <></>
              }

            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}