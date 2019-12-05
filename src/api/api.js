const EMAIL_URI = 'https://subte-api.herokuapp.com/contactemail'

function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
      { 
        id: 1, 
        name: 'Hemisferio Izquierdo', 
        url: 'hemisferio-izquierdo', 
        imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076216/subte-web/projects-covers/hemisferio-cover.png',
        tags: ['Colectivo']
      },
      { 
        id: 2, 
        name: 'SINTEP', 
        url: 'sintep', 
        imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076215/subte-web/projects-covers/sintep-cover.png' ,
        tags: ['Sindicato', 'Audiovisual']
      },
      { 
        id: 3, 
        name: 'Milongas Extremas', 
        url: 'milongas-extremas', 
        imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076216/subte-web/projects-covers/milongas-cover.png' ,
        tags: ['Afiche']
      },
      { 
        id: 4, 
        name: 'Cooperativa Comuna', 
        url: 'comuna', 
        imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076216/subte-web/projects-covers/comuna-cover.png' ,
        tags: ['Coopeartiva', 'Librillos']
      },
      { 
        id: 5, 
        name: 'Ades Montevideo', 
        url: 'adesmontevideo', 
        imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574886344/subte-web/projects-covers/adesmontevideo-cover.png',
        tags: ['Sindicato', 'Afiche']
      }
    ])
  })
}

function getProjectDetail(name) {
  let obj = null;

  //TODO: Remove when is neccessary
  name = 'adesmontevideo'


  if (name === 'adesmontevideo') {
    obj = {
      name: 'Ades Montevideo',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      shortDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574886920/subte-web/adesmontevideo_project_cover.png',
      trabajosUrls: [
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574811855/subte-web/projects-mockups/Ades_01.jpg'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574811855/subte-web/projects-mockups/Ades_02.jpg'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574811855/subte-web/projects-mockups/Ades_03.jpg'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574811855/subte-web/projects-mockups/Ades_04.jpg'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574811855/subte-web/projects-mockups/Ades_05.jpg'
        },
      ]
    }
  } else {
    obj = {
      name: 'Cooperativa Comuna',
      description: 'Comuna es una cooperativa de trabajo que integran investigadoras/es de las ciencias económicas y que comienza a trabajar en setiembre de 2014. Desde el comienzo de Subte nos interesa vincularnos con otras cooperativas y organizaciones, además de parecernos súper importante tener claridad de la economía de nuestra cooperativa y del mundo en general. Es por ello que nos interesó formar un vínculo con Comuna.',
      shortDescription: 'Proyecto con la Cooperativa Comuna sobre el ciclo de formación "Economía para la lucha educativa"',
      coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574271966/subte-web/comuna_proyect_cover.png',
      trabajosUrls: [
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna1.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna2.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna3.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna4.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna5.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna6.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna7.png'
        },
      ]
    }
  }

  return new Promise((resolve) => {
    resolve(obj)
  })
}

const sendContactEmail = async ({email, tel, name, text}) => {

  const emailData = {
    from: email,
    tel: tel !== '' ? tel : undefined,
    name,
    text
  }

  return await sendPostRequest(emailData)
}

const sendPostRequest = async (data) => {

  const response = await fetch(EMAIL_URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await response.json()
}

export {
  getProjects,
  getProjectDetail,
  sendContactEmail
}