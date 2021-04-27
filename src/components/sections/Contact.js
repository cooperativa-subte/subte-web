import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { sendContactEmail } from '../../api/_api';

import '../../styles/Contact.scss';

const qs = require('qs');
const loadingMessage = 'No cierre el navegador se está enviando el mensaje';

const Contact = (props) => {
  const [userMessage, setUserMessage] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [messageText] = useState(() =>
    qs.parse(props.location.search.slice(1)).subject != null
      ? qs.parse(props.location.search.slice(1)).subject
      : ''
  );
  const { register, handleSubmit, errors } = useForm();

  const spinnerTextRef = useRef(loadingMessage);

  const onSubmit = async (data, e) => {
    let interval;
    try {
      interval = setSendingIntervalEvent();
      setShowSpinner(true);
      const response = await sendContactEmail({
        email: data.email,
        name: data.name,
        tel: data.tel,
        message: data.message,
        subject: data.subject,
      });
      if (response && response.status === 'ok') {
        setUserMessage({
          type: 'success',
          message: `Tu mensaje fue enviado con éxito.`,
        });
        e.target.reset();
      } else {
        setUserMessage({
          type: 'error',
          message:
            'Hubo un error al mandar el mail, intente de nuevo o comuniquese con el mail hola@subte.uy. ¡Gracias!',
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setShowSpinner(false);
      clearInterval(interval);
    }
  };

  const setSendingIntervalEvent = () => {
    return setInterval(() => {
      let text = spinnerTextRef.current;
      text =
        text === `${spinnerTextRef.current}...` ? loadingMessage : `${text}.`;
    }, 300);
  };

  return (
    <div className='contact-section-container section-container container-fluid'>
      <div className='row justify-content-center mt-5'>
        <div className='col-11'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-6'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre y Apellido: *</label>
                <input
                  name='name'
                  id='name'
                  type='text'
                  ref={register({ required: true })}
                  defaultValue={messageText}
                />
                {errors.name && (
                  <div className='error'>
                    <span>
                      El nombre y apellido tiene que tener al menos{' '}
                      <span className='negrita'>3 letras</span>
                    </span>
                  </div>
                )}
                <label htmlFor='tel'>Teléfono:</label>
                <input type='text' id='tel' name='tel' ref={register} />
                <label htmlFor='email'>Email: *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  ref={register({ required: true })}
                />
                {errors.email && (
                  <div className='error'>
                    <span>El campo de Email es requerido</span>
                  </div>
                )}
                <label htmlFor='subject'>Asunto:</label>
                <input type='text' id='subject' name='subject' ref={register} />
                <label htmlFor='message'>Mensaje: *</label>
                <textarea
                  name='message'
                  id='message'
                  ref={register({ required: true, minLength: 10 })}
                />
                {errors.message && (
                  <div className='error'>
                    <span>
                      El mensaje tiene que tener al menos{' '}
                      <span className='negrita'>10 letras</span>
                    </span>
                  </div>
                )}
                {userMessage && (
                  <div className='col-12 col-md-10 mt-2 pl-0 error'>
                    {userMessage.type === 'success' ? (
                      <span className='success'>{userMessage.message}</span>
                    ) : (
                      <span className='error server'>
                        {userMessage.message}
                      </span>
                    )}
                  </div>
                )}
                {showSpinner ? (
                  <div className='send-message'>
                    <p>{spinnerTextRef.current}</p>
                  </div>
                ) : (
                  <button type='subtmi'>Enviar Mensaje</button>
                )}
              </form>
            </div>
            <div className='col-12 col-md-6 about-us-text'>
              <h4 className='mb-4'>Contactanos</h4>
              <p className='mb-0'>
                Si buscás{' '}
                <NavLink exact to={`/servicios`}>
                  servicios
                </NavLink>{' '}
                de diseño, programación o ilustración no dudes en ponerte en
                contacto con nosotres. Tenemos planes especiales para
                cooperativas y organizaciones sociales.
              </p>
              <div className='align-center mt-4'>
                <iframe
                  title='map-subte'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.784452366346!2d-56.18463988428289!3d-34.911858380380814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f815c6b7fd04f%3A0x83520e5d5391232c!2sCooperativa%20de%20trabajo%20SUBTE!5e0!3m2!1ses-419!2suy!4v1619566788114!5m2!1ses-419!2suy'
                  width='100%'
                  height='300'
                  style='border:0;'
                  allowfullscreen=''
                  style={{ border: '0px' }}
                  loading='lazy'
                  frameBorder='0'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
