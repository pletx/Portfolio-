import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Contact() {
  const sendEmail = () => {
    window.location.href = 'mailto:eddytougon@gmail.com';
  };

  
  return ( 
     <section id="contact">
    < div className="contact-background">
    
        <h2 className="section-title">Contact</h2>
        <p className="section-description">

        N'hésitez pas à me contacter pour discuter de votre projet, poser des questions ou simplement obtenir un devis personnalisé. Je suis toujours disponible pour échanger et vous accompagner dans toutes les étapes de votre projet web.:
        </p>
        <div className="contact-buttons">
          <button className="contact-button email" onClick={sendEmail}>
            <AiOutlineMail className="contact-icon" />
            <span className="contact-label">E-mail</span>
          </button>
        </div>
        </div>
      </section>
    
  );
}

export default Contact;
