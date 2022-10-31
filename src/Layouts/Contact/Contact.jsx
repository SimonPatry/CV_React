import React from "react";
import { useMediaQuery } from 'react-responsive';
import "./contact.css";
import ContactForm from "../../Components/ContactForm/ContactForm"

const Contact = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    let screenSize = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
    return(
        <div className={`${screenSize} container`}>
            <h1>Contactez moi ! </h1>
            < ContactForm />
        </div>
    )
}

export default Contact;
