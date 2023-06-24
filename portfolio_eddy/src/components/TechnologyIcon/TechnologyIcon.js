import React from 'react';
import './TechnologyIcon.css';

function TechnologySection({ icon, progress, iconclassName }) {
  const progressBarStyle = {
    "--progress-percent": `${progress}%`
  };

  return (
    <div className="technology-section">
      <div className={`technology-icon ${iconclassName}`}>
        {icon}
      </div>
      
      <div className='progress-percent'>{progress} %</div>
      <div className="progress-bar">
        <div className="progress" style={progressBarStyle}></div>
      </div>
      
    </div>
  );
}

export default TechnologySection;
