import React, { useState } from 'react';
import '../styles/Child.css';

function Selection({ applyColor }) {
  const [bgColor, setBgColor] = useState('');

 

  const handleClick = () => {
    applyColor((newColor) => {
      setBgColor(newColor.background);
    });
  };

  

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
      
    >
      Selection
    </div>
  );
}

export default Selection;
