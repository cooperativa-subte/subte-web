import React from 'react'

import { useSignUpForm } from '../utils/CustomHooks'
import { sendContactEmail } from '../../api/api'

import '../../styles/Contact.scss'

export default function Contact() {

  const onSubmitForm = async () => {
    if (inputs.name !== '' && inputs.email !== '' && inputs.message !== '') {
      try {
        console.log('hola')
        const response = await sendContactEmail({
          email: inputs.email, name: inputs.name, tel: inputs.tel, text: inputs.message
        })
        console.log('respuesta')

        console.log(JSON.stringify(response))
      } catch (err) {
        console.log(err)
      }
    }
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({ name: '', tel: '', email: '', message: '' }, onSubmitForm);

  return (
    <div className='contact-section-container section-container container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <div className='row justify-content-center justify-content-center'>
            <div className='col-12 col-md-6 text-center'>
              <h4>SUBTE Contacto</h4>
            </div>
            <form className='row' onSubmit={handleSubmit}>
              <div className='col-12 col-md-7'>
                <label className='d-block'>Nombre Completo:</label>
                <input name='name' type='text' className='w-75' required onChange={handleInputChange} value={inputs.name} />
              </div>
              <div className='col-12 col-md-7'>
                <label className='d-block'>Teléfono:</label>
                <input name='tel' type='text' className='w-75' onChange={handleInputChange} value={inputs.tel} />
              </div>
              <div className='col-12 col-md-7'>
                <label className='d-block'>Email:</label>
                <input name='email' type='email' className='w-75' autoComplete='on' required onChange={handleInputChange} value={inputs.email} />
              </div>
              <div className='col-12 col-md-7'>
                <label className='d-block'>Mensaje:</label>
                <textarea name='message' className='w-75' required onChange={handleInputChange} value={inputs.message} />
              </div>
              <div className='col-12 col-md-7'>
                <button type='subtmi'>Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}