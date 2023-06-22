import React from 'react';
import Card from '../../components/Cards/Card';
import "./Projects.css"
import P6img from '../../assets/images/Capture-P6.webp'
import P8img from '../../assets/images/Capture-P8.webp'
import P4img from '../../assets/images/Capture-P4.webp'
function Projects() {
  const projects = [
    {title: 'Projet 1',
      description: 'Description du projet 1',
      technology: ['HTML', 'CSS']    ,
      link: "https://pletx.github.io/Homyfood",
      backgroundImage:P4img},

    {title: 'Projet 2',
      description: 'Description du projet 2',
      technology: ['HTML','CSS', 'JS'],
      backgroundImage:P6img},

    {title: 'Projet 3',
      description: 'Description du projet 3',
      technology: ['HTML','CSS','React'],
      backgroundImage:P8img
    },
  ];

  return (
    <section className='projects-background'>
      <div id="projects">
        <h2>Projects</h2>
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
