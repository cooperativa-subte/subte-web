import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import ImgSpinner from '../../../utilities/ImgSpinner'
import Img from 'react-image'

import { getAsyncProjectDetail } from '../../../api/api'

export default function ProjectDetail() {
  let { id } = useParams();

  const [projectDetail, setProjectDetail] = useState({})

  useEffect(() => {

    getAsyncProjectDetail(id).then((response) => {

      setProjectDetail(response)
      console.log(response);


    })
  }, [id])

  return (
    <div>
      {
        projectDetail !== {} ? 
          <div>
            <Img src={[projectDetail.img]} alt={projectDetail.name} loader={ <ImgSpinner/> } />
          </div>
          
           :
          'No hay nada'
      }

    </div>
  )
}