function getProjects() {
  return new Promise((resolve, reject) => {
    resolve([
      { id: 1, name: 'Hemisferio Izquierdo', url: 'hemisferio-izquierdo', imgCover: 'https://i.imgur.com/JOJ2kDF.png' },
      { id: 2, name: 'SINTEP', url: 'sintep', imgCover: 'https://i.imgur.com/N8kVkNf.png' },
      { id: 3, name: 'Milongas Extremas', url: 'milongas-extremas', imgCover: 'https://i.imgur.com/VUPYQ3V.png' },
      { id: 4, name: 'Cooperativa Comuna', url: 'comuna', imgCover: 'https://i.imgur.com/IxyoXIe.png' }
    ])
  })
}

function getAsyncProjectDetail(name) {
  return new Promise((resolve) => {
    resolve({
      name: name,
      description: 'Comuna es una cooperativa de trabajo que integramos investigadoras/es de las ciencias económicas y que comienza a trabajar en setiembre de 2014. Nuestro propósito es generar conocimiento con organizaciones sociales, tanto con sindicatos como con cooperativas de trabajo y de vivienda así como otras organizaciones populares a fin de contribuir al pensamiento crítico y la acción colectiva. Intentamos sostener acuerdos de trabajo que nos permitan el despliegue de una estrategia que combina el aporte en tres grandes ejes: formación; elaboración de documentos de investigación y asesoramiento especializado.',
      img: '../../../images/projectDetails/comuna_logo.jpg'
    })
  })
}

export {
  getProjects,
  getAsyncProjectDetail
}