function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
      { id: 1, name: 'Hemisferio Izquierdo', url: 'hemisferio-izquierdo', imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076216/subte-web/projects-covers/hemisferio-cover.png' },
      { id: 2, name: 'SINTEP', url: 'sintep', imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076215/subte-web/projects-covers/sintep-cover.png' },
      { id: 3, name: 'Milongas Extremas', url: 'milongas-extremas', imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076216/subte-web/projects-covers/milongas-cover.png' },
      { id: 4, name: 'Cooperativa Comuna', url: 'comuna', imgCover: 'https://res.cloudinary.com/mepediacobas/image/upload/v1573076216/subte-web/projects-covers/comuna-cover.png' }
    ])
  })
}

function getProjectDetail(name) {
  return new Promise((resolve) => {
    resolve({
      name: 'Cooperativa Comuna',
      description: 'Comuna es una cooperativa de trabajo que integran investigadoras/es de las ciencias económicas y que comienza a trabajar en setiembre de 2014. Desde el comienzo de Subte nos interesa vincularnos con otras cooperativas y organizaciones, además de parecernos súper importante tener claridad de la economía de nuestra cooperativa y del mundo en general. Es por ello que nos interesó formar un vínculo con Comuna.',
      shortDescription: 'Proyecto con la Cooperativa Comuna sobre el ciclo de formación "Economía para la lucha educativa"',
      coverPhoto: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574271966/subte-web/comuna_proyect_cover.png',
      img: 'https://res.cloudinary.com/mepediacobas/image/upload/v1572376540/subte-web/comuna_logo.jpg',
      trabajosUrls: [
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna1.png',
          highRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574196183/subte-web/comuna_h1.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna2.png',
          highRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574196183/subte-web/comuna_h2.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna3.png',
          highRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574196183/subte-web/comuna_h3.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna4.png',
          highRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574196183/subte-web/comuna_h4.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna5.png',
          highRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574196183/subte-web/comuna_h5.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna6.png',
          highRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574196183/subte-web/comuna_h6.png'
        },
        {
          lowRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574195031/subte-web/comuna7.png',
          highRes: 'https://res.cloudinary.com/mepediacobas/image/upload/v1574196183/subte-web/comuna_h7.png'
        },
      ]
    })
  })
}

export {
  getProjects,
  getProjectDetail
}