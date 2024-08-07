import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Contact() {
  const sendEmail = () => {
    window.location.href = 'mailto:eddytougon@gmail.com';
  };

  
  return (
    < div className="contact-background">
      <section id="contact">
        <h2 className="section-title">Contact</h2>
        <p className="section-description">

          Pour me contacter, envoyez-moi un e-mail ou suivez-moi sur Instagram et TikTok :
        </p>
        <div className="contact-buttons">
          <button className="contact-button email" onClick={sendEmail}>
            <AiOutlineMail className="contact-icon" />
            <span className="contact-label">E-mail</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
