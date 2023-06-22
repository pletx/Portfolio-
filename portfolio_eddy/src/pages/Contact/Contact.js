import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function Contact() {
  const sendEmail = () => {
    window.location.href = 'mailto:eddytougon@gmail.com';
  };

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/plet.x/');
  };

  const redirectToTikTok = () => {
    window.open('https://www.tiktok.com/@plet_x');
  };

  return (
    <section className="contact-section">
        <div  id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-description">
        Pour me contacter, envoyez-moi un e-mail ou suivez-moi sur Instagram et TikTok :
      </p>
      <div className="contact-buttons">
        <button className="contact-button" onClick={sendEmail}>
          <AiOutlineMail className="contact-icon" />
          <span className="contact-label">E-mail</span>
        </button>
        <button className="contact-button" onClick={redirectToInstagram}>
          <FaInstagram className="contact-icon" />
          <span className="contact-label">Instagram</span>
        </button>
        <button className="contact-button" onClick={redirectToTikTok}>
          <FaTiktok className="contact-icon" />
          <span className="contact-label">TikTok</span>
        </button>
      </div>
      </div>
    </section>
  );
}

export default Contact;
