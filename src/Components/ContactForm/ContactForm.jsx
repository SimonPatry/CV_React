import React, {useRef} from "react";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../Layouts/Contact/contact.css';
import reCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID
  } = process.env

  // Function that displays a success toast on bottom right of the page when form submission is successful
  
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {

    //const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      
      await emailjs.send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  const captchaRef = useRef(null)
  //const token = captchaRef.current.getValue();

  return (
    <div className='ContactForm'>

      {/* name */}
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="name">
          <input type='text' name='name' placeholder='Nom'
            {...register('name', {
              required: { value: true, message: 'Entrez un Nom' },
              maxLength: {
                value: 30,
                message: 'Taille maximum: 30'
              }})
            }
          ></input>
          {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
        </div>

        {/* mail */}
        <div className="email">
          <input type='email' name='email' placeholder='Email'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
          ></input>
          {errors.email && (
            <span className='errorMessage'>Adresse mail non valide</span>
          )}
        </div>

        {/* subject */}
        <div className="subject">
          <input
            type='text' name='subject' placeholder='Sujet'
            {...register('subject', {
              required: { value: true, message: 'Entrez un Sujet' },
              maxLength: {
                value: 75,
                message: 'Taille maximum: 75'
              }
            })}
          ></input>
          {errors.subject && (
            <span className='errorMessage'>{errors.subject.message}</span>
          )}
        </div>

        {/* message */}
        <div className="message">
            <textarea rows={3} name='message' placeholder='Message'
              {...register('message', {
                required: true
              })}
            ></textarea>
            {errors.message && <span className='errorMessage'>Message vide</span>}
          </div>
        
          <reCAPTCHA 
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
            />

        {/* submit */}

        <button className='submit' type='submit'>Envoyer</button>
      </form>
      <ToastContainer />
    </div>
  );
};


export default ContactForm;