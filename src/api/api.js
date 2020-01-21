const EMAIL_URI = 'https://subte-api.herokuapp.com/contactemail'

function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 2,
        name: 'Campaña de afiliación de SINTEP',
        url: 'sintep',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628144/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_00_cover.png',
        tags: ['Audiovisual', 'Gráfico', 'Diseño web']
      },
      {
        id: 3,
        name: 'Arte de Disco de Milongas Extremas',
        url: 'milongas-extremas',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1577457975/subte-web/projects-covers/milongas_cover_card.png',
        tags: ['Gráfico']
      },
      {
        id: 5,
        name: 'Revista para Ades Montevideo',
        url: 'adesmontevideo',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1577458381/subte-web/projects-covers/ades_cover_card.png',
        tags: ['Sindicato', 'Afiche']
      }
    ])
  })
}

function getProjectDetail(name) {
  let project = null;

  //TODO: Remove when is neccessary

  if (name === 'sintep') {
    project = {
      name: 'Sintep',
      shortDescription: 'Campaña de afiliación del Sindicato de Trabajadores y Trabajadoras de la Enseñanza Privada.',
      descriptionPharagraphs: [
        'Con un mensaje cálido y afectivo, tomando en cuenta la coyuntura nacional y regional, y dando visibilidad a referentes de la base militante, nos propusimos informar y generar confianza en la organización sindical.',
        'Diseño de identidad visual y piezas audiovisuales.'
      ],
      coverVideo: 'https://www.youtube.com/embed/_8hSeJe-ULc?&autoplay=1&mute=1',
      trabajosUrls: [
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615989/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_02_00_00.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615989/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_02_00_01.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615989/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_02_00_02.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615989/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_02_01.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615989/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_02_02.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615989/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_02_03.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615991/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_03_01.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615999/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_04.gif' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615999/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_05.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615999/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_06_00.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579615999/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_06_01.jpg' },
      ],
      client: 'Sintep',
      sector: 'Educación, Sindical',
      tags: 'Audiovisual, Gráfico, Diseño web',
      date: 'Agosto, 2019'
    }
  } else if (name === 'milongas-extremas') {
    project = {
      name: 'Milongas Extremas: Arte de disco Temprano',
      shortDescription: 'Diseño del arte del disco “Temprano” de Milongas Extremas.',
      descriptionPharagraphs: [
        'Milongas Extremas es un cuarteto de guitarras criollas y voces, con espíritu roquero, un carácter musical único, propio y una actitud escénica que expone lo extremo de sus milongas.',
      ],
      coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628413/subte-web/projects-mockups/Milongas%20Extremas/01_00.jpg',
      trabajosUrls: [
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628414/subte-web/projects-mockups/Milongas%20Extremas/01_01.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628414/subte-web/projects-mockups/Milongas%20Extremas/01_02.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628414/subte-web/projects-mockups/Milongas%20Extremas/01_03.jpg' },
      ],
      client: 'Milongas Extremas',
      sector: 'Música',
      tags: 'Gráfico',
      date: '2016'
    }
  } else {
    project = {
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
  }

  return new Promise((resolve) => {
    resolve(project)
  })
}

const sendContactEmail = async ({ email, tel, name, text }) => {

  const emailData = {
    from: email,
    tel: tel !== '' ? tel : undefined,
    name,
    text
  }

  return await sendPostRequest(EMAIL_URI, emailData)
}

const sendPostRequest = async (URI, data) => {

  const response = await fetch(URI, {
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