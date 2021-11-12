import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import '../../styles/Conversatorios.scss';
import suffleArray, { verificaciones } from '../utils/utilities';
import { sendConvesatoriosInscripcion } from '../../api/_api';
import { Accordion, Card } from 'react-bootstrap';

const formCaptchas = suffleArray(verificaciones);
const loadingText = 'No cierre el navegador se está enviando la inscripción';

const Conversatorios = () => {
  const [formOpened, setFormOpened] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [selectedFormCaptcha, setSelectedFormCaptcha] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const [formMessage, setFormMessage] = useState({
    type: '',
    message: '',
  });
  const [accordionItemSelected, setAccordionItemSelected] = useState('');

  const spinnerTextRef = useRef(loadingText);

  const inscribirse = async (data, e) => {
    let interval = setSendingIntervalEvent();
    setShowSpinner(true);
    const response = await sendConvesatoriosInscripcion({
      nombre: data.nombre,
      organizacion: data.organizacion,
      mail: data.mail,
      pregunta: data.pregunta,
    });
    if (response && response.status === 'ok') {
      setFormMessage({
        type: 'success',
        message: 'Inscripción enviada correctamente',
      });
      e.target.reset();
    } else {
      console.log(response);
      setFormMessage({
        type: 'error',
        message:
          'Hubo un error al enviar la inscripción, trate de nuevo o escriba un mail a hola@subte.uy',
      });
    }
    clearInterval(interval);
    setShowSpinner(false);
  };

  const toggleAccordionItem = (index) => {
    const items = ['andres', 'dulci', 'juanma'];
    console.log(accordionItemSelected);
    if (!accordionItemSelected || accordionItemSelected !== items[index]) {
      setAccordionItemSelected(items[index]);
    } else if (accordionItemSelected === items[index]) {
      setAccordionItemSelected('');
    }
  };

  const setSendingIntervalEvent = () => {
    return setInterval(() => {
      let text = spinnerTextRef.current;
      spinnerTextRef.current =
        spinnerTextRef.current === `${loadingText}...`
          ? loadingText
          : `${text}.`;
    }, 300);
  };

  useEffect(() => {
    setSelectedFormCaptcha(formCaptchas[0]);
  }, []);

  return (
    <div className="conversatorios-container">
      <div className="header-conversatorios">
        <img
          src="https://res.cloudinary.com/subteuy/image/upload/v1610825690/subte.uy/Conversatorios/BannersWeb_conversatorios_ya8gln.jpg"
          alt="Cabezal de la sección Conversatorios"
        />
      </div>
      <div className="container-fluid container-info">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="row mb-5">
              <div className="col-12 col-md-6 order-2 order-md-1">
                <h2>¿Qué son?</h2>
                <p>
                  Los Conversatorios Subterráneos son espacios donde nos
                  proponemos reflexionar colectivamente sobre los principales
                  problemas de la comunicación en las cooperativas,
                  organizaciones sociales, culturales y políticas. Este año nos
                  propusimos realizar la edición #1 centrándonos en los
                  problemas de comunicación de las cooperativas. La invitación
                  es abierta y gratuita.
                </p>
                <div className="proximos-conversatorios-container">
                  <h2>Próximo conversatorio</h2>
                  <div>
                    <span className="numero-conversatorio">#1</span>
                    <div>
                      <p className="fecha">Sábado 13 de noviembre 2021, 19 h</p>
                      <p className="direccion">
                        Encuentro virtual por ZOOM.
                      </p>
                      <p className="direccion">Ingresá al conversatorio haciendo click <a href="https://zoom.us/j/94711499170" target="_blank" rel="noopener noreferrer">acá</a>.</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        className="fecha-img"
                      >
                        <g transform="translate(0,-952.36218)">
                          <path
                            d="m 75.247464,1000.3632 -15.99914,-18 c -1.03011,-1.22844 -3.06617,-1.33786 -4.26068,-0.26859 -1.19449,1.06926 -1.315,3.10913 -0.20782,4.26859 l 11.56187,13 -39.34181,0 c -1.6568,0 -2.9999,1.3432 -2.9999,3 0,1.6569 1.3431,3 2.9999,3 l 39.34181,0 -11.56187,13 c -1.10718,1.1595 -0.95743,3.1957 0.23706,4.265 1.19451,1.0692 3.20133,0.9634 4.23144,-0.265 l 15.99914,-18 c 1.04459,-1.4553 0.96135,-2.7618 0,-4 z"
                            fill="#000000"
                            fillOpacity="1"
                            stroke="none"
                            marker="none"
                            visibility="visible"
                            display="inline"
                            overflow="visible"
                          />
                        </g>
                      </svg>
                      <button onClick={() => setFormOpened(!formOpened)}>
                        Inscribirse
                      </button>
                    </div>
                  </div>
                </div>
                {formOpened && (
                  <form onSubmit={handleSubmit(inscribirse)}>
                    <label htmlFor="nombre">Nombre completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      ref={register}
                      required
                    />
                    <label htmlFor="organizacion">Organización</label>
                    <input
                      type="text"
                      name="organizacion"
                      id="organizacion"
                      ref={register}
                    />
                    <label htmlFor="mail">Mail *</label>
                    <input
                      type="email"
                      name="mail"
                      id="mail"
                      ref={register}
                      required
                    />
                    <label htmlFor="pregunta">
                      Pregunta o problema que quieras plantear
                    </label>
                    <textarea name="pregunta" id="pregunta" ref={register} />

                    <p>
                      Cupos limitados. Te confirmaremos por mail tu inscripción.
                    </p>
                    <div className="veri">
                      <label htmlFor="veri">
                        Completa para enviar: ¿Cuánto es{' '}
                        {selectedFormCaptcha.label}?
                      </label>
                      <input
                        id="veri"
                        name="veri"
                        type="text"
                        ref={register({
                          validate: (value) =>
                            value === selectedFormCaptcha.value,
                        })}
                      />
                      {errors.veri && (
                        <span className="error-veri">
                          Resultado incorrecto.
                        </span>
                      )}
                    </div>
                    {showSpinner ? (
                      <div className="send-message">
                        <p>{spinnerTextRef.current}</p>
                      </div>
                    ) : (
                      <button type="submit">Inscribirse</button>
                    )}

                    {formMessage.message && (
                      <p className={`${formMessage.type}`}>
                        {formMessage.message}
                      </p>
                    )}
                  </form>
                )}
                <p className="intro-participantes">
                  En esta oportunidad nos preguntamos cuáles son los principales
                  problemas y estrategias de comunicación de las cooperativas de
                  trabajo y qué experiencias y soluciones a los problemas de
                  comunicación pueden servir de referencia para pensarnos. En
                  esta edición contaremos con la participación de:
                </p>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      className={
                        accordionItemSelected === 'andres' ? 'selected' : ''
                      }
                      as={Card.Header}
                      eventKey="0"
                      onClick={() => toggleAccordionItem(0)}
                    >
                      <p>Andrés Roel <span className='gray gt'>&gt;</span><span className='gray'>Intergalactic</span></p>
                      <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.5"
                        height="31.5"
                        viewBox="0 0 31.5 31.5"
                      >
                        <path
                          id="Icon_awesome-plus"
                          data-name="Icon awesome-plus"
                          d="M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z"
                          transform="translate(0 -2.25)"
                        />
                      </svg>
                      {accordionItemSelected === 'andres' ? 'Colapsar Info' : 'Ampliar Info'}
                      </p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Es integrante de Intergalactic, una productora
                        audiovisual cooperativa. Está integrada por cuatro
                        socios que comparten todas las tareas, desde las
                        técnicas hasta las administrativas. Somos generadores de
                        contenidos y resolvemos las necesidades de comunicación
                        de nuestros clientes por medio de la realización de
                        piezas audiovisuales. Orientamos nuestros servicios a la
                        mejora permanente. Nuestra misión es fortalecer el
                        desarrollo; la producción y distribución audiovisual en
                        el medio uruguayo y permitir el acceso democrático de la
                        información a distintos actores de la sociedad.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      onClick={() => toggleAccordionItem(1)}
                      className={
                        accordionItemSelected === 'dulci' ? 'selected' : ''
                      }
                    >
                      <p>Dulcinea Cardozo <span className='gray gt'>&gt;</span><span className='gray'>Udelar</span></p>
                      <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.5"
                        height="31.5"
                        viewBox="0 0 31.5 31.5"
                      >
                        <path
                          id="Icon_awesome-plus"
                          data-name="Icon awesome-plus"
                          d="M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z"
                          transform="translate(0 -2.25)"
                        />
                      </svg>
                      {accordionItemSelected === 'dulci' ? 'Colapsar Info' : 'Ampliar Info'}
                      </p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Poeta, editora, militante antimanicomial, docente
                        universitaria, con formación en psicología. Trabaja en
                        la Universidad de la República, en el Área de
                        Cooperativismo y economía social y solidaria en el
                        Servicio Central de Extensión y Actividades en el Medio.
                        También integra el Espacio Cultural Bibliobarrio, un
                        colectivo autogestionado cultural y antimanicomial.
                        Además es integrante de Sancocho, colectivo de
                        editoriales autogestionadas y la Tienda Ecosol, tienda
                        de gestión colectiva de emprendimientos de economía
                        social y solidaria.{' '}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="2"
                      onClick={() => toggleAccordionItem(2)}
                      className={
                        accordionItemSelected === 'juanma' ? 'selected' : ''
                      }
                    >
                      <p>Juan Manuel Chaves <span className='gray gt'>&gt;</span><span className='gray'>FCPU</span></p>
                      <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.5"
                        height="31.5"
                        viewBox="0 0 31.5 31.5"
                      >
                        <path
                          id="Icon_awesome-plus"
                          data-name="Icon awesome-plus"
                          d="M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z"
                          transform="translate(0 -2.25)"
                        />
                      </svg>
                      {accordionItemSelected === 'juanma' ? 'Colapsar Info' : 'Ampliar Info'}
                      </p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Juan Manuel Chaves es Licenciado en Ciencias de la
                        Comunicación (Udelar) y Técnico en Comunicación Social
                        opción Prensa (UTU). Desde 2012 forma parte del staff
                        del Semanario Brecha (Cooperativa LaBrecha). Ha
                        participado en varios proyectos de periodismo escrito
                        sobre todo vinculado al sector cultural, además se ha
                        desempeñado como responsable de prensa de numerosos
                        eventos de alcance nacional. En los últimos años se
                        desempeñó como productor periodístico para programas de
                        televisión en TNU, Canal 4 y TV Ciudad. Desde 2017
                        trabaja en la Federación de Cooperativas de Producción
                        del Uruguay (FCPU), en un principio como comunicador del
                        proyecto Cooperación Con Equidad financiado por la Unión
                        Europea, y desde 2019 como responsable del área de
                        Comunicación.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <video
                  className="video-conversatorios"
                  autoPlay
                  loop
                  controls
                  muted
                >
                  <source
                    src="https://res.cloudinary.com/subteuy/video/upload/v1635955826/subte.uy/Conversatorios/Conversatorios_SPOTcuadrado_2021_brjgwl.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversatorios;
