import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import '../../styles/Conversatorios.scss';
import suffleArray, { verificaciones } from '../utils/utilities';
import { sendConvesatoriosInscripcion } from '../../api/_api';

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
                  organizaciones sociales, culturales y políticas.{' '}
                </p>
                <p>
                  Mediante un diálogo horizontal que aporte diferentes
                  perspectivas esbozaremos cuáles son los principales desafíos,
                  qué estrategias debemos desandar y cuáles producir. Teniendo
                  en cuenta que al poner en tensión estas cuestiones provocamos
                  una revisión interna que es de suma importancia para cualquier
                  organización colectiva.{' '}
                </p>
                <p>
                  Cada conversatorio será un encuentro de dos horas donde
                  referentes de diferentes organizaciones expondrán un pequeño
                  diagnóstico como insumo disparador para producir en conjunto
                  consensos y disensos en torno a las problemáticas comunes y
                  particulares de cada organización.{' '}
                </p>
                <p className="last-p">
                  Entendemos que la comunicación es una herramienta clave en los
                  procesos colectivos, y es sumamente potente el poder
                  cuestionar los lenguajes y dispositivos hegemónicos para
                  construir otros más cercanos y propios de las organizaciones.
                </p>
                <div className="proximos-conversatorios-container">
                  <h2>Próximo conversatorio</h2>
                  <div>
                    <span class="numero-conversatorio">#1</span>
                    <div>
                      <p className="fecha">Sábado 13 de noviembre 2021, 19 h</p>
                      <p className="direccion">
                        Casa en el Aire (San Salvador 1510)
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        className='fecha-img'
                      >
                        <g transform="translate(0,-952.36218)">
                          <path
                            d="m 75.247464,1000.3632 -15.99914,-18 c -1.03011,-1.22844 -3.06617,-1.33786 -4.26068,-0.26859 -1.19449,1.06926 -1.315,3.10913 -0.20782,4.26859 l 11.56187,13 -39.34181,0 c -1.6568,0 -2.9999,1.3432 -2.9999,3 0,1.6569 1.3431,3 2.9999,3 l 39.34181,0 -11.56187,13 c -1.10718,1.1595 -0.95743,3.1957 0.23706,4.265 1.19451,1.0692 3.20133,0.9634 4.23144,-0.265 l 15.99914,-18 c 1.04459,-1.4553 0.96135,-2.7618 0,-4 z"
                            fill="#000000"
                            fill-opacity="1"
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
                    src="https://res.cloudinary.com/subteuy/video/upload/v1610826241/subte.uy/Conversatorios/SPOTCS_C4_baja_u82811.mp4"
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
