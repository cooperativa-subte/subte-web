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

export {
  getProjects
}