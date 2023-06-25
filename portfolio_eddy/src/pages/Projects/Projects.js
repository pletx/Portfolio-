import React from 'react';
import Card from '../../components/Cards/Card';
import "./Projects.css"
import P6img from '../../assets/images/Capture-P6.webp'
import P8img from '../../assets/images/Capture-P8.webp'
import P4img from '../../assets/images/Capture-P4.webp'
function Projects() {
  const projects = [
    {title: 'Projet Ohmyfood',
      description: "Front end d'un site de résèrvation de réstaurant pour l'agence fictive Ohmyfood",
      technology: ['HTML', 'CSS']    ,
      link: "https://pletx.github.io/Homyfood",
      backgroundImage:P4img},

    {title: 'Projet Kasa',
      description: "Application de présentation de chambre à résèrver pour l'agence fictive Kasa  ",
      technology: ['HTML','CSS','React'],
      link:'https://kasa-plum.vercel.app/',
      backgroundImage:P8img
    },
  ];

  return (
    <section className='projects-background'>
      <div id="projects">
        <h2>Projets web</h2>
        <p>Mon portfolio présente mes projets précédents.</p>
        <div className="card-container">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technology}  
              link={project.link}   
              backgroundImage={project.backgroundImage}        
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
