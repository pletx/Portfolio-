import React from 'react';
import './TechnologyIcon.css';

function TechnologySection(props) {
  const progressBarStyle = {
    "--progress-percent": `${props.progress}%`
  };

  return (
    <div className="technology-section">
      <div className={`technology-icon ${props.iconclassName}`}>
        {props.icon}
      </div>
      
      <div className='progress-percent'>{props.progress} %</div>
      <div className="progress-bar">
        <div className="progress" style={progressBarStyle}></div>
      </div>
      
    </div>
  );
}

export default TechnologySection;
