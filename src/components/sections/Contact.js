import React, { useState, useEffect, useRef } from 'react'

import { useSignUpForm } from '../utils/CustomHooks'
import { sendContactEmail } from '../../api/api'

import '../../styles/Contact.scss'

/* eslint-disable no-control-regex */
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
/* eslint-enable no-control-regex */

export default function Contact() {

  const [errors, setErrors] = useState({})
  const [userMessage, setUserMessage] = useState({})
  const [showSpinner, setShowSpinner] = useState(false)
  const [spinnerText, setSpinnerText] = useState('')

  const spinnerTextRef = useRef('Enviando')

  let stopper = `${spinnerTextRef.current}...`

  useEffect(() => {
    console.log(spinnerText)
  }, [spinnerText])

  const onSubmitForm = async () => {
    await validateForm()
    let interval;
    if (Object.keys(errors).length > 0 && !errors.name && !errors.email && !errors.message) {
      try {
        interval = setSendingIntervalEvent()
        setShowSpinner(true)
        const response = await sendContactEmail({
          email: inputs.email, name: inputs.name, tel: inputs.tel, text: inputs.message
        })
        if (response.status === 'ok') {
          setUserMessage({
            type: 'success',
            message: `Tu mensaje fue enviado con éxito.`
          })
          clearForm()
        } else {
          setUserMessage({
            type: 'error',
            message: 'Hubo un error al mandar el mail, intente de nuevo o comuniquese con el mail hola@subte.uy. ¡Gracias!'
          })
        }
        console.log(response)
      } catch (err) {
        console.log(err)
      } finally {
        setShowSpinner(false)
        clearIntervalEvent(interval)
      }
    }
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({
    name: '',
    tel: '',
    email: '',
    message: ''
  }, onSubmitForm);

  const setSendingIntervalEvent = () => {
    return setInterval(() => {
      // console.log(spinnerTextRef.current)

      spinnerTextRef.current === stopper ?
        spinnerTextRef.current = 'Enviando' :
        spinnerTextRef.current = `${spinnerTextRef.current}.`

      setSpinnerText(spinnerTextRef.current)

    }, 300)
  }

  const clearIntervalEvent = (interval) => {
    clearInterval(interval)
  }

  const validateForm = async (inputName) => {
    let obj = {}
    switch (inputName) {
      case 'name':
        obj = {
          ...errors,
          name: inputs[inputName].length < 3
        }
        break;
      case 'email':
        obj = {
          ...errors,
          email: !emailRegex.exec(inputs[inputName])
        }
        break;
      case 'message':
        obj = {
          ...errors,
          message: inputs[inputName].length < 10
        }
        break;
      default:
        obj = {
          ...errors,
          name: inputs.name.length < 3,
          email: !emailRegex.exec(inputs.email),
          message: inputs.message.length < 10
        }
        break;
    }
    await setErrors(obj)
  }

  const clearForm = () => {
    handleInputChange({custom: true, name: 'name', value: ''})
    handleInputChange({custom: true, name: 'email', value: ''})
    handleInputChange({custom: true, name: 'tel', value: ''})
    handleInputChange({custom: true, name: 'message', value: ''})
  }

  return (
    <div className='contact-section-container section-container container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-5 text-right'>
              <h4 className='mb-4'>Contactanos</h4>
              <p className='mb-0'>Desde Subte estamos muy interesadxs en saber de nuestro visitante en la web. Es por eso que nos gustaría recibir mensajes con inquietudes, sugerencias, opiones y/o cualquier otra cosa que nos quieras comunicar. Te responderemos en cuanto leamos el mensaje.</p>
              <p className='negrita'>¡Gracias!</p>
            </div>
            <div className='col-md-7'>
              <form className='row mb-3' onSubmit={handleSubmit} autoComplete='on' noValidate>
                <div className='col-12 col-md-8 mt-2'>
                  <label className='d-block'>Nombre Completo:</label>
                  <input name='name' type='text' className='w-100' required onChange={handleInputChange} value={inputs.name} onBlur={() => validateForm('name')} />
                </div>
                {
                  errors.name ?
                    <div className='col-12 col-md-8 mt-2 error'>
                      <span>El nombre completo tiene que tener al menos <span className='negrita'>3 letras</span></span>
                    </div>
                    :
                    <></>
                }
                <div className='w-100'></div>
                <div className='col-12 col-md-8 mt-2'>
                  <div className='row justify-content-between'>
                    <div className='col-6'>
                      <label>Teléfono:</label>
                    </div>
                    <div className='col-4 text-right italica'>
                      <span>Opcional</span>
                    </div>
                  </div>
                  <input name='tel' type='text' className='w-100' onChange={handleInputChange} value={inputs.tel} />
                </div>
                <div className='w-100'></div>
                <div className='col-12 col-md-8 mt-2'>
                  <label className='d-block'>Email:</label>
                  <input
                    name='email'
                    type='email'
                    className='w-100'
                    autoComplete='on'
                    required
                    onChange={handleInputChange}
                    value={inputs.email}
                    onBlur={() => validateForm('email')}
                  />
                </div>
                {
                  errors.email ?
                    <div className='col-12 col-md-8 mt-2 error'>
                      <p className='my-0'><span>Por favor ingrese una dirección de email válida.</span></p>
                      <p className='my-0'><span>Ej. <i>nombreapellido@gmail.com</i></span></p>
                    </div>
                    :
                    <></>
                }
                <div className='w-100'></div>
                <div className='col-12 col-md-8 mt-2'>
                  <label className='d-block'>Mensaje:</label>
                  <textarea
                    name='message'
                    className='w-100'
                    required
                    onChange={handleInputChange}
                    value={inputs.message}
                    onBlur={() => validateForm('message')}
                  />
                </div>
                {
                  errors.message ?
                    <div className='col-12 col-md-8 mt-2 error'>
                      <span>El mensaje tiene que tener al menos <span className='negrita'>10 letras</span></span>
                    </div>
                    :
                    <></>
                }

                {/* Error de cuando se envio el mail correctamente */}
                {
                  userMessage ?
                    <div className='col-12 col-md-8 mt-2 error'>
                      {
                        userMessage.type === 'success' ? 
                          <span className='success'>{userMessage.message}</span>:
                          <span className='error server'>{userMessage.message}</span>
                      }
                    </div>
                    :
                    <></>
                }
                <div className='w-100'></div>
                <div className='col-12 col-md-8 mt-2'>
                  {
                    showSpinner ?
                      <div>{spinnerTextRef.current}</div> :
                      <button type='subtmi'>Enviar Mensaje</button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}