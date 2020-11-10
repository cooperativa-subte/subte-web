import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import '../../styles/Conversatorios.scss';

const Conversatorios = () => {
  const [formOpened, setFormOpened] = useState(false);
  const { register, handleSubmit } = useForm();
  const inscribirse = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="header-conversatorios">
        <img
          src="https://res.cloudinary.com/subteuy/image/upload/v1605008507/subte.uy/Conversatorios/BannersWeb_conversatorios_sfqpuq.jpg"
          alt="Cabezal de la sección Conversatorios"
        />
      </div>
      <div className="container-fluid container-info">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="row mb-5">
              <div className="col-12 col-md-6">
                <h2>¿Qué son los Conversatorios Subterráneos?</h2>
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
                <p>
                  Entendemos que la comunicación es una herramienta clave en los
                  procesos colectivos, y es sumamente potente el poder
                  cuestionar los lenguajes y dispositivos hegemónicos para
                  construir otros más cercanos y propios de las organizaciones.
                </p>
                <div className="proximos-conversatorios-container">
                  <h3>Próximo conversatorio</h3>
                  <div>
                    <img
                      src="https://res.cloudinary.com/subteuy/image/upload/v1605009236/subte.uy/Conversatorios/CuadradoFecha_nmqhma.jpg"
                      alt="Fecha conversatorio"
                      className="fecha-img"
                    />
                    <div>
                      <p className="fecha">Sábado 21 de noviembre 2020, 19 h</p>
                      <p className="direccion">
                        Casa en el Aire (San Salvador 1510)
                      </p>
                      <img
                        src="https://res.cloudinary.com/subteuy/image/upload/v1605009336/subte.uy/Conversatorios/Flecha_tgpy6v.png"
                        alt="Flecha indicando que para inscribirse"
                        className="flecha-icono"
                      />
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
                    <button type="submit">Inscribirse</button>
                  </form>
                )}
              </div>
              <div className="col-12 col-md-6">
                <video className="video-conversatorios" autoPlay loop>
                  <source
                    src="https://res.cloudinary.com/subteuy/video/upload/v1605008842/subte.uy/Conversatorios/VideoAnimado_2_bqb5wk.mp4"
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
