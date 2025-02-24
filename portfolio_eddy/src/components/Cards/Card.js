import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaJs, FaGithub, FaNodeJs } from 'react-icons/fa';
import './Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const technologyIcons = props.technologies.map((technology) => {
    let icon = null;

    switch (technology) {
      case 'HTML':
        icon = <FaHtml5 />;
        break;
      case 'CSS':
        icon = <FaCss3 />;
        break;
      case 'React':
        icon = <FaReact />;
        break;
      case 'JS':
        icon = <FaJs />;
        break;
      case 'Node.js':
        icon = <FaNodeJs />;
        break;
      default:
        break;
    }

    return (
      <div className="technology" key={technology}>
        {icon}
        <span>{technology}</span>
      </div>
    );
  });

  return (
    <div className="card">
      <img src={props.backgroundImage} alt="" />
      
        <div className="content">
        <Link to={props.link} className="card-link">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className="technology-icons">{technologyIcons}</div>
          </Link>
    
          <a href={props.gitHublink} className="github-icon" >
            <FaGithub />
           <p>Voir Github</p> 
          </a>
         
        </div>
      
    </div>
  );
}

export default Card;
