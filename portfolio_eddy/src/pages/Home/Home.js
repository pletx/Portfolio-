import React, { useEffect, useState } from 'react';
import './Home.css';
import profilePhoto from '../../assets/images/visage eddy.jpg'; 

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-background">
      <section id="home">
        <h1>Bienvenue sur mon Portfolio</h1>
        <div className={`home-content ${isVisible ? 'visible' : ''}`}>
          <div className='text-content'>
            <p>Bonjour! Je m'appelle <b>Tougon Eddy</b></p> 
            <p>
              Je suis développeur web Front-end. Je suis spécialisé dans la création de sites web modernes et intuitifs, en utilisant les dernières technologies et les bonnes pratiques de développement.
            </p>
            <a href="../../assets/my-cv.pdf">
              Télécharger mon CV
            </a>
          </div>
          <div className={`profile-photo ${isVisible ? 'visible' : ''}`}>
            <img className='profile-photo' src={profilePhoto} alt="Profile Photo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
