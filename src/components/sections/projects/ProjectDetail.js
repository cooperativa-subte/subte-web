import React, { useState, useEffect, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProjectDetail } from '../../../api/api'
import { useScrollPosition } from '../../utils/useScrollPosition'
import { AppContext } from '../../../App'

import '../../../styles/ProjectDetail.scss'

export default function ProjectDetail() {
  let { id } = useParams();

  let descriptionEle = useRef(null)
  let descContainerEle = useRef(null)

  const [projectDetail, setProjectDetail] = useState(null)
  const [trabajosUrls, setTrabajosUrls] = useState([])
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [stykyClasses, setStykyClasses] = useState('')

  const appContext = useContext(AppContext)

  useEffect(() => {

    getProjectDetail(id).then((response) => {

      setProjectDetail(response)
      setTrabajosUrls(response.trabajosUrls)
    })

  }, [id, hideOnScroll])

  useScrollPosition(
    ({ prevPos, currPos }) => {

      if (currPos.y < 70) {

        setStykyClasses('fixed-position')
      } else {
        setStykyClasses('')
      }

      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) {
        // console.log(isShow)
        setHideOnScroll(isShow)
      }
    },
    [appContext.bodyElement.current, descContainerEle],
    descContainerEle,
    false,
    50,
    appContext.bodyElement.current
  )

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
              <div className='col-5 text-left pl-0' ref={descContainerEle}>
                <p ref={descriptionEle} className={stykyClasses}>{projectDetail.description}</p>
              </div>
              <div className='col-6'>
                <div className='row mb-5'>
                  <div className='col-12 mt-2'>
                    <img className='img-fluid' src={projectDetail.img} alt={projectDetail.name} />
                  </div>
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
          </div> :
          <></>
      }
    </div>
  )
}