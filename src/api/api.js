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
      // description: 'Comuna es una cooperativa de trabajo que integramos investigadoras/es de las ciencias económicas y que comienza a trabajar en setiembre de 2014. Nuestro propósito es generar conocimiento con organizaciones sociales, tanto con sindicatos como con cooperativas de trabajo y de vivienda así como otras organizaciones populares a fin de contribuir al pensamiento crítico y la acción colectiva. Intentamos sostener acuerdos de trabajo que nos permitan el despliegue de una estrategia que combina el aporte en tres grandes ejes: formación; elaboración de documentos de investigación y asesoramiento especializado.',
      description: 'Comuna es una cooperativa de trabajo que integran investigadoras/es de las ciencias económicas y que comienza a trabajar en setiembre de 2014. Desde el comienzo de Subte nos interesa vincularnos con otras cooperativas y organizaciones, además de parecernos súper importante tener claridad de la economía de nuestra cooperativa y del mundo en general. Es por ello que nos interesó formar un vínculo con Comuna.',
      img: 'https://res.cloudinary.com/mepediacobas/image/upload/v1572376540/subte-web/comuna_logo.jpg',
      trabajosUrls: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
      ]
    })
  })
}

export {
  getProjects,
  getProjectDetail
}