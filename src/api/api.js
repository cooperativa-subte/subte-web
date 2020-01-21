const EMAIL_URI = 'https://subte-api.herokuapp.com/contactemail'

function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        name: 'Campaña de afiliación de SINTEP',
        url: 'sintep',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628144/subte-web/projects-mockups/Nos%20Tenemos%20que%20Unir/08_00_cover.png',
        tags: ['Audiovisual', 'Gráfico', 'Diseño web']
      },
      {
        id: 2,
        name: 'Arte de Disco de Milongas Extremas',
        url: 'milongas-extremas',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579629326/subte-web/projects-mockups/Milongas%20Extremas/01_00_cover.png',
        tags: ['Gráfico']
      },
      {
        id: 3,
        name: 'SINTEP: Librillo de estatutos',
        url: 'estatutos-sintep',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579629666/subte-web/projects-mockups/Estatutos%20Sintep/03_00_cover.png',
        tags: ['Gráfico']
      },
      {
        id: 4,
        name: 'ADES: Boletín sindical',
        url: 'adesmontevideo',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579629040/subte-web/projects-mockups/Ades%20Montevideo/02_00_cover.png',
        tags: ['Gráfico']
      },
      {
        id: 5,
        name: 'AFFUR: Voz & Eco',
        url: 'voz-y-eco',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630920/subte-web/projects-mockups/Voz%20y%20Eco/04_00_cover.png',
        tags: ['Gráfico']
      },
      {
        id: 6,
        name: 'Comuna: Librillos “Economía para la lucha educativa”',
        url: 'librillos-comuna',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631194/subte-web/projects-mockups/Librillos%20Comuna/05_00_00_cover.png',
        tags: ['Gráfico']
      },
    ])
  })
}

function getProjectDetail(name) {
  let project = null;

  //TODO: Remove when is neccessary

  switch (name) {
    case 'sintep':
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
      break;
    case 'milongas-extremas':
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
      break;
    case 'estatutos-sintep':
      project = {
        name: 'SINTEP: Librillo de estatutos',
        shortDescription: 'Diseño de librillo de Estatutos del Sindicato de Trabajadores y Trabajadoras de la Enseñanza Privada.',
        descriptionPharagraphs: [
          'Los Estatutos son un documento de gran relevancia para las organizaciones. Allí uno puede conocer cómo funciona el sindicato, cuáles son sus espacios de decisión, qué derechos y obligaciones tienen las y los afiliados. Tener una versión en papel, amigable para la lectura, nos parece una buena idea.',
        ],
        coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579629668/subte-web/projects-mockups/Estatutos%20Sintep/03_00.jpg',
        trabajosUrls: [
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579629668/subte-web/projects-mockups/Estatutos%20Sintep/03_01.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579629668/subte-web/projects-mockups/Estatutos%20Sintep/03_02.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579629668/subte-web/projects-mockups/Estatutos%20Sintep/03_03.jpg' },
        ],
        client: 'Sintep',
        sector: 'Educación, Sindical',
        tags: 'Gráfico',
        date: 'Noviembre, 2017'
      }
      break;
    case 'adesmontevideo':
      project = {
        name: 'ADES: Boletín sindical',
        shortDescription: 'Diseño de boletín mensual para la filial sindical ADES Montevideo.',
        descriptionPharagraphs: [
          'Los sindicatos siempre tienen mucha información para difundir entre sus afiliadas y afiliados. Un boletín sigue siendo una muy buena forma de hacerlo.',
        ],
        coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628973/subte-web/projects-mockups/Ades%20Montevideo/02_00.jpg',
        trabajosUrls: [
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628973/subte-web/projects-mockups/Ades%20Montevideo/02_01.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628973/subte-web/projects-mockups/Ades%20Montevideo/02_02.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628973/subte-web/projects-mockups/Ades%20Montevideo/02_03.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628973/subte-web/projects-mockups/Ades%20Montevideo/02_04.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579628973/subte-web/projects-mockups/Ades%20Montevideo/02_05.jpg' },
        ],
        client: 'ADES Montevideo',
        sector: 'Educación, Sindical',
        tags: 'Gráfico',
        date: '2012-2015'
      }
      break;
    case 'voz-y-eco':
      project = {
        name: 'AFFUR: Voz & Eco',
        shortDescription: 'Diseño de publicación sindical para la Agremiación Federal de Funcionarios de la Universidad de la República.',
        descriptionPharagraphs: [
          'Las publicaciones sindicales impresas siguen siendo una muy buena forma de comunicar ideas, más allá de las ventajas que puede otorgar la comunicación digital. La publicación impresa se hace presente materialmente en los lugares de trabajo y en los hogares. Además, son una tarea militante que requiere de organización colectiva, de planificación. Su misma elaboración son un aprendizaje colectivo que aumenta las capacidades de la organización.',
        ],
        coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630921/subte-web/projects-mockups/Voz%20y%20Eco/04_00.jpg',
        trabajosUrls: [
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630920/subte-web/projects-mockups/Voz%20y%20Eco/04_01_01.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630920/subte-web/projects-mockups/Voz%20y%20Eco/04_01_02.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630920/subte-web/projects-mockups/Voz%20y%20Eco/04_01_03.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630920/subte-web/projects-mockups/Voz%20y%20Eco/04_02_01.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630920/subte-web/projects-mockups/Voz%20y%20Eco/04_02_02.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579630920/subte-web/projects-mockups/Voz%20y%20Eco/04_02_03.jpg' },
        ],
        client: 'AFFUR',
        sector: 'Educación, Sindical',
        tags: 'Gráfico',
        date: '2016'
      }
      break;
    case 'librillos-comuna':
      project = {
        name: 'Comuna: Librillos “Economía para la lucha educativa”',
        shortDescription: 'Diseño de librillos para el ciclo de talleres “Economía para la lucha educativa”.',
        descriptionPharagraphs: [
          'Comuna es una cooperativa amiga que se dedica a investigar, asesorar y formar a organizaciones sindicales, cooperativas y populares en asuntos relacionados con las ciencias económicas.',
          'Estos librillos fueron diseñados para su entrega gratuita en el ciclo de talleres denominado “Economía para la lucha educativa” que se propuso generar un espacio de formación y encuentro entre militantes de la educación para reflexionar sobre el sistema educativo desde una mirada crítica.'
        ],
        coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631192/subte-web/projects-mockups/Librillos%20Comuna/05_00_00.jpg',
        trabajosUrls: [
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631190/subte-web/projects-mockups/Librillos%20Comuna/05_01_01.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631190/subte-web/projects-mockups/Librillos%20Comuna/05_01_02.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631190/subte-web/projects-mockups/Librillos%20Comuna/05_01_03.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631190/subte-web/projects-mockups/Librillos%20Comuna/05_01_04.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631190/subte-web/projects-mockups/Librillos%20Comuna/05_01_05.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631190/subte-web/projects-mockups/Librillos%20Comuna/05_01_06.jpg' },
          { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1579631190/subte-web/projects-mockups/Librillos%20Comuna/05_01_07.jpg' },
        ],
        client: 'Comuna',
        sector: 'Cooperativa, Educación',
        tags: 'Gráfico',
        date: 'Setiembre, 2019'
      }
      break;
    default:
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
      break;
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