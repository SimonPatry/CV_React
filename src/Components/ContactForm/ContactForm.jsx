import React, {useEffect, useState} from "react";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../Layouts/Contact/Contact.css'


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
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
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>

      {/* name */}
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="name">
          <input type='text' name='name' placeholder='Name'
            {...register('name', {
              required: { value: true, message: 'Please enter your name' },
              maxLength: {
                value: 30,
                message: 'Please use 30 characters or less'
              }})
            }
          ></input>
          {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
        </div>

        {/* mail */}
        <div className="email">
          <input type='email' name='email' placeholder='Email address'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
          ></input>
          {errors.email && (
            <span className='errorMessage'>Please enter a valid email address</span>
          )}
        </div>

        {/* subject */}
        <div className="subject">
          <input
            type='text' name='subject' placeholder='Subject'
            {...register('subject', {
              required: { value: true, message: 'Please enter a subject' },
              maxLength: {
                value: 75,
                message: 'Subject cannot exceed 75 characters'
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
            {errors.message && <span className='errorMessage'>Please enter a message</span>}
          </div>
        
        {/* submit */}
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;