import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { useSignUpForm } from '../utils/CustomHooks';
import { sendContactEmail } from '../../api/_api';

import '../../styles/Contact.scss';

/* eslint-disable no-control-regex */
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
/* eslint-enable no-control-regex */

const qs = require('qs');

const Contact = (props) => {
  const [errors, setErrors] = useState({});
  const [userMessage, setUserMessage] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [spinnerText, setSpinnerText] = useState('');
  const [messageText] = useState(() =>
    qs.parse(props.location.search.slice(1)).subject != null
      ? qs.parse(props.location.search.slice(1)).subject
      : '',
  );

  const spinnerTextRef = useRef(
    'No cierre el navegador se está enviando el mensaje',
  );

  let stopper = `${spinnerTextRef.current}...`;

  useEffect(() => {}, [spinnerText]);

  useEffect(() => {}, []);

  const onSubmitForm = async () => {
    await validateForm();
    let interval;
    if (
      Object.keys(errors).length > 0 &&
      !errors.name &&
      !errors.email &&
      !errors.message
    ) {
      try {
        interval = setSendingIntervalEvent();
        setShowSpinner(true);
        const response = await sendContactEmail({
          email: inputs.email,
          name: inputs.name,
          tel: inputs.tel,
          text: inputs.message,
        });
        if (response.status === 'ok') {
          setUserMessage({
            type: 'success',
            message: `Tu mensaje fue enviado con éxito.`,
          });
          clearForm();
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
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      name: '',
      tel: '',
      email: '',
      subject: '',
      message: `${messageText}`,
    },
    onSubmitForm,
  );

  const setSendingIntervalEvent = () => {
    return setInterval(() => {
      spinnerTextRef.current === stopper
        ? (spinnerTextRef.current =
            'No cierre el navegador se está enviando el mensaje')
        : (spinnerTextRef.current = `${spinnerTextRef.current}.`);

      setSpinnerText(spinnerTextRef.current);
    }, 300);
  };

  const validateForm = async (inputName) => {
    let obj = {};
    switch (inputName) {
      case 'name':
        obj = {
          ...errors,
          name: inputs[inputName].length < 3,
        };
        break;
      case 'email':
        obj = {
          ...errors,
          email: !emailRegex.exec(inputs[inputName]),
        };
        break;
      case 'message':
        obj = {
          ...errors,
          message: inputs[inputName].length < 10,
        };
        break;
      default:
        obj = {
          ...errors,
          name: inputs.name.length < 3,
          email: !emailRegex.exec(inputs.email),
          message: inputs.message.length < 10,
        };
        break;
    }
    await setErrors(obj);
  };

  const clearForm = () => {
    handleInputChange({ custom: true, name: 'name', value: '' });
    handleInputChange({ custom: true, name: 'email', value: '' });
    handleInputChange({ custom: true, name: 'tel', value: '' });
    handleInputChange({ custom: true, name: 'subject', value: '' });
    handleInputChange({ custom: true, name: 'message', value: '' });
  };

  return (
    <div className="contact-section-container section-container container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-11">
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
              <form
                className="row mb-3 justify-content-left"
                onSubmit={handleSubmit}
                autoComplete="on"
                noValidate
              >
                <div className="col-12 col-md-10">
                  <label className="d-block">Nombre y Apellido:</label>
                  <input
                    name="name"
                    type="text"
                    className="w-100"
                    required
                    onChange={handleInputChange}
                    value={inputs.name}
                    onBlur={() => validateForm('name')}
                  />
                </div>
                {errors.name && (
                  <div className="col-12 col-md-10 mt-2 error">
                    <span>
                      El nombre y apellido tiene que tener al menos{' '}
                      <span className="negrita">3 letras</span>
                    </span>
                  </div>
                )}
                <div className="w-100"></div>
                <div className="col-12 col-md-10 mt-2">
                  <div className="row justify-content-between">
                    <div className="col-6">
                      <label>Teléfono:</label>
                    </div>
                    <div className="col-4 text-right italica subte-font-sm">
                      <span>Opcional</span>
                    </div>
                  </div>
                  <input
                    name="tel"
                    type="text"
                    className="w-100"
                    onChange={handleInputChange}
                    value={inputs.tel}
                  />
                </div>
                <div className="w-100"></div>
                <div className="col-12 col-md-10 mt-2">
                  <label className="d-block">Email:</label>
                  <input
                    name="email"
                    type="email"
                    className="w-100"
                    autoComplete="on"
                    required
                    onChange={handleInputChange}
                    value={inputs.email}
                    onBlur={() => validateForm('email')}
                  />
                </div>
                {errors.email && (
                  <div className="col-12 col-md-10 mt-2 error">
                    <p className="my-0">
                      <span>
                        Por favor ingrese una dirección de email válida.
                      </span>
                    </p>
                    <p className="my-0">
                      <span>
                        Ej. <i>nombreapellido@gmail.com</i>
                      </span>
                    </p>
                  </div>
                )}
                <div className="w-100"></div>
                <div className="col-12 col-md-10 mt-2">
                  <label className="d-block">Asunto:</label>
                  <input
                    name="subject"
                    type="text"
                    className="w-100"
                    autoComplete="on"
                    onChange={handleInputChange}
                    value={inputs.subject}
                    onBlur={() => validateForm('subject')}
                  />
                </div>
                <div className="w-100"></div>
                <div className="col-12 col-md-10 mt-2">
                  <label className="d-block">Mensaje:</label>
                  <textarea
                    name="message"
                    className="w-100"
                    required
                    onChange={handleInputChange}
                    value={inputs.message}
                    onBlur={() => validateForm('message')}
                  />
                </div>
                {errors.message && (
                  <div className="col-12 col-md-10 mt-2 error">
                    <span>
                      El mensaje tiene que tener al menos{' '}
                      <span className="negrita">10 letras</span>
                    </span>
                  </div>
                )}

                {/* Error de cuando se envio el mail correctamente */}
                {userMessage && (
                  <div className="col-12 col-md-10 mt-2 error">
                    {userMessage.type === 'success' ? (
                      <span className="success">{userMessage.message}</span>
                    ) : (
                      <span className="error server">
                        {userMessage.message}
                      </span>
                    )}
                  </div>
                )}
                <div className="w-100"></div>
                <div className="col-12 col-md-10 mt-2">
                  {showSpinner ? (
                    <div className="send-message">
                      <p>{spinnerTextRef.current}</p>
                    </div>
                  ) : (
                    <button type="subtmi">Enviar Mensaje</button>
                  )}
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 about-us-text">
              <h4 className="mb-4">Contactanos</h4>
              <p className="mb-0">
                Si buscás{' '}
                <NavLink exact to={`/servicios`}>
                  servicios
                </NavLink>{' '}
                de diseño, programación o ilustración no dudes en ponerte en
                contacto con nosotres. Tenemos planes especiales para
                cooperativas y organizaciones sociales.
              </p>
              <div className="align-center mt-4">
                <iframe
                  title="map-radiopedal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.784452366346!2d-56.18463988518026!3d-34.911858380380814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8034649710d3%3A0x6c230f4b5e56653e!2sRadio%20Pedal!5e0!3m2!1sen!2suy!4v1579632537507!5m2!1sen!2suy"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: '0px' }}
                  allowFullScreen=""
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
