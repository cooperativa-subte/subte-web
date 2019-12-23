const EMAIL_URI = 'https://subte-api.herokuapp.com/contactemail'

function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 2,
        name: 'Campaña Institucional de SINTEP',
        url: 'sintep',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576701659/subte-web/projects-covers/sintep_cover_card.png',
        tags: ['Sindicato', 'Audiovisual']
      },
      {
        id: 3,
        name: 'Milongas Extremas',
        url: 'milongas-extremas',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076216/subte-web/projects-covers/milongas-cover.png',
        tags: ['Afiche']
      },
      {
        id: 5,
        name: 'Ades Montevideo',
        url: 'adesmontevideo',
        cardImgURI: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574886344/subte-web/projects-covers/adesmontevideo-cover.png',
        tags: ['Sindicato', 'Afiche']
      }
    ])
  })
}

function getProjectDetail(name) {
  let obj = null;

  //TODO: Remove when is neccessary

  if (name === 'sintep') {
    obj = {
      name: 'Sintep',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      shortDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576591835/subte-web/sintep_project_cover.png',
      trabajosUrls: [
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576591651/subte-web/projects-mockups/Sintep_01.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576591651/subte-web/projects-mockups/Sintep_02.jpg' },
      ]
    }
  } else if (name === 'milongas-extremas') {
    obj = {
      name: 'Milongas Extremas',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      shortDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576591210/subte-web/milongas_project_cover.png',
      trabajosUrls: [
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576590824/subte-web/projects-mockups/Milongas_01.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576590824/subte-web/projects-mockups/Milongas_02.jpg' },
        { lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1576590824/subte-web/projects-mockups/Milongas_03.jpg' },
      ]
    }
  } else {
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
  }

  return new Promise((resolve) => {
    resolve(obj)
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