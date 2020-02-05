import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'

import { ReactComponent as PlusIcon } from '../../images/plus-icon.svg'

import '../../styles/Services.scss'

export default function Services() {

  const [sections, setSections] = useState([{
    title: 'Diseño Gráfico', isExpanded: false, description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan facilisis odio, vel tincidunt risus sagittis ut. Duis eu felis laoreet est dictum fermentum. Suspendisse ac semper ligula, vel vehicula odio. Quisque consectetur, ipsum at facilisis sollicitudin, metus justo porttitor tortor, non sodales augue diam rutrum erat. Vivamus nec felis sit amet tellus rhoncus mattis at vitae augue. Nulla placerat, ipsum et hendrerit pharetra, ligula tellus dapibus magna, at efficitur ligula est vel sapien. Integer pulvinar augue at finibus dictum. Nulla facilisi. Quisque congue quam ut ante vulputate, faucibus molestie neque laoreet. Etiam venenatis feugiat quam vel dictum. Vestibulum ut laoreet mi. In ut dui odio.',
      'Praesent posuere at turpis eu bibendum. Vivamus leo nisi, congue quis accumsan at, porta sed dolor. Praesent vitae dui posuere, tincidunt dui et, scelerisque enim. Maecenas dolor nulla, pulvinar vitae odio et, commodo tincidunt velit. Maecenas molestie nisi velit, a eleifend tortor accumsan eget.'
    ]
  }, {
    title: 'Programación', isExpanded: false, description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan facilisis odio, vel tincidunt risus sagittis ut. Duis eu felis laoreet est dictum fermentum. Suspendisse ac semper ligula, vel vehicula odio. Quisque consectetur, ipsum at facilisis sollicitudin, metus justo porttitor tortor, non sodales augue diam rutrum erat. Vivamus nec felis sit amet tellus rhoncus mattis at vitae augue. Nulla placerat, ipsum et hendrerit pharetra, ligula tellus dapibus magna, at efficitur ligula est vel sapien. Integer pulvinar augue at finibus dictum. Nulla facilisi. Quisque congue quam ut ante vulputate, faucibus molestie neque laoreet. Etiam venenatis feugiat quam vel dictum. Vestibulum ut laoreet mi. In ut dui odio.',
      'Praesent posuere at turpis eu bibendum. Vivamus leo nisi, congue quis accumsan at, porta sed dolor. Praesent vitae dui posuere, tincidunt dui et, scelerisque enim. Maecenas dolor nulla, pulvinar vitae odio et, commodo tincidunt velit. Maecenas molestie nisi velit, a eleifend tortor accumsan eget.'
    ]
  }, {
    title: 'Producción Audiovisual', isExpanded: false, description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan facilisis odio, vel tincidunt risus sagittis ut. Duis eu felis laoreet est dictum fermentum. Suspendisse ac semper ligula, vel vehicula odio. Quisque consectetur, ipsum at facilisis sollicitudin, metus justo porttitor tortor, non sodales augue diam rutrum erat. Vivamus nec felis sit amet tellus rhoncus mattis at vitae augue. Nulla placerat, ipsum et hendrerit pharetra, ligula tellus dapibus magna, at efficitur ligula est vel sapien. Integer pulvinar augue at finibus dictum. Nulla facilisi. Quisque congue quam ut ante vulputate, faucibus molestie neque laoreet. Etiam venenatis feugiat quam vel dictum. Vestibulum ut laoreet mi. In ut dui odio.',
      'Praesent posuere at turpis eu bibendum. Vivamus leo nisi, congue quis accumsan at, porta sed dolor. Praesent vitae dui posuere, tincidunt dui et, scelerisque enim. Maecenas dolor nulla, pulvinar vitae odio et, commodo tincidunt velit. Maecenas molestie nisi velit, a eleifend tortor accumsan eget.'
    ]
  }, {
    title: 'Marketing Audiovisual', isExpanded: false, description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan facilisis odio, vel tincidunt risus sagittis ut. Duis eu felis laoreet est dictum fermentum. Suspendisse ac semper ligula, vel vehicula odio. Quisque consectetur, ipsum at facilisis sollicitudin, metus justo porttitor tortor, non sodales augue diam rutrum erat. Vivamus nec felis sit amet tellus rhoncus mattis at vitae augue. Nulla placerat, ipsum et hendrerit pharetra, ligula tellus dapibus magna, at efficitur ligula est vel sapien. Integer pulvinar augue at finibus dictum. Nulla facilisi. Quisque congue quam ut ante vulputate, faucibus molestie neque laoreet. Etiam venenatis feugiat quam vel dictum. Vestibulum ut laoreet mi. In ut dui odio.',
      'Praesent posuere at turpis eu bibendum. Vivamus leo nisi, congue quis accumsan at, porta sed dolor. Praesent vitae dui posuere, tincidunt dui et, scelerisque enim. Maecenas dolor nulla, pulvinar vitae odio et, commodo tincidunt velit. Maecenas molestie nisi velit, a eleifend tortor accumsan eget.'
    ]
  }, {
    title: 'Ilustración', isExpanded: false, description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan facilisis odio, vel tincidunt risus sagittis ut. Duis eu felis laoreet est dictum fermentum. Suspendisse ac semper ligula, vel vehicula odio. Quisque consectetur, ipsum at facilisis sollicitudin, metus justo porttitor tortor, non sodales augue diam rutrum erat. Vivamus nec felis sit amet tellus rhoncus mattis at vitae augue. Nulla placerat, ipsum et hendrerit pharetra, ligula tellus dapibus magna, at efficitur ligula est vel sapien. Integer pulvinar augue at finibus dictum. Nulla facilisi. Quisque congue quam ut ante vulputate, faucibus molestie neque laoreet. Etiam venenatis feugiat quam vel dictum. Vestibulum ut laoreet mi. In ut dui odio.',
      'Praesent posuere at turpis eu bibendum. Vivamus leo nisi, congue quis accumsan at, porta sed dolor. Praesent vitae dui posuere, tincidunt dui et, scelerisque enim. Maecenas dolor nulla, pulvinar vitae odio et, commodo tincidunt velit. Maecenas molestie nisi velit, a eleifend tortor accumsan eget.'
    ]
  }, {
    title: 'Formación', isExpanded: false, description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan facilisis odio, vel tincidunt risus sagittis ut. Duis eu felis laoreet est dictum fermentum. Suspendisse ac semper ligula, vel vehicula odio. Quisque consectetur, ipsum at facilisis sollicitudin, metus justo porttitor tortor, non sodales augue diam rutrum erat. Vivamus nec felis sit amet tellus rhoncus mattis at vitae augue. Nulla placerat, ipsum et hendrerit pharetra, ligula tellus dapibus magna, at efficitur ligula est vel sapien. Integer pulvinar augue at finibus dictum. Nulla facilisi. Quisque congue quam ut ante vulputate, faucibus molestie neque laoreet. Etiam venenatis feugiat quam vel dictum. Vestibulum ut laoreet mi. In ut dui odio.',
      'Praesent posuere at turpis eu bibendum. Vivamus leo nisi, congue quis accumsan at, porta sed dolor. Praesent vitae dui posuere, tincidunt dui et, scelerisque enim. Maecenas dolor nulla, pulvinar vitae odio et, commodo tincidunt velit. Maecenas molestie nisi velit, a eleifend tortor accumsan eget.'
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
                          <PlusIcon className={`float-right ${section.isExpanded && 'expanded' }`} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i}>
                          <Card.Body className='px-0'>
                            {
                              section.description.map((d, index) => (
                                <p key={index}>{d}</p>
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