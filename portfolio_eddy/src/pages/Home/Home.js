import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-background">
      <section id="home">
        <div className={`profile-photo ${isVisible ? 'visible' : ''}`} />
        <div className={`home-content ${isVisible ? 'visible' : ''}`}>
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>
            "Bonjour et bienvenue sur mon portfolio ! Je m'appelle Tougon Eddy
            et je suis un développeur web. Je suis spécialisé dans la création
            de sites web modernes et intuitifs, en utilisant les dernières
            technologies et les bonnes pratiques de développement."
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
