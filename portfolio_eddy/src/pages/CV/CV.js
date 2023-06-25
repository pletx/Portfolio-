// App.js
import React from 'react';
import './CV.css';
import profilePhoto from '../../assets/images/visage eddy.jpg'
function CV() {
  return (
    <div className="App">
      <div className="sidebar"></div>
      <header className="header">
        <div className="profile-photo">
          <img src={profilePhoto} alt="Profile Photo" />
        </div>
        <div className="name">Prénom Tougon Eddy</div>
        <div className="title">Développeur intègrateur Web</div>
      </header>

      <section className="section">
        <div className="section-title">Contact</div>
        <div className="section-content">
          Adresse : 9 allée du bataillon hildevert<br/>
          Téléphone : 0781876486<br/>
          Email : eddytougon@gmail.com<br/>
          Site Web : www.exemple.com
        </div>
      </section>

      <section className="section">
        <div className="section-title">Résumé professionnel</div>
        <div className="section-content">
          Développeur intégrateur web spécialisé dans la création de sites web réactifs. Solide connaissance des langages de programmation web tels que HTML, CSS ou encore JavaScript. Compétences en gestion de projets et en résolution de problèmes.
        </div>
      </section>

      <section className="section">
        <div className="section-title">Formation académique</div>
        <div className="section-content">
          Baccalauréat en Informatique - Université ABC<br/>
          Ville, Pays | Année d'obtention<br/>
          Cours pertinents : Programmation Web avancée, Bases de données, Conception de l'interface utilisateur.
        </div>
      </section>

      <section className="section">
        <div className="section-title">Compétences techniques</div>
        <div className="section-content">
          Langages de programmation : HTML, CSS, JavaScript<br/>
          Frameworks : React, Redux<br/>
          Outils de développement : Visual Studio Code, Git
        </div>
      </section>

      <section className="section">
        <div className="section-title">Langues</div>
        <div className="section-content">
          Français (langue maternelle)<br/>
          Anglais (niveau intermédiaire)
        </div>
      </section>
    </div>
  );
}

export default CV;
