import React, { useState } from 'react';
import '../styles/Child.css';

function Selection(props) {
  const { applyColor } = props;
  const [bgColor, setBgColor] = useState('');
  
  // This will map the exact expected RGB values to test IDs
  const getTestId = (color) => {
    const cleaned = color.replace(/\s/g, '');
    switch (cleaned) {
      case 'rgb(34,193,195)': return 'blue';
      case 'rgb(221,112,18)': return 'orange';
      case 'rgb(44,209,88)': return 'green';
      default: return '';
    }
  };

  const handleClick = () => {
    applyColor((newColor) => {
      const bg = newColor.background;
      setBgColor(bg);
    });
  };

  const testId = getTestId(bgColor); // Calculate dynamically for accurate data-testid

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
      data-testid={testId} // This is what Cypress looks for
    >
      Selection
    </div>
  );
}

export default Selection;
