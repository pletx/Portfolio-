import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa';
import './Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const technologyIcons = props.technologies.map((technology) => {
    if (technology === 'HTML') {
      return <FaHtml5 key={technology} />;
    } else if (technology === 'CSS') {
      return <FaCss3 key={technology} />;
    } else if (technology === 'React') {
      return <FaReact key={technology} />;
    } else if (technology === 'JS') {
      return <FaJs key={technology} />;
    } else {
      return null;
    }
  });

  return (
    <div className="card">
      <img src={props.backgroundImage} alt="" />
      <Link to={props.link} className="card-link">
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className="technology-icons">{technologyIcons}</div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
