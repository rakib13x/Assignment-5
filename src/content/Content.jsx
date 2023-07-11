// Content.js
import React, { useState } from 'react';


const Content = () => {
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  const handleTextAreaChange = (event) => {
    setDisplayText(event.target.value);
  };

  return (
    <div className="content">
      <div className="form-group">
        <textarea
          className="form-control"
          onChange={handleTextAreaChange}
        />
        <button className="btn" onClick={handleButtonClick}>
          {showText ? 'Hide' : 'Show'}
        </button>
      </div>
      {showText && displayText && <p>{displayText}</p>}
    </div>
  );
};

export default Content;
