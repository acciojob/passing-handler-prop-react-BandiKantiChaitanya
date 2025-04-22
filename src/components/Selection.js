import React, { useState } from 'react';
import '../styles/Child.css';

function Selection({ applyColor }) {
  const [bgColor, setBgColor] = useState('');

  const getTestId = (color) => {
    const normalized = color.replace(/\s/g, '');
    switch (normalized) {
      case 'rgb(34,193,195)': return 'blue';
      case 'rgb(221,112,18)': return 'orange';
      case 'rgb(44,209,88)': return 'green';
      default: return '';
    }
  };

  const handleClick = () => {
    applyColor((newColor) => {
      setBgColor(newColor.background);
    });
  };

  const testId = getTestId(bgColor);

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
      data-testid={testId}
    >
      Selection
    </div>
  );
}

export default Selection;
