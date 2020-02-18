import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'

import { ReactComponent as PlusIcon } from '../../images/plus-icon.svg'

import '../../styles/Services.scss'

export default function Services() {

  const [sections, setSections] = useState([{
    title: 'Diseño Gráfico', isExpanded: false, description: [
      { subtitle: 'Diseño de identidad visual ', paragraph: 'Desde SUBTE queremos contribuir al desarrollo de tu estrategia de comunicación. La identidad visual es un aspecto muy importante de la imagen de tu organización, ya que se trata de su materialización y representación gráfica, es cómo los demás te ven. Un correcto desarrollo y aplicación de identidad visual permitirá diferenciarte de la competencia, así como tener mayor recordación por parte de tu público objetivo.' },
      { subtitle: 'Diseño editorial', paragraph: '¡Nos encantan las letras tanto como a vos! Y entendemos que la forma en la que presentamos nuestros mensajes también influye en cómo éstos son recibidos, por eso la maquetación y el diseño editorial son elementos de comunicación muy poderosos. Entre nuestros servicios relacionados al diseño editorial ofrecemos maquetación y diseño de libros y librillos, folletos y catálogos de producto. Nos gusta combinar el mundo analógico con el digital y pensar las estrategias como procesos colaborativos.' }
    ]
  }, {
    title: 'Programación', isExpanded: false, description: [
      { subtitle: 'Diseño web', paragraph: 'Hoy por hoy es difícil imaginar tu proyecto sin una web donde dar a conocer todo lo que estás haciendo o lo que ofrecés. Podemos crear contigo, desde un espacio donde publicar tus documentos, un repositorio multimedia y una historia de tu organización, hasta una tienda donde puedas vender tus productos. Aprovechar las plataformas digitales es una forma de optimizar tus recursos y darte a conocer.' },
      { subtitle: 'Desarrollo de aplicaciones', paragraph: 'Las aplicaciones web son herramientas cada vez más poderosas que se pueden utilizar para resolver los más diversos problemas. Mejorar la comunicación, apoyar la gestión de tu organización, o vincularte con tu público son algunas de las muchas opciones que están a nuestro alcance.' }
    ]
  }, {
    title: 'Ilustración', isExpanded: false, description: [
      { subtitle: null, paragraph: 'Confiamos en la ilustración como una herramienta poderosa para comunicar ideas y emociones. Nos apoyamos en la imagen ilustrada como un fin en sí mismo, como recurso didáctico y como aporte a la identidad visual de nuestras propuestas.' },
    ]
  }, {
    title: 'Marketing Digital', isExpanded: false, description: [
      { subtitle: 'Gestión de Redes Sociales', paragraph: 'Tener presencia en redes sociales es fundamental, es el lugar donde tu público te va a estar buscando, y desde donde podés dar a conocer lo que hacés. Administramos integralmente todas tus redes sociales. Entendemos las diferentes dinámicas de comunicación que se presentan en los diferentes canales digitales, así como los códigos que comparten las comunidades online. Nos ocupamos tanto de la estrategia, como del contenido, el diseño y el monitoreo de las mismas.' },
      { subtitle: 'Desarrollo de Contenido', paragraph: 'Si bien es importante tener presencia en las redes sociales, es imprescindible desarrollar y publicar contenido acorde a los valores de tu organización. Los medios digitales nos dan la oportunidad de comunicar nuestros mensajes a audiencias muy grandes, por lo cual es fundamental entender qué tipo de contenido y qué formato es pertinente en cada plataforma.' },
      { subtitle: 'Campañas publicitarias', paragraph: 'Te ayudamos a potenciar el alcance de tu mensaje mediante una segmentación estratégica que te permitirá optimizar los recursos con los que cuentes. Mediante el uso de Facebook e Instagram Ads podrás ampliar tu comunidad y llegar a muchos más usuarios.' }
    ]
  }, {
    title: 'Producción Audiovisual', isExpanded: false, description: [
      { subtitle: null, paragraph: 'La explosión de contenidos en formato de video ha conducido a incorporar la producción de recursos audiovisuales a las estrategias de comunicación.' },
      { subtitle: null, paragraph: 'Sin costos altos, apostando al desarrollo de ideas sólidas y orientados por objetivos claros podemos elaborar piezas audiovisuales de calidad.' },
    ]
  }, {
    title: 'Formación', isExpanded: false, description: [
      { subtitle: 'Talleres, consultoría y capacitación', paragraph: 'Trabajamos con la convicción de que la construcción de alternativas se produce en el plano económico, político y cultural, pero también en el simbólico y estético. Conformamos este espacio para poder trabajar y reflexionar integrando esas diferentes dimensiones de la vida social.' },
      { subtitle: null, paragraph: 'Ofrecemos instancias de formación en arte, comunicación, redes sociales y sistemas de gestión de contenidos.' },
    ]
  }])

  let onToggleAccordion = (i) => {
    setSections(sections.map((s, index) => {
      s.isExpanded = index === i && !s.isExpanded
      return s
    }))
    console.log(sections)
  }

  return (
    <div className='section-container container-fluid services-container'>
      <div className='row justify-content-center black-intro'>
        <div className='col-11'>
          <h4>Servicios</h4>
          <h2 className='negrita'>Cooperar, una idea simple y potente que elegimos para trabajar juntes</h2>
        </div>
      </div>
      <div className='row justify-content-center my-5'>
        <div className='col-12 px-0'>
          <Accordion>
            {
              sections.map((section, i) => (
                <div>
                  <Card key={i} className={`py-2 ${section.isExpanded && 'expanded'}`}>
                    <div className='row justify-content-center mx-0'>
                      <div className='col-11'>
                        <Accordion.Toggle as={Card.Header} eventKey={i} className='service-title px-0' onClick={() => {
                          onToggleAccordion(i)
                        }}>
                          {section.title}
                          <PlusIcon className={`float-right ${section.isExpanded && 'expanded'}`} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i}>
                          <Card.Body className='px-0'>
                            {
                              section.description.map((d, index) => (
                                <div>
                                  {
                                    d.subtitle ? <h3>{d.subtitle}</h3> : <></>
                                  }
                                  <p key={index} className={index === section.description.length - 1 ? 'mb-0': '' }>{d.paragraph}</p>
                                </div>
                              ))
                            }
                          </Card.Body>
                        </Accordion.Collapse>
                      </div>
                    </div>
                  </Card>
                  {
                    i < sections.length - 1 ?
                      <div className='divider-line'></div> :
                      <></>
                  }
                </div>
              ))
            }
          </Accordion>
        </div>
      </div>
    </div>
  )
}